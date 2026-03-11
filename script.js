const pradera = document.getElementById("pradera");
const cantidad = 5000;
const pajares = [];

for (let i = 0; i < cantidad; i++) {
    const pajar = document.createElement("div");
    pajar.classList.add("pajar");

    pajar.style.left = Math.random() * 99 + "vw";
    pajar.style.top = Math.random() * 89 + "vh";

    pradera.appendChild(pajar);
    pajares.push(pajar);
}

const radioVW = 10;
const maxRotacion = 70;

function getRadioPx() {
    return window.innerWidth * (radioVW / 100);
}

const radio = getRadioPx();

document.addEventListener("mousemove", (e) => {

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    pajares.forEach(pajar => {

        const rect = pajar.getBoundingClientRect();
        const centroX = rect.left + rect.width / 2;
        const baseY = rect.bottom;

        const dx = centroX - mouseX;
        const dy = baseY - mouseY;

        const distancia = Math.sqrt(dx * dx + dy * dy);

        if (distancia < radio) {

            const intensidad = 1 - (distancia / radio);
            const rotacion = maxRotacion * intensidad;

            if (dx > 0) {
                pajar.style.transform = `rotate(${rotacion}deg)`;
            } else {
                pajar.style.transform = `rotate(-${rotacion}deg)`;
            }

        } else {
            pajar.style.transform = "rotate(0deg)";
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
