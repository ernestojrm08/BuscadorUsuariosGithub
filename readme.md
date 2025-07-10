Iniciando proyecto unidad IV de la materia frontEnd

Objetivo: realizar una app para buscar usuarios utilizando la api de github.
integrantes: ernesto rengifo diego aguilar paolacrespo

# Buscador de Usuarios en GitHub

Aplicación web que permite buscar usuarios en GitHub mediante su nombre de usuario. Se conecta con la API oficial de GitHub y muestra información básica de los primeros tres usuarios coincidentes. Proyecto realizado en equipo para la materia de FrontEnd.

---

##  Integrante 1 – Lógica de búsqueda e integración con la API (Ernesto Rengifo)

Responsabilidades completadas:

- ✅ Configuración de la estructura inicial del proyecto.
- ✅ Conexión con la API de GitHub utilizando `fetch`.
- ✅ Implementación de debounce para evitar múltiples llamadas innecesarias.
- ✅ Validación del input (mínimo 3 caracteres, solo letras, números y guiones).
- ✅ Gestión de errores y validaciones básicas.
- ✅ Preparación de los datos para renderizado 

Archivos desarrollados:
- `js/main.js` – lógica principal del buscador
- `js/api.js` – conexión con GitHub Search API
- `js/debounce.js` – función genérica reutilizable para optimizar búsquedas
- `js/validate.js` – reglas de validación de input

---

##  Pasos para probar:

1. Escribe un nombre en el input.
2. Si es válido, se ejecuta una búsqueda a la API de GitHub.
3. Enseña los resultados (por ahora) en la consola del navegador.

---
