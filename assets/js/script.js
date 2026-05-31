'use strict';

/**
 * navbar variables
 */
const menuToggleBtn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

menuToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar); });




/**
 * go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});



/**
 * scroll animations
 */

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with fade-in classes
document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
  observer.observe(el);
});

/**
 * parallax effect for hero banner
 */

window.addEventListener('scroll', function() {
  const heroBanner = document.querySelector('.hero-banner');
  if (heroBanner) {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.3;
    heroBanner.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
  }
});