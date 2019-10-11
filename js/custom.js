(function ($) {
    'use strict'

//============== wow JS ==============
    new WOW().init();

    
// scroll Top 
$(window).scroll(function () {
    var durotto = $(window).scrollTop(); 
    $('#').text(durotto);

    if (durotto > 500) {
        $('.arrows').fadeIn();
    }
    else{
        $('.arrows').fadeOut();
    }
});


$('.arrows').on('click', function () {
    $('html').animate({'scrollTop' : 0}, 1000);

});


//============== Owl Carousel JS ==============
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2500])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})




//========== isotope==========

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  
  var $grid = $('.grid').isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use element for option
      columnWidth: '.grid-item'
    }
  })
  
  //========== isotope button active==========
  
  $('.work-button button').on('click', function() {
      $('.work-button button').removeClass('active');
      $(this).addClass('active');
  });
  















}) (jQuery);