(function($){

	"use strict";
	
	$(document).ready(function() {

		/*
			Magic Line Start
		*/
		var $el,$current_index, leftPos, newWidth;



		/* Add Magic arrow markup via JavaScript, because it ain't gonna work without */
		jQuery("header").append("<span id='magic-arrow'>Arrow</span>");

		/* Cache it */
		var $magicLine = jQuery("#magic-arrow");
		/* if(typeof (jQuery("#menu li.current")) !="undefined"){
			$magicLine
				.width(jQuery("#menu li.current").parent().width())
				.css("left", jQuery("#menu li.current").parent().position().left)
				.data("origLeft", $magicLine.position().left)
				.data("origWidth", $magicLine.width());
		} */
		jQuery("header").find("ul li").hover(function() {
			$el = jQuery(this);
			$current_index = $el.index();
			leftPos = $el.position().left;
			newWidth = $el.width();
			$magicLine.removeClass('magic_arrow_0 magic_arrow_1 magic_arrow_2 magic_arrow_3 magic_arrow_4').addClass("magic_arrow_"+$current_index);
			$magicLine.stop().animate({
				left: leftPos,
				width: newWidth
			});
		}, function() {
			$magicLine.stop().animate({
				left: $magicLine.data("origLeft"),
				width: $magicLine.data("origWidth")
			});    
		});


		/*
			Magic Line End
		*/


		/*
			Header Start
		*/

		var headerheight = jQuery(".main-wrapper header").height();
		var headerwidth = jQuery(".main-wrapper").width();
		jQuery(".main-wrapper header").css('width', headerwidth);
		jQuery(".main-wrapper header").sticky({topSpacing:0});


		/*
			Header End
		*/



		/*
			Left sidebar Start
		*/



		jQuery('.left_nav a').click(function(){
			if(!jQuery(this).parent().hasClass("active")){
				jQuery(this).parent().siblings('li').removeClass('active').find('.sub_menu').slideUp('slow').find('li').removeClass('active');
				jQuery(this).parent().addClass('active').find('>ul.sub_menu').slideDown('slow');
			}else{
				jQuery(this).parent().removeClass('active').find('.sub_menu').slideUp('slow').find('li').removeClass('active');
			}
		});
		// open first menu by-default
		jQuery('.left_nav li:first a:first').trigger('click');
		var asidewidth = jQuery(".marketPlaceSection aside").width();
		jQuery(".left_nav").css('width', asidewidth);
		//jQuery(".marketplace_page .left_nav").sticky({topSpacing:64});
		
		/*
			Left sidebar End
		*/
		jQuery(".navbar-toggle").click(function(){
		  jQuery(".small_menu").toggleClass('hide');

		});

//	  body.clearos_page header{@theme-color : @gray; }
//    body.dashboard_page header{@theme-color : @brand-success; }
//    body.marketplace_page header{@theme-color : @brand-primary; }
//    body.support_page header{@theme-color : @brand-info; }
//    body.root_page header{@theme-color : @brand-light; }
		

	});	
})(jQuery);	