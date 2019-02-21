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
    
    /* navigation scroll */
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
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
     

});