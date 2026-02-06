'use strict';



/*ADD EVENT ON ELEMENT*/
const addEventOnElement = function (element, type, listener) {
  if (element.length > 1) {
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener(type, listener);
    }
  } else {
    element.addEventListener(type, listener);
  }
}

/*TOGGLE NAVIGATION BAR*/
const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOnElement(navToggler, "click", toggleNav);


const closeNav = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

/*FUNCTION TO TOGGLE FAVORITE PROPERTIES*/
function toggleFavorite(button) {
  var icon = button.querySelector('ion-icon');
  var isFavorite = icon.getAttribute('name') === 'heart';

  if (isFavorite) {
    icon.setAttribute('name', 'heart-outline');
  } else {
    icon.setAttribute('name', 'heart');
  }
}

function showBanner() {
  var bannerImage = document.querySelector('.img-cover');
  bannerImage.style.display = 'block';
}

/*FUNCTION TO PLAY VIDEO IN THE ABOUT TAB*/
function toggleVideo() {
  var videoPlayer = document.querySelector('.video-player');
  var playButton = document.querySelector('.play-btn');

  if (videoPlayer.paused) {
    videoPlayer.play();
    playButton.style.display = 'none';
  } else {
    videoPlayer.pause();
    playButton.style.display = 'block';
  }
}

function showThumbnail() {
  var bannerImage = document.querySelector('.img-cover');
  var videoPlayer = document.querySelector('.video-player');
  var playButton = document.querySelector('.play-btn');

  bannerImage.style.display = 'block';
  videoPlayer.style.display = 'none';
  playButton.style.display = 'block';
}

window.addEventListener('DOMContentLoaded', function() {
  var bannerImage = document.querySelector('.img-cover');
  var playButton = document.querySelector('.play-btn');
  var videoPlayer = document.querySelector('.video-player');

  // Show the thumbnail initially
  showThumbnail();

  playButton.addEventListener('click', function() {
    bannerImage.style.display = 'none';
    videoPlayer.style.display = 'block';
    toggleVideo();
  });

  videoPlayer.addEventListener('click', function() {
    toggleVideo();
  });

  videoPlayer.addEventListener('ended', function() {
    showThumbnail();
  });

  // Check if the video metadata is loaded
  videoPlayer.addEventListener('loadedmetadata', function() {
    showThumbnail();
  });
});

addEventOnElement(navLinks, "click", closeNav);

/*ADD ACTIVE CLASS TO HEADER AND BACK TO TOP BUTTON*/
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/*BUY/SELL/RENT BUTTONS*/
const tabBtns = document.querySelectorAll("[data-tab-btn]");

let lastClickedTabBtn = tabBtns[0];

const changeTab = function () {
  lastClickedTabBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedTabBtn = this;
}

addEventOnElement(tabBtns, "click", changeTab);