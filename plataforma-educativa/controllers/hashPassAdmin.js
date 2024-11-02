//! este archivo es para hashear contraseñas de administradores

const bcrypt = require('bcryptjs');

const password = "orejotitas123";
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(password, salt);

console.log(hashedPassword);

