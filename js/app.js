const toggle = document.querySelector(".toggle"),
    menuDashboard = document.querySelector(".menu-dashboard"),
    iconoMenu = toggle.querySelector("i"),
    enlacesMenu = document.querySelectorAll(".enlace");

function playVideo(id) {
    // Oculta todos los videos
    let videos = document.querySelectorAll('iframe');
    videos.forEach(video => video.style.display = 'none');

    // Muestra el video correspondiente al ID
    let video = document.getElementById(id);
    if (video) {
        video.style.display = 'block';
    }
}

document.querySelectorAll('.video-container').forEach((container, index) => {
    container.addEventListener('click', () => {
        playVideo('youtube-video-' + (index + 1));
    });
});

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
