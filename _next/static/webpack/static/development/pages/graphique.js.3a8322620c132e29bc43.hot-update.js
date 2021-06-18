webpackHotUpdate("static/development/pages/graphique.js",{

/***/ "./pages/graphique.js":
/*!****************************!*\
  !*** ./pages/graphique.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib */ "./lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _nivo_line__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nivo/line */ "./node_modules/@nivo/line/dist/nivo-line.es.js");
/* harmony import */ var iframe_resizer_js_iframeResizer_contentWindow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! iframe-resizer/js/iframeResizer.contentWindow */ "./node_modules/iframe-resizer/js/iframeResizer.contentWindow.js");
/* harmony import */ var iframe_resizer_js_iframeResizer_contentWindow__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(iframe_resizer_js_iframeResizer_contentWindow__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "/home/thomas/repos/analyse-aah/pages/graphique.js";








var MyResponsiveLine = function MyResponsiveLine(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_nivo_line__WEBPACK_IMPORTED_MODULE_8__["ResponsiveLine"], {
    data: data,
    margin: {
      top: 50,
      right: 110,
      bottom: 50,
      left: 60
    },
    xScale: {
      type: 'linear'
    },
    yScale: {
      type: 'linear',
      min: 0,
      max: 'auto',
      reverse: false
    },
    yFormat: " >-.2f",
    axisTop: null,
    axisRight: null,
    axisBottom: {
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Graphique',
      legendOffset: 36,
      legendPosition: 'middle'
    },
    axisLeft: {
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle'
    },
    enablePoints: false,
    pointSize: 10,
    lineWidth: 4,
    pointColor: {
      theme: 'background'
    },
    pointBorderWidth: 2,
    pointBorderColor: {
      from: 'serieColor'
    },
    pointLabelYOffset: -12,
    useMesh: true,
    legends: [{
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
      effects: [{
        on: 'hover',
        style: {
          itemBackground: 'rgba(0, 0, 0, .03)',
          itemOpacity: 1
        }
      }]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
};

function getProps() {
  var queryString = window.document.location.search || '';
  var params = queryString.replace('?', '').split('&').reduce(function (params, tuple) {
    var pair = tuple.split('=');
    params[pair[0]] = decodeURI(pair[1]);
    return params;
  }, {});

  var props = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({
    source: 'static/full.json'
  }, params);

  return props;
}

var colors = d3__WEBPACK_IMPORTED_MODULE_7__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_7__["schemeCategory10"]);

function Graphique() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      source = _useState2[0],
      setSource = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      payload = _useState4[0],
      setPayload = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      names = _useState8[0],
      setNames = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      cData = _useState10[0],
      setCData = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState11, 2),
      taxData = _useState12[0],
      setTaxData = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState13, 2),
      currentValues = _useState14[0],
      setCurrentValues = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState16 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState15, 2),
      abat_forf = _useState16[0],
      setAbat_forf = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState18 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState17, 2),
      abat_forf_enf = _useState18[0],
      setAbat_forf_enf = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState20 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState19, 2),
      prog_abat = _useState20[0],
      setProg_abat = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState22 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState21, 2),
      deconj = _useState22[0],
      setDeconj = _useState22[1];

  function fetchData(source) {
    var prs = getProps();
    var items = [["aah_abattement_forfaitaire_amendement", prs.a], ["aah_abattement_forfaitaire_enf", prs.b], ["aah_niveau_smic_abattement_conjoint", prs.c], ["aah_deconjugalise", prs.d], ["aah_maj_conj", prs.e]];
    var suffix = "";
    items.forEach(function (t) {
      if (t[1]) {
        suffix += t[0] + "=" + t[1];
      }
    });
    var url = source + "?" + suffix;
    setSource(url);
    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(url).then(function (response) {
      return response.json();
    });
  }

  d3__WEBPACK_IMPORTED_MODULE_7__["formatDefaultLocale"]({
    "decimal": ",",
    "thousands": "\xA0",
    "grouping": [3],
    "currency": ["", "\xA0\u20AC"],
    "percent": "\u202F%"
  });
  var format = d3__WEBPACK_IMPORTED_MODULE_7__["format"]("$,d");
  var margin = {
    top: 10,
    right: 10,
    bottom: 20,
    left: 40
  };
  var height = 300;
  var width = 950;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var r = data.map(function (p) {
      return {
        x: p.name,
        y: p.total
      };
    });
    setCData([{
      "id": "total",
      "data": r
    }]);
    var t = r.reduce(function (a, v) {
      var p = a[a.length - 1] || {
        x: 0,
        base: 0
      };
      a.push({
        x: v.x,
        y: 1 - (v.y - p.base) / (v.x - p.x),
        base: v.y
      });
      return a;
    }, []).slice(1);
    setTaxData([{
      "id": "total",
      "data": t
    }]);
  }, [data]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var _getProps = getProps(),
        source = _getProps.source;

    fetchData(source).then(function (payload) {
      setPayload(payload);
      var rawData = payload.data;
      _lib__WEBPACK_IMPORTED_MODULE_6___default.a.preprocess(rawData);
      var keys = _lib__WEBPACK_IMPORTED_MODULE_6___default.a.getRelevantSeries(rawData);
      _lib__WEBPACK_IMPORTED_MODULE_6___default.a.computeTotal(rawData, keys);
      setData(rawData);
      keys.sort(_lib__WEBPACK_IMPORTED_MODULE_6___default.a.itemComparator);
      setNames(['total'].concat(keys));
      var series = d3__WEBPACK_IMPORTED_MODULE_7__["stack"]().keys(keys).offset(d3__WEBPACK_IMPORTED_MODULE_7__["stackOffsetDiverging"])(rawData);
      var x = d3__WEBPACK_IMPORTED_MODULE_7__["scaleBand"]().domain(rawData.map(function (d) {
        return d.name;
      })).range([margin.left, width - margin.right]).padding(0.01);
      var y = d3__WEBPACK_IMPORTED_MODULE_7__["scaleLinear"]().domain([d3__WEBPACK_IMPORTED_MODULE_7__["min"](series, function (d) {
        return d3__WEBPACK_IMPORTED_MODULE_7__["min"](d, function (d) {
          return d[0];
        });
      }), d3__WEBPACK_IMPORTED_MODULE_7__["max"](series, function (d) {
        return d3__WEBPACK_IMPORTED_MODULE_7__["max"](d, function (d) {
          return d[1];
        });
      })]).rangeRound([height - margin.bottom, margin.top]);

      var xAxis = function xAxis(g) {
        return g.attr("transform", "translate(0,".concat(height - margin.bottom, ")")).call(d3__WEBPACK_IMPORTED_MODULE_7__["axisBottom"](x).tickValues(rawData.map(function (d) {
          var v = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(d.salaire_net);

          return v % 250 === 0 ? v : '';
        })).tickSizeOuter(0)).call(function (g) {
          return g.selectAll(".domain").remove();
        });
      };

      var yAxis = function yAxis(g) {
        return g.attr("transform", "translate(".concat(margin.left, ",0)")).call(d3__WEBPACK_IMPORTED_MODULE_7__["axisLeft"](y)).call(function (g) {
          return g.selectAll(".domain").remove();
        });
      };

      var svg = d3__WEBPACK_IMPORTED_MODULE_7__["select"]("#svg").attr("viewBox", [0, 0, width, height]);
      svg.append("g").selectAll("g").data(series).join("g").attr("fill", function (d) {
        return colors(d.key);
      }).selectAll("rect").data(function (d) {
        return d;
      }).join("rect").attr("x", function (d, i) {
        return x(d.data.name);
      }).attr("y", function (d) {
        return y(d[1]);
      }).attr("height", function (d) {
        return y(d[0]) - y(d[1]);
      }).attr("width", x.bandwidth()).on("mouseover", function (_, index) {
        setCurrentValues(rawData[index]);
      });
      svg.append("g").call(xAxis);
      svg.append("g").call(yAxis);
    });
  }, [abat_forf, abat_forf_enf, prog_abat, deconj]);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "D\xE9composition du revenu disponible en fonction du salaire net"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "checkbox",
    onClick: function onClick(e) {
      return setAbat_forf(e.target.value ? 5000 : 0);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "checkbox",
    onClick: function onClick(e) {
      return setAbat_forf(e.target.value ? 1100 : 0);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "checkbox",
    onClick: function onClick(e) {
      return setProg_abat(e.target.value ? 1100 : 0);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "checkbox",
    onClick: function onClick(e) {
      return setDeconj(e.target.value ? 1 : 0);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    id: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "D\xE9composition du revenu disponible en fonction du salaire net"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    id: "legend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, names.map(function (n) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      key: n,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      style: {
        color: colors(n)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, "\u25FC"), "\xA0", n, currentValues && currentValues[n] !== undefined && ' ' + format(currentValues[n]));
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("svg", {
    id: "svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener",
    href: source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, "Source"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    download: "data.json",
    href: "data:application/json;base64," + btoa(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      k: "Hello, World!"
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, "Source")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      height: '400px',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, MyResponsiveLine({
    data: cData
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      height: '400px',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, MyResponsiveLine({
    data: taxData
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Graphique);

/***/ })

})
//# sourceMappingURL=graphique.js.3a8322620c132e29bc43.hot-update.js.map