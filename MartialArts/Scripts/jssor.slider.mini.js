﻿(function(h, g, b, i, c, d, j) { /*! Jssor */
    new(function() {});
    var e = h.$JssorEasing$ = {
        $EaseSwing: function(a) { return-b.cos(a * b.PI) / 2 + .5 }, $EaseLinear: function(a) { return a }, $EaseInQuad: function(a) { return a * a }, $EaseOutQuad: function(a) { return-a * (a - 2) }, $EaseInOutQuad: function(a) { return(a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1) }, $EaseInCubic: function(a) { return a * a * a }, $EaseOutCubic: function(a) { return(a -= 1) * a * a + 1 }, $EaseInOutCubic: function(a) { return(a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2) }, $EaseInQuart: function(a) { return a * a * a * a }, $EaseOutQuart: function(a) { return-((a -= 1) * a * a * a - 1) }, $EaseInOutQuart: function(a) { return(a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2) }, $EaseInQuint: function(a) { return a * a * a * a * a }, $EaseOutQuint: function(a) { return(a -= 1) * a * a * a * a + 1 }, $EaseInOutQuint: function(a) { return(a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2) }, $EaseInSine: function(a) { return 1 - b.cos(a * b.PI / 2) }, $EaseOutSine: function(a) { return b.sin(a * b.PI / 2) }, $EaseInOutSine: function(a) { return-1 / 2 * (b.cos(b.PI * a) - 1) }, $EaseInExpo: function(a) { return a == 0 ? 0 : b.pow(2, 10 * (a - 1)) }, $EaseOutExpo: function(a) { return a == 1 ? 1 : -b.pow(2, -10 * a) + 1 }, $EaseInOutExpo: function(a) { return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * b.pow(2, 10 * (a - 1)) : 1 / 2 * (-b.pow(2, -10 * --a) + 2) }, $EaseInCirc: function(a) { return-(b.sqrt(1 - a * a) - 1) }, $EaseOutCirc: function(a) { return b.sqrt(1 - (a -= 1) * a) }, $EaseInOutCirc: function(a) { return(a *= 2) < 1 ? -1 / 2 * (b.sqrt(1 - a * a) - 1) : 1 / 2 * (b.sqrt(1 - (a -= 2) * a) + 1) },
        $EaseInElastic: function(a) {
            if (!a || a == 1)return a;
            var c = .3, d = .075;
            return-(b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c));
        },
        $EaseOutElastic: function(a) {
            if (!a || a == 1)return a;
            var c = .3, d = .075;
            return b.pow(2, -10 * a) * b.sin((a - d) * 2 * b.PI / c) + 1;
        },
        $EaseInOutElastic: function(a) {
            if (!a || a == 1)return a;
            var c = .45, d = .1125;
            return(a *= 2) < 1 ? -.5 * b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) : b.pow(2, -10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) * .5 + 1;
        },
        $EaseInBack: function(a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b);
        },
        $EaseOutBack: function(a) {
            var b = 1.70158;
            return(a -= 1) * a * ((b + 1) * a + b) + 1;
        },
        $EaseInOutBack: function(a) {
            var b = 1.70158;
            return(a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2);
        },
        $EaseInBounce: function(a) { return 1 - e.$EaseOutBounce(1 - a) },
        $EaseOutBounce: function(a) { return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375 },
        $EaseInOutBounce: function(a) { return a < 1 / 2 ? e.$EaseInBounce(a * 2) * .5 : e.$EaseOutBounce(a * 2 - 1) * .5 + .5 },
        $EaseGoBack: function(a) { return 1 - b.abs(2 - 1) },
        $EaseInWave: function(a) { return 1 - b.cos(a * b.PI * 2) },
        $EaseOutWave: function(a) { return b.sin(a * b.PI * 2) },
        $EaseOutJump: function(a) { return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a) },
        $EaseInJump: function(a) { return(a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a }
    };
    var a = new function() {
        var f = this, wb = /\S+/g, T = 1, eb = 2, jb = 3, ib = 4, nb = 5, E, s = 0, l = 0, p = 0, ab = 0, C = 0, D = navigator, sb = D.appName, k = D.userAgent, B;

        function t() {
            if (!E) {
                E = { Yb: "mousedown", pc: "mousemove", yb: "mouseup" };
                var a;
                if ((D.pointerEnabled || (a = D.msPointerEnabled)) && k.match(/iemobile/i))E = { Yb: a ? "MSPointerDown" : "pointerdown", pc: a ? "MSPointerMove" : "pointermove", yb: a ? "MSPointerUp" : "pointerup", hb: a ? "MSPointerCancel" : "pointercancel", sd: a ? "msTouchAction" : "touchAction", od: c };
                else if ("ontouchstart" in h || "createTouch" in g)E = { Yb: "touchstart", pc: "touchmove", yb: "touchend", hb: "touchcancel", od: c, je: c };
            }
            return E;
        }

        function w(i) {
            if (!s) {
                s = -1;
                if (sb == "Microsoft Internet Explorer" && !!h.attachEvent && !!h.ActiveXObject) {
                    var e = k.indexOf("MSIE");
                    s = T;
                    p = n(k.substring(e + 5, k.indexOf(";", e))); /*@cc_on ab=@_jscript_version@*/;
                    l = g.documentMode || p;
                } else if (sb == "Netscape" && !!h.addEventListener) {
                    var d = k.indexOf("Firefox"), b = k.indexOf("Safari"), f = k.indexOf("Chrome"), c = k.indexOf("AppleWebKit");
                    if (d >= 0) {
                        s = eb;
                        l = n(k.substring(d + 8));
                    } else if (b >= 0) {
                        var j = k.substring(0, b).lastIndexOf("/");
                        s = f >= 0 ? ib : jb;
                        l = n(k.substring(j + 1, b));
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(k);
                        if (a) {
                            s = T;
                            l = p = n(a[1]);
                        }
                    }
                    if (c >= 0)C = n(k.substring(c + 12));
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);
                    if (a) {
                        s = nb;
                        l = n(a[2]);
                    }
                }
            }
            return i == s;
        }

        function q() { return w(T) }

        function O() { return q() && (l < 6 || g.compatMode == "BackCompat") }

        function xb() { return w(eb) }

        function hb() { return w(jb) }

        function gb() { return w(ib) }

        function mb() { return w(nb) }

        function bb() { return hb() && C > 534 && C < 535 }

        function M() { return q() && l < 9 }

        function u(a) {
            if (!B) {
                m(["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], function(b) {
                    if (a.style[b] != j) {
                        B = b;
                        return c;
                    }
                });
                B = B || "transform";
            }
            return B;
        }

        function qb(a) { return Object.prototype.toString.call(a) }

        var K;

        function m(a, d) {
            if (qb(a) == "[object Array]") {
                for (var b = 0; b < a.length; b++)if (d(a[b], b, a))return c;
            } else for (var e in a)if (d(a[e], e, a))return c;
        }

        function Bb() {
            if (!K) {
                K = {};
                m(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) { K["[object " + a + "]"] = a.toLowerCase() });
            }
            return K;
        }

        function A(a) { return a == i ? String(a) : Bb()[qb(a)] || "object" }

        function z(a, b) { return{ x: a, y: b } }

        function ub(b, a) { setTimeout(b, a || 0) }

        function I(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            m(d, function(c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index), e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));
                    a = d + e;
                }
            });
            a = c + (a.indexOf(" ") != 0 ? " " : "") + a;
            return a;
        }

        function db(b, a) { if (l < 9)b.style.filter = a }

        function yb(b, a, c) {
            if (ab < 9) {
                var e = b.style.filter, h = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g), g = a ? "progid:DXImageTransform.Microsoft.Matrix(M11=" + a[0][0] + ", M12=" + a[0][1] + ", M21=" + a[1][0] + ", M22=" + a[1][1] + ", SizingMethod='auto expand')" : "", d = I(e, [h], g);
                db(b, d);
                f.ld(b, c.y);
                f.rd(b, c.x);
            }
        }

        f.ie = t;
        f.qd = q;
        f.ke = xb;
        f.fe = hb;
        f.ee = gb;
        f.Dc = mb;
        f.P = M;
        f.Ac = function() { return l };
        f.yc = function() {
            w();
            return C;
        };
        f.$Delay = ub;

        function W(a) { a.constructor === W.caller && a.vd && a.vd.apply(a, W.caller.arguments) }

        f.vd = W;
        f.eb = function(a) {
            if (f.wd(a))a = g.getElementById(a);
            return a;
        };

        function r(a) { return a || h.event }

        f.Zb = function(a) {
            a = r(a);
            return a.target || a.srcElement || g;
        };
        f.yd = function(a) {
            a = r(a);
            return{ x: a.pageX || a.clientX || 0, y: a.pageY || a.clientY || 0 };
        };

        function F(c, d, a) {
            if (a != j)c.style[d] = a;
            else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && h.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, i);
                    b && (a = b.getPropertyValue(d) || b[d]);
                }
                return a;
            }
        }

        function X(b, c, a, d) {
            if (a != j) {
                d && (a += "px");
                F(b, c, a);
            } else return n(F(b, c));
        }

        function o(d, a) {
            var b = a & 2, c = a ? X : F;
            return function(e, a) { return c(e, d, a, b) };
        }

        function zb(b) {
            if (q() && p < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? n(a[1]) / 100 : 1;
            } else return n(b.style.opacity || "1");
        }

        function Ab(c, a, f) {
            if (q() && p < 9) {
                var h = c.style.filter || "", i = new RegExp(/[\s]*alpha\([^\)]*\)/g), e = b.round(100 * a), d = "";
                if (e < 100 || f)d = "alpha(opacity=" + e + ") ";
                var g = I(h, [i], d);
                db(c, g);
            } else c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100;
        }

        function Z(e, a) {
            var d = a.$Rotate || 0, c = a.$Scale == j ? 1 : a.$Scale;
            if (M()) {
                var l = f.te(d / 180 * b.PI, c, c);
                yb(e, !d && c == 1 ? i : l, f.oe(l, a.$OriginalWidth, a.$OriginalHeight));
            } else {
                var g = u(e);
                if (g) {
                    var k = "rotate(" + d % 360 + "deg) scale(" + c + ")";
                    if (gb() && C > 535 && "ontouchstart" in h)k += " perspective(2000px)";
                    e.style[g] = k;
                }
            }
        }

        f.ne = function(b, a) {
            if (bb())ub(f.J(i, Z, b, a));
            else Z(b, a);
        };
        f.qe = function(b, c) {
            var a = u(b);
            if (a)b.style[a + "Origin"] = c;
        };
        f.pe = function(a, c) {
            if (q() && p < 9 || p < 10 && O())a.style.zoom = c == 1 ? "" : c;
            else {
                var b = u(a);
                if (b) {
                    var f = "scale(" + c + ")", e = a.style[b], g = new RegExp(/[\s]*scale\(.*?\)/g), d = I(e, [g], f);
                    a.style[b] = d;
                }
            }
        };
        f.Ne = function(a) { if (!a.style[u(a)] || a.style[u(a)] == "none")a.style[u(a)] = "perspective(2000px)" };
        f.lf = function(a) { a.style[u(a)] = "none" };
        f.Mb = function(b, a) {
            return function(c) {
                c = r(c);
                var e = c.type, d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !f.kf(a, d)) && b(c);
            };
        };
        f.e = function(a, c, d, b) {
            a = f.eb(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b);
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture();
            }
        };
        f.V = function(a, c, d, b) {
            a = f.eb(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b);
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture();
            }
        };
        f.tb = function(a) {
            a = r(a);
            a.preventDefault && a.preventDefault();
            a.cancel = c;
            a.returnValue = d;
        };
        f.mf = function(a) {
            a = r(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = c;
        };
        f.J = function(d, c) {
            var a = [].slice.call(arguments, 2),
                b = function() {
                    var b = a.concat([].slice.call(arguments, 0));
                    return c.apply(d, b);
                };
            return b;
        };
        f.jf = function(a, b) {
            if (b == j)return a.textContent || a.innerText;
            var c = g.createTextNode(b);
            f.cc(a);
            a.appendChild(c);
        };
        f.K = function(d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b;
        };

        function pb(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (S(a, b) == c)return a;
                    if (!e) {
                        var d = pb(a, c, e, b);
                        if (d)return d;
                    }
                }
        }

        f.v = pb;

        function Q(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    S(a, b) == d && c.push(a);
                    if (!f) {
                        var e = Q(a, d, f, b);
                        if (e.length)c = c.concat(e);
                    }
                }
            return c;
        }

        function kb(a, c, d) {
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (a.tagName == c)return a;
                    if (!d) {
                        var b = kb(a, c, d);
                        if (b)return b;
                    }
                }
        }

        f.of = kb;

        function cb(a, c, e) {
            var b = [];
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    (!c || a.tagName == c) && b.push(a);
                    if (!e) {
                        var d = cb(a, c, e);
                        if (d.length)b = b.concat(d);
                    }
                }
            return b;
        }

        f.qf = cb;
        f.pf = function(b, a) { return b.getElementsByTagName(a) };

        function L(c) {
            for (var b = 1; b < arguments.length; b++) {
                var a = arguments[b];
                if (a)for (var d in a)c[d] = a[d];
            }
            return c;
        }

        f.k = L;

        function rb(b, d) {
            var c = {};
            for (var a in b)if (b[a] !== d[a])c[a] = b[a];
            return c;
        }

        f.Mc = function(a) { return A(a) == "function" };
        f.dc = function(a) { return A(a) == "array" };
        f.wd = function(a) { return A(a) == "string" };
        f.Pc = function(a) { return!isNaN(n(a)) && isFinite(a) };
        f.c = m;

        function P(a) { return g.createElement(a) }

        f.ab = function() { return P("DIV", g) };
        f.Ve = function() { return P("SPAN", g) };
        f.ic = function() {};

        function U(b, c, a) {
            if (a == j)return b.getAttribute(c);
            b.setAttribute(c, a);
        }

        function S(a, b) { return U(a, b) || U(a, "data-" + b) }

        f.Jc = U;
        f.u = S;

        function x(b, a) {
            if (a == j)return b.className;
            b.className = a;
        }

        f.Hc = x;

        function tb(b) {
            var a = {};
            m(b, function(b) { a[b] = b });
            return a;
        }

        function vb(b, a) { return b.match(a || wb) }

        function N(b, a) { return tb(vb(b || "", a)) }

        f.Pe = vb;

        function Y(b, c) {
            var a = "";
            m(c, function(c) {
                a && (a += b);
                a += c;
            });
            return a;
        }

        function H(a, c, b) { x(a, Y(" ", L(rb(N(x(a)), N(c)), N(b)))) }

        f.Ze = function(a) { return a.parentNode };
        f.M = function(a) { f.T(a, "none") };
        f.z = function(a, b) { f.T(a, b ? "none" : "") };
        f.Wc = function(b, a) { b.removeAttribute(a) };
        f.cf = function() { return q() && l < 10 };
        f.df = function(d, c) {
            if (c)d.style.clip = "rect(" + b.round(c.$Top) + "px " + b.round(c.$Right) + "px " + b.round(c.$Bottom) + "px " + b.round(c.$Left) + "px)";
            else {
                var g = d.style.cssText, f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)], e = I(g, f, "");
                a.Sb(d, e);
            }
        };
        f.L = function() { return+new Date };
        f.D = function(b, a) { b.appendChild(a) };
        f.Nb = function(b, a, c) { (c || a.parentNode).insertBefore(b, a) };
        f.Cb = function(a, b) { (b || a.parentNode).removeChild(a) };
        f.Re = function(a, b) { m(a, function(a) { f.Cb(a, b) }) };
        f.cc = function(a) { f.Re(f.K(a, c), a) };
        f.Oe = function(b, a) { return parseInt(b, a || 10) };
        var n = parseFloat;
        f.hc = n;
        f.kf = function(b, a) {
            var c = g.body;
            while (a && b !== a && c !== a)
                try {
                    a = a.parentNode;
                } catch (e) {
                    return d;
                }
            return b === a;
        };

        function V(d, c, b) {
            var a = d.cloneNode(!c);
            !b && f.Wc(a, "id");
            return a;
        }

        f.S = V;
        f.ub = function(e, g) {
            var a = new Image;

            function b(e, c) {
                f.V(a, "load", b);
                f.V(a, "abort", d);
                f.V(a, "error", d);
                g && g(a, c);
            }

            function d(a) { b(a, c) }

            if (mb() && l < 11.6 || !e)b(!e);
            else {
                f.e(a, "load", b);
                f.e(a, "abort", d);
                f.e(a, "error", d);
                a.src = e;
            }
        };
        f.hf = function(d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src)a = b;
                !c && e && e(a);
            }

            m(d, function(a) { f.ub(a.src, b) });
            b();
        };
        f.Gc = function(b, g, i, h) {
            if (h)b = V(b);
            var c = Q(b, g);
            if (!c.length)c = a.pf(b, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f], e = V(i);
                x(e, x(d));
                a.Sb(e, d.style.cssText);
                a.Nb(e, d);
                a.Cb(d);
            }
            return b;
        };

        function Db(b) {
            var p = this, n = "", r = ["av", "pv", "ds", "dn"], d = [], o, k = 0, h = 0, e = 0;

            function i() { H(b, o, d[e || k || h & 2 || h]) }

            function c() {
                k = 0;
                i();
                f.V(g, t().yb, c);
                t().hb && f.V(g, t().hb, c);
            }

            function q(a) {
                if (e)f.tb(a);
                else {
                    k = 4;
                    i();
                    f.e(g, t().yb, c);
                    t().hb && f.e(g, t().hb, c);
                }
            }

            p.Oc = function(a) {
                if (a != j) {
                    h = a & 2 || a & 1;
                    i();
                } else return h;
            };
            p.$Enable = function(a) {
                if (a == j)return!e;
                e = a ? 0 : 3;
                i();
            };
            b = f.eb(b);
            var l = a.Pe(x(b));
            if (l)n = l.shift();
            m(r, function(a) { d.push(n + a) });
            o = Y(" ", d);
            d.unshift("");
            a.e(b, t().Yb, q);
        }

        f.Lb = function(a) { return new Db(a) };
        f.xb = F;
        f.Z = o("overflow");
        f.B = o("top", 2);
        f.A = o("left", 2);
        f.l = o("width", 2);
        f.m = o("height", 2);
        f.rd = o("marginLeft", 2);
        f.ld = o("marginTop", 2);
        f.C = o("position");
        f.T = o("display");
        f.F = o("zIndex", 1);
        f.zb = function(b, a, c) {
            if (a != j)Ab(b, a, c);
            else return zb(b);
        };
        f.Sb = function(a, b) {
            if (b != j)a.style.cssText = b;
            else return a.style.cssText;
        };
        var R = { $Opacity: f.zb, $Top: f.B, $Left: f.A, mb: f.l, ob: f.m, Db: f.C, Fg: f.T, $ZIndex: f.F }, v;

        function J() {
            if (!v)v = L({ Dg: f.ld, Eg: f.rd, $Clip: f.df, fc: f.ne }, R);
            return v;
        }

        function ob() {
            J();
            v.fc = v.fc;
            return v;
        }

        f.Sd = J;
        f.Rd = ob;
        f.Ud = function(c, b) {
            J();
            var a = {};
            m(b, function(d, b) { if (R[b])a[b] = R[b](c) });
            return a;
        };
        f.H = function(c, b) {
            var a = J();
            m(b, function(d, b) { a[b] && a[b](c, d) });
        };
        f.Ad = function(b, a) {
            ob();
            f.H(b, a);
        };
        var G = new function() {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
                    for (var k = f[c] = [], b = 0; b < h; b++) {
                        for (var e = 0, a = 0; a < j; a++)e += d[c][a] * g[a][b];
                        k[b] = e;
                    }
                return f;
            }

            a.Vb = function(d, c) {
                var a = b(d, [[c.x], [c.y]]);
                return z(a[0][0], a[1][0]);
            };
        };
        f.te = function(d, a, c) {
            var e = b.cos(d), f = b.sin(d);
            return[[e * a, -f * c], [f * a, e * c]];
        };
        f.oe = function(d, c, a) {
            var e = G.Vb(d, z(-c / 2, -a / 2)), f = G.Vb(d, z(c / 2, -a / 2)), g = G.Vb(d, z(c / 2, a / 2)), h = G.Vb(d, z(-c / 2, a / 2));
            return z(b.min(e.x, f.x, g.x, h.x) + c / 2, b.min(e.y, f.y, g.y, h.y) + a / 2);
        };
        f.gd = function(l, g, t, r, u, w, j) {
            var c = g;
            if (l) {
                c = {};
                for (var f in g) {
                    var x = w[f] || 1, s = u[f] || [0, 1], d = (t - s[0]) / s[1];
                    d = b.min(b.max(d, 0), 1);
                    d = d * x;
                    var p = b.floor(d);
                    if (d != p)d -= p;
                    var v = r[f] || r.rb || e.$EaseSwing, q = v(d), h, y = l[f];
                    g[f];
                    var m = g[f];
                    if (a.Pc(m))h = y + m * q;
                    else {
                        h = a.k({ qb: {} }, l[f]);
                        a.c(m.qb, function(c, b) {
                            var a = c * q;
                            h.qb[b] = a;
                            h[b] += a;
                        });
                    }
                    c[f] = h;
                }
                if (g.$Zoom || g.$Rotate)c.fc = { $Rotate: c.$Rotate || 0, $Scale: c.$Zoom, $OriginalWidth: j.$OriginalWidth, $OriginalHeight: j.$OriginalHeight };
            }
            if (g.$Clip && j.$Move) {
                var k = c.$Clip.qb, o = (k.$Top || 0) + (k.$Bottom || 0), n = (k.$Left || 0) + (k.$Right || 0);
                c.$Left = (c.$Left || 0) + n;
                c.$Top = (c.$Top || 0) + o;
                c.$Clip.$Left -= n;
                c.$Clip.$Right -= n;
                c.$Clip.$Top -= o;
                c.$Clip.$Bottom -= o;
            }
            if (c.$Clip && a.cf() && !c.$Clip.$Top && !c.$Clip.$Left && c.$Clip.$Right == j.$OriginalWidth && c.$Clip.$Bottom == j.$OriginalHeight)c.$Clip = i;
            return c;
        };
    };

    function l() {
        var b = this, d = [];

        function i(a, b) { d.push({ bc: a, ac: b }) }

        function g(b, c) { a.c(d, function(a, e) { a.bc == b && a.ac === c && d.splice(e, 1) }) }

        b.$On = b.addEventListener = i;
        b.$Off = b.removeEventListener = g;
        b.j = function(b) {
            var c = [].slice.call(arguments, 1);
            a.c(d, function(a) { a.bc == b && a.ac.apply(h, c) });
        };
    }

    function k(n, z, j, R, P, K) {
        n = n || 0;
        var f = this, r, o, p, x, A = 0, I, J, H, C, E = 0, l = 0, u = 0, D, m = n, k, g, q, y = [], B;

        function M(a) {
            k += a;
            g += a;
            m += a;
            l += a;
            u += a;
            E = a;
        }

        function Q(a, b) {
            var c = a - k + n * b;
            M(c);
            return g;
        }

        function w(h, n) {
            var d = h;
            if (q && (d >= g || d <= k))d = ((d - k) % q + q) % q + k;
            if (!D || x || n || l != d) {
                var e = b.min(d, g);
                e = b.max(e, k);
                if (!D || x || n || e != u) {
                    if (K) {
                        var i = (e - m) / (z || 1);
                        if (j.$Reverse)i = 1 - i;
                        var o = a.gd(P, K, i, I, H, J, j);
                        a.c(o, function(b, a) { B[a] && B[a](R, b) });
                    }
                    f.zc(u - m, e - m);
                }
                u = e;
                a.c(y, function(b, c) {
                    var a = h < l ? y[y.length - c - 1] : b;
                    a.I(h - E, n);
                });
                var r = l, p = h;
                l = d;
                D = c;
                f.Qb(r, p);
            }
        }

        function F(a, c, d) {
            c && a.Pb(g, 1);
            !d && (g = b.max(g, a.db() + E));
            y.push(a);
        }

        var s = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.msRequestAnimationFrame;
        if (a.fe() && a.Ac() < 7)s = i;
        s = s || function(b) { a.$Delay(b, j.$Interval) };

        function L() {
            if (r) {
                var d = a.L(), e = b.min(d - A, j.md), c = l + e * p;
                A = d;
                if (c * p >= o * p)c = o;
                w(c);
                if (!x && c * p >= o * p)N(C);
                else s(L);
            }
        }

        function v(d, e, h) {
            if (!r) {
                r = c;
                x = h;
                C = e;
                d = b.max(d, k);
                d = b.min(d, g);
                o = d;
                p = o < l ? -1 : 1;
                f.pd();
                A = a.L();
                s(L);
            }
        }

        function N(a) {
            if (r) {
                x = r = C = d;
                f.kd();
                a && a();
            }
        }

        f.$Play = function(a, b, c) { v(a ? l + a : g, b, c) };
        f.jd = v;
        f.X = N;
        f.Pd = function(a) { v(a) };
        f.Q = function() { return l };
        f.zd = function() { return o };
        f.Bb = function() { return u };
        f.I = w;
        f.rc = function() { w(k, c) };
        f.$Move = function(a) { w(l + a) };
        f.$IsPlaying = function() { return r };
        f.ce = function(a) { q = a };
        f.Pb = Q;
        f.$Shift = M;
        f.Y = function(a) { F(a, 0) };
        f.sc = function(a) { F(a, 1) };
        f.db = function() { return g };
        f.Qb = f.pd = f.kd = f.zc = a.ic;
        f.tc = a.L();
        j = a.k({ $Interval: 16, md: 50 }, j);
        q = j.Ic;
        B = a.k({}, a.Sd(), j.wc);
        k = m = n;
        g = n + z;
        J = j.$Round || {};
        H = j.$During || {};
        I = a.k({ rb: a.Mc(j.$Easing) && j.$Easing || e.$EaseSwing }, j.$Easing);
    }

    var n = h.$JssorSlideshowFormations$ = new function() {
        var h = this, d = 0, a = 1, f = 2, e = 3, s = 1, r = 2, t = 4, q = 8, w = 256, x = 512, v = 1024, u = 2048, j = u + s, i = u + r, o = x + s, m = x + r, n = w + t, k = w + q, l = v + t, p = v + q;

        function y(a) { return(a & r) == r }

        function z(a) { return(a & t) == t }

        function g(b, a, c) {
            c.push(a);
            b[a] = b[a] || [];
            b[a].push(c);
        }

        h.$FormationStraight = function(f) {
            for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.Ib, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++)
                for (a = 0; a < d; a++) {
                    switch (s) {
                    case j:
                        c = h - (a * e + (q - b));
                        break;
                    case l:
                        c = h - (b * d + (p - a));
                        break;
                    case o:
                        c = h - (a * e + b);
                    case n:
                        c = h - (b * d + a);
                        break;
                    case i:
                        c = a * e + b;
                        break;
                    case k:
                        c = b * d + (p - a);
                        break;
                    case m:
                        c = a * e + (q - b);
                        break;
                    default:
                        c = b * d + a;
                    }
                    g(r, c, [b, a]);
                }
            return r;
        };
        h.$FormationSwirl = function(q) {
            var x = q.$Cols, y = q.$Rows, B = q.$Assembly, w = q.Ib, A = [], z = [], u = 0, b = 0, h = 0, r = x - 1, s = y - 1, t, p, v = 0;
            switch (B) {
            case j:
                b = r;
                h = 0;
                p = [f, a, e, d];
                break;
            case l:
                b = 0;
                h = s;
                p = [d, e, a, f];
                break;
            case o:
                b = r;
                h = s;
                p = [e, a, f, d];
                break;
            case n:
                b = r;
                h = s;
                p = [a, e, d, f];
                break;
            case i:
                b = 0;
                h = 0;
                p = [f, d, e, a];
                break;
            case k:
                b = r;
                h = 0;
                p = [a, f, d, e];
                break;
            case m:
                b = 0;
                h = s;
                p = [e, d, f, a];
                break;
            default:
                b = 0;
                h = 0;
                p = [d, f, a, e];
            }
            u = 0;
            while (u < w) {
                t = h + "," + b;
                if (b >= 0 && b < x && h >= 0 && h < y && !z[t]) {
                    z[t] = c;
                    g(A, u++, [h, b]);
                } else
                    switch (p[v++ % p.length]) {
                    case d:
                        b--;
                        break;
                    case f:
                        h--;
                        break;
                    case a:
                        b++;
                        break;
                    case e:
                        h++;
                    }
                switch (p[v % p.length]) {
                case d:
                    b++;
                    break;
                case f:
                    h++;
                    break;
                case a:
                    b--;
                    break;
                case e:
                    h--;
                }
            }
            return A;
        };
        h.$FormationZigZag = function(p) {
            var w = p.$Cols, x = p.$Rows, z = p.$Assembly, v = p.Ib, t = [], u = 0, b = 0, c = 0, q = w - 1, r = x - 1, y, h, s = 0;
            switch (z) {
            case j:
                b = q;
                c = 0;
                h = [f, a, e, a];
                break;
            case l:
                b = 0;
                c = r;
                h = [d, e, a, e];
                break;
            case o:
                b = q;
                c = r;
                h = [e, a, f, a];
                break;
            case n:
                b = q;
                c = r;
                h = [a, e, d, e];
                break;
            case i:
                b = 0;
                c = 0;
                h = [f, d, e, d];
                break;
            case k:
                b = q;
                c = 0;
                h = [a, f, d, f];
                break;
            case m:
                b = 0;
                c = r;
                h = [e, d, f, d];
                break;
            default:
                b = 0;
                c = 0;
                h = [d, f, a, f];
            }
            u = 0;
            while (u < v) {
                y = c + "," + b;
                if (b >= 0 && b < w && c >= 0 && c < x && typeof t[y] == "undefined") {
                    g(t, u++, [c, b]);
                    switch (h[s % h.length]) {
                    case d:
                        b++;
                        break;
                    case f:
                        c++;
                        break;
                    case a:
                        b--;
                        break;
                    case e:
                        c--;
                    }
                } else {
                    switch (h[s++ % h.length]) {
                    case d:
                        b--;
                        break;
                    case f:
                        c--;
                        break;
                    case a:
                        b++;
                        break;
                    case e:
                        c++;
                    }
                    switch (h[s++ % h.length]) {
                    case d:
                        b++;
                        break;
                    case f:
                        c++;
                        break;
                    case a:
                        b--;
                        break;
                    case e:
                        c--;
                    }
                }
            }
            return t;
        };
        h.$FormationStraightStairs = function(q) {
            var u = q.$Cols, v = q.$Rows, e = q.$Assembly, t = q.Ib, r = [], s = 0, c = 0, d = 0, f = u - 1, h = v - 1, x = t - 1;
            switch (e) {
            case j:
            case m:
            case o:
            case i:
                var a = 0, b = 0;
                break;
            case k:
            case l:
            case n:
            case p:
                var a = f, b = 0;
                break;
            default:
                e = p;
                var a = f, b = 0;
            }
            c = a;
            d = b;
            while (s < t) {
                if (z(e) || y(e))g(r, x - s++, [d, c]);
                else g(r, s++, [d, c]);
                switch (e) {
                case j:
                case m:
                    c--;
                    d++;
                    break;
                case o:
                case i:
                    c++;
                    d--;
                    break;
                case k:
                case l:
                    c--;
                    d--;
                    break;
                case p:
                case n:
                default:
                    c++;
                    d++;
                }
                if (c < 0 || d < 0 || c > f || d > h) {
                    switch (e) {
                    case j:
                    case m:
                        a++;
                        break;
                    case k:
                    case l:
                    case o:
                    case i:
                        b++;
                        break;
                    case p:
                    case n:
                    default:
                        a--;
                    }
                    if (a < 0 || b < 0 || a > f || b > h) {
                        switch (e) {
                        case j:
                        case m:
                            a = f;
                            b++;
                            break;
                        case o:
                        case i:
                            b = h;
                            a++;
                            break;
                        case k:
                        case l:
                            b = h;
                            a--;
                            break;
                        case p:
                        case n:
                        default:
                            a = 0;
                            b++;
                        }
                        if (b > h)b = h;
                        else if (b < 0)b = 0;
                        else if (a > f)a = f;
                        else if (a < 0)a = 0;
                    }
                    d = b;
                    c = a;
                }
            }
            return r;
        };
        h.$FormationSquare = function(i) {
            var a = i.$Cols || 1, c = i.$Rows || 1, j = [], d, e, f, h, k;
            f = a < c ? (c - a) / 2 : 0;
            h = a > c ? (a - c) / 2 : 0;
            k = b.round(b.max(a / 2, c / 2)) + 1;
            for (d = 0; d < a; d++)for (e = 0; e < c; e++)g(j, k - b.min(d + 1 + f, e + 1 + h, a - d + f, c - e + h), [e, d]);
            return j;
        };
        h.$FormationRectangle = function(f) {
            var d = f.$Cols || 1, e = f.$Rows || 1, h = [], a, c, i;
            i = b.round(b.min(d / 2, e / 2)) + 1;
            for (a = 0; a < d; a++)for (c = 0; c < e; c++)g(h, i - b.min(a + 1, c + 1, d - a, e - c), [c, a]);
            return h;
        };
        h.$FormationRandom = function(d) {
            for (var e = [], a, c = 0; c < d.$Rows; c++)for (a = 0; a < d.$Cols; a++)g(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
            return e;
        };
        h.$FormationCircle = function(d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++)for (a = 0; a < f; a++)g(h, b.round(b.sqrt(b.pow(c - i, 2) + b.pow(a - j, 2))), [a, c]);
            return h;
        };
        h.$FormationCross = function(d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++)for (a = 0; a < f; a++)g(h, b.round(b.min(b.abs(c - i), b.abs(a - j))), [a, c]);
            return h;
        };
        h.$FormationRectangleCross = function(f) {
            for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = b.max(d, e) + 1, c = 0; c < h; c++)for (a = 0; a < i; a++)g(j, b.round(k - b.max(d - b.abs(c - d), e - b.abs(a - e))) - 1, [a, c]);
            return j;
        };
    };
    h.$JssorSlideshowRunner$ = function(o, s, q, t, y) {
        var g = this, u, h, f, x = 0, w = t.$TransitionsOrder, r, j = 8;

        function m(h, g) {
            var f = { $Interval: g, $Duration: 1, $Delay: 0, $Cols: 1, $Rows: 1, $Opacity: 0, $Zoom: 0, $Clip: 0, $Move: d, $SlideOut: d, $Reverse: d, $Formation: n.$FormationRandom, $Assembly: 1032, $ChessMode: { $Column: 0, $Row: 0 }, $Easing: e.$EaseSwing, $Round: {}, Rb: [], $During: {} };
            a.k(f, h);
            f.Ib = f.$Cols * f.$Rows;
            if (a.Mc(f.$Easing))f.$Easing = { rb: f.$Easing };
            f.Jd = b.ceil(f.$Duration / f.$Interval);
            f.Bd = function(b, a) {
                b /= f.$Cols;
                a /= f.$Rows;
                var e = b + "x" + a;
                if (!f.Rb[e]) {
                    f.Rb[e] = { mb: b, ob: a };
                    for (var c = 0; c < f.$Cols; c++)for (var d = 0; d < f.$Rows; d++)f.Rb[e][d + "," + c] = { $Top: d * a, $Right: c * b + b, $Bottom: d * a + a, $Left: c * b };
                }
                return f.Rb[e];
            };
            if (f.$Brother) {
                f.$Brother = m(f.$Brother, g);
                f.$SlideOut = c;
            }
            return f;
        }

        function p(B, i, e, w, n, l) {
            var z = this, t, u = {}, j = {}, m = [], g, f, r, p = e.$ChessMode.$Column || 0, q = e.$ChessMode.$Row || 0, h = e.Bd(n, l), o = C(e), D = o.length - 1, s = e.$Duration + e.$Delay * D, x = w + s, k = e.$SlideOut, y;
            x += 50;

            function C(a) {
                var b = a.$Formation(a);
                return a.$Reverse ? b.reverse() : b;
            }

            z.Uc = x;
            z.Xb = function(c) {
                c -= w;
                var d = c < s;
                if (d || y) {
                    y = d;
                    if (!k)c = s - c;
                    var f = b.ceil(c / e.$Interval);
                    a.c(j, function(c, e) {
                        var d = b.max(f, c.Xd);
                        d = b.min(d, c.length - 1);
                        if (c.Vc != d) {
                            if (!c.Vc && !k)a.z(m[e]);
                            else d == c.Yd && k && a.M(m[e]);
                            c.Vc = d;
                            a.Ad(m[e], c[d]);
                        }
                    });
                }
            };

            function v(b) {
                a.lf(b);
                var c = a.K(b);
                a.c(c, function(a) { v(a) });
            }

            i = a.S(i);
            v(i);
            if (a.P()) {
                var E = !i["no-image"], A = a.qf(i);
                a.c(A, function(b) { (E || b["jssor-slider"]) && a.zb(b, a.zb(b), c) });
            }
            a.c(o, function(i, m) {
                a.c(i, function(G) {
                    var K = G[0], J = G[1], v = K + "," + J, o = d, s = d, x = d;
                    if (p && J % 2) {
                        if (p & 3)o = !o;
                        if (p & 12)s = !s;
                        if (p & 16)x = !x;
                    }
                    if (q && K % 2) {
                        if (q & 3)o = !o;
                        if (q & 12)s = !s;
                        if (q & 16)x = !x;
                    }
                    e.$Top = e.$Top || e.$Clip & 4;
                    e.$Bottom = e.$Bottom || e.$Clip & 8;
                    e.$Left = e.$Left || e.$Clip & 1;
                    e.$Right = e.$Right || e.$Clip & 2;
                    var C = s ? e.$Bottom : e.$Top, z = s ? e.$Top : e.$Bottom, B = o ? e.$Right : e.$Left, A = o ? e.$Left : e.$Right;
                    e.$Clip = C || z || B || A;
                    r = {};
                    f = { $Top: 0, $Left: 0, $Opacity: 1, mb: n, ob: l };
                    g = a.k({}, f);
                    t = a.k({}, h[v]);
                    if (e.$Opacity)f.$Opacity = 2 - e.$Opacity;
                    if (e.$ZIndex) {
                        f.$ZIndex = e.$ZIndex;
                        g.$ZIndex = 0;
                    }
                    var I = e.$Cols * e.$Rows > 1 || e.$Clip;
                    if (e.$Zoom || e.$Rotate) {
                        var H = c;
                        if (a.P())
                            if (e.$Cols * e.$Rows > 1)H = d;
                            else I = d;
                        if (H) {
                            f.$Zoom = e.$Zoom ? e.$Zoom - 1 : 1;
                            g.$Zoom = 1;
                            if (a.P() || a.Dc())f.$Zoom = b.min(f.$Zoom, 2);
                            var N = e.$Rotate;
                            f.$Rotate = N * 360 * (x ? -1 : 1);
                            g.$Rotate = 0;
                        }
                    }
                    if (I) {
                        if (e.$Clip) {
                            var w = e.$ScaleClip || 1, i = t.qb = {};
                            if (C && z) {
                                i.$Top = h.ob / 2 * w;
                                i.$Bottom = -i.$Top;
                            } else if (C)i.$Bottom = -h.ob * w;
                            else if (z)i.$Top = h.ob * w;
                            if (B && A) {
                                i.$Left = h.mb / 2 * w;
                                i.$Right = -i.$Left;
                            } else if (B)i.$Right = -h.mb * w;
                            else if (A)i.$Left = h.mb * w;
                        }
                        r.$Clip = t;
                        g.$Clip = h[v];
                    }
                    var L = o ? 1 : -1, M = s ? 1 : -1;
                    if (e.x)f.$Left += n * e.x * L;
                    if (e.y)f.$Top += l * e.y * M;
                    a.c(f, function(b, c) { if (a.Pc(b))if (b != g[c])r[c] = b - g[c] });
                    u[v] = k ? g : f;
                    var D = e.Jd, y = b.round(m * e.$Delay / e.$Interval);
                    j[v] = new Array(y);
                    j[v].Xd = y;
                    j[v].Yd = y + D - 1;
                    for (var F = 0; F <= D; F++) {
                        var E = a.gd(g, r, F / D, e.$Easing, e.$During, e.$Round, { $Move: e.$Move, $OriginalWidth: n, $OriginalHeight: l });
                        E.$ZIndex = E.$ZIndex || 1;
                        j[v].push(E);
                    }
                });
            });
            o.reverse();
            a.c(o, function(b) {
                a.c(b, function(c) {
                    var f = c[0], e = c[1], d = f + "," + e, b = i;
                    if (e || f)b = a.S(i);
                    a.H(b, u[d]);
                    a.Z(b, "hidden");
                    a.C(b, "absolute");
                    B.Zd(b);
                    m[d] = b;
                    a.z(b, !k);
                });
            });
        }

        function v() {
            var a = this, b = 0;
            k.call(a, 0, u);
            a.Qb = function(c, a) {
                if (a - b > j) {
                    b = a;
                    f && f.Xb(a);
                    h && h.Xb(a);
                }
            };
            a.U = r;
        }

        g.Md = function() {
            var a = 0, c = t.$Transitions, d = c.length;
            if (w)a = x++ % d;
            else a = b.floor(b.random() * d);
            c[a] && (c[a].bb = a);
            return c[a];
        };
        g.Td = function(w, x, i, k, a) {
            r = a;
            a = m(a, j);
            var e = k.ud, d = i.ud;
            e["no-image"] = !k.Tb;
            d["no-image"] = !i.Tb;
            var l = e, n = d, v = a, c = a.$Brother || m({}, j);
            if (!a.$SlideOut) {
                l = d;
                n = e;
            }
            var t = c.$Shift || 0;
            h = new p(o, n, c, b.max(t - c.$Interval, 0), s, q);
            f = new p(o, l, v, b.max(c.$Interval - t, 0), s, q);
            h.Xb(0);
            f.Xb(0);
            u = b.max(h.Uc, f.Uc);
            g.bb = w;
        };
        g.pb = function() {
            o.pb();
            h = i;
            f = i;
        };
        g.Od = function() {
            var a = i;
            if (f)a = new v;
            return a;
        };
        if (a.P() || a.Dc() || y && a.yc() < 537)j = 16;
        l.call(g);
        k.call(g, -1e7, 1e7);
    };
    var f = h.$JssorSlider$ = function(q, ic) {
        var n = this;

        function Hc() {
            var a = this;
            k.call(a, -1e8, 2e8);
            a.Hd = function() {
                var c = a.Bb(), d = b.floor(c), f = t(d), e = c - b.floor(c);
                return{ bb: f, Dd: d, Db: e };
            };
            a.Qb = function(d, a) {
                var e = b.floor(a);
                if (e != a && a > d)e++;
                Ub(e, c);
                n.j(f.$EVT_POSITION_CHANGE, t(a), t(d), a, d);
            };
        }

        function Gc() {
            var b = this;
            k.call(b, 0, 0, { Ic: s });
            a.c(C, function(a) {
                D & 1 && a.ce(s);
                b.sc(a);
                a.$Shift(kb / cc);
            });
        }

        function Fc() {
            var a = this, b = Tb.$Elmt;
            k.call(a, -1, 2, { $Easing: e.$EaseLinear, wc: { Db: ac }, Ic: s }, b, { Db: 1 }, { Db: -2 });
            a.Jb = b;
        }

        function sc(m, l) {
            var a = this, e, g, h, j, b;
            k.call(a, -1e8, 2e8, { md: 100 });
            a.pd = function() {
                T = c;
                X = i;
                n.j(f.$EVT_SWIPE_START, t(y.Q()), y.Q());
            };
            a.kd = function() {
                T = d;
                j = d;
                var a = y.Hd();
                n.j(f.$EVT_SWIPE_END, t(y.Q()), y.Q());
                !a.Db && Kc(a.Dd, r);
            };
            a.Qb = function(f, d) {
                var a;
                if (j)a = b;
                else {
                    a = g;
                    if (h) {
                        var c = d / h;
                        a = p.$SlideEasing(c) * (g - e) + e;
                    }
                }
                y.I(a);
            };
            a.Ub = function(b, d, c, f) {
                e = b;
                g = d;
                h = c;
                y.I(b);
                a.I(0);
                a.jd(c, f);
            };
            a.Cd = function(d) {
                j = c;
                b = d;
                a.$Play(d, i, c);
            };
            a.Nd = function(a) { b = a };
            y = new Hc;
            y.Y(m);
            y.Y(l);
        }

        function tc() {
            var c = this, b = Zb();
            a.F(b, 0);
            a.xb(b, "pointerEvents", "none");
            c.$Elmt = b;
            c.Zd = function(c) {
                a.D(b, c);
                a.z(b);
            };
            c.pb = function() {
                a.M(b);
                a.cc(b);
            };
        }

        function Ec(o, h) {
            var e = this, q, x, I, y, j, B = [], G, v, S, H, N, F, g, w, m;
            k.call(e, -u, u + 1, {});

            function E(a) {
                x && x.Ob();
                q && q.Ob();
                R(o, a);
                F = c;
                q = new O.$Class(o, O, 1);
                x = new O.$Class(o, O);
                x.rc();
                q.rc();
            }

            function W() { q.tc < O.tc && E() }

            function J(o, r, m) {
                if (!H) {
                    H = c;
                    if (j && m) {
                        var g = m.width, b = m.height, l = g, k = b;
                        if (g && b && p.$FillMode) {
                            if (p.$FillMode & 3 && (!(p.$FillMode & 4) || g > L || b > K)) {
                                var i = d, q = L / K * b / g;
                                if (p.$FillMode & 1)i = q > 1;
                                else if (p.$FillMode & 2)i = q < 1;
                                l = i ? g * K / b : L;
                                k = i ? K : b * L / g;
                            }
                            a.l(j, l);
                            a.m(j, k);
                            a.B(j, (K - k) / 2);
                            a.A(j, (L - l) / 2);
                        }
                        a.C(j, "absolute");
                        n.j(f.$EVT_LOAD_END, h);
                    }
                }
                a.M(r);
                o && o(e);
            }

            function T(b, c, d, f) {
                if (f == X && r == h && U)
                    if (!Jc) {
                        var a = t(b);
                        A.Td(a, h, c, e, d);
                        c.af();
                        db.Pb(a, 1);
                        db.I(a);
                        z.Ub(b, b, 0);
                    }
            }

            function Z(b) {
                if (b == X && r == h) {
                    if (!g) {
                        var a = i;
                        if (A)
                            if (A.bb == h)a = A.Od();
                            else A.pb();
                        W();
                        g = new Bc(o, h, a, e.Xe(), e.We());
                        g.Rc(m);
                    }
                    !g.$IsPlaying() && g.gc();
                }
            }

            function Q(d, c, f) {
                if (d == h) {
                    if (d != c)C[c] && C[c].Ye();
                    else!f && g && g.bf();
                    m && m.$Enable();
                    var j = X = a.L();
                    e.ub(a.J(i, Z, j));
                } else {
                    var l = b.abs(h - d), k = u + p.$LazyLoading - 1;
                    (!N || l <= k) && e.ub();
                }
            }

            function bb() {
                if (r == h && g) {
                    g.X();
                    m && m.$Quit();
                    m && m.$Disable();
                    g.Nc();
                }
            }

            function cb() { r == h && g && g.X() }

            function Y(a) { !P && n.j(f.$EVT_CLICK, h, a) }

            function M() {
                m = w.pInstance;
                g && g.Rc(m);
            }

            e.ub = function(d, b) {
                b = b || y;
                if (B.length && !H) {
                    a.z(b);
                    if (!S) {
                        S = c;
                        n.j(f.$EVT_LOAD_START, h);
                        a.c(B, function(b) {
                            if (!b.src) {
                                b.src = a.u(b, "src2");
                                a.T(b, b["display-origin"]);
                            }
                        });
                    }
                    a.hf(B, j, a.J(i, J, d, b));
                } else J(d, b);
            };
            e.sf = function() {
                if (A) {
                    var b = A.Md(s);
                    if (b) {
                        var e = X = a.L(), c = h + Yb, d = C[t(c)];
                        return d.ub(a.J(i, T, c, d, b, e), y);
                    }
                }
                eb(r + p.$AutoPlaySteps * Yb);
            };
            e.ec = function() { Q(h, h, c) };
            e.Ye = function() {
                m && m.$Quit();
                m && m.$Disable();
                e.td();
                g && g.ef();
                g = i;
                E();
            };
            e.af = function() { a.M(o) };
            e.td = function() { a.z(o) };
            e.ff = function() { m && m.$Enable() };

            function R(b, f, e) {
                if (a.Jc(b, "jssor-slider"))return;
                e = e || 0;
                if (!F) {
                    if (b.tagName == "IMG") {
                        B.push(b);
                        if (!b.src) {
                            N = c;
                            b["display-origin"] = a.T(b);
                            a.M(b);
                        }
                    }
                    a.P() && a.F(b, (a.F(b) || 0) + 1);
                    if (p.$HWA && a.yc())(!ab || a.yc() < 534 || !hb && !a.ee()) && a.Ne(b);
                }
                var g = a.K(b);
                a.c(g, function(g) {
                    var i = g.tagName, k = a.u(g, "u");
                    if (k == "player" && !w) {
                        w = g;
                        if (w.pInstance)M();
                        else a.e(w, "dataavailable", M);
                    }
                    if (k == "caption") {
                        if (!a.qd() && !f) {
                            var h = a.S(g, d, c);
                            a.Nb(h, g, b);
                            a.Cb(g, b);
                            g = h;
                            f = c;
                        }
                    } else if (!F && !e && !j) {
                        if (i == "A") {
                            if (a.u(g, "u") == "image")j = a.of(g, "IMG");
                            else j = a.v(g, "image", c);
                            if (j) {
                                G = g;
                                a.H(G, V);
                                v = a.S(G, c);
                                a.T(v, "block");
                                a.H(v, V);
                                a.zb(v, 0);
                                a.xb(v, "backgroundColor", "#000");
                            }
                        } else if (i == "IMG" && a.u(g, "u") == "image")j = g;
                        if (j) {
                            j.border = 0;
                            a.H(j, V);
                        }
                    }
                    R(g, f, e + 1);
                });
            }

            e.zc = function(c, b) {
                var a = u - b;
                ac(I, a);
            };
            e.Xe = function() { return q };
            e.We = function() { return x };
            e.bb = h;
            l.call(e);
            var D = a.v(o, "thumb", c);
            if (D) {
                e.nf = a.S(D);
                a.Wc(D, "id");
                a.M(D);
            }
            a.z(o);
            y = a.S(gb);
            a.F(y, 1e3);
            a.e(o, "click", Y);
            E(c);
            e.Tb = j;
            e.fd = v;
            e.ud = o;
            e.Jb = I = o;
            a.D(I, y);
            n.$On(203, Q);
            n.$On(28, cb);
            n.$On(24, bb);
        }

        function Bc(F, i, q, v, u) {
            var b = this, l = 0, x = 0, m, h, e, g, j, s, w, t, o = C[i];
            k.call(b, 0, 0);

            function y() {
                a.cc(Q);
                gc && j && o.fd && a.D(Q, o.fd);
                a.z(Q, !j && o.Tb);
            }

            function z() {
                if (s) {
                    s = d;
                    n.j(f.$EVT_ROLLBACK_END, i, e, l, h, e, g);
                    b.I(h);
                }
                b.gc();
            }

            function D(a) {
                t = a;
                b.X();
                b.gc();
            }

            b.gc = function() {
                var a = b.Bb();
                if (!B && !T && !t && r == i) {
                    if (!a) {
                        if (m && !j) {
                            j = c;
                            b.Nc(c);
                            n.j(f.$EVT_SLIDESHOW_START, i, l, x, m, g);
                        }
                        y();
                    }
                    var d, p = f.$EVT_STATE_CHANGE;
                    if (a != g)
                        if (a == e)d = g;
                        else if (a == h)d = e;
                        else if (!a)d = h;
                        else if (a > e) {
                            s = c;
                            d = e;
                            p = f.$EVT_ROLLBACK_START;
                        } else d = b.zd();
                    n.j(p, i, a, l, h, e, g);
                    var k = U && (!J || H);
                    if (a == g)(e != g && !(J & 12) || k) && o.sf();
                    else(k || a != e) && b.jd(d, z);
                }
            };
            b.bf = function() { e == g && e == b.Bb() && b.I(h) };
            b.ef = function() {
                A && A.bb == i && A.pb();
                var a = b.Bb();
                a < g && n.j(f.$EVT_STATE_CHANGE, i, -a - 1, l, h, e, g);
            };
            b.Nc = function(b) { q && a.Z(mb, b && q.U.$Outside ? "" : "hidden") };
            b.zc = function(b, a) {
                if (j && a >= m) {
                    j = d;
                    y();
                    o.td();
                    A.pb();
                    n.j(f.$EVT_SLIDESHOW_END, i, l, x, m, g);
                }
                n.j(f.$EVT_PROGRESS_CHANGE, i, a, l, h, e, g);
            };
            b.Rc = function(a) {
                if (a && !w) {
                    w = a;
                    a.$On($JssorPlayer$.Vd, D);
                }
            };
            q && b.sc(q);
            m = b.db();
            b.db();
            b.sc(v);
            h = v.db();
            e = h + (a.hc(a.u(F, "idle")) || p.$AutoPlayInterval);
            u.$Shift(e);
            b.Y(u);
            g = b.db();
        }

        function ac(g, f) {
            var e = w > 0 ? w : lb, c = Bb * f * (e & 1), d = Cb * f * (e >> 1 & 1);
            c = b.round(c);
            d = b.round(d);
            a.A(g, c);
            a.B(g, d);
        }

        function yc(b) {
            var c = a.Zb(b);
            !N && !a.u(c, "nodrag") && wc() && xc(b);
        }

        function Ob() {
            rb = T;
            Jb = z.zd();
            F = y.Q();
        }

        function jc() {
            Ob();
            if (B || !H && J & 12) {
                z.X();
                n.j(f.le);
            }
        }

        function hc(e) {
            e && Ob();
            if (!B && (H || !(J & 12)) && !z.$IsPlaying()) {
                var c = y.Q(), a = b.ceil(F);
                if (e && b.abs(G) >= p.$MinDragOffsetToSlide) {
                    a = b.ceil(c);
                    a += jb;
                }
                if (!(D & 1))a = b.min(s - u, b.max(a, 0));
                var d = b.abs(a - c);
                d = 1 - b.pow(1 - d, 5);
                if (!P && rb)z.Pd(Jb);
                else if (c == a) {
                    ub.ff();
                    ub.ec();
                } else z.Ub(c, a, d * Vb);
            }
        }

        function Pb(b) { !a.u(a.Zb(b), "nodrag") && a.tb(b) }

        function xc(b) {
            B = c;
            Ab = d;
            X = i;
            a.e(g, fc, dc);
            a.L();
            P = 0;
            jc();
            if (!rb)w = 0;
            if (Kb) {
                var h = b.touches[0];
                vb = h.clientX;
                wb = h.clientY;
            } else {
                var e = a.yd(b);
                vb = e.x;
                wb = e.y;
                a.ke() && a.Ac() < 4 && a.tb(b);
            }
            G = 0;
            fb = 0;
            jb = 0;
            n.j(f.$EVT_DRAG_START, t(F), F, b);
        }

        function dc(l) {
            if (B) {
                var e;
                if (Kb) {
                    var k = l.touches;
                    if (k && k.length > 0)e = { x: k[0].clientX, y: k[0].clientY };
                } else e = a.yd(l);
                if (e) {
                    var i = e.x - vb, j = e.y - wb;
                    if (b.floor(F) != F)w = w || lb & N;
                    if ((i || j) && !w) {
                        if (N == 3)
                            if (b.abs(j) > b.abs(i))w = 2;
                            else w = 1;
                        else w = N;
                        if (ab && w == 1 && b.abs(j) - b.abs(i) > 3)Ab = c;
                    }
                    if (w) {
                        var d = j, h = Cb;
                        if (w == 1) {
                            d = i;
                            h = Bb;
                        }
                        if (!(D & 1)) {
                            if (d > 0) {
                                var f = h * r, g = d - f;
                                if (g > 0)d = f + b.sqrt(g) * 5;
                            }
                            if (d < 0) {
                                var f = h * (s - u - r), g = -d - f;
                                if (g > 0)d = -f - b.sqrt(g) * 5;
                            }
                        }
                        if (G - fb < -2)jb = 0;
                        else if (G - fb > 2)jb = -1;
                        fb = G;
                        G = d;
                        tb = F - G / h / (cb || 1);
                        if (G && w && !Ab) {
                            a.tb(l);
                            if (!T)z.Cd(tb);
                            else z.Nd(tb);
                        }
                    }
                }
            }
        }

        function Eb() {
            uc();
            if (B) {
                B = d;
                a.L();
                a.V(g, fc, dc);
                P = G;
                z.X();
                var b = y.Q();
                n.j(f.$EVT_DRAG_END, t(b), b, t(F), F);
                hc(c);
            }
        }

        function nc(c) {
            if (P) {
                a.mf(c);
                var b = a.Zb(c);
                while (b && v !== b) {
                    b.tagName == "A" && a.tb(c);
                    try {
                        b = b.parentNode;
                    } catch (d) {
                        break;
                    }
                }
            }
        }

        function rc(a) {
            C[r];
            r = t(a);
            ub = C[r];
            Ub(a);
            return r;
        }

        function Kc(a, b) {
            w = 0;
            rc(a);
            n.j(f.$EVT_PARK, t(a), b);
        }

        function Ub(b, c) {
            yb = b;
            a.c(S, function(a) { a.kc(t(b), b, c) });
        }

        function wc() {
            var b = f.dd || 0, a = R;
            if (ab)a & 1 && (a &= 1);
            f.dd |= a;
            return N = a & ~b;
        }

        function uc() {
            if (N) {
                f.dd &= ~R;
                N = 0;
            }
        }

        function Zb() {
            var b = a.ab();
            a.H(b, V);
            a.C(b, "absolute");
            return b;
        }

        function t(a) { return(a % s + s) % s }

        function oc(a, c) {
            if (c)
                if (!D) {
                    a = b.min(b.max(a + yb, 0), s - u);
                    c = d;
                } else if (D & 2) {
                    a = t(a + yb);
                    c = d;
                }
            eb(a, p.$SlideDuration, c);
        }

        function zb() { a.c(S, function(a) { a.uc(a.Wb.$ChanceToShow <= H) }) }

        function lc() {
            if (!H) {
                H = 1;
                zb();
                if (!B) {
                    J & 12 && hc();
                    J & 3 && C[r].ec();
                }
            }
        }

        function kc() {
            if (H) {
                H = 0;
                zb();
                B || !(J & 12) || jc();
            }
        }

        function mc() {
            V = { mb: L, ob: K, $Top: 0, $Left: 0 };
            a.c(Y, function(b) {
                a.H(b, V);
                a.C(b, "absolute");
                a.Z(b, "hidden");
                a.M(b);
            });
            a.H(gb, V);
        }

        function pb(b, a) { eb(b, a, c) }

        function eb(g, f, k) {
            if (Rb && (!B || p.$NaviQuitDrag)) {
                T = c;
                B = d;
                z.X();
                if (f == j)f = Vb;
                var e = Fb.Bb(), a = g;
                if (k) {
                    a = e + g;
                    if (g > 0)a = b.ceil(a);
                    else a = b.floor(a);
                }
                if (D & 2)a = t(a);
                if (!(D & 1))a = b.max(0, b.min(a, s - u));
                var i = (a - e) % s;
                a = e + i;
                var h = e == a ? 0 : f * b.abs(i);
                h = b.min(h, f * u * 1.5);
                z.Ub(e, a, h || 1);
            }
        }

        n.$PlayTo = eb;
        n.$GoTo = function(a) { eb(a, 1) };
        n.$Next = function() { pb(1) };
        n.$Prev = function() { pb(-1) };
        n.$Pause = function() { U = d };
        n.$Play = function() {
            if (!U) {
                U = c;
                C[r] && C[r].ec();
            }
        };
        n.$SetSlideshowTransitions = function(a) { p.$SlideshowOptions.$Transitions = a };
        n.$SetCaptionTransitions = function(b) {
            O.$CaptionTransitions = b;
            O.tc = a.L();
        };
        n.$SlidesCount = function() { return Y.length };
        n.$CurrentIndex = function() { return r };
        n.$IsAutoPlaying = function() { return U };
        n.$IsDragging = function() { return B };
        n.$IsSliding = function() { return T };
        n.$IsMouseOver = function() { return!H };
        n.$LastDragSucceded = function() { return P };

        function bb() { return a.l(x || q) }

        function nb() { return a.m(x || q) }

        n.$OriginalWidth = n.$GetOriginalWidth = bb;
        n.$OriginalHeight = n.$GetOriginalHeight = nb;

        function Gb(c, e) {
            if (c == j)return a.l(q);
            if (!x) {
                var b = a.ab(g);
                a.Hc(b, a.Hc(q));
                a.Sb(b, a.Sb(q));
                a.T(b, "block");
                a.C(b, "relative");
                a.B(b, 0);
                a.A(b, 0);
                a.Z(b, "visible");
                x = a.ab(g);
                a.C(x, "absolute");
                a.B(x, 0);
                a.A(x, 0);
                a.l(x, a.l(q));
                a.m(x, a.m(q));
                a.qe(x, "0 0");
                a.D(x, b);
                var k = a.K(q);
                a.D(q, x);
                a.xb(q, "backgroundImage", "");
                var i = { navigator: Z && Z.$Scale == d, arrowleft: E && E.$Scale == d, arrowright: E && E.$Scale == d, thumbnavigator: I && I.$Scale == d, thumbwrapper: I && I.$Scale == d };
                a.c(k, function(c) { a.D(i[a.u(c, "u")] ? q : b, c) });
            }
            cb = c / (e ? a.m : a.l)(x);
            a.pe(x, cb);
            var h = e ? cb * bb() : c, f = e ? c : cb * nb();
            a.l(q, h);
            a.m(q, f);
            a.c(S, function(a) { a.qc(h, f) });
        }

        n.$ScaleHeight = n.$GetScaleHeight = function(b) {
            if (b == j)return a.m(q);
            Gb(b, c);
        };
        n.$ScaleWidth = n.$SetScaleWidth = n.$GetScaleWidth = Gb;
        n.Yc = function(a) {
            var d = b.ceil(t(kb / cc)), c = t(a - r + d);
            if (c > u) {
                if (a - r > s / 2)a -= s;
                else if (a - r <= -s / 2)a += s;
            } else a = r + c - d;
            return a;
        };
        l.call(n);
        n.$Elmt = q = a.eb(q);
        var p = a.k({ $FillMode: 0, $LazyLoading: 1, $StartIndex: 0, $AutoPlay: d, $Loop: 1, $HWA: c, $NaviQuitDrag: c, $AutoPlaySteps: 1, $AutoPlayInterval: 3e3, $PauseOnHover: 1, $SlideDuration: 500, $SlideEasing: e.$EaseOutQuad, $MinDragOffsetToSlide: 20, $SlideSpacing: 0, $DisplayPieces: 1, $ParkingPosition: 0, $UISearchMode: 1, $PlayOrientation: 1, $DragOrientation: 1 }, ic), lb = p.$PlayOrientation & 3, Yb = (p.$PlayOrientation & 4) / -4 || 1, ib = p.$SlideshowOptions, O = a.k({ $Class: o, $PlayInMode: 1, $PlayOutMode: 1 }, p.$CaptionSliderOptions), Z = p.$BulletNavigatorOptions, E = p.$ArrowNavigatorOptions, I = p.$ThumbnailNavigatorOptions, W = !p.$UISearchMode, x, v = a.v(q, "slides", W), gb = a.v(q, "loading", W) || a.ab(g), Ib = a.v(q, "navigator", W), ec = a.v(q, "arrowleft", W), bc = a.v(q, "arrowright", W), Hb = a.v(q, "thumbnavigator", W), qc = a.l(v), pc = a.m(v), V, Y = [], zc = a.K(v);
        a.c(zc, function(b) {
            if (b.tagName == "DIV" && !a.u(b, "u"))Y.push(b);
            else a.P() && a.F(b, (a.F(b) || 0) + 1);
        });
        var r = -1, yb, ub, s = Y.length, L = p.$SlideWidth || qc, K = p.$SlideHeight || pc, Wb = p.$SlideSpacing, Bb = L + Wb, Cb = K + Wb, cc = lb & 1 ? Bb : Cb, u = b.min(p.$DisplayPieces, s), mb, w, N, Ab, S = [], Qb, Sb, Nb, gc, Jc, U, J = p.$PauseOnHover, Vb = p.$SlideDuration, sb, hb, kb, Rb = u < s, D = Rb ? p.$Loop : 0, R, P, H = 1, T, B, X, vb = 0, wb = 0, G, fb, jb, Fb, y, db, z, Tb = new tc, cb;
        U = p.$AutoPlay;
        n.Wb = ic;
        mc();
        a.Jc(q, "jssor-slider", c);
        a.F(v, a.F(v) || 0);
        a.C(v, "absolute");
        mb = a.S(v, c);
        a.Nb(mb, v);
        if (ib) {
            gc = ib.$ShowLink;
            sb = ib.$Class;
            hb = u == 1 && s > 1 && sb && (!a.qd() || a.Ac() >= 8);
        }
        kb = hb || u >= s || !(D & 1) ? 0 : p.$ParkingPosition;
        R = (u > 1 || kb ? lb : -1) & p.$DragOrientation;
        var xb = v, C = [], A, Q, M = a.ie(), Ac = M.Yb, fc = M.pc, Ic = M.yb, Xb = M.hb, Kb = M.je, ab = M.od, F, rb, Jb, tb;
        if (M.sd)
            if (R) {
                var Db = "auto";
                if (R == 2)Db = "pan-x";
                else if (R)Db = "pan-y";
                a.xb(xb, M.sd, Db);
            }
        db = new Fc;
        if (hb)A = new sb(Tb, L, K, ib, ab);
        a.D(mb, db.Jb);
        a.Z(v, "hidden");
        Q = Zb();
        a.xb(Q, "backgroundColor", "#000");
        a.zb(Q, 0);
        a.Nb(Q, xb.firstChild, xb);
        for (var qb = 0; qb < Y.length; qb++) {
            var Cc = Y[qb], Dc = new Ec(Cc, qb);
            C.push(Dc);
        }
        a.M(gb);
        Fb = new Gc;
        z = new sc(Fb, db);
        if (R) {
            a.e(v, Ac, yc);
            a.e(v, "dragstart", Pb);
            a.e(v, "selectstart", Pb);
            a.e(g, Ic, Eb);
            a.e(h, "blur", Eb);
            Xb && a.e(g, Xb, Eb);
        }
        J &= ab ? 10 : 5;
        if (Ib && Z) {
            Qb = new Z.$Class(Ib, Z, bb(), nb());
            S.push(Qb);
        }
        if (E && ec && bc) {
            E.$Loop = D;
            E.$DisplayPieces = u;
            Sb = new E.$Class(ec, bc, E, bb(), nb());
            S.push(Sb);
        }
        if (Hb && I) {
            I.$StartIndex = p.$StartIndex;
            Nb = new I.$Class(Hb, I);
            S.push(Nb);
        }
        a.c(S, function(a) {
            a.oc(s, C, gb);
            a.$On(m.Hb, oc);
        });
        Gb(bb());
        a.e(v, "click", nc);
        a.e(q, "mouseout", a.Mb(lc, q));
        a.e(q, "mouseover", a.Mb(kc, q));
        zb();
        p.$ArrowKeyNavigation && a.e(g, "keydown", function(a) {
            if (a.keyCode == 37)pb(-1);
            else a.keyCode == 39 && pb(1);
        });
        var ob = p.$StartIndex;
        if (!(D & 1))ob = b.max(0, b.min(ob, s - u));
        z.Ub(ob, ob, 0);
    };
    h.$JssorSlideo$ = f;
    f.$EVT_CLICK = 21;
    f.$EVT_DRAG_START = 22;
    f.$EVT_DRAG_END = 23;
    f.$EVT_SWIPE_START = 24;
    f.$EVT_SWIPE_END = 25;
    f.$EVT_LOAD_START = 26;
    f.$EVT_LOAD_END = 27;
    f.le = 28;
    f.$EVT_POSITION_CHANGE = 202;
    f.$EVT_PARK = 203;
    f.$EVT_SLIDESHOW_START = 206;
    f.$EVT_SLIDESHOW_END = 207;
    f.$EVT_PROGRESS_CHANGE = 208;
    f.$EVT_STATE_CHANGE = 209;
    f.$EVT_ROLLBACK_START = 210;
    f.$EVT_ROLLBACK_END = 211;
    var m = { Hb: 1 };
    h.$JssorBulletNavigator$ = function(f, D) {
        var g = this;
        l.call(g);
        f = a.eb(f);
        var t, u, s, r, n = 0, e, o, k, y, z, j, h, q, p, C = [], A = [];

        function x(a) { a != -1 && A[a].Oc(a == n) }

        function v(a) { g.j(m.Hb, a * o) }

        g.$Elmt = f;
        g.kc = function(a) {
            if (a != r) {
                var d = n, c = b.floor(a / o);
                n = c;
                r = a;
                x(d);
                x(c);
            }
        };
        g.uc = function(b) { a.z(f, b) };
        var B;
        g.qc = function(g, b) {
            if (!B || e.$Scale == d) {
                e.$AutoCenter & 1 && a.A(f, (g - u) / 2);
                e.$AutoCenter & 2 && a.B(f, (b - s) / 2);
                B = c;
            }
        };
        var w;
        g.oc = function(D) {
            if (!w) {
                t = b.ceil(D / o);
                n = 0;
                var m = q + y, r = p + z, l = b.ceil(t / k) - 1;
                u = q + m * (!j ? l : k - 1);
                s = p + r * (j ? l : k - 1);
                a.l(f, u);
                a.m(f, s);
                for (var d = 0; d < t; d++) {
                    var B = a.Ve();
                    a.jf(B, d + 1);
                    var g = a.Gc(h, "numbertemplate", B, c);
                    a.C(g, "absolute");
                    var x = d % (l + 1);
                    a.A(g, !j ? m * x : d % k * m);
                    a.B(g, j ? r * x : b.floor(d / (l + 1)) * r);
                    a.D(f, g);
                    C[d] = g;
                    e.$ActionMode & 1 && a.e(g, "click", a.J(i, v, d));
                    e.$ActionMode & 2 && a.e(g, "mouseover", a.Mb(a.J(i, v, d), g));
                    A[d] = a.Lb(g);
                }
                w = c;
            }
        };
        g.Wb = e = a.k({ $SpacingX: 0, $SpacingY: 0, $Orientation: 1, $ActionMode: 1 }, D);
        h = a.v(f, "prototype");
        q = a.l(h);
        p = a.m(h);
        a.Cb(h, f);
        o = e.$Steps || 1;
        k = e.$Lanes || 1;
        y = e.$SpacingX;
        z = e.$SpacingY;
        j = e.$Orientation - 1;
    };
    h.$JssorArrowNavigator$ = function(e, g, j, o) {
        var b = this;
        l.call(b);
        var v, u, f, h, k, r = a.l(e), p = a.m(e);

        function n(a) { b.j(m.Hb, a, c) }

        function s(b) {
            a.z(e, b || !j.$Loop && f == 0);
            a.z(g, b || !j.$Loop && f >= u - j.$DisplayPieces);
            v = b;
        }

        b.kc = function(b, a, c) {
            if (c)f = a;
            else {
                f = b;
                s(v);
            }
        };
        b.uc = s;
        var t;
        b.qc = function(f, b) {
            if (!t || h.$Scale == d) {
                if (h.$AutoCenter & 1) {
                    a.A(e, (o - r) / 2);
                    a.A(g, (o - r) / 2);
                }
                if (h.$AutoCenter & 2) {
                    a.B(e, (b - p) / 2);
                    a.B(g, (b - p) / 2);
                }
                t = c;
            }
        };
        var q;
        b.oc = function(b) {
            u = b;
            f = 0;
            if (!q) {
                a.e(e, "click", a.J(i, n, -k));
                a.e(g, "click", a.J(i, n, k));
                a.Lb(e);
                a.Lb(g);
                q = c;
            }
        };
        b.Wb = h = a.k({ $Steps: 1 }, j);
        k = h.$Steps;
    };
    h.$JssorThumbnailNavigator$ = function(j, A) {
        var i = this, x, o, e, u = [], y, w, g, p, q, t, s, n, r, h, k;
        l.call(i);
        j = a.eb(j);

        function z(n, d) {
            var f = this, b, l, j;

            function p() { l.Oc(o == d) }

            function h() {
                if (!r.$LastDragSucceded()) {
                    var a = g - d % g, b = r.Yc((d + a) / g - 1), c = b * g + g - a;
                    i.j(m.Hb, c);
                }
            }

            f.bb = d;
            f.ad = p;
            j = n.nf || n.Tb || a.ab();
            f.Jb = b = a.Gc(k, "thumbnailtemplate", j, c);
            l = a.Lb(b);
            e.$ActionMode & 1 && a.e(b, "click", h);
            e.$ActionMode & 2 && a.e(b, "mouseover", a.Mb(h, b));
        }

        i.kc = function(c, d, e) {
            var a = o;
            o = c;
            a != -1 && u[a].ad();
            u[c].ad();
            !e && r.$PlayTo(r.Yc(b.floor(d / g)));
        };
        i.uc = function(b) { a.z(j, b) };
        i.qc = a.ic;
        var v;
        i.oc = function(F, D) {
            if (!v) {
                x = F;
                b.ceil(x / g);
                o = -1;
                n = b.min(n, D.length);
                var i = e.$Orientation & 1, m = t + (t + p) * (g - 1) * (1 - i), l = s + (s + q) * (g - 1) * i, C = m + (m + p) * (n - 1) * i, A = l + (l + q) * (n - 1) * (1 - i);
                a.C(h, "absolute");
                a.Z(h, "hidden");
                e.$AutoCenter & 1 && a.A(h, (y - C) / 2);
                e.$AutoCenter & 2 && a.B(h, (w - A) / 2);
                a.l(h, C);
                a.m(h, A);
                var k = [];
                a.c(D, function(l, e) {
                    var f = new z(l, e), d = f.Jb, c = b.floor(e / g), j = e % g;
                    a.A(d, (t + p) * j * (1 - i));
                    a.B(d, (s + q) * j * i);
                    if (!k[c]) {
                        k[c] = a.ab();
                        a.D(h, k[c]);
                    }
                    a.D(k[c], d);
                    u.push(f);
                });
                var E = a.k({ $HWA: d, $AutoPlay: d, $NaviQuitDrag: d, $SlideWidth: m, $SlideHeight: l, $SlideSpacing: p * i + q * (1 - i), $MinDragOffsetToSlide: 12, $SlideDuration: 200, $PauseOnHover: 1, $PlayOrientation: e.$Orientation, $DragOrientation: e.$DisableDrag ? 0 : e.$Orientation }, e);
                r = new f(j, E);
                v = c;
            }
        };
        i.Wb = e = a.k({ $SpacingX: 3, $SpacingY: 3, $DisplayPieces: 1, $Orientation: 1, $AutoCenter: 3, $ActionMode: 1 }, A);
        y = a.l(j);
        w = a.m(j);
        h = a.v(j, "slides", c);
        k = a.v(h, "prototype");
        t = a.l(k);
        s = a.m(k);
        a.Cb(k, h);
        g = e.$Lanes || 1;
        p = e.$SpacingX;
        q = e.$SpacingY;
        n = e.$DisplayPieces;
    };

    function o() {
        k.call(this, 0, 0);
        this.Ob = a.ic;
    }

    h.$JssorCaptionSlider$ = function(p, h, f) {
        var c = this, g, n = f ? h.$PlayInMode : h.$PlayOutMode, e = h.$CaptionTransitions, o = { U: "t", $Delay: "d", $Duration: "du", x: "x", y: "y", $Rotate: "r", $Zoom: "z", $Opacity: "f", cb: "b" },
            d = {
                rb: function(b, a) {
                    if (!isNaN(a.fb))b = a.fb;
                    else b *= a.Be;
                    return b;
                },
                $Opacity: function(b, a) { return this.rb(b - 1, a) }
            };
        d.$Zoom = d.$Opacity;
        k.call(c, 0, 0);

        function l(r, m) {
            var k = [], i, j = [], c = [];

            function h(c, d) {
                var b = {};
                a.c(o, function(g, h) {
                    var e = a.u(c, g + (d || ""));
                    if (e) {
                        var f = {};
                        if (g == "t")f.fb = e;
                        else if (e.indexOf("%") + 1)f.Be = a.hc(e) / 100;
                        else f.fb = a.hc(e);
                        b[h] = f;
                    }
                });
                return b;
            }

            function p() { return e[b.floor(b.random() * e.length)] }

            function g(f) {
                var h;
                if (f == "*")h = p();
                else if (f) {
                    var d = e[a.Oe(f)] || e[f];
                    if (a.dc(d)) {
                        if (f != i) {
                            i = f;
                            c[f] = 0;
                            j[f] = d[b.floor(b.random() * d.length)];
                        } else c[f]++;
                        d = j[f];
                        if (a.dc(d)) {
                            d = d.length && d[c[f] % d.length];
                            if (a.dc(d))d = d[b.floor(b.random() * d.length)];
                        }
                    }
                    h = d;
                    if (a.wd(h))h = g(h);
                }
                return h;
            }

            var q = a.K(r);
            a.c(q, function(b) {
                var c = [];
                c.$Elmt = b;
                var e = a.u(b, "u") == "caption";
                a.c(f ? [0, 3] : [2], function(k, o) {
                    if (e) {
                        var j, f;
                        if (k != 2 || !a.u(b, "t3")) {
                            f = h(b, k);
                            if (k == 2 && !f.U) {
                                f.$Delay = f.$Delay || { fb: 0 };
                                f = a.k(h(b, 0), f);
                            }
                        }
                        if (f && f.U) {
                            j = g(f.U.fb);
                            if (j) {
                                var i = a.k({ $Delay: 0 }, j);
                                a.c(f, function(c, a) {
                                    var b = (d[a] || d.rb).apply(d, [i[a], f[a]]);
                                    if (!isNaN(b))i[a] = b;
                                });
                                if (!o)
                                    if (f.cb)i.cb = f.cb.fb || 0;
                                    else if (n & 2)i.cb = 0;
                            }
                        }
                        c.push(i);
                    }
                    if (m % 2 && !o)c.K = l(b, m + 1);
                });
                k.push(c);
            });
            return k;
        }

        function m(w, c, z) {
            var g = { $Easing: c.$Easing, $Round: c.$Round, $During: c.$During, $Reverse: f && !z }, m = w, r = a.Ze(w), l = a.l(m), j = a.m(m), y = a.l(r), x = a.m(r), h = {}, e = {}, i = c.$ScaleClip || 1;
            if (c.$Opacity)e.$Opacity = 1 - c.$Opacity;
            g.$OriginalWidth = l;
            g.$OriginalHeight = j;
            if (c.$Zoom || c.$Rotate) {
                e.$Zoom = (c.$Zoom || 2) - 2;
                if (a.P() || a.Dc())e.$Zoom = b.min(e.$Zoom, 1);
                h.$Zoom = 1;
                var B = c.$Rotate || 0;
                e.$Rotate = B * 360;
                h.$Rotate = 0;
            } else if (c.$Clip) {
                var s = { $Top: 0, $Right: l, $Bottom: j, $Left: 0 }, v = a.k({}, s), d = v.qb = {}, u = c.$Clip & 4, p = c.$Clip & 8, t = c.$Clip & 1, q = c.$Clip & 2;
                if (u && p) {
                    d.$Top = j / 2 * i;
                    d.$Bottom = -d.$Top;
                } else if (u)d.$Bottom = -j * i;
                else if (p)d.$Top = j * i;
                if (t && q) {
                    d.$Left = l / 2 * i;
                    d.$Right = -d.$Left;
                } else if (t)d.$Right = -l * i;
                else if (q)d.$Left = l * i;
                g.$Move = c.$Move;
                e.$Clip = v;
                h.$Clip = s;
            }
            var n = 0, o = 0;
            if (c.x)n -= y * c.x;
            if (c.y)o -= x * c.y;
            if (n || o || g.$Move) {
                e.$Left = n;
                e.$Top = o;
            }
            var A = c.$Duration;
            h = a.k(h, a.Ud(m, e));
            g.wc = a.Rd();
            return new k(c.$Delay, A, g, m, h, e);
        }

        function i(b, d) {
            a.c(d, function(a) {
                var e, h = a.$Elmt, d = a[0], k = a[1];
                if (d) {
                    e = m(h, d);
                    b = e.Pb(d.cb == j ? b : d.cb, 1);
                }
                b = i(b, a.K);
                if (k) {
                    var f = m(h, k, 1);
                    f.Pb(b, 1);
                    c.Y(f);
                    g.Y(f);
                }
                e && c.Y(e);
            });
            return b;
        }

        c.Ob = function() {
            c.I(c.db() * (f || 0));
            g.rc();
        };
        g = new k(0, 0);
        i(0, n ? l(p, 1) : []);
    };
})(window, document, Math, null, true, false)