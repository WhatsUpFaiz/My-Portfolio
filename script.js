


  function toggleMenu() {
    const nav = document.getElementById("nav-links");
  
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
  
        
        setTimeout(() => {
            document.addEventListener("click", closeMenuOutside);
        }, 0);
    }
  }
  
  function closeMenuOutside(event) {
    const nav = document.getElementById("nav-links");
    const hamburger = document.getElementById("hamburger-menu"); 
  
    if (nav.style.display === "flex" && !nav.contains(event.target) && !hamburger.contains(event.target)) {
        nav.style.display = "none";
        document.removeEventListener("click", closeMenuOutside); 
    }
  }
  
  addEventListener('DOMContentLoaded' , function(){
   particlesJS('particles-js',
     {
       "particles": {
         "number": {
           "value": 20,
           "density": {
             "enable": true,
             "value_area": 1200
           }
         },
         "color": {
           "value": "#ff0303" 
            
              
         },
         "shape": {
           "type": "circle",
           "stroke": {
             "width": 0,
             "color": "#fff"
           },
         },
         "opacity": {
           "value": 0.5,
           "random": false,
           "anim": {
             "enable": false,
             "speed": 2,
             "opacity_min": 0.1,
             "sync": false
           }
         },
         "size": {
           "value": 3,
           "random": true,
           "anim": {
             "enable": false,
             "speed": 40,
             "size_min": 0.1,
             "sync": false
           }
         },
         "line_linked": {
           "enable": true,
           "distance": 150,
           "color": "#000",
           "opacity": 0.4,
           "width": 1
         },
         "move": {
           "enable": true,
           "speed": 6,
           "direction": "none",
           "random": false,
           "straight": false,
           "out_mode": "out",
           "bounce": true,
           "attract": {
             "enable": false,
             "rotateX": 600,
             "rotateY": 1200
           }
         }
       },
       "interactivity": {
         "detect_on": "canvas",
         "events": {
           "onhover": {
             "enable": true,
             "mode": "repulse"
           },
           "onclick": {
             "enable": true,
             "mode": "push"
           },
           "resize": true
         },
         "modes": {
           "grab": {
             "distance": 400,
             "line_linked": {
               "opacity": 1
             }
           },
           "bubble": {
             "distance": 400,
             "size": 40,
             "duration": 2,
             "opacity": 8,
             "speed": 3
           },
           "repulse": {
             "distance": 200,
             "duration": 0.4
           },
           "push": {
             "particles_nb": 4
           },
           "remove": {
             "particles_nb": 2
           }
         }
       },
       "retina_detect": true
     }
   );
  
  

   
  
  
}
)
function move() {
  let btn = document.getElementById("LightModeToDarkMode");
  let MoveLight = btn.classList.toggle("show");
   let body=document.body
   let header=document.getElementById("navbar");
   let home=document.getElementById('home');
   let logo=document.getElementById('logo');
   const a = document.querySelector('.projectlink');
   const ab = document.querySelector('.projectlink2');
   const paragraph=document.querySelector('.paragraph');
   const paragraph2=document.querySelector('.paragraph2');
   const paragraph3=document.querySelector('.paragraph3');
   ab.classList.toggle('bright')
   a.classList.toggle("bright")
   if (MoveLight) {
       btn.innerHTML = "Dark";  
       body.classList.add('dark-mode');
       header.classList.add('light');
       home.classList.add("light");
       logo.classList.toggle("light");
       paragraph.classList.toggle('lit');
      paragraph2.classList.toggle('lit')
      paragraph3.classList.toggle('lit')
   } else {
       btn.innerHTML = "Light";  
       body.classList.remove('dark-mode');
       header.classList.remove('dark');
       header.classList.remove('light');
       
       home.classList.remove("light");
       logo.classList.toggle("light")
       paragraph.classList.toggle('lit');
       paragraph2.classList.toggle('lit')
       paragraph3.classList.toggle('lit')
   }
}

let currentIndex = 0;  
const images = document.querySelectorAll('.pre-image');
const totalImages = images.length; 

const prevButton = document.querySelector('.prev'); 
const nextButton = document.querySelector('.next'); 
const carouselSlide = document.querySelector('.carousel-slide'); 

function updateCarouselPosition() {
  const offset = -currentIndex * 100; 
  carouselSlide.style.transform = `translateX(${offset}%)`;
}


prevButton.addEventListener('click', () => {
  if (currentIndex === 0) { 
    currentIndex = totalImages - 14;
  } else {
    currentIndex--; 
  }
  updateCarouselPosition(); 
});


nextButton.addEventListener('click', () => {
  if (currentIndex === totalImages -14) {
    currentIndex = 0; 
  } else {
    currentIndex++; 
  }
  updateCarouselPosition(); 
});


let currentIndex2=0
const prevButton2 = document.querySelector('.prev2'); 
const nextButton2 = document.querySelector('.next2'); 
const carouselSlide2 = document.querySelector('.carousel-slide2'); 
function updateCarouselPosition2() {
  const offset = -currentIndex2 * 100; 
  carouselSlide2.style.transform = `translateX(${offset}%)`;
}
 
prevButton2.addEventListener('click', () => {
  if (currentIndex2 === 0) { 
    currentIndex2 = totalImages - 14;
  } else {
    currentIndex2--; 
  }
  updateCarouselPosition2(); 
});


nextButton2.addEventListener('click', () => {
  if (currentIndex2 === totalImages -14) {
    currentIndex2 = 0; 
  } else {
    currentIndex2++; 
  }
  updateCarouselPosition2(); 
});


let currentIndex3=0;
const prevButton3 = document.querySelector('.prev3'); 
const nextButton3 = document.querySelector('.next3'); 
const carouselSlide3 = document.querySelector('.carousel-slide3'); 
function updateCarouselPosition3() {
  const offset = -currentIndex3 * 100; 
  carouselSlide3.style.transform = `translateX(${offset}%)`;
}

prevButton3.addEventListener('click', () => {
  if (currentIndex3 === 0) { 
    currentIndex3 = totalImages - 16;
  } else {
    currentIndex3--; 
  }
  updateCarouselPosition3(); 
});


nextButton3.addEventListener('click', () => {
  if (currentIndex3 === totalImages -16) {
    currentIndex3 = 0; 
  } else {
    currentIndex3++; 
  }
  updateCarouselPosition3(); 
});


let currentIndex4=0;
const prevButton4 = document.querySelector('.prev4'); 
const nextButton4 = document.querySelector('.next4'); 
const carouselSlide4 = document.querySelector('.carousel-slide4'); 
function updateCarouselPosition4() {
  const offset = -currentIndex4 * 100; 
  carouselSlide4.style.transform = `translateX(${offset}%)`;
}

prevButton4.addEventListener('click', () => {
  if (currentIndex4 === 0) { 
    currentIndex4 = totalImages - 16;
  } else {
    currentIndex4--; 
  }
  updateCarouselPosition4(); 
});


nextButton4.addEventListener('click', () => {
  if (currentIndex4 === totalImages -16) {
    currentIndex4 = 0; 
  } else {
    currentIndex4++; 
  }
  updateCarouselPosition4(); 
});

