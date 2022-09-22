export const registerPageformValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener @'],
  password: [
    (value) => value.length >= 6,
    'El password debe de tener más de 6 caracteres',
  ],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const loginPageformValidations = {
  email: [(value) => value.includes('@'), 'El correo no es válido'],
  password: [(value) => value.length > 0, 'La contraseña no puede estar vacía'],
}
