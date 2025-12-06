
window.addEventListener('load', () => {
    // Seleccionamos solo el contenido dentro de <main>
    const mainContent = document.querySelector('main');

    // Partimos de una posición abajo
    mainContent.style.transform = 'translateY(70px)';
    mainContent.style.transition = 'transform 0.4s ease-out';

    // Ejecutamos la animación después de un pequeño delay
    setTimeout(() => {
        mainContent.style.transform = 'translateY(0)';
    }, 100);
});
