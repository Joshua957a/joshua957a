function validarFormulario() {
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const carrera = document.getElementById('carrera').value.trim();
    const semestre = document.getElementById('semestre').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const curp = document.getElementById('curp').value.trim();
    const correo = document.getElementById('correo').value.trim();

    const errorMensaje = document.getElementById('errorMensaje');
    errorMensaje.textContent = ''; // Limpiar mensajes de error previos

    // Validar campos vacíos
    if (!nombre || !carrera || !semestre || !edad || !curp || !correo) {
        errorMensaje.textContent = 'Por favor, complete todos los campos obligatorios.';
        return;
    }

    // Validar que los números sean positivos
    if (semestre <= 0 || edad <= 0) {
        errorMensaje.textContent = 'El semestre y la edad deben ser valores positivos.';
        return;
    }

    // Si todo está bien, mostrar un mensaje de éxito
    alert('Formulario enviado exitosamente.');
}
