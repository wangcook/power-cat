//动画效果
$(function() {
	$('.showw').on('mouseover', function() {

		//防止动画 重叠
		$(this).children('div').stop().animate({
			opacity: '0.7'
		}, 600);
		$(this).find('p').stop().animate({
			opacity: '1'
		}, 600);
		$(this).find('i').stop().animate({
			opacity: '1'
		}, 600);
	})

	$('.showw').on('mouseout', function() {

		$(this).children('div').stop().animate({
			opacity: '0'
		}, 600);
		$(this).find('p').stop().animate({
			opacity: '0'
		}, 600);
		$(this).find('i').stop().animate({
			opacity: '0'
		}, 600);
	})

})


//添加类改变li的背景颜色

//$('.caseW .container .nav1 a').addClass('clearfix');

$('.caseW .container .nav1 a').click(function(){
	
	$(this).addClass('active').siblings().removeClass('active');
	
	
	
	
	
	
})




