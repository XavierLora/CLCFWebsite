var navbar = document.getElementById("navbarId");
var image = document.getElementById("contactUsContainer");

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // Image is in view
      navbar.style.top = "0";
    } else {
      // Image is out of view
      navbar.style.top = "-30vw"; // Adjust this value as needed
    }
  });
}, { threshold: 0.975 }); // Adjust the threshold as needed

// Start observing the image
observer.observe(image);