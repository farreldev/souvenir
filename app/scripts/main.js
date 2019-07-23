
var App;

$(function () {
  App = {
    init() {
      // App.tes();
      App.carousel();
      App.eventBtn();
    },

    tes() {
      alert('tes');
    },

    carousel() {

      function showNav(nc) {
        let slides = document.querySelector(`${nc}`)
        let parent = slides.parentNode;
        parent.addEventListener('mouseenter', function(){
          this.querySelector('.arrowNavigation').classList.add('openArrow')
        })
        parent.addEventListener('mouseleave', function(){
          this.querySelector('.arrowNavigation').classList.remove('openArrow')
        })
      }

      showNav('.slick-hero');

      $('.slick-hero').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        prevArrow: '#prevHero',
        nextArrow: '#nextHero',
        // arrows: false
      });

      $('.slick-products').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        prevArrow: '#prevProduct',
        nextArrow: '#nextProduct'
      });
    },

    eventBtn: function() {
      $('.humburgerBtn').on('click', function() {
				$('.fd-sidebar-overlay').fadeIn();
				$('.fd-sidebar').addClass('showSidebar');
        $('.homepage main').addClass('fd-blur');
			})

			window.onclick = function(event) {
				if (event.target == document.querySelector('.fd-sidebar-overlay')) {
					$('fd-sidebar').removeClass('showSidebar');
					$('.fd-sidebar-overlay').fadeOut();
          $('.homepage main').removeClass('fd-blur');
				}
			}

			$('.fd-sidebar .fd-close-arrow').on('click', function() {
				$('.fd-sidebar').removeClass('showSidebar');
				$('.fd-sidebar-overlay').fadeOut();
        $('.homepage main').removeClass('fd-blur');
			});
    }
  }

  App.init();
})