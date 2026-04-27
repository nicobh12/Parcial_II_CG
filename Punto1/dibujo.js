let d = document.getElementById('dibujo');
let lienzo = d.getContext('2d');

function rellenarFigura(puntos, colorBorde, colorRelleno) {
  lienzo.beginPath();
  lienzo.moveTo(puntos[0][0]*2, puntos[0][1]*2);

  for (let i = 1; i < puntos.length; i++) {
    lienzo.lineTo(puntos[i][0]*2, puntos[i][1]*2);
  }

  lienzo.closePath();
  lienzo.strokeStyle = colorBorde;
  lienzo.fillStyle = colorRelleno;
  lienzo.fill();
  lienzo.stroke();
}

// Figura #1
rellenarFigura([[10, 30], [30, 40], [70, 20], [50, 10]], "black", "#F8C8DC");
rellenarFigura([[10, 30], [10, 70], [50, 90], [50, 70], [30, 60], [30, 40]], "black", "#CDE7F0");
rellenarFigura([[50, 50], [30, 60], [50, 70], [70, 60]], "black", "#FFF3B0");
rellenarFigura([[50, 70], [50, 90], [90, 70], [90, 50]], "black", "#FADADD");
rellenarFigura([[70, 60], [90, 50], [70, 20], [50, 30]], "black", "#D6F0F0");
rellenarFigura([[50, 50], [30, 60], [30, 40], [50, 30]], "black", "#D4EDDA");
rellenarFigura([[50, 50], [50, 30], [70, 60]], "black", "#FFE5B4");

// Figura #2
rellenarFigura([[110, 30], [110, 70], [150, 90], [150, 70], [130, 60], [130, 40]], "black", "#CDE7F0");
rellenarFigura([[190, 30], [190, 70], [150, 90], [150, 70], [170, 60], [170, 40]], "black", "#F8C8DC");
rellenarFigura([[150, 10], [110, 30], [130, 40], [150, 30], [170, 40], [190, 30]], "black", "#E0E0E0");
rellenarFigura([[150, 50], [130, 60], [150, 70], [170, 60]], "black", "#FADADD");
rellenarFigura([[150, 50], [170, 60], [170, 40], [150, 30]], "black", "#D6F0F0");
rellenarFigura([[150, 50], [130, 60], [130, 40], [150, 30]], "black", "#D4EDDA");

// Figura #3

rellenarFigura([[10, 130], [10, 170], [50, 190], [50, 170], [30, 160]], "black", "#E0E0E0");
rellenarFigura([[50, 190], [50, 170], [90, 150], [90, 170]], "black", "#FADADD");
rellenarFigura([[90, 150], [70, 160], [50, 130], [70, 120]], "black", "#CDE7F0");
rellenarFigura([[50, 110], [70, 120], [50, 130], [30, 120]], "black", "#D4EDDA");
rellenarFigura([[50, 150], [30, 160], [10, 130], [30, 120]], "black", "#F8C8DC");
rellenarFigura([[50, 150], [30, 160], [50, 170], [70, 160]], "black", "#E6CCFF");
rellenarFigura([[30, 120], [50, 150], [70, 160], [50, 130]], "black", "#E6D3B3");

// Figura #4

rellenarFigura([[110, 130], [110, 170], [150, 190]], "black", "#E0E0E0");
rellenarFigura([[150, 190], [170, 160], [130, 160]], "black", "#D6F0F0");
rellenarFigura([[130, 120], [150, 130], [150, 150]], "black", "#D4EDDA");
rellenarFigura([[150, 110], [170, 120], [150, 130], [130, 120]], "black", "#FADADD");
rellenarFigura([[150, 130], [170, 120], [170, 140], [150, 150]], "black", "#C8E6C9");
rellenarFigura([[110, 130], [130, 120], [150, 150], [130, 160]], "black", "#F8C8DC");
rellenarFigura([[130, 160], [170, 140], [190, 150], [170, 160]], "black", "#CDE7F0");
rellenarFigura([[150, 190], [190, 170], [190, 150], [170, 160]], "black", "#E6CCFF");