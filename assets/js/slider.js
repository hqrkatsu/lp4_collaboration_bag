$(document).ready(function(){
    var slider = $('.slide').slick({
      dots: false,
      infinite: false,
      speed: 300,
      dots: true,
    
    });
    $('input[name="tab_item"]').change(function() {
          slider.slick('setPosition');
        });
  });



