//This is a JQuery file with events for "My resume" thumbnail

$(document).ready(function() {

		var  pic_styles_1 = {
			position: 'fixed', 
			left: '0', 
			top:'0', 
			width: '0', 
			height: '0'
		};

		var pic_styles_2 = {
			position: 'fixed', 
			left: '0', 
			top:'0', 
			width: '0', 
			height: '0'
		};

		var pic_styles_3 = {
			position: 'fixed', 
			left: '0', 
			top:'0', 
			width: '0', 
			height: '0'
		};

		var closeButton_styles_smallView = {
			left: '78%',
			top:  '20%'
		};


		var closeButton_styles_largeView = {
			left: '88%',
			top:  '10%'
		};
	
		var pic_styles_afterMove_pic1 = {
			top: '25%',
			left: '20%',
			width: '300px', 
			height: '300px',
			zIndex: '1'

		};

		var pic_styles_afterMove_pic2 = {
			top: '25%',
			left: '40%',
			width: '300px', 
			height: '300px',
			zIndex: '1'

		}

		var pic_styles_afterMove_pic3 = {
			top: '25%',
			left: '60%',
			width: '300px', 
			height: '300px',
			zIndex: '1'

		}

		var pic_styles_largeView = {
			left: '0%', 
			top:'5%', 
			width: '800px', 
			height: '800px', 
			zIndex: '2'
		};


		var flag0 = 0;
		var timer0;
		var flag1 = 0;
		var flag2 = 0;
		var flag3 = 0;
		flagCloseButton = 0;





		$('body').on({
			click: function() {
				if(flag0 == 0) {
					flag0 = 1;

					(function() {timer0 = setTimeout(function(){

						//use blur effect only for chrome browser
						if ( $.browser.webkit ) {
							$('.container').foggy({
							   blurRadius: 10,          // In pixels.
							   opacity: 0.4,           // Falls back to a filter for IE.
							   cssFilterSupport: true  // Use "-webkit-filter" where available.
							 }); 

							$('.jumbotron').foggy({
							   blurRadius: 10,          // In pixels.
							   opacity: 0.4,           // Falls back to a filter for IE.
							   cssFilterSupport: true  // Use "-webkit-filter" where available.
							 }); 

							$('.container').foggy();
							$('.jumbotron').foggy();
						  }


						$('body').append('<img class="item-pic-1" src="img/Resume/resume_page1.png" alt="">');
						$('body').append('<img class="item-pic-2" src="img/Resume/resume_page2.png" alt="">');
						$('body').append('<img class="item-pic-3" src="img/Resume/resume_page3.png" alt="">');	

						$('body').append('<div id="closeButton" class="closeButton"></div>');	

						$('#closeButton').css(closeButton_styles_smallView);

						$('#closeButton').fadeIn(1000);

						$('.item-pic-1').hide();
						$('.item-pic-2').hide();
						$('.item-pic-3').hide();

						$('.item-pic-1').fadeIn();
						$('.item-pic-2').fadeIn();
						$('.item-pic-3').fadeIn();

						$('.item-pic-1').css(pic_styles_1);
						$('.item-pic-2').css(pic_styles_2);
						$('.item-pic-3').css(pic_styles_3);

						$('.item-pic-1').animate(pic_styles_afterMove_pic1, 1000);
						$('.item-pic-2').animate(pic_styles_afterMove_pic2, 1000);
						$('.item-pic-3').animate(pic_styles_afterMove_pic3, 1000);

					}, 1000);})();

				} 

				else if (flag0 == 1) {
					flag0 = 0;

					$('#closeButton').fadeOut(1000);
					$('#closeButton').remove();

					$('.item-pic-1').remove();
					$('.item-pic-2').remove();
					$('.item-pic-3').remove();

					$('.container').foggy(false);
					$('.jumbotron').foggy(false);

					clearTimeout(timer0); timer0 = null;

				}
			}
		}, '#myResumeView');

		//Creating click event for close-button

		$('body').on({
			click: function() {

				var flags = [flag1, flag2, flag3];
				
				function isNull(number) {
					return number == 0;
				}

				if(flags.every(isNull)){ 
					flag0 = 0;
					$('.item-pic-1').remove();
					$('.item-pic-2').remove();	
					$('.item-pic-3').remove();	
					$('#closeButton').remove();	

					$('.container').foggy(false);
					$('.jumbotron').foggy(false);

					clearTimeout(timer0); timer0 = null;
				}

				if (flag1 == 1) {
					flag1 = 0;
					$('.item-pic-1').remove().appendTo('body').animate(pic_styles_afterMove_pic1, 500);
					$('.item-pic-2').fadeIn();
					$('.item-pic-3').fadeIn();
					$('#closeButton').animate(closeButton_styles_smallView, 800);

				}

				if (flag2 == 1) {
					flag2 = 0;
					$('.item-pic-2').remove().appendTo('body').animate(pic_styles_afterMove_pic2, 500);
					$('.item-pic-1').fadeIn();
					$('.item-pic-3').fadeIn();
					$('#closeButton').animate(closeButton_styles_smallView, 800);

				}

				if (flag3 == 1) {
					flag3 = 0;
					$('.item-pic-3').remove().appendTo('body').animate(pic_styles_afterMove_pic3, 500);
					$('.item-pic-2').fadeIn();
					$('.item-pic-1').fadeIn();
					$('#closeButton').animate(closeButton_styles_smallView, 800);

				}

			}
		}, '#closeButton');


		$('body').on({
			click: function() {
				if(flag1 == 0) {
					flag1 = 1;
					$('.item-pic-1').animate(pic_styles_largeView, 1000);
					$('#closeButton').animate(closeButton_styles_largeView, 500);

					$('.item-pic-2').fadeOut(1000);
					$('.item-pic-3').fadeOut(1000);

					$('.item-pic-1').okzoom({
										scaleWidth: 1000,
								        width: 300,
								        height: 300
								    });

					return;
				} 
				else if (flag1 == 1) {
					flag1 = 0;
					$('.item-pic-1').animate(pic_styles_afterMove_pic1, 500);
					$('#closeButton').animate(closeButton_styles_smallView, 500);
					$('.item-pic-2').fadeIn();
					$('.item-pic-3').fadeIn();
					return;
				}
			}
		}, '.item-pic-1');


		$('body').on({
			click: function() {
				if(flag2 == 0) {
					$('.item-pic-2').animate(pic_styles_largeView, 1000);
					$('#closeButton').animate(closeButton_styles_largeView, 500);

					$('.item-pic-1').fadeOut(1000);
					$('.item-pic-3').fadeOut(1000);

					flag2 = 1;

					$('.item-pic-2').okzoom({
										scaleWidth: 1000,
								        width: 300,
								        height: 300
								    });
					return;
				} 
				else if (flag2 == 1) {
					flag2 = 0;
					$('.item-pic-2').animate(pic_styles_afterMove_pic2, 500);
					$('#closeButton').animate(closeButton_styles_smallView, 500);
					$('.item-pic-1').fadeIn();
					$('.item-pic-3').fadeIn();
					return;
				}
			}
		}, '.item-pic-2');

		$('body').on({
			click: function() {
				if(flag3 == 0) {
					flag3 = 1;
					$('.item-pic-3').animate(pic_styles_largeView, 1000);
					$('#closeButton').animate(closeButton_styles_largeView, 500);

					$('.item-pic-2').fadeOut(1000);
					$('.item-pic-1').fadeOut(1000);
					$('.item-pic-3').okzoom({
										scaleWidth: 1000,
								        width: 300,
								        height: 300
								    });
					return;
				} 
				else if (flag3 == 1) {
					flag3 = 0;
					$('.item-pic-3').animate(pic_styles_afterMove_pic3, 500);
					$('#closeButton').animate(closeButton_styles_smallView, 500);
					$('.item-pic-2').fadeIn();
					$('.item-pic-1').fadeIn();
					return;
				}
			}
		}, '.item-pic-3');

});



