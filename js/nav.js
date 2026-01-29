document.addEventListener("DOMContentLoaded", () => {
    fetch("components/nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;

            const links = document.querySelectorAll("#navbar .nav-link");

            function setActiveLink() {
                const hash = window.location.hash || "#inicio";

                links.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === hash
                    );
                });
            }

            // Activar al cargar
            setActiveLink();

            // Activar al hacer clic
            links.forEach(link => {
                link.addEventListener("click", () => {
                    setTimeout(setActiveLink, 50);
                });
            });
        });
});
