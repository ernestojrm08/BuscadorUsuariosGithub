const btn = document.getElementById('search-btn');
const input = document.getElementById('search-input');
const results = document.getElementById('results-container');
const loader = document.getElementById('loader');
const themeToggle = document.getElementById('theme-toggle');

// Aplicar tema guardado o predeterminado
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

// Alternar tema manual
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', nextTheme);
  localStorage.setItem('theme', nextTheme);
  themeToggle.textContent = nextTheme === 'dark' ? '☀️' : '🌙';
});

// Buscar usuario en GitHub
btn.addEventListener('click', () => {
  const user = input.value.trim();
  if (!user) return;

  results.innerHTML = '';
  loader.classList.remove('hidden');

  fetch(`https://api.github.com/users/${user}`)
    .then(res => res.json())
    .then(data => {
      loader.classList.add('hidden');
      if (data.message === "Not Found") {
        results.innerHTML = `<p>Usuario no encontrado.</p>`;
      } else {
        results.innerHTML = `
          <div class="user-card">
            <img src="${data.avatar_url}" alt="Avatar de ${data.login}">
            <div class="user-info">
              <h2>${data.name || data.login}</h2>
              <p>@${data.login}</p>
              <p>Empresa: ${data.company || 'No registrada'}</p>
              <p>Repositorios públicos: ${data.public_repos}</p>
            </div>
          </div>
        `;
      }
    })
    .catch(() => {
      loader.classList.add('hidden');
      results.innerHTML = `<p>Error al buscar el usuario.</p>`;
    });
});
