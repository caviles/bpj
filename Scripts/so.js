﻿window.SE = function (e) {
    "use strict";

    function t(e, t) {
        var r = e[t];
        if (!r) throw t + " required";
        return r
    }
    
        if (!e) throw g;
        var r = t(e, "clientId"),
            o = t(e, "channelUrl"),
            n = t(e, "complete"),
			z = t(e, "scope"),
            d = window.location.protocol,
            w = d.substring(0, d.length - 1),
            u = (d + "//" + window.location.host).toLowerCase();
        if (c = t(e, "key"), i = r, a = o, 0 !== a.toLowerCase().indexOf(u)) throw "channelUrl must be under the current domain";
        s = h + "/oauth/dialog?redirect_uri=" + l(h + "/oauth/login_success?scope=read_inbox,no_expiry,write_access,private_info&assisted=" + r + "&protocol=" + w + "&proxy=" + l(a)), setTimeout(function () {
            n({
                "version": "18381"
            })
        })
    }

    function o(t, r, o, n) {
        for (var i, s = "sec" + u++, a = m, d = function (a) {
                return window[s] = e, i.parentNode.removeChild(i), a.error_id ? (n({
                    "errorName": a.error_name,
                    "errorMessage": a.error_message
        }), void 0) : (o({
                    "accessToken": t,
                    "expirationDate": r,
                    "networkUsers": a.items
        }), void 0)
        }; window[s] || w.getElementById(s) ;) s = "sec" + u++;
        window[s] = d, a += "?pagesize=100&access_token=" + l(t) + "&key=" + l(c) + "&callback=" + l(s), i = w.createElement("script"), i.type = "text/javascript", i.src = a, i.id = s, w.getElementsByTagName("head")[0].appendChild(i)
    }

    function n(e) {
        if (!e) throw g;
        var r, n, a, c, w, m = t(e, "success"),
            f = e.scope,
            v = "",
            k = u++,
            x = s + "&client_id=" + i + "&state=" + k,
            y = e.error;
        if (f && "[object Array]" !== Object.prototype.toString.call(f)) throw "scope must be an Array";
        f && (v = f.join(" ")), v.length > 0 && (x += "&scope=" + l(v)), c = function (t) {
            if (t.origin === h && t.source === a) {
                var n, i, s, d, w = t.data.substring(1).split("&"),
                    l = {};
                for (s = 0; s < w.length; s++) d = w[s].split("="), l[d[0]] = d[1];
                if (+l.state === k) return r && window.removeEventListener("message", c), a.close(), (i = l.access_token) ? (n = l.expires, n && (n = new Date((new Date).getTime() + 1e3 * n)), e.networkUsers ? o(i, n, m, y) : m({
                    "accessToken": i,
                    "expirationDate": n
                }), void 0) : (y && y({
                    "errorName": l.error,
                    "errorMessage": l.error_description
                }), void 0)
            }
        }, !window.postMessage || !window.addEventListener || (/MSIE (\d+\.\d+)/.exec(d) || [])[1] <= 9 ? (n = function () {
            if (a) {
                if (a.closed) return clearInterval(w), void 0;
                var e = a.frames["se-api-frame"];
                e && (clearInterval(w), c({
                    "origin": h,
                    "source": a,
                    "data": e.location.hash
                }))
            }
        }, w = setInterval(n, 50)) : (r = !0, window.addEventListener("message", c)), a = window.open(x, p, "width=660,height=480")
    }
    var i, s, a, c, d = window.navigator.userAgent,
        w = window.document,
        l = window.encodeURIComponent,
        u = 1,
        p = "sew" + u++,
        h = "https://stackexchange.com",
        m = "https://api.stackexchange.com/2.0/me/associated",
        g = "must pass an object";
    return {
        "authenticate": n,
        "init": r
    }
}();