// --- INTERACCIÓN DE PORTADA: MODO OSCURO CON MEMORIA ---
const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");

// Función para actualizar el ícono según si está oscuro o no
const actualizarIcono = (esOscuro) => {
  if (toggleDarkModeBtn) {
    toggleDarkModeBtn.textContent = esOscuro ? "☀️" : "🌙";
  }
};

// 1. Apenas carga la página, revisamos si el usuario ya había elegido el modo oscuro antes
const temaGuardado = localStorage.getItem("tema");

if (temaGuardado === "oscuro") {
  document.body.classList.add("dark-mode");
  actualizarIcono(true);
} else {
  actualizarIcono(false);
}

// 2. Escuchamos el clic en el botón para cambiar el tema
if (toggleDarkModeBtn) {
  toggleDarkModeBtn.addEventListener("click", () => {
    // Prendemos o apagamos la clase en el body
    document.body.classList.toggle("dark-mode");

    // Nos fijamos cómo quedó (si tiene la clase o no)
    const modoOscuroActivado = document.body.classList.contains("dark-mode");

    // Guardamos la decisión en la memoria del navegador
    if (modoOscuroActivado) {
      localStorage.setItem("tema", "oscuro");
    } else {
      localStorage.setItem("tema", "claro");
    }

    // Actualizamos el dibujito
    actualizarIcono(modoOscuroActivado);
  });
}
