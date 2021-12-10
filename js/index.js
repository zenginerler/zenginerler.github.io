// Main JavaScript Functionality
(function () {
  "use strict";

  // Global Variables
  var viewportHeight = window.innerHeight;
  var viewportWidth = window.innerWidth;
  var prevScrollpos = window.pageYOffset;

  // Hide-unhide navigation bar according to the scroll direction
  // ------------------------------------------------------------
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    //color transition
    var color = "transparent"
    if (currentScrollPos > Math.max(viewportHeight, 800)) {
      color = "#0a0a0a"
    } else {
      color = "transparent"
    }

    if (prevScrollpos > currentScrollPos) { //scrolling up
      document.getElementById("bannerScroll").style.top = "0";
      document.getElementById("bannerScroll").style.backgroundColor = color;
    } else { //scrolling down
      document.getElementById("bannerScroll").style.top = "-60px";
      document.getElementById("bannerScroll").style.backgroundColor = color;
    }
    prevScrollpos = currentScrollPos;
  }


  // Handle resizing window
  // ------------------------------------------------------------
  function updateViewport() {
    viewportHeight = window.innerHeight;
    viewportWidth = window.innerWidth;

    //navigation bar adjustments
    if (viewportWidth < 800) {
      document.getElementById("profile_pic1").style.display = "none";
      document.getElementById("profile_pic2").style.display = "block";
      document.getElementById("aboutMe_content_text").style.textAlign = "center";
    } else {
      document.getElementById("profile_pic1").style.display = "block";
      document.getElementById("profile_pic2").style.display = "none";
      document.getElementById("aboutMe_content_text").style.textAlign = "none";
    }
  }
  window.addEventListener("resize", updateViewport);


  // Handle go to the top of the page button
  // ------------------------------------------------------------
  function showUpButton() {
    const upButtonPx = 700;
    const goTopButton = document.querySelector(".go-top-button");

    // Show/hide the button
    if (window.scrollY >= upButtonPx) {
      if (!goTopButton.classList.contains('button-is-visible')) goTopButton.classList.add("button-is-visible")
    } else {
      goTopButton.classList.remove("button-is-visible")
    }
  }
  window.addEventListener('scroll', showUpButton);

})();