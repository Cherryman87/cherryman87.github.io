//This is a JQuery file with events for "My photos" thumbnail

$(document).ready(function() {

		var flag0 = 0;
		var timer0;
		var flag1 = 0;
		flagCloseButton = 0;

		$('body').on({
			click: function() {
				if(flag0 == 0) {
					flag0 = 1;

					(function() {timer0 = setTimeout(function(){

						//use blur effect only for chrome browser
						if ( $.browser.webkit ) {

							$('#container1').foggy({
							   blurRadius: 50,          // In pixels.
							   opacity: 0.6,           // Falls back to a filter for IE.
							   cssFilterSupport: true  // Use "-webkit-filter" where available.
							 }); 

							$('#container3').foggy({
							   blurRadius: 50,          // In pixels.
							   opacity: 0.6,           // Falls back to a filter for IE.
							   cssFilterSupport: true  // Use "-webkit-filter" where available.
							 }); 

							$('#container4').foggy({
							   blurRadius: 50,          // In pixels.
							   opacity: 0.6,           // Falls back to a filter for IE.
							   cssFilterSupport: true  // Use "-webkit-filter" where available.
							 }); 

							$('.jumbotron').foggy({
							   blurRadius: 50,          // In pixels.
							   opacity: 0.6,           // Falls back to a filter for IE.
							   cssFilterSupport: true  // Use "-webkit-filter" where available.
							 }); 

							$('#panel1').foggy({
							   blurRadius: 50,          // In pixels.
							   opacity: 0.6,           // Falls back to a filter for IE.
							   cssFilterSupport: true  // Use "-webkit-filter" where available.
							 }); 

							$('thumb1').foggy({
							   blurRadius: 50,          // In pixels.
							   opacity: 0.6,           // Falls back to a filter for IE.
							   cssFilterSupport: true  // Use "-webkit-filter" where available.
							 }); 

							$('thumb2').foggy({
							   blurRadius: 50,          // In pixels.
							   opacity: 0.6,           // Falls back to a filter for IE.
							   cssFilterSupport: true  // Use "-webkit-filter" where available.
							 }); 

							$("body").css("overflow", "hidden");

							$('#container1').foggy();
							$('#container3').foggy();
							$('#container4').foggy();
							$('#panel1').foggy();
							$('#thumb1').foggy();
							$('#thumb2').foggy();
							$('.jumbotron').foggy();

						  }
						  
							$('.myPhotos').attr('id', 'carouselButton');						
							$('.myPhotos').text('Close');

						  $('#carousel-example-generic').fadeIn(500);

					}, 1000);})();

				} 

				else if (flag0 == 1) {
					flag0 = 0;

					if ( $.browser.webkit ) {
						$('.container').foggy(false);
						$('.jumbotron').foggy(false);
						$('#panel1').foggy(false);
						$('#thumb1').foggy(false);
						$('#thumb2').foggy(false);


						$("body").css("overflow", "auto");
					}

					$('.myPhotos').attr('id', '');
					$('.myPhotos').text('Start');
					$('#carousel-example-generic').fadeOut(500);
					clearTimeout(timer0); timer0 = null;
				}
			}
		}, '.myPhotos');

});



