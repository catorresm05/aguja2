const pradera = document.getElementById("pradera");
const cantidad = 6000;
const pajares = [];

for (let i = 0; i < cantidad; i++) {
    const pajar = document.createElement("div");
    pajar.classList.add("pajar");

    const x = Math.random() * 99;
    const y = Math.random() * 89;

    pajar.style.left = x + "vw";
    pajar.style.top = y + "vh";

    pradera.appendChild(pajar);

    pajares.push({
        element: pajar,
        x: x,
        y: y
    });
}

const radioVW = 10;
const maxRotacion = 70;

function getRadioPx() {
    return window.innerWidth * (radioVW / 100);
}

let radio = getRadioPx();

window.addEventListener("resize", () => {
    radio = getRadioPx();
});

document.addEventListener("mousemove", (e) => {

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    pajares.forEach(pajar => {

        const centroX = (pajar.x / 100) * window.innerWidth;
        const baseY = ((pajar.y + 11) / 100) * window.innerHeight;

        const dx = centroX - mouseX;
        const dy = baseY - mouseY;

        const distancia = Math.sqrt(dx * dx + dy * dy);

        if (distancia < radio) {

            const intensidad = 1 - (distancia / radio);
            const rotacion = maxRotacion * intensidad;

            if (dx > 0) {
                pajar.element.style.transform = `rotate(${rotacion}deg)`;
            } else {
                pajar.element.style.transform = `rotate(-${rotacion}deg)`;
            }

        } else {
            pajar.element.style.transform = "rotate(0deg)";
        }
    });

});

const aguja = document.getElementById("aguja");

function posicionAleatoria() {

    const margenh = 5; // % margin
    const margenv = 10; // % margin

    const x = Math.random() * (100 - margenh * 2) + margenh;
    const y = Math.random() * (100 - margenv * 2) + margenv;

    aguja.style.left = x + "vw";
    aguja.style.top = y + "vh";
}

posicionAleatoria();

document.addEventListener("click", function(e) {

    const elementoEncima = document.elementFromPoint(e.clientX, e.clientY);

    if (elementoEncima === aguja) {
        window.location.href = "pagina2.html";
    }

});