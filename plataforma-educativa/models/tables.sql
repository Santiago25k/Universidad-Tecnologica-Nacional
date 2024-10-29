CREATE TABLE Usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    pass VARCHAR(255) NOT NULL,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Cursos (
    id_curso INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    descripcion TEXT,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    duracion INT NOT NULL
);

create table Inscripciones (
    id_inscripcion int AUTO_INCREMENT PRIMARY key,
    id_usuario int not null,
    id_curso int not null,
    fecha_inscripcion datetime DEFAULT CURRENT_TIMESTAMP,
    foreign key (id_usuario) references Usuarios(id_usuario),
    foreign key (id_curso) references Cursos(id_curso)

);

create table Certificados (
    id_certificado int AUTO_INCREMENT PRIMARY key,
    id_usuario int not null,
    id_curso int not null,
    fecha_emision datetime DEFAULT CURRENT_TIMESTAMP,
    foreign key (id_usuario) references Usuarios(id_usuario),
    foreign key (id_curso) references Cursos(id_curso)

);

