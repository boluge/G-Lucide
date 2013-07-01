jQuery(document).ready(function () {
	// jQuery(window).bind('orientationchange', function(){
	// 	if (window.orientation % 180 == 0){
	// 		jQuery(document.body).css("-webkit-transform-origin", "").css("-webkit-transform", "");               
	// 	} 
	// 	else {                   
	// 		if ( window.orientation > 0) { //clockwise
	// 			jQuery(document.body).css("-webkit-transform-origin", "200px 190px")
	// 				.css("-webkit-transform",  "rotate(-90deg)");  
	// 		}
	// 	   else {
	// 			jQuery(document.body).css("-webkit-transform-origin", "280px 190px")
	// 				.css("-webkit-transform",  "rotate(90deg)"); 
	// 		}
	// 	}
	// })
	// .trigger('orientationchange');

	jQuery('nav#top-left').mmenu({
		position: 'left',
		counters: true
	});

	jQuery('nav#top-right').mmenu({
		position: 'right',
		counters: true
	});
});