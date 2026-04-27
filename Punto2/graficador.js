const form = document.getElementById("formCoordenadas");
const d = document.getElementById("graficador");
const lienzo = d.getContext("2d");
let num = 0;

function crearCampos() {
    form.innerHTML = "";
    num = parseInt(document.getElementById("numPuntos").value);

    // 👉 encabezado tipo tabla
    form.innerHTML = `
        <div class="fila header">
            <span>Punto</span>
            <span>X</span>
            <span>Y</span>
        </div>
    `;

    for (let i = 0; i < num; i++) {
        form.innerHTML += `
        <div class="fila">
            <span>${i + 1}</span>
            <input type="number" id="x${i}" min="1" step="1" required>
            <input type="number" id="y${i}" min="1" step="1" required>
        </div>
        `;
    }
}


function graficar() {
    let puntos = [];

    for (let i = 0; i < num; i++) {
    const x = document.getElementById(`x${i}`).value;
    const y = document.getElementById(`y${i}`).value;

    if (
        x === "" || y === "" ||
        !/^[0-9]+$/.test(x) ||
        !/^[0-9]+$/.test(y)
    ) {
        alert("⚠️ Solo se permiten números enteros positivos en todas las coordenadas.");
        return;
    }

        puntos.push({ x: parseInt(x), y: parseInt(y) });
    }

    puntos.sort((a, b) => a.x - b.x);

    lienzo.clearRect(0, 0, d.width, d.height);

    // Dibujar ejes
    lienzo.beginPath();
    lienzo.moveTo(50, 350);
    lienzo.lineTo(50, 50);
    lienzo.moveTo(50, 350);
    lienzo.lineTo(550, 350);
    lienzo.strokeStyle = "black";
    lienzo.lineWidth = 2;
    lienzo.stroke();
    lienzo.closePath();

    const maxX = Math.max(...puntos.map(p => p.x));
    const maxY = Math.max(...puntos.map(p => p.y));

    lienzo.beginPath();
    for (let i = 0; i < puntos.length; i++) {
        const xEsc = 50 + (puntos[i].x / maxX) * 500;
        const yEsc = 350 - (puntos[i].y / maxY) * 300;

        if (i === 0) lienzo.moveTo(xEsc, yEsc);
        else lienzo.lineTo(xEsc, yEsc);
    }

    lienzo.strokeStyle = "blue";
    lienzo.lineWidth = 2;
    lienzo.stroke();
    lienzo.closePath();

    for (let i = 0; i < puntos.length; i++) {
        const xEsc = 50 + (puntos[i].x / maxX) * 500;
        const yEsc = 350 - (puntos[i].y / maxY) * 300;

        lienzo.beginPath();
        lienzo.fillStyle = "red";
        lienzo.arc(xEsc, yEsc, 4, 0, Math.PI * 2);
        lienzo.fill();
        lienzo.closePath();

        lienzo.fillStyle = "black";
        lienzo.font = "12px Arial";
        lienzo.fillText(`(${puntos[i].x}, ${puntos[i].y})`, xEsc + 5, yEsc - 5);
    }
}