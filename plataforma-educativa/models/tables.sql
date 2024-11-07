CREATE TABLE Usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    pass VARCHAR(255) NOT NULL,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
    rol ENUM('usuario', 'administrador') DEFAULT 'usuario'
);

CREATE TABLE Cursos (
    id_curso INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    descripcion TEXT,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    duracion varchar(50) NOT NULL-- Considera agregar 'unidad_duracion' si es necesario
);

CREATE TABLE Inscripciones (
    id_inscripcion INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_curso INT NOT NULL,
    fecha_inscripcion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_curso) REFERENCES Cursos(id_curso) ON DELETE CASCADE
);

CREATE TABLE Certificados (
    id_certificado INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_curso INT NOT NULL,
    fecha_emision DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_curso) REFERENCES Cursos(id_curso) ON DELETE CASCADE
);

CREATE TABLE Progresos (
    id_progreso INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_curso INT NOT NULL,
    temas_completados INT DEFAULT 0,
    porcentaje DECIMAL(5, 2) DEFAULT 0, -- Precisión para porcentaje exacto
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_curso) REFERENCES Cursos(id_curso) ON DELETE CASCADE
);
