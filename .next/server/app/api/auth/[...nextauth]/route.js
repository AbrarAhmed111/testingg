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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

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

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

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

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CTORRENT%5CDevWebies%5Cresume_builder_task3%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CTORRENT%5CDevWebies%5Cresume_builder_task3&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CTORRENT%5CDevWebies%5Cresume_builder_task3%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CTORRENT%5CDevWebies%5Cresume_builder_task3&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_TORRENT_DevWebies_resume_builder_task3_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"standalone\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\TORRENT\\\\DevWebies\\\\resume_builder_task3\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_TORRENT_DevWebies_resume_builder_task3_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVE9SUkVOVCU1Q0RldldlYmllcyU1Q3Jlc3VtZV9idWlsZGVyX3Rhc2szJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVE9SUkVOVCU1Q0RldldlYmllcyU1Q3Jlc3VtZV9idWlsZGVyX3Rhc2szJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PXN0YW5kYWxvbmUmcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDcUM7QUFDbEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8/MmE4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxUT1JSRU5UXFxcXERldldlYmllc1xcXFxyZXN1bWVfYnVpbGRlcl90YXNrM1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJzdGFuZGFsb25lXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVE9SUkVOVFxcXFxEZXZXZWJpZXNcXFxccmVzdW1lX2J1aWxkZXJfdGFzazNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CTORRENT%5CDevWebies%5Cresume_builder_task3%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CTORRENT%5CDevWebies%5Cresume_builder_task3&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   OPTIONS: () => (/* binding */ OPTIONS),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _app_model_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/model/User */ \"(rsc)/./app/model/User.ts\");\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/dbConnect */ \"(rsc)/./app/lib/dbConnect.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n\n\n\n\n\n\nasync function authenticateUser(params) {\n    // Implementation of authenticateUser\n    return null;\n}\n// Define authentication options using NextAuthOptions interface\nconst OPTIONS = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {},\n            async authorize (credentials) {\n                const { email, password } = credentials;\n                console.log(\"Entered authorize function with credentials:\", credentials);\n                if (!email || !password) {\n                    console.log(\"Missing username or password\");\n                    return null;\n                }\n                try {\n                    const baseUrl = process.env.NEXTAUTH_URL || \"http://localhost:3000\";\n                    const url = `${baseUrl}/api/signin`;\n                    const response = await fetch(url, {\n                        method: \"POST\",\n                        body: JSON.stringify({\n                            email,\n                            password\n                        }),\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        }\n                    });\n                    const data = await response.json();\n                    console.log(\"Data from backend:\", data);\n                    if (response.ok && data.data && data.data.token) {\n                        const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().decode(data.data.token);\n                        console.log(\"decodedToken in authConfig:\", decodedToken);\n                        if (!decodedToken) {\n                            return null;\n                        }\n                        const user = {\n                            id: decodedToken.userId,\n                            email: email,\n                            name: data.user.name,\n                            role: decodedToken.role,\n                            phone_number: decodedToken.phone_number // Assuming phone_number is included in JWT\n                        };\n                        console.log(\"Returning user:\", user);\n                        return user;\n                    } else {\n                        console.log(\"Authentication failed:\", data.message || \"No details provided\");\n                        return null;\n                    }\n                } catch (error) {\n                    console.error(\"Error in authorize function:\", error);\n                    return null;\n                }\n            }\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    session: {\n        strategy: \"jwt\",\n        maxAge: 7 * 24 * 60 * 60,\n        updateAge: 24 * 60 * 60\n    },\n    callbacks: {\n        async signIn ({ user, account }) {\n            if (account.provider === \"google\") {\n                await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n                try {\n                    const existingUser = await _app_model_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n                        email: user.email\n                    });\n                    if (!existingUser) {\n                        const newUser = await _app_model_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n                            name: user.name,\n                            email: user.email\n                        });\n                        await newUser.save();\n                        return true;\n                    }\n                } catch (err) {\n                    console.log(\"Error occurred while saving data:\", err);\n                    return false;\n                }\n            }\n            return true;\n        },\n        async jwt ({ token, user, account }) {\n            console.log(\"Starting jwt callback with token:\", token);\n            if (user) {\n                console.log(\"Modifying token with user details\");\n                token.id = user.id;\n                token.email = user.email;\n                token.name = user.name; // Ensure role is included if it's part of your user model\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            console.log(\"Starting session callback with token:\", token);\n            if (token) {\n                session.user = {\n                    ...session.user,\n                    id: token.id,\n                    email: token.email,\n                    role: token.role,\n                    name: token.name\n                };\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/signin\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_2___default()(OPTIONS);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNvQztBQUNTO0FBQ1M7QUFDWTtBQUNuQztBQUV5QjtBQXdCeEQsZUFBZU0saUJBQWlCQyxNQUEyQztJQUN6RSxxQ0FBcUM7SUFDckMsT0FBTztBQUNUO0FBRUEsZ0VBQWdFO0FBQ3pELE1BQU1DLFVBQTJCO0lBQ3RDQyxXQUFXO1FBQ1ROLDJFQUFtQkEsQ0FBQztZQUNsQk8sTUFBTTtZQUNOQyxhQUFhLENBQUM7WUFDZCxNQUFNQyxXQUFVRCxXQUFXO2dCQUN6QixNQUFNLEVBQUVFLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdIO2dCQUM1QkksUUFBUUMsR0FBRyxDQUFDLGdEQUFnREw7Z0JBRTVELElBQUksQ0FBQ0UsU0FBUyxDQUFDQyxVQUFVO29CQUN2QkMsUUFBUUMsR0FBRyxDQUFDO29CQUNaLE9BQU87Z0JBQ1Q7Z0JBRUEsSUFBSTtvQkFDRixNQUFNQyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFlBQVksSUFBSTtvQkFDNUMsTUFBTUMsTUFBTSxDQUFDLEVBQUVKLFFBQVEsV0FBVyxDQUFDO29CQUVuQyxNQUFNSyxXQUFXLE1BQU1DLE1BQU1GLEtBQUs7d0JBQ2hDRyxRQUFRO3dCQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7NEJBQUVkOzRCQUFPQzt3QkFBUzt3QkFDdkNjLFNBQVM7NEJBQUUsZ0JBQWdCO3dCQUFtQjtvQkFDaEQ7b0JBRUEsTUFBTUMsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO29CQUNoQ2YsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQmE7b0JBRWxDLElBQUlQLFNBQVNTLEVBQUUsSUFBSUYsS0FBS0EsSUFBSSxJQUFJQSxLQUFLQSxJQUFJLENBQUNHLEtBQUssRUFBRTt3QkFDL0MsTUFBTUMsZUFBZTdCLDBEQUFVLENBQUN5QixLQUFLQSxJQUFJLENBQUNHLEtBQUs7d0JBQy9DakIsUUFBUUMsR0FBRyxDQUFD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bmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWNjb3VudCwgVXNlciBhcyBBdXRoVXNlciB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvYXBwL21vZGVsL1VzZXJcIjtcclxuaW1wb3J0IGNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL2xpYi9kYkNvbm5lY3RcIjtcclxuaW1wb3J0IE5leHRBdXRoLCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7IEpXVCB9IGZyb20gXCJuZXh0LWF1dGgvand0XCI7XHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcclxuXHJcbi8vIEV4dGVuZCB0aGUgSldUIGludGVyZmFjZSBmb3IgY29uc2lzdGVudCB0b2tlbiBoYW5kbGluZ1xyXG5pbnRlcmZhY2UgRXh0ZW5kZWRKV1QgZXh0ZW5kcyBKV1Qge1xyXG4gIHBob25lX251bWJlcj86IHN0cmluZztcclxuICByb2xlPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRXh0ZW5kZWRVc2VyIHtcclxuICBpZD86IHN0cmluZztcclxuICBuYW1lPzogc3RyaW5nO1xyXG4gIGVtYWlsPzogc3RyaW5nO1xyXG4gIHJvbGU/OiBzdHJpbmc7XHJcbiAgcGhvbmVfbnVtYmVyPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQXV0aFJlc3BvbnNlRGV0YWlscyB7XHJcbiAgW2tleTogc3RyaW5nXTogYW55OyAgLy8gRGVmaW5lIHRoZSBzdHJ1Y3R1cmUgb2YgYXV0aFJlc3BvbnNlLmRldGFpbHMgaGVyZVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQXV0aFJlc3BvbnNlIHtcclxuICBkZXRhaWxzOiBBdXRoUmVzcG9uc2VEZXRhaWxzO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGVVc2VyKHBhcmFtczogeyBFbWFpbDogc3RyaW5nOyBQcm92aWRlcjogc3RyaW5nIH0pOiBQcm9taXNlPEF1dGhSZXNwb25zZSB8IG51bGw+IHtcclxuICAvLyBJbXBsZW1lbnRhdGlvbiBvZiBhdXRoZW50aWNhdGVVc2VyXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbi8vIERlZmluZSBhdXRoZW50aWNhdGlvbiBvcHRpb25zIHVzaW5nIE5leHRBdXRoT3B0aW9ucyBpbnRlcmZhY2VcclxuZXhwb3J0IGNvbnN0IE9QVElPTlM6IE5leHRBdXRoT3B0aW9ucyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7fSxcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKTpQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBjcmVkZW50aWFscyBhcyB7IGVtYWlsOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVudGVyZWQgYXV0aG9yaXplIGZ1bmN0aW9uIHdpdGggY3JlZGVudGlhbHM6XCIsIGNyZWRlbnRpYWxzKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWlzc2luZyB1c2VybmFtZSBvciBwYXNzd29yZFwiKTtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XHJcbiAgICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hcGkvc2lnbmluYDtcclxuXHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcclxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBmcm9tIGJhY2tlbmQ6XCIsIGRhdGEpO1xyXG5cclxuICAgICAgICAgIGlmIChyZXNwb25zZS5vayAmJiBkYXRhLmRhdGEgJiYgZGF0YS5kYXRhLnRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGp3dC5kZWNvZGUoZGF0YS5kYXRhLnRva2VuKSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlY29kZWRUb2tlbiBpbiBhdXRoQ29uZmlnOlwiLCBkZWNvZGVkVG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFkZWNvZGVkVG9rZW4pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdXNlcjogRXh0ZW5kZWRVc2VyID0ge1xyXG4gICAgICAgICAgICAgIGlkOiBkZWNvZGVkVG9rZW4udXNlcklkLCAgLy8gQXNzdW1pbmcgYHVzZXJJZGAgaXMgdGhlIGtleSBpbiBkZWNvZGVkIHRva2VuXHJcbiAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICAgIG5hbWU6IGRhdGEudXNlci5uYW1lLCAgLy8gRW5zdXJlIHlvdSBpbmNsdWRlICduYW1lJyBoZXJlXHJcbiAgICAgICAgICAgICAgcm9sZTogZGVjb2RlZFRva2VuLnJvbGUsICAvLyBBc3N1bWluZyByb2xlIGlzIGluY2x1ZGVkIGluIEpXVFxyXG4gICAgICAgICAgICAgIHBob25lX251bWJlcjogZGVjb2RlZFRva2VuLnBob25lX251bWJlciAgLy8gQXNzdW1pbmcgcGhvbmVfbnVtYmVyIGlzIGluY2x1ZGVkIGluIEpXVFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXR1cm5pbmcgdXNlcjpcIiwgdXNlcik7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoZW50aWNhdGlvbiBmYWlsZWQ6XCIsIGRhdGEubWVzc2FnZSB8fCBcIk5vIGRldGFpbHMgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gYXV0aG9yaXplIGZ1bmN0aW9uOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxyXG4gICAgbWF4QWdlOiA3ICogMjQgKiA2MCAqIDYwLCAgLy8gNyBkYXlzIGluIHNlY29uZHNcclxuICAgIHVwZGF0ZUFnZTogMjQgKiA2MCAqIDYwLCAgIC8vIDI0IGhvdXJzIGluIHNlY29uZHNcclxuICB9LFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2lnbkluKHsgdXNlciwgYWNjb3VudCB9OiB7IHVzZXI6IEF1dGhVc2VyOyBhY2NvdW50OiBBY2NvdW50IH0pIHtcclxuICAgICAgaWYgKGFjY291bnQucHJvdmlkZXIgPT09IFwiZ29vZ2xlXCIpIHtcclxuICAgICAgICBhd2FpdCBjb25uZWN0KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiB1c2VyLmVtYWlsIH0pO1xyXG4gICAgICAgICAgaWYgKCFleGlzdGluZ1VzZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhd2FpdCBuZXdVc2VyLnNhdmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIG9jY3VycmVkIHdoaWxlIHNhdmluZyBkYXRhOlwiLCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciwgYWNjb3VudCB9KTogUHJvbWlzZTxFeHRlbmRlZEpXVD4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnU3RhcnRpbmcgand0IGNhbGxiYWNrIHdpdGggdG9rZW46JywgdG9rZW4pO1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW9kaWZ5aW5nIHRva2VuIHdpdGggdXNlciBkZXRhaWxzXCIpO1xyXG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcclxuICAgICAgICB0b2tlbi5lbWFpbCA9IHVzZXIuZW1haWw7XHJcbiAgICAgICAgdG9rZW4ubmFtZSA9IHVzZXIubmFtZTsgIC8vIEVuc3VyZSByb2xlIGlzIGluY2x1ZGVkIGlmIGl0J3MgcGFydCBvZiB5b3VyIHVzZXIgbW9kZWxcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgY29uc29sZS5sb2coJ1N0YXJ0aW5nIHNlc3Npb24gY2FsbGJhY2sgd2l0aCB0b2tlbjonLCB0b2tlbik7XHJcbiAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHNlc3Npb24udXNlciA9IHtcclxuICAgICAgICAgIC4uLnNlc3Npb24udXNlcixcclxuICAgICAgICAgICBpZDogdG9rZW4uaWQsXHJcbiAgICAgICAgICBlbWFpbDogdG9rZW4uZW1haWwsXHJcbiAgICAgICAgICByb2xlOiB0b2tlbi5yb2xlLCAgLy8gSW5jbHVkZSBhZGRpdGlvbmFsIGZpZWxkcyBhcyBuZWVkZWRcclxuICAgICAgICAgIG5hbWU6IHRva2VuLm5hbWUsICAvLyBJbmNsdWRlIGFkZGl0aW9uYWwgZmllbGRzIGFzIG5lZWRlZFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogXCIvc2lnbmluXCIsXHJcbiAgfSxcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChPUFRJT05TKTtcclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xyXG4iXSwibmFtZXMiOlsiVXNlciIsImNvbm5lY3QiLCJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJqd3QiLCJHb29nbGVQcm92aWRlciIsImF1dGhlbnRpY2F0ZVVzZXIiLCJwYXJhbXMiLCJPUFRJT05TIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiYXV0aG9yaXplIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1VSTCIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsIm9rIiwidG9rZW4iLCJkZWNvZGVkVG9rZW4iLCJkZWNvZGUiLCJ1c2VyIiwiaWQiLCJ1c2VySWQiLCJyb2xlIiwicGhvbmVfbnVtYmVyIiwibWVzc2FnZSIsImVycm9yIiwiY2xpZW50SWQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJ1cGRhdGVBZ2UiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJhY2NvdW50IiwicHJvdmlkZXIiLCJleGlzdGluZ1VzZXIiLCJmaW5kT25lIiwibmV3VXNlciIsImNyZWF0ZSIsInNhdmUiLCJlcnIiLCJwYWdlcyIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CTORRENT%5CDevWebies%5Cresume_builder_task3%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CTORRENT%5CDevWebies%5Cresume_builder_task3&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();