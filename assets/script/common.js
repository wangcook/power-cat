(function e(t, n, r) {
	function s(o, u) {
		if(!n[o]) {
			if(!t[o]) {
				var a = typeof require == "function" && require;
				if(!u && a) return a(o, !0);
				if(i) return i(o, !0);
				throw new Error("Cannot find module '" + o + "'")
			}
			var f = n[o] = {
				exports: {}
			};
			t[o][0].call(f.exports, function(e) {
				var n = t[o][1][e];
				return s(n ? n : e)
			}, f, f.exports, e, t, n, r)
		}
		return n[o].exports
	}
	var i = typeof require == "function" && require;
	for(var o = 0; o < r.length; o++) s(r[o]);
	return s
})({
	1: [function(require, module, exports) {

	}, {}]
}, {}, [1])
//设置相片的高度
var $imgH = $('.banner-img').height();
$('.banner-img > img').css('height', $imgH);

//导航添加2px边框
var $li = $('.bj').find("li");
var $a = $li.find('a');
$li.click(
	function() {
		$(this).css('border', '0')
		$a.css('color', 'white');
		//			alert(0);
	}
);
$a.click(
	function() {
		$a.css('border', '0');
		//			alert(0);
	}
);

var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	slidesPerView: 1,
	paginationClickable: true,
	spaceBetween: 30,
	loop: true
});

//导航滑动
window.onload = function() {
	var ul = document.getElementsByClassName('bj')[0];
	var aLi = ul.getElementsByTagName('li');
	var oBg = aLi[aLi.length - 1];

	for(var i = 0; i < aLi.length - 1; i++) {
		aLi[i].onmouseover = function() {
			// 改变背景的位置
			startMove(oBg, this.offsetLeft + 15);
		}
	}
}

function startMove(obj, target) {
	clearInterval(obj.timer);

	var speed = 0;
	// 获取到物体的起始位置
	var left = obj.offsetLeft;
	obj.timer = setInterval(function() {

		speed += (target - obj.offsetLeft) / 60;
		// 摩擦力
		speed *= 0.85;

		// 因为有小数的问题
		left += speed;
		if(Math.abs(speed) < 1 && Math.abs(target - left) < 1) {
			clearInterval(obj.timer);
			obj.style.left = target + 'px';
		} else {
			obj.style.left = obj.offsetLeft + speed + 'px';
		}
	}, 1);

}

//旗下品牌背景移清除

var Bli = $('.dropdown');
var Ba = $('.dropdown').children('a');
Bli.click(function() {
	Bli.css('background', 'rgba(1,1,1,0)');
	//	Ba.css('color','black');
});
Bli.mouseover(function() {
	Bli.css('background', 'rgba(1,1,1,0)');
});
Bli.mouseout(function() {
	Bli.css('background', 'rgba(1,1,1,0)');
});
Ba.click(function() {
	$(this).css('background', 'rgba(1,1,1,0)');
	Ba.css('color', 'white');
});
Ba.mouseover(function() {
	$(this).css('background', 'rgba(1,1,1,0)');
});
Ba.mouseout(function() {
	$(this).css('background', 'rgba(1,1,1,0)');
});

//回到顶部

$(function() {
	var viewH = $(window).height();
	change();
	$(document).scroll(change);

	function change() {
		var scrollT = $(document).scrollTop();

		if(scrollT > viewH / 2) {
			$('.htop').css('opacity', 1);
		}
		if(scrollT <= viewH / 2) {
			$('.htop').css('opacity', 0);
		}
	}

})

$(document).ready(function() {
	$('.htop').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 'slow');
	});
});

//导航下拉渐变

$(document).ready(function() {

	function changev() {
		$('.img1').css('display', "none");
		$('.img2').css('display', "block");
		$('header').css('background', 'white');
		$('header .navbar-default .navbar-nav li a').css('color', 'black');
		$('header .navbar-default .navbar-nav .bg').css('border-bottom', ' 3px solid red');
		$('header .navbar .navbar-collapse .navbar-nav .dropdown .dropdown-menu1 li a').css('color', 'red');
		//		$('header').animate({
		//			opacity: 0
		//		}, 1000, function() {
		//			$('.img1').remove();
		//			$('.img2').css('display', "block");
		//			$('header').css('background', 'white');
		//			$('header .navbar-default .navbar-nav li a').css('color', 'black');
		//			$('header .navbar-default .navbar-nav .bg').css('border-bottom', ' 3px solid red');
		//			$('header .navbar .navbar-collapse .navbar-nav .dropdown .dropdown-menu1 li a').css('color', 'red');
		//		});
		//
		//		$('header').animate({
		//			opacity: 1
		//		}, 1000);

	}

	$(window).scroll(function() {
		//$(window).scrollTop()这个方法是当前滚动条滚动的距离
		//$(window).height()获取当前窗体的高度
		//$(document).height()获取当前文档的高度

		$gun = $(window).scrollTop();

		if($gun > 100) {
			changev();
		}

		if($gun <= 100) {
			$('.img1').css('display', "block");
			$('.img2').css('display', "none");
			$('header').css('background', 'rgba(1,1,1,0)');
			$('header .navbar-default .navbar-nav li a').css('color', 'white');
			$('header .navbar-default .navbar-nav .bg').css('border-bottom', ' 3px solid white');
			$('header .navbar .navbar-collapse .navbar-nav .dropdown .dropdown-menu1 li a').css('color', 'white');
		}

	});

});