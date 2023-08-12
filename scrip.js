// Seleccionamos los elementos necesarios una vez para evitar repetición
let add = document.querySelector('#add');
let subtract = document.querySelector('#substract'); 
let output = document.querySelector('#output');

// Función para actualizar el resultado
function updateResult(increment) {
  let resultado = parseInt(output.innerText) + increment;
  
  // Verifica los límites y muestra alertas según corresponda
  if (resultado > 10) {
    alert('No puedes sumar más de 10');
    resultado = 0;
  } else if (resultado < 0) {
    alert('No puedes restar menos de 0');
    resultado = 0;
  }

  output.innerText = resultado;
}

// Evento para sumar
add.addEventListener('click', () => {
  updateResult(1);
});

// Evento para restar
subtract.addEventListener('click', () => {
  updateResult(-1);
});
