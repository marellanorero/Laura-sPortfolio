const toggle = document.querySelector(".toggle"),
    menuDashboard = document.querySelector(".menu-dashboard"),
    iconoMenu = toggle.querySelector("i"),
    enlacesMenu = document.querySelectorAll(".enlace");

function playVideo1() {
    document.querySelector(".video-container").style.display = "none";
    document.getElementById("youtube-video-1").style.display = "block";
}

toggle.addEventListener("click", () => {
    menuDashboard.classList.toggle("open");
    iconoMenu.classList.contains("bx-menu") 
        ? iconoMenu.classList.replace("bx-menu", "bx-x") 
        : iconoMenu.classList.replace("bx-x", "bx-menu");
});

enlacesMenu.forEach((e) => {
    e.addEventListener("click", () => {
        menuDashboard.classList.remove("open");
        iconoMenu.classList.replace("bx-x", "bx-menu");
    });
});
