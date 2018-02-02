/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _plugin = __webpack_require__(1);

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: emojidex のアドレス
$('head').append('<script src="https://cdn.rawgit.com/emojidex/emojidex-web/add_option/dist/js/emojidex.js"></script>');
$('head').append('<link href="https://cdn.emojidex.com/scripts/css/emojidex.min.css" rel="stylesheet" />');

// TODO: 将来的にはnpmから


tinymce.PluginManager.add('emojidex', _plugin2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(2);

var url = _interopRequireWildcard(_icon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var checkPalette = function checkPalette(editor, e) {
  if (typeof Palette != 'undefined') {
    $(e.target.$el).emojidexPalette({
      onEmojiButonnClicked: function onEmojiButonnClicked(insertString) {
        editor.insertContent(insertString.imageTag);
      }
    });
  } else {
    setTimeout(function () {
      checkPalette(editor, e);
    }, 1000);
  }
};

var plugin = function plugin(editor) {
  editor.addButton('emojidex', {
    tooltip: 'emojidex',
    image: url.default,
    onpostrender: function onpostrender(e) {
      checkPalette(editor, e);
    }
  });
  editor.on('init', function (e) {
    tinymce.activeEditor.dom.loadCSS('https://cdn.emojidex.com/scripts/css/emojidex.min.css');
  });

  return {
    getMetadata: function getMetadata() {
      return {
        title: 'emojidex plugin for tinymce',
        author: 'emojidex',
        url: 'https://www.emojidex.com'
      };
    }
  };
};

exports.default = plugin;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA0pJREFUOI1tk9tP23UAxT/f/nqhl1Ggv7ZycSllyKRQxXaDbDHimJeoBGPQuMwsJprokw8+6Z+wRKMPRkc0usxkyZRFkiWA04kLE6KCbAkydBtuyGX90TI62h/ld+nXB6NZpp+3k5yc83KO4C6eD4WEVMRB4Amvx7NLCCH07e0/kPIbKZTR05mMfadf3Cn6I+E9NcHKTx59/EAytW8voYgKssytzBozP04z9u3537X19dcHtezYfwL6o2pfRzJ56tBrRzxVEZUKnxfKNthlKNtI20Zf3+DEwOfW5PTMK4Na9gSA8nez2tqeuP/r/T3dXk+8ldslydLML0TvCSNtG2wLs1Ri/Mwoz77Y58gsrjwTLBTPzhX1ZQeAv8L7Xs/BR3yJ/sPMjgxzfXoKde/D5JZXwDLZzOb46thnJDoSuBQ4fKjPVRXwfwDg6I+q8dRDDzzm9Xjwh2q4emGcaxM/EFDDbOXzSMPg2qVZAgE/0aiKLGwRcLvoamtN90fUtFNCd3PeLcLfr/JT4SPeGD4LUvLzp8dIt8WQpkEy1Y7P42J8+Bxp6rEXN2k2/YwI0e0UiIb65zqpSTSTLBSYHXgXh5Q82NqMsCywLaRt09S0k3isDiwbaYepWw0ifh1rcAKGZRpgW5w6eYZKVaW8mWd5+Sa+Cg/IMltFnfymjiMQJJfRePmpTsxSCYkwnCDnl64vcl9LDH+klt633gbgdjaHns8D4N2xg2BYBSEYOnoUDIOlVQ2knHdKODc1danY3d3pZ22J93t6EULBMG0suwyAU3HgdimARI26kPVdTM8vmCBGlMtF3YiaZlUsEt6/J9XKd+enaNQDdCk1pJzVtDmC3Cu9FIomi0aOl55Os5LJMzQ5c/yLm9pJBWC3zzdxZeFGb0dLPFobCbMzEmPXvg4C1UEq25tQ25tx+b3sbvETqHAxMDqxsKnrL8wV9S0F4HJRNxtdytDF2SsHnGVnbV2ogepgJdKyEZU+hOIgWyxwY22RLycv/qZt5J8c1LIr/04ZYK6oF+Ju5/Gl1dwWhtIZb6h3u/0+hEOQ3dhgeHIyf+Hq7DsFY/vIaW1N+983/sOroUTMpShvNtbVJkuGYf2Z0cYQ8sOPs3O37vb+BWkzZRsuZ2W9AAAAAElFTkSuQmCC"

/***/ })
/******/ ]);