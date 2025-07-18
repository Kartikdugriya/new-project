// Function to apply the saved theme
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
}

// Function to toggle theme
function toggleTheme() {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Run on page load
document.addEventListener("DOMContentLoaded", function () {
  applySavedTheme();

  const themeButton = document.getElementById("toggle-theme");
  themeButton.addEventListener("click", toggleTheme);
});