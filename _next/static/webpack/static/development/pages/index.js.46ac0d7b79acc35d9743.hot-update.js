webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _next_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../next.config.js */ "./next.config.js");
/* harmony import */ var _next_config_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_config_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var iframe_resizer_js_iframeResizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! iframe-resizer/js/iframeResizer */ "./node_modules/iframe-resizer/js/iframeResizer.js");
/* harmony import */ var iframe_resizer_js_iframeResizer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(iframe_resizer_js_iframeResizer__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/thomas/repos/analyse-aah/pages/index.js";





var layoutStyle = {
  fontFamily: 'sans-serif',
  fontSize: '200%',
  margin: 20,
  padding: 20,
  height: '100%',
  minHeight: '800px'
};
var list = [{
  name: 'Célibataire en location à Saint-Brieuc',
  link: 'celibataire_locataire.json'
}, {
  name: 'Célibataire en situation de handicap en location à Aubervilliers',
  link: 'celibataire_handicap.json'
}, {
  name: 'Famille avec 3 enfants et un conjoint avec 900 € de chômage',
  link: 'famille_3enf_conjoint900chomage.json'
}];

function Index() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    iframe_resizer_js_iframeResizer__WEBPACK_IMPORTED_MODULE_3___default()({
      log: false
    }, '#couple_non_beneficiaire');
  }, []);
  var iframeStyle = {
    margin: "0 auto",
    width: "100%",
    border: "none",
    minHeight: "700px"
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Comprendre les enjeux autour de la d\xE9conjugalisation de l'AAH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Comprendre les enjeux autour de la d\xE9conjugalisation de l'AAH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Comprendre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Ressources pour un couple dont aucun adulte n'est b\xE9n\xE9ficiaire de l'AAH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    id: "couple_non_beneficiaire",
    src: "/graphique?source=/static/aah/couple_non_beneficiaire.json",
    style: iframeStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Ressources pour un couple avec un adulte sans salaire, b\xE9n\xE9ficiaire de l'AAH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    id: "conjoint_beneficiaire_aah",
    src: "/graphique?source=/static/aah/conjoint_beneficiaire_aah.json",
    style: iframeStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Ressources pour un couple dont les deux adultes sont b\xE9n\xE9ficiaires de l'AAH (l'un d'eux \xE9tant sans salaire)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    id: "couple_beneficiaire_aah",
    src: "/graphique?source=/static/aah/couple_beneficiaire_aah.json",
    style: iframeStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.46ac0d7b79acc35d9743.hot-update.js.map