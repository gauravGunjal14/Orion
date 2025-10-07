// Dark Mode and Light Mode
const toggelBtn = document.getElementById("toggelBtn");
const themeIcon = document.getElementById("themeIcon")
const body = document.querySelector("body");

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeIcon.src = "/public/icons/dark-mode.png";
}

toggelBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        themeIcon.src = "/public/icons/dark-mode.png";
        localStorage.setItem("theme", "light");
    }
    else {
        themeIcon.src = "/public/icons/light-mode.png";
        localStorage.setItem("theme", "dark");
    }
});

// menuIcon logic
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.add("show");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
    navLinks.classList.remove("show");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
});

const allLinks = document.querySelectorAll(".nav-links a");
allLinks.forEach(link => {
    link.addEventListener("click", () => {
        if(navLinks.classList.contains("show")){
        navLinks.classList.remove("show");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        }
    });
});

// Service Worker code for installation
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js")
      .then((reg) => console.log("✅ Service Worker registered:", reg.scope))
      .catch((err) => console.log("❌ Service Worker registration failed:", err));
  });
}
