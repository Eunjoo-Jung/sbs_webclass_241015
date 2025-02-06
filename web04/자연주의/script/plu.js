$(function(){
	// fullpage =========================

	$(document).ready(function(){
		$(".loading-section").delay(300).slideUp(500)
	  });

    $('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally: true,
        navigation:true,
		navigationPosition:'left',
	});

	// menu =============================

	$("#m-icon").click(function(){
		$(".menu").slideToggle();
		$(".gab li").delay(500)
		$(".gab li").fadeToggle(500)
	  });

	// video ============================

	$("video").mouseenter(function(){
		if(this.paused){
			this.play()
		}
	});

	// page3 slick ======================

	$(".r-slide").slick({
		autoplay: true,
		autoplaySpeed: 2500,
		speed:800,
		pauseOnHover:false,
		arrows: false,
		dots: true,
  		infinite: true,
  		fade: true,
  		cssEase: 'linear',
		appendDots:(".r-slide-dots")
	});

	// page4 slick ======================
	
	$(".slick-container").slick({
		autoplay: true,
		autoplaySpeed: 2000,
		speed:800,
		pauseOnHover:true,
		arrows: false,
		dots: true,
  		infinite: true,
  		fade: true,
  		cssEase: 'linear',
	});

	// ===================================




});













