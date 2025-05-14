/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var crm;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Forms/TravelerForm.ts":
/*!***********************************!*\
  !*** ./src/Forms/TravelerForm.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TravelerForm: () => (/* binding */ TravelerForm)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nclass TravelerForm {\n    static onload(context) {\n        return __awaiter(this, void 0, void 0, function* () {\n            context.getFormContext().getAttribute(\"websiteurl\").addOnChange(TravelerForm.onWebsiteChanged);\n        });\n    }\n    static onWebsiteChanged(context) {\n        const formContext = context.getFormContext();\n        const websiteAttribute = formContext.getAttribute(\"websiteurl\");\n        const websiteRegex = /^(https?:\\/\\/)?([\\w\\d]+\\.)?[\\w\\d]+\\.\\w+\\/?.+$/g;\n        let isValid = true;\n        if (websiteAttribute && websiteAttribute.getValue()) {\n            const match = websiteAttribute.getValue().match(websiteRegex);\n            isValid = match != null;\n        }\n        websiteAttribute.controls.forEach((c) => {\n            if (isValid) {\n                c.clearNotification(\"websiteurl\");\n            }\n            else {\n                c.setNotification(\"Invalid Website Address\", \"websiteurl\");\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRm9ybXMvVHJhdmVsZXJGb3JtLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNLFlBQVk7SUFDdkIsTUFBTSxDQUFPLE1BQU0sQ0FBQyxPQUFnQzs7WUFDbEQsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakcsQ0FBQztLQUFBO0lBQ0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQWdDO1FBQ3RELE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3QyxNQUFNLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEUsTUFBTSxZQUFZLEdBQUcsZ0RBQWdELENBQUM7UUFDdEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNwRCxNQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUQsT0FBTyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUM7UUFDMUIsQ0FBQztRQUNELGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLE9BQU8sRUFBRSxDQUFDO2dCQUNYLENBQWdDLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDcEUsQ0FBQztpQkFBTSxDQUFDO2dCQUNMLENBQWdDLENBQUMsZUFBZSxDQUFDLHlCQUF5QixFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQzdGLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NybS5Dcm1kZXYvLi9zcmMvRm9ybXMvVHJhdmVsZXJGb3JtLnRzP2IxOGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRyYXZlbGVyRm9ybSB7XHJcbiAgc3RhdGljIGFzeW5jIG9ubG9hZChjb250ZXh0OiBYcm0uRXZlbnRzLkV2ZW50Q29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29udGV4dC5nZXRGb3JtQ29udGV4dCgpLmdldEF0dHJpYnV0ZShcIndlYnNpdGV1cmxcIikuYWRkT25DaGFuZ2UoVHJhdmVsZXJGb3JtLm9uV2Vic2l0ZUNoYW5nZWQpO1xyXG4gIH1cclxuICBzdGF0aWMgb25XZWJzaXRlQ2hhbmdlZChjb250ZXh0OiBYcm0uRXZlbnRzLkV2ZW50Q29udGV4dCk6IHZvaWQge1xyXG4gICAgY29uc3QgZm9ybUNvbnRleHQgPSBjb250ZXh0LmdldEZvcm1Db250ZXh0KCk7XHJcbiAgICBjb25zdCB3ZWJzaXRlQXR0cmlidXRlID0gZm9ybUNvbnRleHQuZ2V0QXR0cmlidXRlKFwid2Vic2l0ZXVybFwiKTtcclxuICAgIGNvbnN0IHdlYnNpdGVSZWdleCA9IC9eKGh0dHBzPzpcXC9cXC8pPyhbXFx3XFxkXStcXC4pP1tcXHdcXGRdK1xcLlxcdytcXC8/LiskL2c7XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcbiAgICBpZiAod2Vic2l0ZUF0dHJpYnV0ZSAmJiB3ZWJzaXRlQXR0cmlidXRlLmdldFZhbHVlKCkpIHtcclxuICAgICAgY29uc3QgbWF0Y2ggPSB3ZWJzaXRlQXR0cmlidXRlLmdldFZhbHVlKCkubWF0Y2god2Vic2l0ZVJlZ2V4KTtcclxuICAgICAgaXNWYWxpZCA9IG1hdGNoICE9IG51bGw7XHJcbiAgICB9XHJcbiAgICB3ZWJzaXRlQXR0cmlidXRlLmNvbnRyb2xzLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgICAoYyBhcyBYcm0uQ29udHJvbHMuU3RyaW5nQ29udHJvbCkuY2xlYXJOb3RpZmljYXRpb24oXCJ3ZWJzaXRldXJsXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIChjIGFzIFhybS5Db250cm9scy5TdHJpbmdDb250cm9sKS5zZXROb3RpZmljYXRpb24oXCJJbnZhbGlkIFdlYnNpdGUgQWRkcmVzc1wiLCBcIndlYnNpdGV1cmxcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Forms/TravelerForm.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TravelerForm: () => (/* reexport safe */ _Forms_TravelerForm__WEBPACK_IMPORTED_MODULE_0__.TravelerForm)\n/* harmony export */ });\n/* harmony import */ var _Forms_TravelerForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forms/TravelerForm */ \"./src/Forms/TravelerForm.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcm0uQ3JtZGV2Ly4vc3JjL2luZGV4LnRzP2ZmYjQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgVHJhdmVsZXJGb3JtIH0gZnJvbSBcIi4vRm9ybXMvVHJhdmVsZXJGb3JtXCI7IFxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	(crm = typeof crm === "undefined" ? {} : crm).Crmdev = __webpack_exports__;
/******/ 	
/******/ })()
;