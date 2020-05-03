let hamburger = document.querySelector('.nav__trigger');
let nav = document.querySelector('.nav');
let navbarWidth = nav.getBoundingClientRect().width;

document.querySelector('.nav__trigger').addEventListener('click', event => {
    let navBody = document.querySelector('.nave');
    if (navBody.classList.contains("nav--active")) {
        navBody.classList.remove("nav--active");
        nav.classList.remove("navbarsize")
    } else {
        navBody.classList.add("nav--active");
        nav.classList.add("navbarsize");
        nav.style.transform = 'translate3d(-' + navbarWidth + 'px, 0, 0)';
    }
})

/* Open when someone clicks on the span element */
function openSearch() {
    hamburger.style.visibility = 'hidden';
    document.getElementById("search").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
function closeSearch() {
    hamburger.style.visibility = 'visible';
    document.getElementById("search").style.width = "0%";
}
  
// slider
// Get the video
var video = document.getElementById("bgvid");

// Get the button
var btn = document.getElementById("btnpause");

// Pause and play the video, and change the button text
function pauseVid() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}