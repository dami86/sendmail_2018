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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__ = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__);
__webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
var routes = __webpack_require__(/*! ../../web/js/fos_js_routes.json */ "./web/js/fos_js_routes.json");


__WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js___default.a.setRoutingData(routes);

var SendEmail = function SendEmail() {

    this.AjaxForm = function (url) {

        if (document.forms[0] && window.FormData) {

            var message = new Object();
            message.loading = 'Loading...';
            message.success = 'Email Sent!';
            message.failure = 'Whoops! There was a problem sending your message.';

            var form = document.forms[0];

            var statusMessage = document.createElement('div');
            statusMessage.className = 'status';

            // Set up the AJAX request
            var request = new XMLHttpRequest();
            request.open('POST', __WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js___default.a.generate(url, true), true);
            request.setRequestHeader('accept', 'application/json');

            // Listen for the form being submitted
            form.addEventListener('submit', function (evt) {
                evt.preventDefault();
                form.appendChild(statusMessage);

                // Create a new FormData object passing in the form's key value pairs (that was easy!)
                var formData = new FormData(form);

                // Send the formData
                request.send(formData);

                // Watch for changes to request.readyState and update the statusMessage accordingly
                request.onreadystatechange = function () {
                    // <4 =  waiting on response from server
                    if (request.readyState < 4) statusMessage.innerHTML = message.loading;
                    // 4 = Response from server has been completely loaded.
                    else if (request.readyState === 4) {
                            // 200 - 299 = successful
                            if (request.status == 200 && request.status < 300) {
                                document.getElementById('alerts').innerHTML = _successMessage(message.success);
                                statusMessage.innerHTML = '';
                            } else form.insertAdjacentHTML('beforeend', message.failure);
                        }
                };
            });
        }
    };

    function _successMessage(message) {
        return '<div class="alert alert-success fade show" role="alert"><b>Success! </b>' + message + '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a></div>';
    };
};

var sendEmail = new SendEmail();
sendEmail.AjaxForm('email_sender_send_email_ajax');

/***/ }),

/***/ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js":
/*!************************************************************************************!*\
  !*** ./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js ***!
  \************************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  var n = t(); true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (n.Routing),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = n.Routing : (e.Routing = n.Routing, e.fos = { Router: n.Router });
}(this, function () {
  "use strict";
  function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }var t = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];for (var o in n) {
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }
    }return e;
  },
      n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  },
      o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      i = function () {
    function i(t, n) {
      e(this, i), this.context_ = t || { base_url: "", prefix: "", host: "", scheme: "" }, this.setRoutes(n || {});
    }return o(i, [{ key: "setRoutingData", value: function value(e) {
        this.setBaseUrl(e.base_url), this.setRoutes(e.routes), "prefix" in e && this.setPrefix(e.prefix), this.setHost(e.host), this.setScheme(e.scheme);
      } }, { key: "setRoutes", value: function value(e) {
        this.routes_ = Object.freeze(e);
      } }, { key: "getRoutes", value: function value() {
        return this.routes_;
      } }, { key: "setBaseUrl", value: function value(e) {
        this.context_.base_url = e;
      } }, { key: "getBaseUrl", value: function value() {
        return this.context_.base_url;
      } }, { key: "setPrefix", value: function value(e) {
        this.context_.prefix = e;
      } }, { key: "setScheme", value: function value(e) {
        this.context_.scheme = e;
      } }, { key: "getScheme", value: function value() {
        return this.context_.scheme;
      } }, { key: "setHost", value: function value(e) {
        this.context_.host = e;
      } }, { key: "getHost", value: function value() {
        return this.context_.host;
      } }, { key: "buildQueryParams", value: function value(e, t, o) {
        var i = this,
            r = void 0,
            s = new RegExp(/\[\]$/);if (t instanceof Array) t.forEach(function (t, r) {
          s.test(e) ? o(e, t) : i.buildQueryParams(e + "[" + ("object" === ("undefined" == typeof t ? "undefined" : n(t)) ? r : "") + "]", t, o);
        });else if ("object" === ("undefined" == typeof t ? "undefined" : n(t))) for (r in t) {
          this.buildQueryParams(e + "[" + r + "]", t[r], o);
        } else o(e, t);
      } }, { key: "getRoute", value: function value(e) {
        var t = this.context_.prefix + e;if (t in this.routes_) e = t;else if (!(e in this.routes_)) throw new Error('The route "' + e + '" does not exist.');return this.routes_[e];
      } }, { key: "generate", value: function value(e, n, o) {
        var i = this.getRoute(e),
            r = n || {},
            s = t({}, r),
            u = "",
            f = !0,
            a = "";if (i.tokens.forEach(function (t) {
          if ("text" === t[0]) return u = t[1] + u, void (f = !1);{
            if ("variable" !== t[0]) throw new Error('The token type "' + t[0] + '" is not supported.');var n = i.defaults && t[3] in i.defaults;if (!1 === f || !n || t[3] in r && r[t[3]] != i.defaults[t[3]]) {
              var o = void 0;if (t[3] in r) o = r[t[3]], delete s[t[3]];else {
                if (!n) {
                  if (f) return;throw new Error('The route "' + e + '" requires the parameter "' + t[3] + '".');
                }o = i.defaults[t[3]];
              }var a = !0 === o || !1 === o || "" === o;if (!a || !f) {
                var c = encodeURIComponent(o).replace(/%2F/g, "/");"null" === c && null === o && (c = ""), u = t[1] + c + u;
              }f = !1;
            } else n && t[3] in s && delete s[t[3]];
          }
        }), "" === u && (u = "/"), i.hosttokens.forEach(function (e) {
          var t = void 0;return "text" === e[0] ? void (a = e[1] + a) : void ("variable" === e[0] && (e[3] in r ? (t = r[e[3]], delete s[e[3]]) : i.defaults && e[3] in i.defaults && (t = i.defaults[e[3]]), a = e[1] + t + a));
        }), u = this.context_.base_url + u, i.requirements && "_scheme" in i.requirements && this.getScheme() != i.requirements._scheme ? u = i.requirements._scheme + "://" + (a || this.getHost()) + u : "undefined" != typeof i.schemes && "undefined" != typeof i.schemes[0] && this.getScheme() !== i.schemes[0] ? u = i.schemes[0] + "://" + (a || this.getHost()) + u : a && this.getHost() !== a ? u = this.getScheme() + "://" + a + u : o === !0 && (u = this.getScheme() + "://" + this.getHost() + u), Object.keys(s).length > 0) {
          var c = void 0,
              l = [],
              h = function h(e, t) {
            t = "function" == typeof t ? t() : t, t = null === t ? "" : t, l.push(encodeURIComponent(e) + "=" + encodeURIComponent(t));
          };for (c in s) {
            this.buildQueryParams(c, s[c], h);
          }u = u + "?" + l.join("&").replace(/%20/g, "+");
        }return u;
      } }], [{ key: "getInstance", value: function value() {
        return r;
      } }, { key: "setData", value: function value(e) {
        var t = i.getInstance();t.setRoutingData(e);
      } }]), i;
  }();i.Route, i.Context;var r = new i();return { Router: i, Routing: r };
});

/***/ }),

/***/ "./web/js/fos_js_routes.json":
/*!***********************************!*\
  !*** ./web/js/fos_js_routes.json ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {"base_url":".","routes":{"email_sender_send_email_ajax":{"tokens":[["text","/send_email_ajax"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"email_test_ajax":{"tokens":[["text","/test_ajax"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]}},"prefix":"","host":"localhost","scheme":"http"}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDJmZDk5YTkwNzM4YWRiNzQ5YmQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAuY3NzPzc3Y2EiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvanMvZm9zX2pzX3JvdXRlcy5qc29uIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJyb3V0ZXMiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJTZW5kRW1haWwiLCJBamF4Rm9ybSIsInVybCIsImRvY3VtZW50IiwiZm9ybXMiLCJ3aW5kb3ciLCJGb3JtRGF0YSIsIm1lc3NhZ2UiLCJPYmplY3QiLCJsb2FkaW5nIiwic3VjY2VzcyIsImZhaWx1cmUiLCJmb3JtIiwic3RhdHVzTWVzc2FnZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwiZ2VuZXJhdGUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiYXBwZW5kQ2hpbGQiLCJmb3JtRGF0YSIsInNlbmQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiaW5uZXJIVE1MIiwic3RhdHVzIiwiZ2V0RWxlbWVudEJ5SWQiLCJfc3VjY2Vzc01lc3NhZ2UiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJzZW5kRW1haWwiLCJlIiwidCIsIm4iLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9zIiwiUm91dGVyIiwiVHlwZUVycm9yIiwiYXNzaWduIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibyIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsImkiLCJjb250ZXh0XyIsImJhc2VfdXJsIiwicHJlZml4IiwiaG9zdCIsInNjaGVtZSIsInNldFJvdXRlcyIsInZhbHVlIiwic2V0QmFzZVVybCIsInNldFByZWZpeCIsInNldEhvc3QiLCJzZXRTY2hlbWUiLCJyb3V0ZXNfIiwiZnJlZXplIiwiciIsInMiLCJSZWdFeHAiLCJBcnJheSIsImZvckVhY2giLCJ0ZXN0IiwiYnVpbGRRdWVyeVBhcmFtcyIsIkVycm9yIiwiZ2V0Um91dGUiLCJ1IiwiZiIsImEiLCJ0b2tlbnMiLCJkZWZhdWx0cyIsImMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwiaG9zdHRva2VucyIsInJlcXVpcmVtZW50cyIsImdldFNjaGVtZSIsIl9zY2hlbWUiLCJnZXRIb3N0Iiwic2NoZW1lcyIsImtleXMiLCJsIiwiaCIsInB1c2giLCJqb2luIiwiZ2V0SW5zdGFuY2UiLCJSb3V0ZSIsIkNvbnRleHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdEQSx5Qzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBLG1CQUFPQSxDQUFDLDRDQUFSO0FB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RUFBMkIsR0FBM0IsQ0FBUjtBQUF3QyxnQkFBT1AsQ0FBUDtBQUFTLE9BQTNoRCxFQUF0eEMsQ0FBSixFQUF3ekYsQ0FBQyxFQUFDeEIsS0FBSSxhQUFMLEVBQW1CUSxPQUFNLGlCQUFVO0FBQUMsZUFBT08sQ0FBUDtBQUFTLE9BQTdDLEVBQUQsRUFBZ0QsRUFBQ2YsS0FBSSxTQUFMLEVBQWVRLE9BQU0sZUFBUzlCLENBQVQsRUFBVztBQUFDLFlBQUlDLElBQUVzQixFQUFFMEMsV0FBRixFQUFOLENBQXNCaEUsRUFBRXJDLGNBQUYsQ0FBaUJvQyxDQUFqQjtBQUFvQixPQUEzRSxFQUFoRCxDQUF4ekYsR0FBdTdGdUIsQ0FBOTdGO0FBQWc4RixHQUF0akcsRUFBM21CLENBQW9xSEEsRUFBRTJDLEtBQUYsRUFBUTNDLEVBQUU0QyxPQUFWLENBQWtCLElBQUk5QixJQUFFLElBQUlkLENBQUosRUFBTixDQUFZLE9BQU0sRUFBQ2pCLFFBQU9pQixDQUFSLEVBQVU1RCxTQUFRMEUsQ0FBbEIsRUFBTjtBQUEyQixDQUEzaEksQ0FBRCxDOzs7Ozs7Ozs7Ozs7QUNBQSxrQkFBa0IseUJBQXlCLGdDQUFnQyxpSEFBaUgsb0JBQW9CLDRHQUE0RyxnRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9hcHAuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDJmZDk5YTkwNzM4YWRiNzQ5YmQiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2Nzcy9hcHAuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL2Fzc2V0cy9jc3MvYXBwLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9jc3MvYXBwLmNzcycpO1xyXG5jb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi93ZWIvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuXHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcbnZhciBTZW5kRW1haWwgPSBmdW5jdGlvbigpIHtcclxuXHJcblxyXG4gICAgdGhpcy5BamF4Rm9ybSA9IGZ1bmN0aW9uICggdXJsKSB7XHJcblxyXG4gICAgICAgIGlmIChkb2N1bWVudC5mb3Jtc1swXSAmJiB3aW5kb3cuRm9ybURhdGEpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAgICAgICBtZXNzYWdlLmxvYWRpbmcgPSAnTG9hZGluZy4uLic7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyA9ICdFbWFpbCBTZW50ISc7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZmFpbHVyZSA9ICdXaG9vcHMhIFRoZXJlIHdhcyBhIHByb2JsZW0gc2VuZGluZyB5b3VyIG1lc3NhZ2UuJztcclxuXHJcbiAgICAgICAgICAgIHZhciBmb3JtID0gZG9jdW1lbnQuZm9ybXNbMF07XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RhdHVzTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBzdGF0dXNNZXNzYWdlLmNsYXNzTmFtZSA9ICdzdGF0dXMnO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0IHVwIHRoZSBBSkFYIHJlcXVlc3RcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vcGVuKCdQT1NUJywgUm91dGluZy5nZW5lcmF0ZSh1cmwsIHRydWUpLCB0cnVlKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdhY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cclxuICAgICAgICAgICAgLy8gTGlzdGVuIGZvciB0aGUgZm9ybSBiZWluZyBzdWJtaXR0ZWRcclxuICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3RhdHVzTWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IEZvcm1EYXRhIG9iamVjdCBwYXNzaW5nIGluIHRoZSBmb3JtJ3Mga2V5IHZhbHVlIHBhaXJzICh0aGF0IHdhcyBlYXN5ISlcclxuICAgICAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZW5kIHRoZSBmb3JtRGF0YVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZW5kKGZvcm1EYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBXYXRjaCBmb3IgY2hhbmdlcyB0byByZXF1ZXN0LnJlYWR5U3RhdGUgYW5kIHVwZGF0ZSB0aGUgc3RhdHVzTWVzc2FnZSBhY2NvcmRpbmdseVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gPDQgPSAgd2FpdGluZyBvbiByZXNwb25zZSBmcm9tIHNlcnZlclxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPCA0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlLmlubmVySFRNTCA9IG1lc3NhZ2UubG9hZGluZztcclxuICAgICAgICAgICAgICAgICAgICAvLyA0ID0gUmVzcG9uc2UgZnJvbSBzZXJ2ZXIgaGFzIGJlZW4gY29tcGxldGVseSBsb2FkZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIwMCAtIDI5OSA9IHN1Y2Nlc3NmdWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsZXJ0cycpLmlubmVySFRNTCA9X3N1Y2Nlc3NNZXNzYWdlKG1lc3NhZ2Uuc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlLmlubmVySFRNTCA9Jyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1lc3NhZ2UuZmFpbHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gX3N1Y2Nlc3NNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzIGZhZGUgc2hvd1wiIHJvbGU9XCJhbGVydFwiPjxiPlN1Y2Nlc3MhIDwvYj4nICsgbWVzc2FnZSArICc8YSBocmVmPVwiI1wiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJjbG9zZVwiPiZ0aW1lczs8L2E+PC9kaXY+JztcclxuICAgIH07XHJcblxyXG59XHJcblxyXG52YXIgc2VuZEVtYWlsID0gbmV3IFNlbmRFbWFpbCgpO1xyXG5zZW5kRW1haWwuQWpheEZvcm0oJ2VtYWlsX3NlbmRlcl9zZW5kX2VtYWlsX2FqYXgnICk7XHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvYXBwLmpzIiwiIWZ1bmN0aW9uKGUsdCl7dmFyIG49dCgpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sbi5Sb3V0aW5nKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1uLlJvdXRpbmc6KGUuUm91dGluZz1uLlJvdXRpbmcsZS5mb3M9e1JvdXRlcjpuLlJvdXRlcn0pfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9dmFyIHQ9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYoZVtvXT1uW29dKX1yZXR1cm4gZX0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLmtleSxvKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixvKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxvJiZlKHQsbyksdH19KCksaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGkodCxuKXtlKHRoaXMsaSksdGhpcy5jb250ZXh0Xz10fHx7YmFzZV91cmw6XCJcIixwcmVmaXg6XCJcIixob3N0OlwiXCIsc2NoZW1lOlwiXCJ9LHRoaXMuc2V0Um91dGVzKG58fHt9KX1yZXR1cm4gbyhpLFt7a2V5Olwic2V0Um91dGluZ0RhdGFcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnNldEJhc2VVcmwoZS5iYXNlX3VybCksdGhpcy5zZXRSb3V0ZXMoZS5yb3V0ZXMpLFwicHJlZml4XCJpbiBlJiZ0aGlzLnNldFByZWZpeChlLnByZWZpeCksdGhpcy5zZXRIb3N0KGUuaG9zdCksdGhpcy5zZXRTY2hlbWUoZS5zY2hlbWUpfX0se2tleTpcInNldFJvdXRlc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMucm91dGVzXz1PYmplY3QuZnJlZXplKGUpfX0se2tleTpcImdldFJvdXRlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucm91dGVzX319LHtrZXk6XCJzZXRCYXNlVXJsXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5iYXNlX3VybD1lfX0se2tleTpcImdldEJhc2VVcmxcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmJhc2VfdXJsfX0se2tleTpcInNldFByZWZpeFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ucHJlZml4PWV9fSx7a2V5Olwic2V0U2NoZW1lXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5zY2hlbWU9ZX19LHtrZXk6XCJnZXRTY2hlbWVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLnNjaGVtZX19LHtrZXk6XCJzZXRIb3N0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5ob3N0PWV9fSx7a2V5OlwiZ2V0SG9zdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uaG9zdH19LHtrZXk6XCJidWlsZFF1ZXJ5UGFyYW1zXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG8pe3ZhciBpPXRoaXMscj12b2lkIDAscz1uZXcgUmVnRXhwKC9cXFtcXF0kLyk7aWYodCBpbnN0YW5jZW9mIEFycmF5KXQuZm9yRWFjaChmdW5jdGlvbih0LHIpe3MudGVzdChlKT9vKGUsdCk6aS5idWlsZFF1ZXJ5UGFyYW1zKGUrXCJbXCIrKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpuKHQpKT9yOlwiXCIpK1wiXVwiLHQsbyl9KTtlbHNlIGlmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpuKHQpKSlmb3IociBpbiB0KXRoaXMuYnVpbGRRdWVyeVBhcmFtcyhlK1wiW1wiK3IrXCJdXCIsdFtyXSxvKTtlbHNlIG8oZSx0KX19LHtrZXk6XCJnZXRSb3V0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuY29udGV4dF8ucHJlZml4K2U7aWYodCBpbiB0aGlzLnJvdXRlc18pZT10O2Vsc2UgaWYoIShlIGluIHRoaXMucm91dGVzXykpdGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK2UrJ1wiIGRvZXMgbm90IGV4aXN0LicpO3JldHVybiB0aGlzLnJvdXRlc19bZV19fSx7a2V5OlwiZ2VuZXJhdGVcIix2YWx1ZTpmdW5jdGlvbihlLG4sbyl7dmFyIGk9dGhpcy5nZXRSb3V0ZShlKSxyPW58fHt9LHM9dCh7fSxyKSx1PVwiXCIsZj0hMCxhPVwiXCI7aWYoaS50b2tlbnMuZm9yRWFjaChmdW5jdGlvbih0KXtpZihcInRleHRcIj09PXRbMF0pcmV0dXJuIHU9dFsxXSt1LHZvaWQoZj0hMSk7e2lmKFwidmFyaWFibGVcIiE9PXRbMF0pdGhyb3cgbmV3IEVycm9yKCdUaGUgdG9rZW4gdHlwZSBcIicrdFswXSsnXCIgaXMgbm90IHN1cHBvcnRlZC4nKTt2YXIgbj1pLmRlZmF1bHRzJiZ0WzNdaW4gaS5kZWZhdWx0cztpZighMT09PWZ8fCFufHx0WzNdaW4gciYmclt0WzNdXSE9aS5kZWZhdWx0c1t0WzNdXSl7dmFyIG89dm9pZCAwO2lmKHRbM11pbiByKW89clt0WzNdXSxkZWxldGUgc1t0WzNdXTtlbHNle2lmKCFuKXtpZihmKXJldHVybjt0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrZSsnXCIgcmVxdWlyZXMgdGhlIHBhcmFtZXRlciBcIicrdFszXSsnXCIuJyl9bz1pLmRlZmF1bHRzW3RbM11dfXZhciBhPSEwPT09b3x8ITE9PT1vfHxcIlwiPT09bztpZighYXx8IWYpe3ZhciBjPWVuY29kZVVSSUNvbXBvbmVudChvKS5yZXBsYWNlKC8lMkYvZyxcIi9cIik7XCJudWxsXCI9PT1jJiZudWxsPT09byYmKGM9XCJcIiksdT10WzFdK2MrdX1mPSExfWVsc2UgbiYmdFszXWluIHMmJmRlbGV0ZSBzW3RbM11dfX0pLFwiXCI9PT11JiYodT1cIi9cIiksaS5ob3N0dG9rZW5zLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9dm9pZCAwO3JldHVyblwidGV4dFwiPT09ZVswXT92b2lkKGE9ZVsxXSthKTp2b2lkKFwidmFyaWFibGVcIj09PWVbMF0mJihlWzNdaW4gcj8odD1yW2VbM11dLGRlbGV0ZSBzW2VbM11dKTppLmRlZmF1bHRzJiZlWzNdaW4gaS5kZWZhdWx0cyYmKHQ9aS5kZWZhdWx0c1tlWzNdXSksYT1lWzFdK3QrYSkpfSksdT10aGlzLmNvbnRleHRfLmJhc2VfdXJsK3UsaS5yZXF1aXJlbWVudHMmJlwiX3NjaGVtZVwiaW4gaS5yZXF1aXJlbWVudHMmJnRoaXMuZ2V0U2NoZW1lKCkhPWkucmVxdWlyZW1lbnRzLl9zY2hlbWU/dT1pLnJlcXVpcmVtZW50cy5fc2NoZW1lK1wiOi8vXCIrKGF8fHRoaXMuZ2V0SG9zdCgpKSt1OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnNjaGVtZXMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnNjaGVtZXNbMF0mJnRoaXMuZ2V0U2NoZW1lKCkhPT1pLnNjaGVtZXNbMF0/dT1pLnNjaGVtZXNbMF0rXCI6Ly9cIisoYXx8dGhpcy5nZXRIb3N0KCkpK3U6YSYmdGhpcy5nZXRIb3N0KCkhPT1hP3U9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK2ErdTpvPT09ITAmJih1PXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIit0aGlzLmdldEhvc3QoKSt1KSxPYmplY3Qua2V5cyhzKS5sZW5ndGg+MCl7dmFyIGM9dm9pZCAwLGw9W10saD1mdW5jdGlvbihlLHQpe3Q9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90KCk6dCx0PW51bGw9PT10P1wiXCI6dCxsLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0KSl9O2ZvcihjIGluIHMpdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKGMsc1tjXSxoKTt1PXUrXCI/XCIrbC5qb2luKFwiJlwiKS5yZXBsYWNlKC8lMjAvZyxcIitcIil9cmV0dXJuIHV9fV0sW3trZXk6XCJnZXRJbnN0YW5jZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHJ9fSx7a2V5Olwic2V0RGF0YVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWkuZ2V0SW5zdGFuY2UoKTt0LnNldFJvdXRpbmdEYXRhKGUpfX1dKSxpfSgpO2kuUm91dGUsaS5Db250ZXh0O3ZhciByPW5ldyBpO3JldHVybntSb3V0ZXI6aSxSb3V0aW5nOnJ9fSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcImJhc2VfdXJsXCI6XCIuXCIsXCJyb3V0ZXNcIjp7XCJlbWFpbF9zZW5kZXJfc2VuZF9lbWFpbF9hamF4XCI6e1widG9rZW5zXCI6W1tcInRleHRcIixcIi9zZW5kX2VtYWlsX2FqYXhcIl1dLFwiZGVmYXVsdHNcIjpbXSxcInJlcXVpcmVtZW50c1wiOltdLFwiaG9zdHRva2Vuc1wiOltdLFwibWV0aG9kc1wiOltdLFwic2NoZW1lc1wiOltdfSxcImVtYWlsX3Rlc3RfYWpheFwiOntcInRva2Vuc1wiOltbXCJ0ZXh0XCIsXCIvdGVzdF9hamF4XCJdXSxcImRlZmF1bHRzXCI6W10sXCJyZXF1aXJlbWVudHNcIjpbXSxcImhvc3R0b2tlbnNcIjpbXSxcIm1ldGhvZHNcIjpbXSxcInNjaGVtZXNcIjpbXX19LFwicHJlZml4XCI6XCJcIixcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwic2NoZW1lXCI6XCJodHRwXCJ9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93ZWIvanMvZm9zX2pzX3JvdXRlcy5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL3dlYi9qcy9mb3NfanNfcm91dGVzLmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==