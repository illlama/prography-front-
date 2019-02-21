$(document).ready(function() {
    $("body").css("display", "none");
    $("body").fadeIn(1000);
    

    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    $('.js--scroll-to-start').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
  
    
    /*---------------------*/
    /* Animations on scroll*/
    /*---------------------*/
    
    /*---nav click event ---*/
    jQuery('.main-nav li ,.nav-menu-select-box').hover( function() {
        $(this).children('.nav-menu-select-box').css('border-bottom', '1px solid #7ab0c7'),
        $(this).children('a').css('color', '#7ab0c7');
    },function(){
        $(this).children('.nav-menu-select-box').css('border-bottom', '1px solid #000')
        $(this).children('a').css('color', '#000');
    }
                                );
    /*---project description---*/
    $('.js--info-box').click( function(){
       $(this).parent().find('.project-card-descript').fadeToggle('1000'); 
    });
     
       /* Mobile navigation */ 
    $('.js--nav-icon').click(function() {
       var nav = $('.js--main-nav');
       var icon = $('.js--nav-icon ion-icon');
        nav.slideToggle(200);
         
        if (icon.hasClass('js--nav-icon-close')){
            icon.attr('name', 'menu');
            icon.removeClass('js--nav-icon-close');
            icon.addClass('js--nav-icon-menu');
            
            
        }else{
            icon.attr('name', 'close');
            icon.removeClass('js--nav-icon-menu');
            icon.addClass('js--nav-icon-close');  
        }
        
    });
});