/**
* Template Name: Yummy
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Gallery Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
    

  });
  
});
let heads = ["Energy-Efficient HVAC System Design","Waste Water Treatment Optimization","Traffic Management & Optimization","Renewable Energy Integration",
"Supply Chain Efficiency Improvement","Industrial Automation for Quality Control","Water Resource Management","Agricultural Technology for Crop Yield Enhancement",
"Medical Device Innovation"]
let problems = ["Problem: High energy consumption in commercial buildings due to inefficient heating, ventilation, and air conditioning (HVAC) systems.",
"Problem: Inadequate wastewater treatment leading to environmental pollution.",
"Problem: Traffic congestion in urban areas causing delays and pollution.",
"Problem: Limited integration of renewable energy sources into the electrical grid.",
"Problem: Inefficient supply chain management leading to delays and increased costs..",
"Problem: Inconsistent product quality in manufacturing processes.",
"Problem: Water scarcity and inefficient water usage in agriculture and industry.",
"Problem: Low crop yields due to outdated agricultural practices.",
"Problem: Lack of accessible and affordable medical devices for healthcare."];

let solutions = ["Solution: Design and implement an energy-efficient HVAC system with smart controls to reduce energy usage and costs.",
"Solution: Develop an optimized wastewater treatment process that removes contaminants effectively and meets environmental regulations.",
"Solution: Create a smart traffic management system that uses real-time data to optimize traffic flow and reduce congestion.",
"Solution: Design and implement a grid-tied renewable energy system (solar, wind, etc.) with energy storage for a reliable and sustainable power supply.",
"Solution: Develop software or tools for optimizing supply chain logistics, inventory management, and demand forecasting.",
"Solution: Create automated quality control systems using sensors, machine learning, and robotics to enhance product quality and reduce defects.",
"Solution: Develop water management strategies, including efficient irrigation systems and water recycling techniques.",
"Solution: Design and implement innovative agricultural technologies, such as precision farming and automated crop monitoring.",
"Solution: Engineer low-cost medical devices, such as diagnostic tools or prosthetics, to improve healthcare accessibility."]
var actives = [0,0,0,0,0,0,0,0,0]
var container = document.querySelector(".events-wrapper");
var paras = document.getElementsByClassName("parent-para");
console.log(paras)
for(let i=0;i<problems.length;i++){
  container.innerHTML+=`<div class="swiper-slide event-item d-flex flex-column justify-content-center">
  <div class="card">
    <div class="content">
      <p class="heading">${heads[i]}
      </p>
      <p class="para parent-para">
        ${problems[i]}
      </p>
      <button onclick="changeContent(this,${i})" class="btn">Solution</button>
    </div>
  </div>
</div><!-- End Event item -->`
}
function changeContent(item,indx){
  if(actives[indx] === 0){
    console.log(item.previousSibling.previousSibling)
    item.previousSibling.previousSibling.innerHTML=solutions[indx];
    item.innerText = "Problem"
    actives[indx] = 1;
  }
  else{
    item.previousSibling.previousSibling.innerHTML=problems[indx]
    item.innerText = "Solution"
    actives[indx] = 0;
  }
  // console.log(actives)
  // actives[indx] = 1;
  // console.log(actives)
}