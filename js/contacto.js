document.getElementById("formContacto").addEventListener("submit", function (e) {
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


    let esValido = true;

    const nombreValor = nombreInput.value.trim();
    if (nombreValor.length < 3) {
        document.getElementById("errorNombre").textContent = "Ingresá tu nombre completo (mínimo 3 caracteres).";
        esValido = false;
    }

const emailValor = emailInput.value.trim();
  const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  if (!regExEmail.test(emailValor)) {
    document.getElementById("errorEmail").textContent = "Ingresá un correo electrónico válido (ejemplo@dominio.com).";
    esValido = false;
  }

  const telefonoValor = telefonoInput.value.trim();
  const regExTelefono = /^\d{8,15}$/;
  if (!regExTelefono.test(telefonoValor)) {
    document.getElementById("errorTelefono").textContent = "Ingresá un teléfono válido (solo números, entre 8 y 15 dígitos).";
    esValido = false;
  }
    
  const mensajeValor = mensajeInput.value.trim();
  if (mensajeValor.length < 10) {
    document.getElementById("errorMensaje").textContent = "Por favor, detallá la cantidad de personas y el horario deseado (mínimo 10 caracteres).";
    esValido = false;
  }




  
});