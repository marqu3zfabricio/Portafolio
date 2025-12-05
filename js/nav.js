document.addEventListener("DOMContentLoaded", () => {
    fetch("components/nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;

            // Activar el enlace actual automáticamente
            const current = window.location.pathname.split("/").pop();
            document.querySelectorAll("#navbar .nav-link").forEach(link => {
                if (link.getAttribute("href") === current) {
                    link.classList.add("active");
                }
            });
        });
});
