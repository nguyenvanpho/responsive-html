 $(document).ready(function() {
    var owl = $('.select-carousel');
      owl.owlCarousel({
          padding: 10,
          // nav: true,
          loop: true,
          responsive: {
            0: {
              items: 3,
              // autoplay:true,
              // autoplayTimeout:2000,
            },
            768: {
              items: 5
            },
            1000: {
              items: 5
            }
          }
      })
      $('.play').on('click', function() {
          owl.trigger('play.owl.autoplay', [1000])
      })
      $('.stop').on('click', function() {
          owl.trigger('stop.owl.autoplay')
  })
})