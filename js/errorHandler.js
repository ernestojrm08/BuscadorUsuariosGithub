export function showError(type) {
  const container = document.getElementById('results');
  let message = '';

  switch (type) {
    case 'api':
      message = 'Error al conectar con GitHub. Intenta más tarde.';
      break;
    case 'no-results':
      message = 'No hay usuarios con ese nombre. Por favor, Intenta con otro!';
      break;
    case 'invalid-input':
      message = 'Mínimo 3 caracteres (solo letras, números o guiones).';
      break;
    default:
      message = 'Algo salió mal.';
  }

  container.innerHTML = `<div class="error" role="alert">${message}</div>`;
}