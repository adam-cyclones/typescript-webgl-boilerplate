var MyLibrary =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const mainShader = {
    /**
     * Fragment Shader
     * Color and other interactions with verticies
    */
    frag: __webpack_require__(7),
    /**
     * Vertex Shader
     * Position and so on
    */
    vert: __webpack_require__(8)
};
exports.mainShader = mainShader;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const fragment_shader_1 = __webpack_require__(5);
const vertex_shader_1 = __webpack_require__(6);
const main_program_1 = __webpack_require__(4);
window.addEventListener("DOMContentLoaded", main);
function main() {
    //Create canvas
    const canvas = document.createElement("canvas");
    canvas.width = document.body.scrollWidth;
    canvas.height = innerHeight;
    const body = document.querySelector("body");
    body.appendChild(canvas);
    //Context
    const gl = canvas.getContext("webgl");
    //Clear and draw background
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    main_program_1.createProgram(gl, fragment_shader_1.importFragmentShader, vertex_shader_1.importVertexShader);
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const sheet = (() => {
    let style = document.createElement("style");
    // WebKit hack :(
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    return style.sheet;
})(), css = (input) => {
    sheet.insertRule(input, 0);
    return css;
};
css `
    html,
    body{
        margin:0;
        position:relative;
        width:100vw;
        height:100vh;
        overflow:hidden;
    }
`;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(2);
__webpack_require__(1);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//Clears a program that can pass multiple shaders
function createProgram(gl, ...shaders) {
    const program = gl.createProgram();
    for (let shader of shaders) {
        gl.attachShader(program, shader(gl));
    }
    gl.linkProgram(program);
    return program;
}
exports.createProgram = createProgram;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const shader_src_1 = __webpack_require__(0);
function importFragmentShader(gl) {
    //create fragment shader
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, shader_src_1.mainShader.frag);
    gl.compileShader(fragmentShader);
    return fragmentShader;
}
exports.importFragmentShader = importFragmentShader;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const shader_src_1 = __webpack_require__(0);
function importVertexShader(gl) {
    //Vertex shader (can has params)
    //create vertex shader
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, shader_src_1.mainShader.vert);
    gl.compileShader(vertexShader);
    return vertexShader;
}
exports.importVertexShader = importVertexShader;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "precision highp float;\r\n//vector 4 param for color\r\nuniform vect4 color;\r\n\r\nvoid main(){\r\n    GL_fragColor = color; \r\n}"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "//2 floating point values passed in as position\r\nattribute vec2 position;\r\n\r\nvoid main(){\r\n    //not using the last 2 params in this vector 4\r\n    gl_position = vec4(position, 0.0, 0.0);\r\n    \r\n}"

/***/ })
/******/ ]);