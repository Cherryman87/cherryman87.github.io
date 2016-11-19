$(document).ready(function(){
	$('.dropdown').on('click', function() {$('.dropdown-toggle').dropdown('toggle')});

	var top_header = $('.paralax');
	top_header.css({'background-position':'right 100%'});

	$(window).scroll(function () {
	var st = $(this).scrollTop();
	top_header.css({'background-position':'right calc(100% + '+(st*.7)+'px)'});
	});
});

