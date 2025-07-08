// Importamos la función debounce, que nos ayudará a retrasar la búsqueda
import { debounce } from './debounce.js';

// Importamos la función que valida si la entrada del usuario es válida
import { isValidInput } from './validate.js';

// Obtenemos el input del DOM por su ID
const searchInput = document.getElementById('searchInput');

// Esta función se ejecutará cuando el usuario escriba (después del debounce)
const handleSearch = (event) => {
  // Obtenemos el texto escrito y eliminamos espacios al inicio/final
  const query = event.target.value.trim();

  // Validamos que la entrada sea válida 
  if (!isValidInput(query)) {
    console.log(' Entrada inválida !');
    return;
  }

  // Si es válida, mostramos en consola lo que el usuario está buscando
  console.log('Buscando:', query);
};

// Asociamos el evento 'input' con la función de búsqueda, usando debounce
// Esto evita que la función se ejecute en cada tecla presionada y solo lo haga cuando el usuario deje de escribir por 500ms
searchInput.addEventListener('input', debounce(handleSearch, 500));
