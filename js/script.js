const darkModeBtn = document.getElementById("darkModeToggle");

// Check if dark mode is saved in localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  darkModeBtn.textContent = "☀"; // Change icon to sun
}

// Toggle dark mode
darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    darkModeBtn.textContent = "☀"; // Switch to sun icon
  } else {
    localStorage.setItem("darkMode", "disabled");
    darkModeBtn.textContent = "🌙"; // Switch to moon icon
  }
});

// Sticky navbar effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
