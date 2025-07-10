export function renderResults(users) {
  const container = document.getElementById('results');
  container.innerHTML = ''; // Limpiar resultados anteriores

  if (!users || users.length === 0) {
    container.innerHTML = '<p class="error">No hay resultados. ¡Prueba otro nombre!</p>';
    return;
  }

  // Crear HTML para cada usuario
  users.forEach(user => {
    const userCard = `
      <article class="user-card" tabindex="0">
        <img src="${user.avatar_url}" alt="Avatar de ${user.login}">
        <h2>${user.name || 'Sin nombre'}</h2>
        <p>@${user.login}</p>
        <p>Empresa: ${user.company || 'No especificada'}</p>
        <p>Repos: ${user.public_repos}</p>
      </article>
    `;
    container.insertAdjacentHTML('beforeend', userCard);
  });
}