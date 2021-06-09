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

function Index() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    iframe_resizer_js_iframeResizer__WEBPACK_IMPORTED_MODULE_3___default()({
      log: false
    }, '#couple_non_beneficiaire');
    iframe_resizer_js_iframeResizer__WEBPACK_IMPORTED_MODULE_3___default()({
      log: false
    }, '#conjoint_beneficiaire_aah');
    iframe_resizer_js_iframeResizer__WEBPACK_IMPORTED_MODULE_3___default()({
      log: false
    }, '#conjoint_beneficiaire_aah_avant');
    iframe_resizer_js_iframeResizer__WEBPACK_IMPORTED_MODULE_3___default()({
      log: false
    }, '#conjoint_beneficiaire_aah_apres');
    iframe_resizer_js_iframeResizer__WEBPACK_IMPORTED_MODULE_3___default()({
      log: false
    }, '#couple_beneficiaire_aah_avant');
    iframe_resizer_js_iframeResizer__WEBPACK_IMPORTED_MODULE_3___default()({
      log: false
    }, '#couple_beneficiaire_aah_apres');
    iframe_resizer_js_iframeResizer__WEBPACK_IMPORTED_MODULE_3___default()({
      log: false
    }, '#couple_beneficiaire_aah_2enf_avant');
    iframe_resizer_js_iframeResizer__WEBPACK_IMPORTED_MODULE_3___default()({
      log: false
    }, '#couple_beneficiaire_aah_2enf_apres');
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
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Comprendre les enjeux autour de la d\xE9conjugalisation de l'AAH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Comprendre les enjeux autour de la d\xE9conjugalisation de l'AAH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Les graphiques suivants permettre de mieux comprendre les enjeux autour de la d\xE9conjugalisation de l'AAH."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Ils repr\xE9sentent les ressources de diff\xE9rents foyers lorsque le salaire d'un des adultes le composant \xE9volue entre 0 et 3\xA0500 euros par mois."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Suite \xE0 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener",
    href: "https://www.assemblee-nationale.fr/dyn/15/amendements/3970/CION-SOC/AS1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "l'amendement"), " propos\xE9 par la majorit\xE9, nous avons aussi voulu voir l'impact qu'il aurait s'il \xE9tait appliqu\xE9."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Avant de regarder ce qui se passe pour les b\xE9n\xE9ficiaires de l'AAH, on peut voir la dynamique pour un couple dont aucun des membres en b\xE9n\xE9ficie."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Ressources pour un couple dont aucun adulte n'est b\xE9n\xE9ficiaire de l'AAH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    id: "couple_non_beneficiaire",
    src: "".concat(_next_config_js__WEBPACK_IMPORTED_MODULE_2___default.a.assetPrefix, "/graphique?source=").concat(_next_config_js__WEBPACK_IMPORTED_MODULE_2___default.a.assetPrefix, "/static/aah/couple_non_beneficiaire.json"),
    style: iframeStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Ce graphique met en \xE9vidence trois dispositifs de solidarit\xE9 nationale, le RSA, la prime d'activit\xE9 et l'aide au logement."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "On voit aussi que, globalement, les ressources vont toujours en augmentant."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Ressources pour un couple dont un parent est sans salaire et b\xE9n\xE9ficiaire de l'AAH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "ACTUELLEMENT", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    id: "conjoint_beneficiaire_aah_avant",
    src: "".concat(_next_config_js__WEBPACK_IMPORTED_MODULE_2___default.a.assetPrefix, "/graphique?source=").concat(_next_config_js__WEBPACK_IMPORTED_MODULE_2___default.a.assetPrefix, "/static/aah/conjoint_beneficiaire_aah_avant.json"),
    style: iframeStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "AVEC L'AMENDEMENT", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    id: "conjoint_beneficiaire_aah_apres",
    src: "".concat(_next_config_js__WEBPACK_IMPORTED_MODULE_2___default.a.assetPrefix, "/graphique?source=").concat(_next_config_js__WEBPACK_IMPORTED_MODULE_2___default.a.assetPrefix, "/static/aah/conjoint_beneficiaire_aah_apres.json"),
    style: iframeStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Le premier graphique met en \xE9vidence certains des probl\xE8mes actuels. \xC0 partir d'environ 1000 \u20AC, les ressources globales du couple diminuent ! Vous travaillez plus mais vous gagnez litt\xE9ralement moins ! Cette diminution n'est compens\xE9 qu'\xE0 partir de 1 800 \u20AC."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "L'amendement propos\xE9 par la majorit\xE9 ne r\xE8gle pas du tout le probl\xE8me, elle le d\xE9place ! Le premier pic n'est plus \xE0 1 000 mais \xE0 environ 1 100 euros et cel\xE0 n'est compens\xE9 qu'\xE0 partir de 2 000 \u20AC !"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Ressources pour un couple dont les deux adultes sont b\xE9n\xE9ficiaires de l'AAH (l'un d'eux \xE9tant sans salaire)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "ACTUELLEMENT", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    id: "couple_beneficiaire_aah_avant",
    src: "".concat(_next_config_js__WEBPACK_IMPORTED_MODULE_2___default.a.assetPrefix, "/graphique?source=").concat(_next_config_js__WEBPACK_IMPORTED_MODULE_2___default.a.assetPrefix, "/static/aah/couple_beneficiaire_aah_avant.json"),
    style: iframeStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "AVEC L'AMENDEMENT", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    id: "couple_beneficiaire_aah_apres",
    src: "".concat(_next_config_js__WEBPACK_IMPORTED_MODULE_2___default.a.assetPrefix, "/graphique?source=").concat(_next_config_js__WEBPACK_IMPORTED_MODULE_2___default.a.assetPrefix, "/static/aah/couple_beneficiaire_aah_apres.json"),
    style: iframeStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Les probl\xE8mes sont encore plus accentu\xE9s lorsque les deux conjoints sont b\xE9n\xE9ficiaires de l'AAH."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Ressources pour une famille avec 2 enfants dont les deux adultes sont b\xE9n\xE9ficiaires de l'AAH (l'un d'eux \xE9tant sans salaire)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "ACTUELLEMENT", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    id: "couple_beneficiaire_aah_2enf_avant",
    src: "".concat(_next_config_js__WEBPACK_IMPORTED_MODULE_2___default.a.assetPrefix, "/graphique?source=").concat(_next_config_js__WEBPACK_IMPORTED_MODULE_2___default.a.assetPrefix, "/static/aah/couple_beneficiaire_aah_2enf_avant.json"),
    style: iframeStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "AVEC L'AMENDEMENT", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    id: "couple_beneficiaire_aah_2enf_amendement",
    src: "".concat(_next_config_js__WEBPACK_IMPORTED_MODULE_2___default.a.assetPrefix, "/graphique?source=").concat(_next_config_js__WEBPACK_IMPORTED_MODULE_2___default.a.assetPrefix, "/static/aah/couple_beneficiaire_aah_2enf_apres.json"),
    style: iframeStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Et l'amendement a un impact n\xE9gatif fort sur les familles."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Pour en savoir plus, contactez ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener",
    href: "https://twitter.com/1h0ma5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "moi sur Twitter"), ". Tout \xE7a est r\xE9alis\xE9 gr\xE2ce \xE0 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener",
    href: "https://openfisca.org/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "OpenFisca"), " et ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener",
    href: "https://mes-aides.org/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Mes Aides"), "."));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.3b1786a33e6ed0f1146a.hot-update.js.map