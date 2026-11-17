/* Menú adaptable, fichas interactivas, imágenes sin archivo */
const boton = document.getElementById("boton-menu");
const menu = document.getElementById("menu");
function cerrarMenu() { menu.classList.remove("abierto"); boton.setAttribute("aria-expanded", "false"); boton.textContent = "☰ Menú"; }
boton.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    boton.setAttribute("aria-expanded", abierto);
    boton.textContent = abierto ? "✕ Cerrar" : "☰ Menú";
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", cerrarMenu));
document.addEventListener("keydown", e => { if (e.key === "Escape") cerrarMenu(); });
window.addEventListener("resize", () => { if (innerWidth > 900) cerrarMenu(); });

document.querySelectorAll("button.ficha").forEach(b => b.addEventListener("click", () => {
    const abierta = b.getAttribute("aria-expanded") === "true";
    b.setAttribute("aria-expanded", !abierta);
    document.getElementById(b.getAttribute("aria-controls")).hidden = abierta;
}));

document.querySelectorAll("img").forEach(img => {
    const marcar = () => img.classList.add("sin-foto");
    img.addEventListener("error", marcar);
    if (img.complete && img.naturalWidth === 0) marcar();
});
