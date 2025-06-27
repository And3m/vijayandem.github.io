/* Copyright © 2024 Vijay K Andem. All rights reserved. */
AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);

// Scroll Progress Indicator
const updateScrollProgress = () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    document.documentElement.style.setProperty('--scroll-width', `${scrolled}%`);
};

window.addEventListener('scroll', updateScrollProgress);

// Smooth Scroll with Offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 80; // Adjust based on your header height
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Fade Up Animation on Scroll
window.addEventListener('DOMContentLoaded', () => {
  const fadeUpElements = document.querySelectorAll('.fade-up');
  const fadeUpObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          fadeUpObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );
  fadeUpElements.forEach(element => fadeUpObserver.observe(element));

  // Ensure all section text is white for visibility
  document.querySelectorAll('section, .ftco-section, .ftco-about, .ftco-counter, .ftco-hireme, .contact-section, .ftco-footer').forEach(sec => {
    sec.style.color = '#fff';
  });
});

// Dynamic Navigation Highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

const highlightNavigation = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// Mobile Navigation
const navbarToggler = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');

navbarToggler.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navbar.classList.contains('nav-open')) {
        navbar.classList.remove('nav-open');
    }
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        projectItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = '1', 50);
            } else {
                item.style.opacity = '0';
                setTimeout(() => item.style.display = 'none', 500);
            }
        });
    });
});

// Form Validation
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        let isValid = true;
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });
        
        if (isValid) {
            // Handle form submission
            const formData = new FormData(contactForm);
            // Add your form submission logic here
        }
    });
}

// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Lazy Loading Images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    },
    {
        rootMargin: '50px'
    }
);

lazyImages.forEach(img => imageObserver.observe(img));

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease',
    once: true
});

// Animate skill progress bars on scroll into view
window.addEventListener('DOMContentLoaded', () => {
  // Skill progress bar animation
  const skillSection = document.querySelector('.skill-mf');
  if (skillSection) {
    const progressBars = skillSection.querySelectorAll('.progress-bar');
    let animated = false;
    function animateSkills() {
      if (animated) return;
      const rect = skillSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        progressBars.forEach(bar => {
          const width = bar.getAttribute('data-width');
          bar.style.width = width + '%';
        });
        animated = true;
      }
    }
    window.addEventListener('scroll', animateSkills);
    animateSkills();
  }
});

// Timeline scroll animation
function showTimelineItemsOnScroll() {
  var timelineItems = document.querySelectorAll('.timeline-item');
  var windowBottom = window.innerHeight + window.scrollY;
  timelineItems.forEach(function(item) {
    var itemTop = item.getBoundingClientRect().top + window.scrollY;
    if (windowBottom > itemTop + 60) {
      item.classList.add('show');
    }
  });
}
window.addEventListener('scroll', showTimelineItemsOnScroll);
window.addEventListener('DOMContentLoaded', showTimelineItemsOnScroll);

// Hero typing animation for #typing-animation (typing effect, no backspace, new line per phrase)
window.addEventListener('DOMContentLoaded', function() {
  var el = document.getElementById('typing-animation');
  if (el) {
    var phrases = [
      'Data Analytics | BI Dashboards | ML',
      'Power BI | Tableau | Streamlit',
      'Python | SQL | PySpark | Cloud',
      'Business Insights | Visualization',
      'Data Storytelling | Automation'
    ];
    var current = 0;
    var typingSpeed = 38;
    var pause = 1400;
    function typePhrase(phrase, i, cb) {
      if (i <= phrase.length) {
        el.innerHTML = phrase.slice(0, i) + '<span class="typing-cursor">|</span>';
        setTimeout(function() { typePhrase(phrase, i + 1, cb); }, typingSpeed);
      } else {
        el.innerHTML = phrase + '<span class="typing-cursor">|</span>';
        setTimeout(cb, pause);
      }
    }
    function nextPhrase() {
      typePhrase(phrases[current], 0, function() {
        current = (current + 1) % phrases.length;
        nextPhrase();
      });
    }
    nextPhrase();
  }
});

// --- PROJECTS SECTION JS REFINEMENT ---
// Ensure project cards have equal height and responsive layout
$(document).ready(function() {
  function setProjectCardHeights() {
    var maxHeight = 0;
    $('.blog-entry').css('height', 'auto');
    $('.blog-entry').each(function() {
      var h = $(this).outerHeight();
      if (h > maxHeight) maxHeight = h;
    });
    if (window.innerWidth > 991) {
      $('.blog-entry').css('height', maxHeight + 'px');
    } else {
      $('.blog-entry').css('height', 'auto');
    }
  }
  setProjectCardHeights();
  $(window).on('resize', setProjectCardHeights);
});

// Section entrance animation
function animateSectionsOnScroll() {
  var animatedSections = document.querySelectorAll('.section-animate');
  var windowBottom = window.innerHeight + window.scrollY;
  animatedSections.forEach(function(section) {
    var sectionTop = section.getBoundingClientRect().top + window.scrollY;
    if (windowBottom > sectionTop + 60) {
      section.classList.add('show');
    }
  });
}
window.addEventListener('scroll', animateSectionsOnScroll);
window.addEventListener('DOMContentLoaded', animateSectionsOnScroll);

