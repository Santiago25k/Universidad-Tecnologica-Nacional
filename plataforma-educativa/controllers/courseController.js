//simulamos array de cursos como ejemplo

const courses = [
    { id: 1, name: 'Curso 1', price: 100 },
    { id: 2, name: 'Curso 2', price: 200 },
];

//obtener todos los cursos
exports.getAllCourses = (req, res) => {
    res.json(courses)
};

//obtener un curso por ID
exports.getCourseById = (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(course => course.id === courseId);

    if(!course){
        return res.status(404).json({ message: 'Curso no encontrado'})
    }
    
    res.json(course);
};

