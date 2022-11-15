-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-07-2022 a las 14:01:32
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_utn`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `ID_PELICULA` int(3) NOT NULL,
  `NOMBRE` varchar(255) NOT NULL,
  `FECHA` datetime NOT NULL,
  `PAIS` varchar(45) NOT NULL,
  `COMENTARIOS` varchar(255) NOT NULL,
  `TIPO` varchar(45) NOT NULL COMMENT 'Identifica si es Pelicula o Serie',
  `IMG` varchar(255) DEFAULT NULL COMMENT 'Nombre de la imagen en formato WEBP'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tabla que guarda las peliculas';

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`ID_PELICULA`, `NOMBRE`, `FECHA`, `PAIS`, `COMENTARIOS`, `TIPO`, `IMG`) VALUES
(1, 'Jurassic World: Dominion (2022)', '2022-06-01 00:00:00', 'USA', 'Cuatro años después de la destrucción de Isla Nublar, los dinosaurios conviven – y cazan – con los seres humanos en todo el mundo. Este frágil equilibrio cambiará el futuro y decidirá, de una vez por todas, si los seres humanos seguirán en la cúspide de l', 'Pelicula', 'Jurassic_World_Dominion.webp'),
(3, 'Obi-Wan Kenobi (2022)', '2022-05-26 00:00:00', 'USA', 'Se centra en Obi-Wan Kenobi 10 años después del final de las Guerras Clon, donde enfrentó su mayor derrota; la caída y corrupción de su mejor amigo y aprendiz de Jedi, Anakin Skywalker se convirtió en el malvado Lord Sith Darth Vader.', 'Serie', 'Obi-Wan-Kenobi.webp'),
(4, 'Doctor Strange en el multiverso de la locura (2022)', '2022-05-04 00:00:00', 'USA', 'Viaja a lo desconocido con el Doctor Strange, quien, con la ayuda de tanto antiguos como nuevos aliados místicos, recorre las complejas y peligrosas realidades alternativas del multiverso para enfrentarse a un nuevo y misterioso adversario.', 'Pelicula', 'Doctor_Strange_multiverso_de_la_locura.webp'),
(5, 'Love, Victor (2020)', '2022-06-17 00:00:00', 'USA', 'Basada en la novela para jóvenes de Becky Albertalli ‘Simon vs. the Homo Sapiens Agenda’, que inspiró el largometraje ‘Love, Simon’. ‘Love, Victor’ sigue a Victor, un nuevo estudiante de Creekwood High School en su autodescubrimiento, enfrentándose a prob', 'Serie', 'Love_Victor.webp'),
(6, 'Peaky Blinders (2013)', '2013-09-12 00:00:00', 'USA', 'La serie está ambientada en el mundo de los gangsters de los años 20, en Birmingham. Un joven a lomos de un hermoso corcel negro recorre las calles de Birmingham (Inglaterra). Estamos en 1919, la Gran Guerra ha terminado, pero aquel individuo posee el don', 'Serie', 'Peaky_Blinders.webp');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`ID_PELICULA`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `ID_PELICULA` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
