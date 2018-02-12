(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MyCamera"] = factory();
	else
		root["MyCamera"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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


var _core = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import doc from './dom'


// import './style/style.scss'

var MyCamera = function (_GetMedia) {
  _inherits(MyCamera, _GetMedia);

  function MyCamera() {
    _classCallCheck(this, MyCamera);

    return _possibleConstructorReturn(this, (MyCamera.__proto__ || Object.getPrototypeOf(MyCamera)).apply(this, arguments));
  }

  return MyCamera;
}(_core.GetMedia);

module.exports = _core.GetMedia;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var MediaRecorder = window['MediaRecorder'];
class GetMedia {
    createConstraints(config) {
        var constraints = {
          audio: false,
          video: true
        };

        return {
            audio: false,
            video: true
        };
    }
    constructor(config = {}) {
        this.config = config;
        this.constraints = this.createConstraints(config);
    }
    async startGetMedia() {
        let stream = await navigator.mediaDevices.getUserMedia(this.constraints);
        // //如果浏览器支持vp9，优先返回vp9。否则返回vp8。如果都不支持，直接抛出异常
        // var options = { mimeType: 'video/webm;codecs=vp9' };
        // if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        //     options = { mimeType: 'video/webm;codecs=vp8' };
        //     if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        //         options = { mimeType: 'video/webm' };
        //         if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        //             throw new Error('Your browser does not support VP8 and VP9 encoding');
        //         }
        //     }
        // }
        // let mediaRecorder = null;
        // try {
        //     mediaRecorder = new MediaRecorder(stream.clone(), options);
        // } catch (e) {
        //     throw new Error('Exception while creating MediaRecorder:' + e + '. mimeType: ' + options.mimeType);
        // }
        // mediaRecorder.ondataavailable = event => {
        //     if (event.data && event.data.size > 0) {
        //         if (typeof this.config.onGetBlob == 'function') {
        //             this.config.onGetBlob(event.data);
        //         }
        //     }
        // };
        // mediaRecorder.start(10); // collect 10ms of data
        if (typeof this.config.onGetMedia == 'function') {
            this.config.onGetMedia(stream);
        }
    }
}
exports.GetMedia = GetMedia;

/***/ })
/******/ ]);
});
//# sourceMappingURL=my-camera.js.map
