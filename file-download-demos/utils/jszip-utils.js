!(function (e) {
  "object" == typeof exports
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : "undefined" != typeof window
    ? (window.JSZipUtils = e())
    : "undefined" != typeof global
    ? (global.JSZipUtils = e())
    : "undefined" != typeof self && (self.JSZipUtils = e());
})(function () {
  return (function o(i, f, u) {
    function s(n, e) {
      if (!f[n]) {
        if (!i[n]) {
          var t = "function" == typeof require && require;
          if (!e && t) return t(n, !0);
          if (a) return a(n, !0);
          throw new Error("Cannot find module '" + n + "'");
        }
        var r = (f[n] = { exports: {} });
        i[n][0].call(
          r.exports,
          function (e) {
            var t = i[n][1][e];
            return s(t || e);
          },
          r,
          r.exports,
          o,
          i,
          f,
          u
        );
      }
      return f[n].exports;
    }
    for (
      var a = "function" == typeof require && require, e = 0;
      e < u.length;
      e++
    )
      s(u[e]);
    return s;
  })(
    {
      1: [
        function (e, t, n) {
          "use strict";
          var u = {};
          function r() {
            try {
              return new window.XMLHttpRequest();
            } catch (e) {}
          }
          u._getBinaryFromXHR = function (e) {
            return e.response || e.responseText;
          };
          var s =
            "undefined" != typeof window && window.ActiveXObject
              ? function () {
                  return (
                    r() ||
                    (function () {
                      try {
                        return new window.ActiveXObject("Microsoft.XMLHTTP");
                      } catch (e) {}
                    })()
                  );
                }
              : r;
          (u.getBinaryContent = function (t, n) {
            var e, r, o, i;
            "function" == typeof (n = n || {})
              ? ((i = n), (n = {}))
              : "function" == typeof n.callback && (i = n.callback),
              i || "undefined" == typeof Promise
                ? ((r = function (e) {
                    i(null, e);
                  }),
                  (o = function (e) {
                    i(e, null);
                  }))
                : (e = new Promise(function (e, t) {
                    (r = e), (o = t);
                  }));
            try {
              var f = s();
              f.open("GET", t, !0),
                "responseType" in f && (f.responseType = "arraybuffer"),
                f.overrideMimeType &&
                  f.overrideMimeType("text/plain; charset=x-user-defined"),
                (f.onreadystatechange = function (e) {
                  if (4 === f.readyState)
                    if (200 === f.status || 0 === f.status)
                      try {
                        r(u._getBinaryFromXHR(f));
                      } catch (e) {
                        o(new Error(e));
                      }
                    else
                      o(
                        new Error(
                          "Ajax error for " +
                            t +
                            " : " +
                            this.status +
                            " " +
                            this.statusText
                        )
                      );
                }),
                n.progress &&
                  (f.onprogress = function (e) {
                    n.progress({
                      path: t,
                      originalEvent: e,
                      percent: (e.loaded / e.total) * 100,
                      loaded: e.loaded,
                      total: e.total,
                    });
                  }),
                f.send();
            } catch (e) {
              o(new Error(e), null);
            }
            return e;
          }),
            (t.exports = u);
        },
        {},
      ],
    },
    {},
    [1]
  )(1);
});
