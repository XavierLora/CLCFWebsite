var prevScrollpos = window.pageYOffset;
var isNavbarAtTop = true;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    // Scrolling up
    if (!isNavbarAtTop) {
      document.getElementById("navbarId").style.top = "0";
      isNavbarAtTop = true;
    }
  } else {
    // Scrolling down
    if (isNavbarAtTop) {
      document.getElementById("navbarId").style.top = "-22vw";
      isNavbarAtTop = false;
    }
  }

  prevScrollpos = currentScrollPos;
};