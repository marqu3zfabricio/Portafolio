
// Ocultar el main INMEDIATAMENTE antes de que aparezca en pantalla
document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    
    // Ocultar antes de que cargue todo
    main.style.opacity = "0";
    main.style.transform = "translateY(200px)";
});

// Ahora esperar a que exista el navbar y luego animar
window.addEventListener("load", () => {
    const main = document.querySelector("main");

    // Esperar a que nav.js inserte el nav
    const interval = setInterval(() => {
        const nav = document.querySelector("nav");

        if (nav) {
            clearInterval(interval);

            // Añadimos transición por JS
            main.style.transition = "transform 0.7s ease-out";

            // Ejecutamos animación
            setTimeout(() => {
                main.style.transform = "translateY(0)";
                main.style.opacity = "1";
            }, 50);
        }
    }, 30);
});
