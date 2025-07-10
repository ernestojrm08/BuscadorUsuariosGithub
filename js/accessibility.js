export function initAccessibility() {
  const searchInput = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('results');

  // Input accesible
  if (searchInput) {
    searchInput.setAttribute('aria-label', 'Buscar usuarios de GitHub');
    searchInput.setAttribute('aria-describedby', 'search-help');
  }

  // Contenedor de resultados
  if (resultsContainer) {
    resultsContainer.setAttribute('aria-live', 'polite');
  }

  // Texto de ayuda (opcional)
  const helpText = document.createElement('p');
  helpText.id = 'search-help';
  helpText.textContent = 'Ejemplo: PaoC025';
  searchInput?.insertAdjacentElement('afterend', helpText);
}