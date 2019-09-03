webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib */ "./lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _next_config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../next.config.js */ "./next.config.js");
/* harmony import */ var _next_config_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_next_config_js__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/home/thomas/repos/mes-aides-changent/pages/index.js";







function getProps() {
  var queryString = window.document.location.search || '';
  var params = queryString.replace('?', '').split('&').reduce(function (params, tuple) {
    var pair = tuple.split('=');
    params[pair[0]] = decodeURI(pair[1]);
    return params;
  }, {});
  var props = {
    source: params.source || _next_config_js__WEBPACK_IMPORTED_MODULE_6___default.a + '/static/full.json'
  };
  return props;
}

function fetchData(source) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(source).then(function (response) {
    return response.json();
  });
}

function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      source = _useState2[0],
      setSource = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      payload = _useState4[0],
      setPayload = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      names = _useState6[0],
      setNames = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      currentValues = _useState8[0],
      setCurrentValues = _useState8[1];

  d3__WEBPACK_IMPORTED_MODULE_5__["formatDefaultLocale"]({
    "decimal": ",",
    "thousands": "\xA0",
    "grouping": [3],
    "currency": ["", "\xA0\u20AC"],
    "percent": "\u202F%"
  });
  var format = d3__WEBPACK_IMPORTED_MODULE_5__["format"]("$,d");
  var colors = d3__WEBPACK_IMPORTED_MODULE_5__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_5__["schemeCategory10"]);
  var margin = {
    top: 10,
    right: 10,
    bottom: 20,
    left: 40
  };
  var height = 300;
  var width = 950;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var _getProps = getProps(),
        source = _getProps.source;

    setSource(source);
    fetchData(source).then(function (payload) {
      setPayload(payload);
      var data = payload.data;
      _lib__WEBPACK_IMPORTED_MODULE_4___default.a.preprocess(data);
      var keys = _lib__WEBPACK_IMPORTED_MODULE_4___default.a.getRelevantSeries(data);
      _lib__WEBPACK_IMPORTED_MODULE_4___default.a.computeTotal(data, keys);
      keys.sort(_lib__WEBPACK_IMPORTED_MODULE_4___default.a.itemComparator);
      setNames(keys);
      var series = d3__WEBPACK_IMPORTED_MODULE_5__["stack"]().keys(keys).offset(d3__WEBPACK_IMPORTED_MODULE_5__["stackOffsetDiverging"])(data);
      var x = d3__WEBPACK_IMPORTED_MODULE_5__["scaleBand"]().domain(data.map(function (d) {
        return d.name;
      })).range([margin.left, width - margin.right]).padding(0.01);
      var y = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().domain([d3__WEBPACK_IMPORTED_MODULE_5__["min"](series, function (d) {
        return d3__WEBPACK_IMPORTED_MODULE_5__["min"](d, function (d) {
          return d[0];
        });
      }), d3__WEBPACK_IMPORTED_MODULE_5__["max"](series, function (d) {
        return d3__WEBPACK_IMPORTED_MODULE_5__["max"](d, function (d) {
          return d[1];
        });
      })]).rangeRound([height - margin.bottom, margin.top]);

      var xAxis = function xAxis(g) {
        return g.attr("transform", "translate(0,".concat(height - margin.bottom, ")")).call(d3__WEBPACK_IMPORTED_MODULE_5__["axisBottom"](x).tickValues(data.map(function (d) {
          var v = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(d.salaire_net);

          return v % 250 === 0 ? v : '';
        })).tickSizeOuter(0)).call(function (g) {
          return g.selectAll(".domain").remove();
        });
      };

      var yAxis = function yAxis(g) {
        return g.attr("transform", "translate(".concat(margin.left, ",0)")).call(d3__WEBPACK_IMPORTED_MODULE_5__["axisLeft"](y)).call(function (g) {
          return g.selectAll(".domain").remove();
        });
      };

      var svg = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#svg").attr("viewBox", [0, 0, width, height]);
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
        setCurrentValues(data[index]);
      });
      svg.append("g").call(xAxis);
      svg.append("g").call(yAxis);
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "D\xE9composition du revenu disponible en fonction du salaire net"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    id: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "D\xE9composition du revenu disponible en fonction du salaire net"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "legend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, names.map(function (n) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: n,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      style: {
        color: colors(n)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "\u25FC"), "\xA0", n, currentValues && currentValues[n] !== undefined && ' ' + format(currentValues[n]));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    id: "svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener",
    href: source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Source")));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.33031d85f5550fa3d5e1.hot-update.js.map