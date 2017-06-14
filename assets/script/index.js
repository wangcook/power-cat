//(function e(t, n, r) {
//	function s(o, u) {
//		if(!n[o]) {
//			if(!t[o]) {
//				var a = typeof require == "function" && require;
//				if(!u && a) return a(o, !0);
//				if(i) return i(o, !0);
//				throw new Error("Cannot find module '" + o + "'")
//			}
//			var f = n[o] = {
//				exports: {}
//			};
//			t[o][0].call(f.exports, function(e) {
//				var n = t[o][1][e];
//				return s(n ? n : e)
//			}, f, f.exports, e, t, n, r)
//		}
//		return n[o].exports
//	}
//	var i = typeof require == "function" && require;
//	for(var o = 0; o < r.length; o++) s(r[o]);
//	return s
//})({
//	1: [function(require, module, exports) {
//		$(function() {
//
//			$(".l_spe5>div").hover(function() {
//				var idx = $(this).index();
//				$(this).find("a").addClass("icon-logo" + (idx + 1) + "_2");
//			}, function() {
//				var idx = $(this).index();
//				$(this).find("a").removeClass("icon-logo" + (idx + 1) + "_2");
//			})
//
//			if(navigator.userAgent.indexOf("Mobile") != -1) {
//				$(".l_spe5>div").removeClass("w20");
//			} else {
//				$(".l_spe5>div").addClass("w20");
//			}
//
//			init();
//
//
//			function LAnimate(obj) {
//				if(!$(obj)) return;
//
//				$(obj).waypoint(function(direction) {
//					if(direction === "down" && !$(obj).hasClass('animated')) {
//						setTimeout(function() {
//							$(obj).find(".to-animate").each(function(k, val) {
//								setTimeout(function() {
//									$(val).addClass("fadeInUp animated");
//								}, k * 300, 'easeInOutExpo')
//
//							})
//						})
//					}
//				}, {
//					offset: "500px"
//				})
//			}
//
//			LAnimate($(".about"));
//			LAnimate($(".news"));
//			LAnimate($(".banner"));
//
//			function init() {
//
//			}
//
//		})
//	}, {}]
//}, {}, [1])




