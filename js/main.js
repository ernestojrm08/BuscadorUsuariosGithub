// Main (actualizado)
import { debounce } from './debounce.js';
import { isValidInput } from './validate.js';
import { searchGitHubUsers } from './api.js';
import { renderResults } from './render.js';
import { showError } from './errorHandler.js';
import { initAccessibility } from './accessibility.js';

// Iniciar accesibilidad
document.addEventListener('DOMContentLoaded', initAccessibility);

const searchInput = document.getElementById('searchInput');

const handleSearch = async (event) => {
  const query = event.target.value.trim();

  if (!query) {
    showError('no-results');
    return;
  }

  if (!isValidInput(query)) {
    showError('invalid-input');
    return;
  }

  try {
    const users = await searchGitHubUsers(query);
    console.log ('mostrando usuarios correctamente', users)
    if (users.length === 0) {
      showError('no-results');
    } else {
      renderResults(users);
    }
  } catch (error) {
    showError('api');
  }
};

searchInput.addEventListener('input', debounce(handleSearch, 500));