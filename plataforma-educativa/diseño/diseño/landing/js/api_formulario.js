// Obtener referencia al formulario
const formulario = document.getElementById('formulario');

// Escuchar el evento submit del formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crear objeto con los datos del formulario
    const datos = { nombre, email, mensaje };

    // Enviar datos a la API de envío de correo electrónico (a través de una solicitud POST)
    fetch('https://formspree.io/f/myyrovnz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    })
    .then(response => {
        if (response.ok) {
            // Aplicar estilo de éxito al formulario
            formulario.classList.add('form-enviado');

            // Ocultar el formulario si se desea
            formulario.style.display = 'none';

            // Mostrar un mensaje de éxito
            const mensajeExito = document.createElement('div');
            mensajeExito.innerText = '¡Formulario enviado con éxito!';
            mensajeExito.classList.add('mensaje-exito');
            formulario.parentElement.appendChild(mensajeExito);

            formulario.reset(); // Reiniciar el formulario después de enviar el correo
        } else {
            throw new Error('¡Error al enviar el correo!');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('¡Error al enviar el correo!');
    });
});