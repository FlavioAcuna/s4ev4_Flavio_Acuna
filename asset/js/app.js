function verificarPicnic() {
  // Obtener los valores de los inputs
  const temperatura = parseFloat(document.getElementById("temperatura").value);
  const tiempoLibre = parseFloat(document.getElementById("tiempoLibre").value);
  const lluvia = document.getElementById("lluvia").checked;

  // Evaluar las condiciones para un buen momento de picnic
  const buenMomento =
    temperatura >= 12 && temperatura <= 30 && tiempoLibre > 90 && !lluvia;

  // Mostrar el mensaje 
  const mensaje = buenMomento
    ? "¡Es un buen momento para organizar un picnic!"
    : "No es el mejor momento para un picnic.";
  document.getElementById("resultado").innerText = mensaje;
}
