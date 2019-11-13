// Create the document ready function

$(document).ready(function(){
    $("#mob-nav").click(function(){
 
        if( $(".mobile-nav-container").hasClass("mobile-nav-window-active")) {
            $(".mobile-nav-container").css("display", "none");  
            $(".mobile-nav-container").removeClass("mobile-nav-window-active");
       
        } else {
        
          $(".mobile-nav-container").addClass("mobile-nav-window-active");
          $(".mobile-nav-container").css("display", "block");
         }
      
      });



      $('.hero-class').slick({
        autoplay: true,
        arrows: false,
        fade: false
      });


  });