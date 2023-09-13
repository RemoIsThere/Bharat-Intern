const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const isDarkMode = localStorage.getItem("darkMode") === "disabled";

// Function to enable dark mode
function enableDarkMode() {
  body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
}

// Function to disable dark mode
function disableDarkMode() {
  body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "disabled");
}

if (isDarkMode) {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});
