/**
 * searchGitHubUsers: Busca usuarios en GitHub por nombre de usuario
 * @param {string} query - Texto que el usuario ingresó
 * @returns {Promise<Array>} - Arreglo con los usuarios encontrados
 */
export async function searchGitHubUsers(query) {
  const apiUrl = `https://api.github.com/search/users?q=${query}`;

  try {
    const response = await fetch(apiUrl);
    
    // Si la respuesta no fue exitosa, lanzamos error
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    // Nos interesa el array 'items' que contiene los usuarios encontrados
    return data.items.slice(0, 3); // Solo los primeros 3
  } catch (error) {
    console.error('❌ Error al buscar usuarios en GitHub:', error.message);
    return [];
  }
}
