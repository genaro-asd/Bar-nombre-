document.getElementById("formContacto").addEventListener("submit", function(e) {
  e.preventDefault(); 

  const nombreInput = document.getElementById("nombre");
  const emailInput = document.getElementById("email");
  const telefonoInput = document.getElementById("telefono");
  const mensajeInput = document.getElementById("mensaje");

  document.getElementById("errorNombre").textContent = "";
  document.getElementById("errorEmail").textContent = "";
  document.getElementById("errorTelefono").textContent = "";
  document.getElementById("errorMensaje").textContent = "";
  document.getElementById("contenedorResumen").innerHTML = "";

const nombreValor = nombreInput.value.trim();
  if (nombreValor.length < 3) {
    document.getElementById("errorNombre").textContent = "Ingresá tu nombre completo (mínimo 3 caracteres).";
    esValido = true;
  }
});