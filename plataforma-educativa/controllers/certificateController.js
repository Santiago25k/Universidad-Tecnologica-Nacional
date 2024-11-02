//certificateController
const PDFDocument = require("pdfkit");
const connection = require("../config/db");

//! Funcion para generar certificado
exports.generateCertificate = (req, res) => {
  const { id_usuario, id_curso } = req.params;

  //? consulta para obtener informacion del usuario y del curso

  const query =
    "SELECT u.nombre, u.apellido, cu.titulo FROM Usuarios u JOIN cursos cu ON cu.id_curso = ? WHERE u.id_usuario = ?;";
  connection.query(query, [id_curso, id_usuario], (err, results) => {
    if (err) {
      console.error("Error al obtener datos:", err);
      return res
        .status(500)
        .json({ error: "Error al obtener datos para el certificado" });
    }
    if (results.length === 0) {
      return res
        .status(404)
        .json({ error: "No se encontraron datos para el certificado" });
    }

    const { nombre, apellido, titulo } = results[0];

    //? crear un documento PDF
    const doc = new PDFDocument();

    //? establecer encabezados para descargar el archivo
    res.setHeader(
      "Content-disposition",
      "attachment; filename=certificado.pdf"
    );
    res.setHeader("Content-type", "application/pdf");

    //? agregar contenido al pdf
    doc.fontSize(25).text("Certificado de Finalización", { align: "center" });
    doc.moveDown();
    doc
      .fontSize(20)
      .text(`Este certificado se otorga a: ${nombre} ${apellido}`, {
        align: "center",
      });
    doc.moveDown();
    doc
      .fontSize(18)
      .text(`Por completar el curso: ${titulo}`, { align: "center" });
    doc.moveDown();
    doc
      .fontSize(12)
      .text(`Fecha de emisión: ${new Date().toLocaleDateString()}`, {
        align: "center",
      });

    //? Finalizar el PDF y enviarlo al cliente
    doc.end();
    doc.pipe(res);
  });
};
