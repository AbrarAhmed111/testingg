"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/signin/route";
exports.ids = ["app/api/signin/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsignin%2Froute&page=%2Fapi%2Fsignin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignin%2Froute.ts&appDir=C%3A%5CTORRENT%5CDevWebies%5Cresume_builder_task3%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CTORRENT%5CDevWebies%5Cresume_builder_task3&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsignin%2Froute&page=%2Fapi%2Fsignin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignin%2Froute.ts&appDir=C%3A%5CTORRENT%5CDevWebies%5Cresume_builder_task3%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CTORRENT%5CDevWebies%5Cresume_builder_task3&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_TORRENT_DevWebies_resume_builder_task3_app_api_signin_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/signin/route.ts */ \"(rsc)/./app/api/signin/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"standalone\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/signin/route\",\n        pathname: \"/api/signin\",\n        filename: \"route\",\n        bundlePath: \"app/api/signin/route\"\n    },\n    resolvedPagePath: \"C:\\\\TORRENT\\\\DevWebies\\\\resume_builder_task3\\\\app\\\\api\\\\signin\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_TORRENT_DevWebies_resume_builder_task3_app_api_signin_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/signin/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzaWduaW4lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNpZ25pbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNpZ25pbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVE9SUkVOVCU1Q0RldldlYmllcyU1Q3Jlc3VtZV9idWlsZGVyX3Rhc2szJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVE9SUkVOVCU1Q0RldldlYmllcyU1Q3Jlc3VtZV9idWlsZGVyX3Rhc2szJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PXN0YW5kYWxvbmUmcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDd0I7QUFDckc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8/ZTUyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxUT1JSRU5UXFxcXERldldlYmllc1xcXFxyZXN1bWVfYnVpbGRlcl90YXNrM1xcXFxhcHBcXFxcYXBpXFxcXHNpZ25pblxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJzdGFuZGFsb25lXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NpZ25pbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NpZ25pblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2lnbmluL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVE9SUkVOVFxcXFxEZXZXZWJpZXNcXFxccmVzdW1lX2J1aWxkZXJfdGFzazNcXFxcYXBwXFxcXGFwaVxcXFxzaWduaW5cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3NpZ25pbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsignin%2Froute&page=%2Fapi%2Fsignin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignin%2Froute.ts&appDir=C%3A%5CTORRENT%5CDevWebies%5Cresume_builder_task3%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CTORRENT%5CDevWebies%5Cresume_builder_task3&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/signin/route.ts":
/*!*********************************!*\
  !*** ./app/api/signin/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/lib/dbConnect */ \"(rsc)/./app/lib/dbConnect.ts\");\n/* harmony import */ var _app_model_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/model/User */ \"(rsc)/./app/model/User.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\n\nasync function POST(req) {\n    try {\n        await (0,_app_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const { email, password } = await req.json();\n        const user = await _app_model_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email\n        });\n        if (!user || !await (0,bcrypt__WEBPACK_IMPORTED_MODULE_2__.compare)(password, user.password)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n                error: \"Invalid email or password\"\n            }, {\n                status: 401\n            });\n        }\n        const jwtSecret = process.env.JWT_SECRET;\n        if (!jwtSecret) {\n            throw new Error(\"JWT_SECRET environment variable is not defined\");\n        }\n        const token = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__.sign)({\n            userId: user.id\n        }, jwtSecret, {\n            expiresIn: \"7d\"\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n            data: {\n                token\n            },\n            user: {\n                id: user.id,\n                email: user.email,\n                name: user.name\n            }\n        });\n    } catch (error) {\n        console.error(\"Error during authentication:\", error.message);\n        return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NpZ25pbi9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0QztBQUNIO0FBQ1I7QUFDRztBQUNvQjtBQUVqRCxlQUFlSyxLQUFLQyxHQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTU4sOERBQVNBO1FBQ2YsTUFBTSxFQUFFTyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1GLElBQUlHLElBQUk7UUFFMUMsTUFBTUMsT0FBTyxNQUFNVCx1REFBU0EsQ0FBQ1UsT0FBTyxDQUFDO1lBQUVKO1FBQU07UUFFN0MsSUFBSSxDQUFDRyxRQUFRLENBQUUsTUFBTVIsK0NBQU9BLENBQUNNLFVBQVVFLEtBQUtGLFFBQVEsR0FBSTtZQUN0RCxPQUFPSixxREFBWUEsQ0FBQ0ssSUFBSSxDQUN0QjtnQkFBRUcsT0FBTztZQUE0QixHQUNyQztnQkFBRUMsUUFBUTtZQUFJO1FBR2xCO1FBRUEsTUFBTUMsWUFBWUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO1FBQ3hDLElBQUksQ0FBQ0gsV0FBVztZQUNkLE1BQU0sSUFBSUksTUFBTTtRQUNsQjtRQUVBLE1BQU1DLFFBQVFoQixrREFBSUEsQ0FBQztZQUFFaUIsUUFBUVYsS0FBS1csRUFBRTtRQUFDLEdBQUdQLFdBQVc7WUFDakRRLFdBQVc7UUFDYjtRQUVBLE9BQU9sQixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1lBQ3ZCYyxNQUFNO2dCQUFFSjtZQUFNO1lBQ2RULE1BQU07Z0JBQUVXLElBQUlYLEtBQUtXLEVBQUU7Z0JBQUVkLE9BQU9HLEtBQUtILEtBQUs7Z0JBQUVpQixNQUFLZCxLQUFLYyxJQUFJO1lBQUM7UUFDekQ7SUFDRixFQUFFLE9BQU9aLE9BQU87UUFDZGEsUUFBUWIsS0FBSyxDQUFDLGdDQUFnQ0EsTUFBTWMsT0FBTztRQUMzRCxPQUFPdEIscURBQVlBLENBQUNLLElBQUksQ0FBQztZQUFFRyxPQUFPQSxNQUFNYyxPQUFPO1FBQUMsR0FBRztZQUFFYixRQUFRO1FBQUk7SUFDbkU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vYXBwL2FwaS9zaWduaW4vcm91dGUudHM/NDg0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCJAL2FwcC9saWIvZGJDb25uZWN0XCI7XHJcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSBcIkAvYXBwL21vZGVsL1VzZXJcIjtcclxuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCJiY3J5cHRcIjtcclxuaW1wb3J0IHsgc2lnbiB9IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBhd2FpdCByZXEuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IGVtYWlsIH0pO1xyXG5cclxuICAgIGlmICghdXNlciB8fCAhKGF3YWl0IGNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpKSkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogXCJJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkXCIgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAxIH1cclxuICAgICAgKTtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgand0U2VjcmV0ID0gcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVDtcclxuICAgIGlmICghand0U2VjcmV0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkpXVF9TRUNSRVQgZW52aXJvbm1lbnQgdmFyaWFibGUgaXMgbm90IGRlZmluZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBzaWduKHsgdXNlcklkOiB1c2VyLmlkIH0sIGp3dFNlY3JldCwge1xyXG4gICAgICBleHBpcmVzSW46IFwiN2RcIixcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgIGRhdGE6IHsgdG9rZW4gfSxcclxuICAgICAgdXNlcjogeyBpZDogdXNlci5pZCwgZW1haWw6IHVzZXIuZW1haWwsIG5hbWU6dXNlci5uYW1lIH0sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGR1cmluZyBhdXRoZW50aWNhdGlvbjpcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiVXNlck1vZGVsIiwiY29tcGFyZSIsInNpZ24iLCJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxIiwiZW1haWwiLCJwYXNzd29yZCIsImpzb24iLCJ1c2VyIiwiZmluZE9uZSIsImVycm9yIiwic3RhdHVzIiwiand0U2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJFcnJvciIsInRva2VuIiwidXNlcklkIiwiaWQiLCJleHBpcmVzSW4iLCJkYXRhIiwibmFtZSIsImNvbnNvbGUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/signin/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/dbConnect.ts":
/*!******************************!*\
  !*** ./app/lib/dbConnect.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    // Check if we have a connection to the database or if it's currently connecting\n    if (connection.isConnected) {\n        console.log(\"Already connected to the database\");\n        return;\n    }\n    try {\n        // Attempt to connect to the database\n        // const db = await mongoose.connect(\"mongodb://127.0.0.1:27017/User\");\n        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://zafar:thestaffpad@cluster0.ewx3xtc.mongodb.net/staffpad?retryWrites=true&w=majority\");\n        connection.isConnected = db.connections[0].readyState;\n        console.log(\"Database connected successfully\");\n    } catch (error) {\n        console.error(\"Database connection failed:\", error);\n        // Graceful exit in case of a connection error\n        process.exit(1);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL2RiQ29ubmVjdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFNaEMsTUFBTUMsYUFBK0IsQ0FBQztBQUV0QyxlQUFlQztJQUNiLGdGQUFnRjtJQUNoRixJQUFJRCxXQUFXRSxXQUFXLEVBQUU7UUFDMUJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0Y7SUFFQSxJQUFJO1FBQ0YscUNBQXFDO1FBRXJDLHVFQUF1RTtRQUV2RSxNQUFNQyxLQUFLLE1BQU1OLHVEQUFnQixDQUFDO1FBRWxDQyxXQUFXRSxXQUFXLEdBQUdHLEdBQUdFLFdBQVcsQ0FBQyxFQUFFLENBQUNDLFVBQVU7UUFFckRMLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUUsT0FBT0ssT0FBTztRQUNkTixRQUFRTSxLQUFLLENBQUMsK0JBQStCQTtRQUU3Qyw4Q0FBOEM7UUFDOUNDLFFBQVFDLElBQUksQ0FBQztJQUNmO0FBQ0Y7QUFFQSxpRUFBZVYsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vYXBwL2xpYi9kYkNvbm5lY3QudHM/ZDY2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxudHlwZSBDb25uZWN0aW9uT2JqZWN0ID0ge1xyXG4gIGlzQ29ubmVjdGVkPzogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgY29ubmVjdGlvbjogQ29ubmVjdGlvbk9iamVjdCA9IHt9O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gIC8vIENoZWNrIGlmIHdlIGhhdmUgYSBjb25uZWN0aW9uIHRvIHRoZSBkYXRhYmFzZSBvciBpZiBpdCdzIGN1cnJlbnRseSBjb25uZWN0aW5nXHJcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdBbHJlYWR5IGNvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyBBdHRlbXB0IHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlXHJcbiAgICBcclxuICAgIC8vIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChcIm1vbmdvZGI6Ly8xMjcuMC4wLjE6MjcwMTcvVXNlclwiKTtcclxuXHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoXCJtb25nb2RiK3NydjovL3phZmFyOnRoZXN0YWZmcGFkQGNsdXN0ZXIwLmV3eDN4dGMubW9uZ29kYi5uZXQvc3RhZmZwYWQ/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIpO1xyXG5cclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdEYXRhYmFzZSBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0RhdGFiYXNlIGNvbm5lY3Rpb24gZmFpbGVkOicsIGVycm9yKTtcclxuXHJcbiAgICAvLyBHcmFjZWZ1bCBleGl0IGluIGNhc2Ugb2YgYSBjb25uZWN0aW9uIGVycm9yXHJcbiAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJkYkNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJkYiIsImNvbm5lY3QiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJlcnJvciIsInByb2Nlc3MiLCJleGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/dbConnect.ts\n");

/***/ }),

/***/ "(rsc)/./app/model/User.ts":
/*!***************************!*\
  !*** ./app/model/User.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        match: [\n            /.+\\@.+\\..+/,\n            \"Please fill a valid email address\"\n        ]\n    },\n    password: {\n        type: String\n    },\n    points: {\n        type: Number,\n        default: 0\n    },\n    resumes: [\n        {\n            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n            ref: \"Resume\"\n        }\n    ]\n});\n// const UserModel = mongoose.model<User>(\"User\", userSchema);\nconst UserModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbW9kZWwvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFHNUMsTUFBTUUsYUFBYSxJQUFJRCw0Q0FBTUEsQ0FBTztJQUNsQ0UsTUFBTTtRQUFFQyxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDckNDLE9BQU87UUFDTEgsTUFBTUM7UUFDTkMsVUFBVTtRQUNWRSxRQUFRO1FBQ1JDLE9BQU87WUFBQztZQUFjO1NBQW9DO0lBQzVEO0lBQ0FDLFVBQVU7UUFBRU4sTUFBTUM7SUFBTztJQUN6Qk0sUUFBUTtRQUFFUCxNQUFNUTtRQUFRQyxTQUFTO0lBQUU7SUFDbkNDLFNBQVM7UUFBQztZQUFFVixNQUFNSCw0Q0FBTUEsQ0FBQ2MsS0FBSyxDQUFDQyxRQUFRO1lBQUVDLEtBQUs7UUFBUztLQUFFO0FBQzNEO0FBRUEsOERBQThEO0FBQzlELE1BQU1DLFlBQ0osd0RBQWdCLENBQUNFLElBQUksSUFDckJwQixxREFBYyxDQUFPLFFBQVFFO0FBQy9CLGlFQUFlZ0IsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vYXBwL21vZGVsL1VzZXIudHM/YWIzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vbGliL3JlZHV4L3R5cGVzXCI7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYTxVc2VyPih7XHJcbiAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgbWF0Y2g6IFsvLitcXEAuK1xcLi4rLywgXCJQbGVhc2UgZmlsbCBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIl0sXHJcbiAgfSxcclxuICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcgfSxcclxuICBwb2ludHM6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXHJcbiAgcmVzdW1lczogW3sgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6IFwiUmVzdW1lXCIgfV0sXHJcbn0pO1xyXG5cclxuLy8gY29uc3QgVXNlck1vZGVsID0gbW9uZ29vc2UubW9kZWw8VXNlcj4oXCJVc2VyXCIsIHVzZXJTY2hlbWEpO1xyXG5jb25zdCBVc2VyTW9kZWwgPVxyXG4gIChtb25nb29zZS5tb2RlbHMuVXNlciBhcyBtb25nb29zZS5Nb2RlbDxVc2VyPikgfHxcclxuICBtb25nb29zZS5tb2RlbDxVc2VyPihcIlVzZXJcIiwgdXNlclNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJNb2RlbDtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwidXNlclNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsIm1hdGNoIiwicGFzc3dvcmQiLCJwb2ludHMiLCJOdW1iZXIiLCJkZWZhdWx0IiwicmVzdW1lcyIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJVc2VyTW9kZWwiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/model/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsignin%2Froute&page=%2Fapi%2Fsignin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignin%2Froute.ts&appDir=C%3A%5CTORRENT%5CDevWebies%5Cresume_builder_task3%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CTORRENT%5CDevWebies%5Cresume_builder_task3&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();