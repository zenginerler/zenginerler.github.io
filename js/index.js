//temporary js scripts

// Handle resizing window
var viewportHeight = window.innerHeight;
var viewportWidth = window.innerWidth;
window.addEventListener("resize", updateViewport);
function updateViewport() {
  viewportHeight = window.innerHeight;
  viewportWidth = window.innerWidth;

  //navigation bar adjustments
  if (viewportWidth < 800){
    document.getElementById("bannerLeft").style.display = "none";
    document.getElementById("bannerRight").style.display = "none";
  } else {
    document.getElementById("bannerLeft").style.display = "flex";
    document.getElementById("bannerRight").style.display = "flex";
  }
}


// Hide-unhide navigation bar according to the scroll direction
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  //color transition
  var color = "transparent"
  if (currentScrollPos > Math.max(viewportHeight, 800)){
    color = "#1E1E1E"
  }else {
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

