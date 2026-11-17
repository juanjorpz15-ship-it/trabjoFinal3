/* Validación del formulario de consulta */
const form = document.getElementById("formulario");
const reglas = {
    nombre: v => v.trim().length >= 2 || "Escribe tu nombre.",
    apellido: v => v.trim().length >= 2 || "Escribe tu apellido.",
    celular: v => /^3\d{9}$/.test(v.replace(/\s/g, "")) || "Escribe un celular colombiano de 10 dígitos que empiece por 3.",
    correo: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) || "Escribe un correo válido, por ejemplo nombre@correo.com.",
    mensaje: v => v.trim().length >= 10 || "El mensaje debe tener al menos 10 caracteres."
};
function validar(campo) {
    const r = reglas[campo.name](campo.value);
    campo.setAttribute("aria-invalid", r !== true);
    document.getElementById("error-" + campo.name).textContent = r === true ? "" : r;
    return r === true;
}
form.querySelectorAll("input,textarea").forEach(c => c.addEventListener("blur", () => validar(c)));
form.addEventListener("submit", e => {
    e.preventDefault();
    const campos = [...form.querySelectorAll("input,textarea")];
    const todos = campos.map(validar).every(Boolean);
    const estado = document.getElementById("estado-form");
    if (!todos) { campos.find(c => c.getAttribute("aria-invalid") === "true").focus(); estado.classList.remove("visible"); return; }
    estado.classList.add("visible");
    form.reset();
});
