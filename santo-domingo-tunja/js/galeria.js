/* Galería: ampliar imagen, cerrar, anterior/siguiente */
const visor = document.getElementById("visor");
const fotos = [...document.querySelectorAll(".galeria figure")];
let indice = 0;
function abrir(i) {
    indice = (i + fotos.length) % fotos.length;
    const f = fotos[indice], img = f.querySelector("img");
    document.getElementById("visor-img").src = img.src;
    document.getElementById("visor-img").alt = img.alt;
    document.getElementById("visor-pie").textContent = f.querySelector("figcaption").innerText.replace("\n", " · ");
    if (!visor.open) visor.showModal();
}
fotos.forEach((f, i) => f.querySelector("button").addEventListener("click", () => abrir(i)));
document.getElementById("visor-cerrar").onclick = () => visor.close();
document.getElementById("visor-ant").onclick = () => abrir(indice - 1);
document.getElementById("visor-sig").onclick = () => abrir(indice + 1);
visor.addEventListener("click", e => { if (e.target === visor) visor.close(); });
visor.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") abrir(indice - 1);
    if (e.key === "ArrowRight") abrir(indice + 1);
});
