import conversor from "./convertir.js";

const numeroInput = document.querySelector("#numero");
const formConvertir = document.querySelector("#convertir-form");
const divResultado = document.querySelector("#resultado-conversion");

formConvertir.addEventListener("submit", (event) => {
  event.preventDefault();

  const numero = Number.parseInt(numeroInput.value);
  const resultadoRomano = conversor(numero);

  divResultado.innerHTML = `<p>El número ${numero} en romanos es: <strong>${resultadoRomano}</strong></p>`;
});
