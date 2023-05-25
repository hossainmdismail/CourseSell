// grab everything we need
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// add event listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});


// load event
window.addEventListener('DOMContentLoaded', function() {
  var counterElement = document.getElementById('count');
  let countData = parseInt(counterElement.innerHTML);

  var targetNumber = countData; // Change this to your desired number
  var counterValue = 0;

  var intervalId = setInterval(function() {
    counterElement.textContent = counterValue++;
    if (counterValue > targetNumber) {
      clearInterval(intervalId);
    }
  }, 10);
});







$('.owl-carousela').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  responsive:{
      
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})
$('.owl-carouselb').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})
$('.owl-carouselc').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  autoplay:true,
  autoplayTimeout:3000,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:4
      },
      1000:{
          items:6
      }
  }
})
$('.owl-carouseld').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})