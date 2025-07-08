/**
 * debounce: Retrasa la ejecución de una función hasta que pase un tiempo sin que sea llamada nuevamente
 * @param {Function} callback - La función que queremos ejecutar
 * @param {number} delay - El tiempo en milisegundos que esperamos antes de ejecutar la función
 */
export function debounce(callback, delay = 300) {
  let timeoutId;

  return (...args) => {
    // Si el usuario sigue escribiendo, cancelamos el timeout anterior
    clearTimeout(timeoutId);

    // Programamos una nueva llamada al callback después del tiempo indicado
    timeoutId = setTimeout(() => {
      callback(...args); // Ejecutamos la función original con los mismos argumentos
    }, delay);
  };
}
