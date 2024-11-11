// Define an array of image objects with paths relative to the HTML file's location
const images = [
    { src: "public/images/FB_IMG_1.jpg", alt: "First Image" },
    { src: "public/images/FB_IMG_2.jpg", alt: "Second Image" },
    { src: "public/images/FB_IMG_3.jpg", alt: "Third Image" },
    { src: "public/images/FB_IMG_4.jpg", alt: "Fourth Image" },
    { src: "public/images/FB_IMG_5.jpg", alt: "Fifth Image" },
    { src: "public/images/FB_IMG_6.jpg", alt: "Sixth Image" }
];

// Function to update the image with a fade effect
function updateImage(index) {
    const imgElement = document.getElementById("imgg");

    // Add the fade-out class to start the fade-out transition
    imgElement.classList.add("fade-out");

    // Wait for the fade-out transition to complete before changing the image
    setTimeout(() => {
        imgElement.src = images[index].src;
        imgElement.alt = images[index].alt;

        // Remove the fade-out class to start the fade-in transition
        imgElement.classList.remove("fade-out");
    }, 1000); // Match this delay with the CSS transition duration
}

// Set the initial image when the page loads
document.addEventListener("DOMContentLoaded", () => {
    updateImage(0); // Set to the first image in the array
});

// Change image every 5 seconds
let currentIndex = 0;
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
}, 5000);


// contact

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the formData to your server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    this.reset();
});

document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('newsletterEmail').value;

    // Here you would typically send the email to your server for newsletter signup
    console.log('Newsletter signup:', email);
    
    // Show success message
    alert('Thank you for subscribing to our newsletter!');
    
    // Reset form
    this.reset();
});

// navBar

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside of it
    document.addEventListener('click', function(event) {
        const isClickInside = sidebar.contains(event.target) || menuToggle.contains(event.target);
        if (!isClickInside && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
});

// About
document.addEventListener('DOMContentLoaded', () => {
    const workLink = document.querySelector('.menu .active');
    workLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Dropdown functionality would go here');
    });

    const backLink = document.querySelector('.back-link');
    backLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Simulating going back in history
        console.log('Going back to all templates');
    });
});