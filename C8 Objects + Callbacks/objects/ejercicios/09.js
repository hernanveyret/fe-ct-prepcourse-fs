function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  const usuario = {
    nombre,
    email,
    password
  }
  return usuario;
}

module.exports = nuevoUsuario;
