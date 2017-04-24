

;(function($){
	$.fn.extend({
		//回到顶部效果
		gototop:function(options){
			if ($(this).length==0) {return false} ;
			if ($(this).length>1) {
				$(this).each(function(index, el) {
					$(el).gototop(options);
				});
				return $(this);
			}
			var _this=$(this);
			$(window).scroll(function(){				 
				$(window).scrollTop()>100?_this.fadeIn(500):_this.fadeOut(500);
			});
			$(this).on('click', function(event) {
				event.preventDefault();
				$('body,html').animate({scrollTop:0},100);
				return false;
			});
			return $(this);
		},		 			
	})	
})(jQuery)


/*
//调用方法：
eg:
$('.gotop').gototop();

*/