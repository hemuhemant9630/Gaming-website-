// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Adding animation effect to the hero section
const heroContent = document.querySelector('.hero-content');
heroContent.style.opacity = '0';
setTimeout(() => {
    heroContent.style.transition = 'opacity 1s ease-in-out';
    heroContent.style.opacity = '1';
}, 500);


//js for menu on purchase page
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form');
    const selectedCountry = document.getElementById("selectedCountry");
    const selectedDevice = document.getElementById("selectedDevice");
    const selectedEdition = document.getElementById("selectedEdition");
  
    form.addEventListener('change', function() {
        selectedCountry.textContent = form.elements['COUNTRY'].value;
        selectedDevice.textContent = form.elements['DEVICE'].value;
        selectedEdition.textContent = form.elements['EDITION'].value;
    });
  });
  


  