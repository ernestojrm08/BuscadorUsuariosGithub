/**
 * searchGitHubUsers: Busca usuarios en GitHub y obtiene detalles individuales
 * @param {string} query - Texto que el usuario ingresó
 * @returns {Promise<Array>} - Arreglo con los usuarios encontrados con información completa
 */
export async function searchGitHubUsers(query) {
  const apiUrl = `https://api.github.com/search/users?q=${query}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);

    const data = await response.json();
    const basicUsers = data.items.slice(0, 3); // solo los primeros 3

    // Hacemos una petición adicional por cada usuario
    const detailedUsers = await Promise.all(
      basicUsers.map(async (user) => {
        const detailRes = await fetch(`https://api.github.com/users/${user.login}`);
        const detailData = await detailRes.json();

        return {
          ...user,
          name: detailData.name,
          company: detailData.company,
          public_repos: detailData.public_repos,
        };
      })
    );

    return detailedUsers;
  } catch (error) {
    console.error('❌ Error al buscar usuarios en GitHub:', error.message);
    return [];
  }
}

