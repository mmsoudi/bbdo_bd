var appMaster = {

	nav_mobile: function(){

		$('.menuswitch').click(function(){
			$('.menuswitch').toggleClass('hidden-nav');
		});
		$('.burger').click(function(){
			$('.menuswitch').toggleClass('hidden-nav');
		});
		function domino(selector,add,dur){
			selector = $(String(selector));
			selector.each(function(){
				var index = $(this).index();
				var that = $(this);
				dur = dur || 100;
				index = index*dur;
				setTimeout(function(){
					if (add == 'add'){
						that.addClass('shown');
					} else {
						that.removeClass('shown');
					}
				},index);
			});
		}
		$('.burger').click(function(){
			domino('#nav_slide ul li','add');
		});
		$('.menuswitch').click(function(){
			domino('#nav_slide ul li','remove');
		});

	},

	search_field_toggle : function(){
		$( ".icon-search" ).click(function() {
			$(".search-field").toggleClass('show_search');
		});
	}

}

$(document).ready(function() {
	appMaster.nav_mobile();
	appMaster.search_field_toggle();
});