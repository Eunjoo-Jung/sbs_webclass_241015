$(function(){
    
    let gnb = $('.gnb');
    gnb.mouseenter(function(){
        $('.gnb_box').slideDown(100);
    });
    $('.gnb_box').mouseleave(function(){
        $(this).slideUp(100);
    });
    
    $('.sati_list').on('click',function(){
			$('.sub_t02').toggle();
		});
    
    $('.menu > a').on('click',function(){
        $('.menu_item01').slideToggle();
    });
    
    /*$('.menu > a').on('click',function(){
        $(this).next('.menu_item01').slideToggle();
    });
    
    $('.menu > a').not(this).next('.menu_item01').slideUp();*/
    
    
});