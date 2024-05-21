const menuItems = document.querySelectorAll('.navItem');
const blurOverlay = document.querySelector('.blur');
const iconNav = document.querySelector('.iconNav');

menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        closeNav();
    })
})

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
    blurOverlay.style.visibility = 'visible'
    iconNav.style.visibility = 'hidden';
  };
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    blurOverlay.style.visibility = 'hidden'
    iconNav.style.visibility = 'visible';
  }

  // Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

// BG
const imgLinks = [
  "url('./static/images/DSC01550.jpg')",
  "url('./static/images/DSC01697.jpg')",
];
const delay = 5000;
let currentIndex = 0;
setInterval(function() {
  document.querySelector('#about .carousel').style.backgroundImage = imgLinks[currentIndex];
  currentIndex++;
  if(currentIndex >= imgLinks.length) {
      currentIndex = 0;
  }
}, delay);