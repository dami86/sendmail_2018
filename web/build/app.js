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
                    if (request.readyState < 4) {
                        document.getElementById('alerts').innerHTML = _successMessage(message.loading, 'notice');
                    }
                    // 4 = Response from server has been completely loaded.
                    else if (request.readyState === 4) {
                            // 200 - 299 = successful
                            if (request.status == 200 && request.status < 300) {
                                document.getElementById('alerts').innerHTML = _successMessage(message.success, 'success');
                            } else form.insertAdjacentHTML('beforeend', document.getElementById('alerts').innerHTML = _successMessage(message.failure, 'danger'));
                        }
                };
            });
        }
    };

    function _successMessage(message, type) {
        return '<div class="alert alert-' + type + ' fade show" role="alert"><b>Success! </b>' + message + '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a></div>';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDE3Y2ViNTEwM2NiNGRhZDEwNDQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAuY3NzPzc3Y2EiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvanMvZm9zX2pzX3JvdXRlcy5qc29uIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJyb3V0ZXMiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJTZW5kRW1haWwiLCJBamF4Rm9ybSIsInVybCIsImRvY3VtZW50IiwiZm9ybXMiLCJ3aW5kb3ciLCJGb3JtRGF0YSIsIm1lc3NhZ2UiLCJPYmplY3QiLCJsb2FkaW5nIiwic3VjY2VzcyIsImZhaWx1cmUiLCJmb3JtIiwic3RhdHVzTWVzc2FnZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwiZ2VuZXJhdGUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiYXBwZW5kQ2hpbGQiLCJmb3JtRGF0YSIsInNlbmQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJfc3VjY2Vzc01lc3NhZ2UiLCJzdGF0dXMiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0eXBlIiwic2VuZEVtYWlsIiwiZSIsInQiLCJuIiwibW9kdWxlIiwiZXhwb3J0cyIsImZvcyIsIlJvdXRlciIsIlR5cGVFcnJvciIsImFzc2lnbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm8iLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJpIiwiY29udGV4dF8iLCJiYXNlX3VybCIsInByZWZpeCIsImhvc3QiLCJzY2hlbWUiLCJzZXRSb3V0ZXMiLCJ2YWx1ZSIsInNldEJhc2VVcmwiLCJzZXRQcmVmaXgiLCJzZXRIb3N0Iiwic2V0U2NoZW1lIiwicm91dGVzXyIsImZyZWV6ZSIsInIiLCJzIiwiUmVnRXhwIiwiQXJyYXkiLCJmb3JFYWNoIiwidGVzdCIsImJ1aWxkUXVlcnlQYXJhbXMiLCJFcnJvciIsImdldFJvdXRlIiwidSIsImYiLCJhIiwidG9rZW5zIiwiZGVmYXVsdHMiLCJjIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsImhvc3R0b2tlbnMiLCJyZXF1aXJlbWVudHMiLCJnZXRTY2hlbWUiLCJfc2NoZW1lIiwiZ2V0SG9zdCIsInNjaGVtZXMiLCJrZXlzIiwibCIsImgiLCJwdXNoIiwiam9pbiIsImdldEluc3RhbmNlIiwiUm91dGUiLCJDb250ZXh0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3REEseUM7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQSxtQkFBT0EsQ0FBQyw0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SWtELENBQUosSUFBU2IsQ0FBVDtBQUFXLGlCQUFLSyxnQkFBTCxDQUFzQlEsQ0FBdEIsRUFBd0JiLEVBQUVhLENBQUYsQ0FBeEIsRUFBNkJXLENBQTdCO0FBQVgsV0FBMkNoQixJQUFFQSxJQUFFLEdBQUYsR0FBTWUsRUFBRUcsSUFBRixDQUFPLEdBQVAsRUFBWVgsT0FBWixDQUFvQixNQUFwQixFQUEyQixHQUEzQixDQUFSO0FBQXdDLGdCQUFPUCxDQUFQO0FBQVMsT0FBM2hELEVBQXR4QyxDQUFKLEVBQXd6RixDQUFDLEVBQUN4QixLQUFJLGFBQUwsRUFBbUJRLE9BQU0saUJBQVU7QUFBQyxlQUFPTyxDQUFQO0FBQVMsT0FBN0MsRUFBRCxFQUFnRCxFQUFDZixLQUFJLFNBQUwsRUFBZVEsT0FBTSxlQUFTOUIsQ0FBVCxFQUFXO0FBQUMsWUFBSUMsSUFBRXNCLEVBQUUwQyxXQUFGLEVBQU4sQ0FBc0JoRSxFQUFFdEMsY0FBRixDQUFpQnFDLENBQWpCO0FBQW9CLE9BQTNFLEVBQWhELENBQXh6RixHQUF1N0Z1QixDQUE5N0Y7QUFBZzhGLEdBQXRqRyxFQUEzbUIsQ0FBb3FIQSxFQUFFMkMsS0FBRixFQUFRM0MsRUFBRTRDLE9BQVYsQ0FBa0IsSUFBSTlCLElBQUUsSUFBSWQsQ0FBSixFQUFOLENBQVksT0FBTSxFQUFDakIsUUFBT2lCLENBQVIsRUFBVTdELFNBQVEyRSxDQUFsQixFQUFOO0FBQTJCLENBQTNoSSxDQUFELEM7Ozs7Ozs7Ozs7OztBQ0FBLGtCQUFrQix5QkFBeUIsZ0NBQWdDLGlIQUFpSCxvQkFBb0IsNEdBQTRHLGdEIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2FwcC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMTdjZWI1MTAzY2I0ZGFkMTA0NCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvY3NzL2FwcC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vYXNzZXRzL2Nzcy9hcHAuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL2Nzcy9hcHAuY3NzJyk7XHJcbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uL3dlYi9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5cclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxudmFyIFNlbmRFbWFpbCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHJcbiAgICB0aGlzLkFqYXhGb3JtID0gZnVuY3Rpb24gKCB1cmwpIHtcclxuXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmZvcm1zWzBdICYmIHdpbmRvdy5Gb3JtRGF0YSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UubG9hZGluZyA9ICdMb2FkaW5nLi4uJztcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzID0gJ0VtYWlsIFNlbnQhJztcclxuICAgICAgICAgICAgbWVzc2FnZS5mYWlsdXJlID0gJ1dob29wcyEgVGhlcmUgd2FzIGEgcHJvYmxlbSBzZW5kaW5nIHlvdXIgbWVzc2FnZS4nO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZvcm0gPSBkb2N1bWVudC5mb3Jtc1swXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdGF0dXNNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHN0YXR1c01lc3NhZ2UuY2xhc3NOYW1lID0gJ3N0YXR1cyc7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgdXAgdGhlIEFKQVggcmVxdWVzdFxyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9wZW4oJ1BPU1QnLCBSb3V0aW5nLmdlbmVyYXRlKHVybCwgdHJ1ZSksIHRydWUpO1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ2FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBMaXN0ZW4gZm9yIHRoZSBmb3JtIGJlaW5nIHN1Ym1pdHRlZFxyXG4gICAgICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdGF0dXNNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgRm9ybURhdGEgb2JqZWN0IHBhc3NpbmcgaW4gdGhlIGZvcm0ncyBrZXkgdmFsdWUgcGFpcnMgKHRoYXQgd2FzIGVhc3khKVxyXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNlbmQgdGhlIGZvcm1EYXRhXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmQoZm9ybURhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFdhdGNoIGZvciBjaGFuZ2VzIHRvIHJlcXVlc3QucmVhZHlTdGF0ZSBhbmQgdXBkYXRlIHRoZSBzdGF0dXNNZXNzYWdlIGFjY29yZGluZ2x5XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyA8NCA9ICB3YWl0aW5nIG9uIHJlc3BvbnNlIGZyb20gc2VydmVyXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA8IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsZXJ0cycpLmlubmVySFRNTCA9X3N1Y2Nlc3NNZXNzYWdlKG1lc3NhZ2UubG9hZGluZywgJ25vdGljZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyA0ID0gUmVzcG9uc2UgZnJvbSBzZXJ2ZXIgaGFzIGJlZW4gY29tcGxldGVseSBsb2FkZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIwMCAtIDI5OSA9IHN1Y2Nlc3NmdWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsZXJ0cycpLmlubmVySFRNTCA9X3N1Y2Nlc3NNZXNzYWdlKG1lc3NhZ2Uuc3VjY2VzcywgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsZXJ0cycpLmlubmVySFRNTCA9X3N1Y2Nlc3NNZXNzYWdlKG1lc3NhZ2UuZmFpbHVyZSwgJ2RhbmdlcicpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBfc3VjY2Vzc01lc3NhZ2UobWVzc2FnZSwgdHlwZSkge1xyXG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LScrdHlwZSsnIGZhZGUgc2hvd1wiIHJvbGU9XCJhbGVydFwiPjxiPlN1Y2Nlc3MhIDwvYj4nICsgbWVzc2FnZSArICc8YSBocmVmPVwiI1wiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJjbG9zZVwiPiZ0aW1lczs8L2E+PC9kaXY+JztcclxuICAgIH07XHJcblxyXG59XHJcblxyXG52YXIgc2VuZEVtYWlsID0gbmV3IFNlbmRFbWFpbCgpO1xyXG5zZW5kRW1haWwuQWpheEZvcm0oJ2VtYWlsX3NlbmRlcl9zZW5kX2VtYWlsX2FqYXgnICk7XHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvYXBwLmpzIiwiIWZ1bmN0aW9uKGUsdCl7dmFyIG49dCgpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sbi5Sb3V0aW5nKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1uLlJvdXRpbmc6KGUuUm91dGluZz1uLlJvdXRpbmcsZS5mb3M9e1JvdXRlcjpuLlJvdXRlcn0pfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9dmFyIHQ9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYoZVtvXT1uW29dKX1yZXR1cm4gZX0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLmtleSxvKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixvKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxvJiZlKHQsbyksdH19KCksaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGkodCxuKXtlKHRoaXMsaSksdGhpcy5jb250ZXh0Xz10fHx7YmFzZV91cmw6XCJcIixwcmVmaXg6XCJcIixob3N0OlwiXCIsc2NoZW1lOlwiXCJ9LHRoaXMuc2V0Um91dGVzKG58fHt9KX1yZXR1cm4gbyhpLFt7a2V5Olwic2V0Um91dGluZ0RhdGFcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnNldEJhc2VVcmwoZS5iYXNlX3VybCksdGhpcy5zZXRSb3V0ZXMoZS5yb3V0ZXMpLFwicHJlZml4XCJpbiBlJiZ0aGlzLnNldFByZWZpeChlLnByZWZpeCksdGhpcy5zZXRIb3N0KGUuaG9zdCksdGhpcy5zZXRTY2hlbWUoZS5zY2hlbWUpfX0se2tleTpcInNldFJvdXRlc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMucm91dGVzXz1PYmplY3QuZnJlZXplKGUpfX0se2tleTpcImdldFJvdXRlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucm91dGVzX319LHtrZXk6XCJzZXRCYXNlVXJsXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5iYXNlX3VybD1lfX0se2tleTpcImdldEJhc2VVcmxcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmJhc2VfdXJsfX0se2tleTpcInNldFByZWZpeFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ucHJlZml4PWV9fSx7a2V5Olwic2V0U2NoZW1lXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5zY2hlbWU9ZX19LHtrZXk6XCJnZXRTY2hlbWVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLnNjaGVtZX19LHtrZXk6XCJzZXRIb3N0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5ob3N0PWV9fSx7a2V5OlwiZ2V0SG9zdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uaG9zdH19LHtrZXk6XCJidWlsZFF1ZXJ5UGFyYW1zXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG8pe3ZhciBpPXRoaXMscj12b2lkIDAscz1uZXcgUmVnRXhwKC9cXFtcXF0kLyk7aWYodCBpbnN0YW5jZW9mIEFycmF5KXQuZm9yRWFjaChmdW5jdGlvbih0LHIpe3MudGVzdChlKT9vKGUsdCk6aS5idWlsZFF1ZXJ5UGFyYW1zKGUrXCJbXCIrKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpuKHQpKT9yOlwiXCIpK1wiXVwiLHQsbyl9KTtlbHNlIGlmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpuKHQpKSlmb3IociBpbiB0KXRoaXMuYnVpbGRRdWVyeVBhcmFtcyhlK1wiW1wiK3IrXCJdXCIsdFtyXSxvKTtlbHNlIG8oZSx0KX19LHtrZXk6XCJnZXRSb3V0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuY29udGV4dF8ucHJlZml4K2U7aWYodCBpbiB0aGlzLnJvdXRlc18pZT10O2Vsc2UgaWYoIShlIGluIHRoaXMucm91dGVzXykpdGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK2UrJ1wiIGRvZXMgbm90IGV4aXN0LicpO3JldHVybiB0aGlzLnJvdXRlc19bZV19fSx7a2V5OlwiZ2VuZXJhdGVcIix2YWx1ZTpmdW5jdGlvbihlLG4sbyl7dmFyIGk9dGhpcy5nZXRSb3V0ZShlKSxyPW58fHt9LHM9dCh7fSxyKSx1PVwiXCIsZj0hMCxhPVwiXCI7aWYoaS50b2tlbnMuZm9yRWFjaChmdW5jdGlvbih0KXtpZihcInRleHRcIj09PXRbMF0pcmV0dXJuIHU9dFsxXSt1LHZvaWQoZj0hMSk7e2lmKFwidmFyaWFibGVcIiE9PXRbMF0pdGhyb3cgbmV3IEVycm9yKCdUaGUgdG9rZW4gdHlwZSBcIicrdFswXSsnXCIgaXMgbm90IHN1cHBvcnRlZC4nKTt2YXIgbj1pLmRlZmF1bHRzJiZ0WzNdaW4gaS5kZWZhdWx0cztpZighMT09PWZ8fCFufHx0WzNdaW4gciYmclt0WzNdXSE9aS5kZWZhdWx0c1t0WzNdXSl7dmFyIG89dm9pZCAwO2lmKHRbM11pbiByKW89clt0WzNdXSxkZWxldGUgc1t0WzNdXTtlbHNle2lmKCFuKXtpZihmKXJldHVybjt0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrZSsnXCIgcmVxdWlyZXMgdGhlIHBhcmFtZXRlciBcIicrdFszXSsnXCIuJyl9bz1pLmRlZmF1bHRzW3RbM11dfXZhciBhPSEwPT09b3x8ITE9PT1vfHxcIlwiPT09bztpZighYXx8IWYpe3ZhciBjPWVuY29kZVVSSUNvbXBvbmVudChvKS5yZXBsYWNlKC8lMkYvZyxcIi9cIik7XCJudWxsXCI9PT1jJiZudWxsPT09byYmKGM9XCJcIiksdT10WzFdK2MrdX1mPSExfWVsc2UgbiYmdFszXWluIHMmJmRlbGV0ZSBzW3RbM11dfX0pLFwiXCI9PT11JiYodT1cIi9cIiksaS5ob3N0dG9rZW5zLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9dm9pZCAwO3JldHVyblwidGV4dFwiPT09ZVswXT92b2lkKGE9ZVsxXSthKTp2b2lkKFwidmFyaWFibGVcIj09PWVbMF0mJihlWzNdaW4gcj8odD1yW2VbM11dLGRlbGV0ZSBzW2VbM11dKTppLmRlZmF1bHRzJiZlWzNdaW4gaS5kZWZhdWx0cyYmKHQ9aS5kZWZhdWx0c1tlWzNdXSksYT1lWzFdK3QrYSkpfSksdT10aGlzLmNvbnRleHRfLmJhc2VfdXJsK3UsaS5yZXF1aXJlbWVudHMmJlwiX3NjaGVtZVwiaW4gaS5yZXF1aXJlbWVudHMmJnRoaXMuZ2V0U2NoZW1lKCkhPWkucmVxdWlyZW1lbnRzLl9zY2hlbWU/dT1pLnJlcXVpcmVtZW50cy5fc2NoZW1lK1wiOi8vXCIrKGF8fHRoaXMuZ2V0SG9zdCgpKSt1OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnNjaGVtZXMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnNjaGVtZXNbMF0mJnRoaXMuZ2V0U2NoZW1lKCkhPT1pLnNjaGVtZXNbMF0/dT1pLnNjaGVtZXNbMF0rXCI6Ly9cIisoYXx8dGhpcy5nZXRIb3N0KCkpK3U6YSYmdGhpcy5nZXRIb3N0KCkhPT1hP3U9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK2ErdTpvPT09ITAmJih1PXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIit0aGlzLmdldEhvc3QoKSt1KSxPYmplY3Qua2V5cyhzKS5sZW5ndGg+MCl7dmFyIGM9dm9pZCAwLGw9W10saD1mdW5jdGlvbihlLHQpe3Q9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90KCk6dCx0PW51bGw9PT10P1wiXCI6dCxsLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0KSl9O2ZvcihjIGluIHMpdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKGMsc1tjXSxoKTt1PXUrXCI/XCIrbC5qb2luKFwiJlwiKS5yZXBsYWNlKC8lMjAvZyxcIitcIil9cmV0dXJuIHV9fV0sW3trZXk6XCJnZXRJbnN0YW5jZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHJ9fSx7a2V5Olwic2V0RGF0YVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWkuZ2V0SW5zdGFuY2UoKTt0LnNldFJvdXRpbmdEYXRhKGUpfX1dKSxpfSgpO2kuUm91dGUsaS5Db250ZXh0O3ZhciByPW5ldyBpO3JldHVybntSb3V0ZXI6aSxSb3V0aW5nOnJ9fSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcImJhc2VfdXJsXCI6XCIuXCIsXCJyb3V0ZXNcIjp7XCJlbWFpbF9zZW5kZXJfc2VuZF9lbWFpbF9hamF4XCI6e1widG9rZW5zXCI6W1tcInRleHRcIixcIi9zZW5kX2VtYWlsX2FqYXhcIl1dLFwiZGVmYXVsdHNcIjpbXSxcInJlcXVpcmVtZW50c1wiOltdLFwiaG9zdHRva2Vuc1wiOltdLFwibWV0aG9kc1wiOltdLFwic2NoZW1lc1wiOltdfSxcImVtYWlsX3Rlc3RfYWpheFwiOntcInRva2Vuc1wiOltbXCJ0ZXh0XCIsXCIvdGVzdF9hamF4XCJdXSxcImRlZmF1bHRzXCI6W10sXCJyZXF1aXJlbWVudHNcIjpbXSxcImhvc3R0b2tlbnNcIjpbXSxcIm1ldGhvZHNcIjpbXSxcInNjaGVtZXNcIjpbXX19LFwicHJlZml4XCI6XCJcIixcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwic2NoZW1lXCI6XCJodHRwXCJ9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93ZWIvanMvZm9zX2pzX3JvdXRlcy5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL3dlYi9qcy9mb3NfanNfcm91dGVzLmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==