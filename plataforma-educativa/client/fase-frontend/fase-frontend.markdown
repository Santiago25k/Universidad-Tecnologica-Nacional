## 3. Fase de Desarrollo del Frontend

### 3.1 HTML y CSS
- Crear páginas principales
  - 3.1.1 Página de inicio
    - Lista de cursos
    - Información sobre la plataforma
    - Acceso a inicio de sesión y registro
  - 3.1.2 Página de autenticación
    - **Formulario de inicio de sesión**: ingreso de credenciales
    - **Formulario de registro**: nombre, correo electrónico, contraseña
  - 3.1.3 Página del curso
    - Detalles del curso
    - Opciones de suscripción
    - Visualización del progreso
  - 3.1.4 Perfil de usuario
    - Información personal
    - Progreso en cursos
    - Acceso a certificados y comentarios

### 3.2 JavaScript para Interactividad

- 3.2.1 Validación de formularios
  - Verificar campos de **registro** e **inicio de sesión**
  - Mostrar mensajes de error si hay campos incompletos o incorrectos

- 3.2.2 Manejo de autenticación
  - **Guardar y gestionar el token**
    - Guardar JWT en `localStorage` o `sessionStorage` tras el inicio de sesión
  - **Incluir token en solicitudes protegidas**
    - Añadir token a cabeceras en cada solicitud para verificar autenticación en backend

- 3.2.3 Navegación y visibilidad de secciones
  - **Mostrar/ocultar secciones** según estado del usuario
    - **Si autenticado**: perfil de usuario y progreso en cursos
    - **Si no autenticado**: opciones de registro e inicio de sesión