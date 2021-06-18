import {useState, useCallback, useEffect, Component} from 'react'
import fetch from 'isomorphic-unfetch'
import lib from '../lib'
import * as d3 from "d3"
import { ResponsiveLine } from '@nivo/line'

import 'iframe-resizer/js/iframeResizer.contentWindow'

const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'linear' }}
        yScale={{ type: 'linear', min: 0, max: 'auto', reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Graphique',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enablePoints={false}
        pointSize={10}
        lineWidth={4}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

function getProps() {
    const queryString = (window.document.location.search || '')
    const params = queryString.replace('?', '').split('&').reduce((params, tuple) => {
        const pair = tuple.split('=')

        params[pair[0]] = decodeURI(pair[1])
        return params
    }, {})

    const props = Object.assign({source: 'static/full.json'}, params)
    return props
}
const colors = d3.scaleOrdinal(d3.schemeCategory10)

function Graphique () {
    const [source, setSource] = useState()
    const [payload, setPayload] = useState()
    const [data, setData] = useState([])
    const [names, setNames] = useState([])
    const [cData, setCData] = useState([])
    const [taxData, setTaxData] = useState([])
    const [currentValues, setCurrentValues] = useState([])

    const [jsonData, setJsonData] = useState('')

    const [abat_forf, setAbat_forf] = useState(0)
    const [abat_forf_enf, setAbat_forf_enf] = useState(0)
    const [prog_abat, setProg_abat] = useState(0)
    const [deconj, setDeconj] = useState(false)


    function fetchData(source) {
        const prs = getProps()
        var items = [
            ["aah_abattement_forfaitaire_amendement", prs.a],
            ["aah_abattement_forfaitaire_enf", prs.b],
            ["aah_niveau_smic_abattement_conjoint", prs.c],
            ["aah_deconjugalise", prs.d],
            ["aah_maj_conj", prs.e]
        ]
        var suffix = ""
        items.forEach(t => {
            if (t[1]) {
                suffix += t[0] + "=" + t[1]
            }
        })
        const url = source + "?" + suffix
        setSource(url)
        return fetch(url)
        .then(response => response.json())
    }

    d3.formatDefaultLocale({
        "decimal": ",",
        "thousands": "\u00a0",
        "grouping": [3],
        "currency": ["", "\u00a0€"],
        "percent": "\u202f%"
    })
    const format = d3.format("$,d")

    var margin = {top: 10, right: 10, bottom: 20, left: 40}
    var height = 300
    var width = 950

    useEffect(() => {
        const r = data.map(p => {
            return {x: p.name, y: p.total}
        })
        setCData([{
            "id": "total",
            "data": r
        }])
        const t = r.reduce((a, v) => {
            const p = a[a.length - 1] || { x: 0, base: 0}
            a.push({
                x: v.x,
                y: 1 - (v.y - p.base)/(v.x - p.x),
                base: v.y
            })
            return a
        }, []).slice(1)
        setTaxData([{
            "id": "total",
            "data": t
        }])
    }, [data])

    useEffect(() => {
        const {source} = getProps()

        fetchData(source)
        .then(payload => {
            setPayload(payload)
            setJsonData(JSON.stringify(payload))

            var rawData = payload.data
            lib.preprocess(rawData)
            var keys = lib.getRelevantSeries(rawData)
            lib.computeTotal(rawData, keys)

            setData(rawData)

            keys.sort(lib.itemComparator)
            setNames(['total'].concat(keys))

            var series = d3.stack().keys(keys).offset(d3.stackOffsetDiverging)(rawData)

            var x = d3.scaleBand()
              .domain(rawData.map(d => d.name))
              .range([margin.left, width - margin.right])
              .padding(0.01)

            var y = d3.scaleLinear()
              .domain([d3.min(series, d => d3.min(d, d => d[0])), d3.max(series, d => d3.max(d, d => d[1]))])
              .rangeRound([height - margin.bottom, margin.top])

            var xAxis = g => g
              .attr("transform", `translate(0,${height - margin.bottom})`)
              .call(d3.axisBottom(x).tickValues(rawData.map(function(d) {
                var v = parseInt(d.salaire_net)
                return v % 250 === 0 ? v : ''
              })).tickSizeOuter(0))
              .call(g => g.selectAll(".domain").remove())

            var yAxis = g => g
              .attr("transform", `translate(${margin.left},0)`)
              .call(d3.axisLeft(y))
              .call(g => g.selectAll(".domain").remove())


            var svg = d3.select("#svg")
               .attr("viewBox", [0, 0, width, height]);

            svg.append("g")
              .selectAll("g")
              .data(series)
              .join("g")
                .attr("fill", d => colors(d.key))
              .selectAll("rect")
              .data(d => d)
              .join("rect")
                .attr("x", (d, i) => x(d.data.name))
                .attr("y", d => y(d[1]))
                .attr("height", d => y(d[0]) - y(d[1]))
                .attr("width", x.bandwidth())
                .on("mouseover", function(_, index) {
                    setCurrentValues(rawData[index])
                })

            svg.append("g")
              .call(xAxis);

            svg.append("g")
              .call(yAxis);
        })
    }, [abat_forf, abat_forf_enf, prog_abat, deconj])

    var to64 = typeof btoa == "undefined" ? e => e && Buffer.from(e).toString('base64') : btoa

    return (
        <div>
            <title>Décomposition du revenu disponible en fonction du salaire net</title>
            <h1 id="title">Décomposition du revenu disponible en fonction du salaire net</h1>
            <div id="legend">{
                names.map(n => (
                    <div key={n}>
                        <span style={{color: colors(n)}}>◼</span>&nbsp;{n}
                        {currentValues && currentValues[n] !== undefined && (' ' + format(currentValues[n]))}
                    </div>
                ))
            }</div>
            <svg id="svg"></svg>
            <div><a
                target="_blank"
                rel="noopener"
                href={source}>Lien
            </a>{/* <a
                download="data.json"
                href={"data:application/json;base64,"+to64(jsonData)}>Données
            </a>*/}</div>
{/*
            <div style={{height: '400px', width: '100%'}}>
                {MyResponsiveLine({data: cData })}
            </div>

            <div style={{height: '400px', width: '100%'}}>
                {MyResponsiveLine({data: taxData })}
            </div>*/}
        </div>
    );
}

export default Graphique;
