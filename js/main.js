// Importamos la función debounce, que nos ayudará a retrasar la búsqueda
import { debounce } from './debounce.js';

// Importamos la función que valida si la entrada del usuario es válida
import { isValidInput } from './validate.js';

// Importamos la función que conecta con la API de GitHub
import { searchGitHubUsers } from './api.js';

// Obtenemos el input del DOM por su ID
const searchInput = document.getElementById('searchInput');

// Esta función se ejecutará cuando el usuario deje de escribir (debounce)
const handleSearch = async (event) => {
  const query = event.target.value.trim();

  // Validamos el input (mínimo 3 caracteres y sin símbolos raros)
  if (!isValidInput(query)) {
    console.log('⛔ Entrada inválida !');
    return;
  }

  // Mostramos lo que está buscando el usuario
  console.log('🔍 Buscando:', query);

  // Llamamos a la API de GitHub para obtener usuarios relacionados
  const users = await searchGitHubUsers(query);

  // Mostramos en consola los usuarios que nos devolvió la API
  console.log('✅ Usuarios encontrados:', users);
};

// Asociamos el evento al input, con debounce para optimizar peticiones
searchInput.addEventListener('input', debounce(handleSearch, 500));
