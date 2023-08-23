const onlySpaces = /^\s*$/;
const firstCharacterIsSpace = /^\s/;
const twoOrMoreSpaces = / {2,}/;
const rareCharacters = /["$%\/=¿¡*^\[\]{}]/;
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass = /\d/;

export default function verifySignUpInputs(input) {

  if (input.first_name) {

    // --------------------------- first_name ------------------------------
  
    if (onlySpaces.test(input.first_name)) {
      return "Debes escribir tu nombre."
    }
  
    if (firstCharacterIsSpace.test(input.first_name)) {
      return "El primer caracter de tu nombre es un espacio."
    }
  
    if (twoOrMoreSpaces.test(input.first_name)) {
      return "No puedes poner dos o más espacios en tu nombre."
    }
  
    if (rareCharacters.test(input.first_name)) {
      return "Tu nombre tiene caracteres inválidos."
    }
  
    if (input.first_name.length < 2) {
      return "Tu nombre debe tener más de dos letras."
    }
  
    // --------------------------- last_name -------------------------------
  
    if (onlySpaces.test(input?.last_name)) {
      return "Debes escribir tu apellido."
    }
  
    if (firstCharacterIsSpace.test(input?.last_name)) {
      return "El primer caracter de tu apellido es un espacio."
    }
  
    if (twoOrMoreSpaces.test(input?.last_name)) {
      return "No puedes poner dos o más espacios en tu apellido."
    }
  
    if (rareCharacters.test(input?.last_name)) {
      return "Tu apellido tiene caracteres inválidos."
    }
  
    if (input?.last_name?.length < 2) {
      return "Tu apellido debe tener más de dos letras."
    }
  
    // --------------------------- email -----------------------------------
  
    if (onlySpaces.test(input.email)) {
      return "Debes escribir tu email."
    }
  
    if (!regexEmail.test(input.email)) {
      return "Debes ingresar un email válido."
    }
  
    // --------------------------- password --------------------------------
  
    if (onlySpaces.test(input.password)) {
      return "Debes escribir tu contraseña."
    }
  
    if(!regexPass.test(input.password)){
      return "La contraseña debe tener un número."
  }
  
    // ---------------------------------------------------------------------
  
    return "valid"

  } else {

    // --------------------------- company_name ------------------------------
  
    if (onlySpaces.test(input.first_name)) {
      return "Debes escribir el nombre de tu empresa."
    }
  
    if (firstCharacterIsSpace.test(input.first_name)) {
      return "El primer caracter del nombre es un espacio."
    }
  
    if (twoOrMoreSpaces.test(input.first_name)) {
      return "No puedes poner dos o más espacios en el nombre."
    }
  
    if (rareCharacters.test(input.first_name)) {
      return "El nombre de tu empresa tiene caracteres inválidos."
    }
  
    if (input.first_name.length < 2) {
      return "El nombre de tu empresa debe tener más de dos letras."
    }
  
    // --------------------------- email -----------------------------------
  
    if (onlySpaces.test(input.email)) {
      return "Debes escribir el email de tu empresa."
    }
  
    if (!regexEmail.test(input.email)) {
      return "Debes ingresar un email válido."
    }
  
    // --------------------------- password --------------------------------
  
    if (onlySpaces.test(input.password)) {
      return "Debes escribir una contraseña."
    }
  
    if(!regexPass.test(input.password)){
      return "La contraseña debe tener un número."
  }
  
    // ---------------------------------------------------------------------
  
    return "valid"
  }
}
