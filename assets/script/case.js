



//动画效果
$(function(){
			  $('.showw').on('mouseover',function(){
			  	
			  	//防止动画 重叠
			  	$(this).children('div').stop().css('display','block');
			  })
			  
			  $('.showw').on('mouseout',function(){
			  	
			  	$(this).children('div').stop().css('display','none');
			  })
			   
			
			
			})