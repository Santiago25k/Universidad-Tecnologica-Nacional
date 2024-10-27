//simulamos array de usuarioscomo ejemplo

const users = [
    { id: 1, name: 'Melany', apellido: 'Parrado'},
    { id: 2, name: 'Camila', apellido: 'Rodriguez'},
];

//obtener todos los usuarios
exports.getAllUsers = (req, res) => {
    res.json(users)
};

//obtener un usuario por ID
exports.getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);

    if(!user){
        return res.status(404).json({ message: 'Usuario no encontrado'})
    }
    
    res.json(user);
};

