webpackHotUpdate("static/development/pages/graphique.js",{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

function preprocess(data) {
  var maxACS = data.reduce(function (max, slice) {
    var v = slice.acs;
    return max < v ? v : max;
  }, 0);
  data.forEach(function (slice) {
    slice.cmu_c = slice.cmu_c * 1.2 * maxACS;
  });
  data.forEach(function (slice) {
    slice.cmu_c = slice.cmu_c / 12;
    slice.acs = slice.acs / 12;
    slice.bourse_college = slice.bourse_college / 12;
    slice.cheque_energie = slice.cheque_energie / 12;
  });
}

function computeTotal(data, keys) {
  data.forEach(function (slice) {
    slice.total = keys.reduce(function (v, k) {
      return v + slice[k];
    }, 0);
  });
}

var exclude = ["css_participation_forfaitaire_", "logement_social_", "livret_epargne_populaire_taux", "livret_epargne_populaire_taux_demandeur", "livret_epargne_populaire_taux_conjoint", "name"];

function getRelevantSeries(data) {
  var values = data.reduce(function (accum, item) {
    (0, _keys.default)(item).forEach(function (id) {
      if (exclude.indexOf(id) === -1 && !isNaN(item[id])) {
        accum[id] = (accum[id] || 0) + Math.abs(item[id]);
      }
    });
    return accum;
  }, {});
  return (0, _keys.default)(values).reduce(function (ids, id) {
    var variations = ['', '_', '_demandeur', '_conjoint'];
    variations.forEach(function (v) {
      if (values[id + v] !== 0 && values[id + v] !== undefined) {
        ids.push(id + v);
      }
    });
    return ids;
  }, []);
} // Permet le tri les ressources pour faciliter la lecture du graphique


var tops = {
  asf: 0.5,
  salaire_net: 1,
  irpp: 2,
  rsa: 3,
  aah: 3.5,
  af: 3.7,
  cf: 3.8,
  ppa: 4,
  aide_logement: 5,
  bourse_college: 5.5,
  cmu_c: 6,
  acs: 7
};

function itemComparator(a, b) {
  return (tops[a] || 10) - (tops[b] || 10);
}

module.exports = {
  computeTotal: computeTotal,
  getRelevantSeries: getRelevantSeries,
  itemComparator: itemComparator,
  preprocess: preprocess
};

/***/ })

})
//# sourceMappingURL=graphique.js.9705a9599dbc11d2b15f.hot-update.js.map