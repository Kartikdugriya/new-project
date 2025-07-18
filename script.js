// Dynamic Project List
const projects = [
  {
    title: "Form Validation",
    image: "assets/images/form.png",
    description: "A fully functional form with validation and error handling.",
    link: "#"
  },
  {
    title: "Image Slider",
    image: "assets/images/slider.png",
    description: "Responsive image carousel using JS.",
    link: "#"
  }
];

const container = document.getElementById("project-container");
projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${p.image}" alt="${p.title}" />
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <a href="${p.link}" target="_blank">View Project</a>
  `;
  container.appendChild(card);
});

// Theme Toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
});

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }
});