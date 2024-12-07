// Get the current page URL
const currentPage = window.location.pathname;

// Select all navigation links
const links = document.querySelectorAll("a");

// Add the active class to the matching link
links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

alert(currentPage);

// Sidebar and menu icon toggle functionality
const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.getElementById("sidebar");
const overlay = document.createElement("div");

// Create and append the overlay
overlay.id = "overlay";
document.body.appendChild(overlay);

// Toggle sidebar and overlay visibility
menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
  menuIcon.classList.toggle("open");
});

// Close sidebar when overlay is clicked
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  menuIcon.classList.remove("open");
});

// Close sidebar when a link is clicked
const links = sidebar.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    menuIcon.classList.remove("open");
  });
});
cd 