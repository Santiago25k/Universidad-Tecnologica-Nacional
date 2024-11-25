//simulamos array de cursos como ejemplo

const cours = [
    { id: 1, name: 'Curso 1', price: 100 },
    { id: 2, name: 'Curso 2', price: 200 },
];

//obtener todos los cursos
exports.getAllCours = (req, res) => {
    res.json(cours)
};

//obtener un curso por ID
exports.getCoursById = (req, res) => {
    const coursId = parseInt(req.params.id);
    const cours = cours.find(cours => cours.id === coursId);

    if(!cours){
        return res.status(404).json({ message: 'Curso no encontrado'})
    }
    
    res.json(cours);
};

