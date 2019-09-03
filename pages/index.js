import {useState, useCallback, useEffect, Component} from 'react'
import fetch from 'isomorphic-unfetch'
import lib from '../lib'
import * as d3 from "d3"

function getProps() {
    const queryString = (window.document.location.search || '')
    const params = queryString.replace('?', '').split('&').reduce((params, tuple) => {
        const pair = tuple.split('=')

        params[pair[0]] = decodeURI(pair[1])
        return params
    }, {})

    const props = { source: params.source || 'static/full.json' }
    return props
}

function fetchData(source) {
    return fetch(source)
    .then(response => response.json())
}

function Index () {
    const [source, setSource] = useState()
    const [payload, setPayload] = useState()
    const [names, setNames] = useState([])
    const [currentValues, setCurrentValues] = useState([])

    d3.formatDefaultLocale({
        "decimal": ",",
        "thousands": "\u00a0",
        "grouping": [3],
        "currency": ["", "\u00a0€"],
        "percent": "\u202f%"
    })
    const format = d3.format("$,d")
    const colors = d3.scaleOrdinal(d3.schemeCategory10)

    var margin = {top: 10, right: 10, bottom: 20, left: 40}
    var height = 300
    var width = 950

    useEffect(() => {
        const {source} = getProps()
        setSource(source)

        fetchData(source)
        .then(payload => {
            setPayload(payload)

            var data = payload.data
            lib.preprocess(data)
            var keys = lib.getRelevantSeries(data)
            lib.computeTotal(data, keys)

            keys.sort(lib.itemComparator)
            setNames(['total'].concat(keys))

            var series = d3.stack().keys(keys).offset(d3.stackOffsetDiverging)(data)

            var x = d3.scaleBand()
              .domain(data.map(d => d.name))
              .range([margin.left, width - margin.right])
              .padding(0.01)

            var y = d3.scaleLinear()
              .domain([d3.min(series, d => d3.min(d, d => d[0])), d3.max(series, d => d3.max(d, d => d[1]))])
              .rangeRound([height - margin.bottom, margin.top])

            var xAxis = g => g
              .attr("transform", `translate(0,${height - margin.bottom})`)
              .call(d3.axisBottom(x).tickValues(data.map(function(d) {
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
                    setCurrentValues(data[index])
                })

            svg.append("g")
              .call(xAxis);

            svg.append("g")
              .call(yAxis);
        })
    }, [])

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
                href={source}>Source
            </a></div>
        </div>
    );
}

export default Index;
