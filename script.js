const sidebar = document.getElementById("sidebar");
const toggleSidebar = document.getElementById("toggleSidebar");
const toggleTheme = document.getElementById("toggleTheme");

// Sidebar Toggle
toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Theme Toggle
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Save theme preference
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Load theme on reload
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
};