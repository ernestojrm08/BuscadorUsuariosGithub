/**
 * isValidInput: Valida que la entrada del usuario sea aceptable para buscar en GitHub
 * @param {string} input - El texto que escribió el usuario
 * @returns {boolean} - true si es válido, false si no
 */
export function isValidInput(input) {
  const minLength = 3;

  // GitHub solo permite letras, números y guiones para nombres de usuario
  const validCharacters = /^[a-zA-Z0-9-]+$/;

  // Verificamos que:
  // 1. Tenga al menos 3 caracteres
  // 2. Solo use caracteres válidos
  return input.length >= minLength && validCharacters.test(input);
}
