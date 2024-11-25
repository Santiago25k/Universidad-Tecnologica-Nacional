// Cargar el archivo de sonido
const sound = new Audio('./sounds/jump1.mp3'); // Asegúrate de que el archivo esté en esta ruta

// Seleccionar las imágenes que activarán el sonido
const icons = document.querySelectorAll('.icon');

// Añadir el evento 'click' para cada imagen
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        sound.currentTime = 0; // Reiniciar el sonido cada vez que se haga clic
        sound.play(); // Reproducir el sonido
    });
});