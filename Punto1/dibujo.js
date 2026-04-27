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
rellenarFigura([[10, 30], [10, 70], [50, 90], [30, 50], [30, 40]], "black", "#CDE7F0");
rellenarFigura([[30, 50], [70, 30], [90, 68], [50, 90]], "black", "#FFF3B0");
rellenarFigura([[50, 90], [50, 100], [90, 78], [90, 68]], "black", "#FADADD");
rellenarFigura([[30, 40], [30, 50], [70, 30], [70, 20]], "black", "#D4EDDA");
rellenarFigura([[10, 30], [30, 40], [70, 20], [50, 10]], "black", "#F8C8DC");
rellenarFigura([[10, 70], [50, 90], [50, 100], [10, 80]], "black", "#D4EDDA");

// Figura #2

rellenarFigura([[170, 10], [150, 20], [180, 35], [200, 25]], "black", "#E0E0E0");
rellenarFigura([[200, 25], [180, 35], [180, 45], [170, 55], [170, 65], [160, 75], [160, 95], [200, 68]], "black", "#F8C8DC");
rellenarFigura([[150, 20], [150, 30], [180, 45], [180, 35]], "black", "#FADADD");
rellenarFigura([[150, 30], [140, 40], [170, 55], [180, 45]], "black", "#D6F0F0");
rellenarFigura([[140, 40], [140, 50], [170, 65], [170, 55]], "black", "#D4EDDA");
rellenarFigura([[140, 50], [130, 60], [160, 75], [170, 65]], "black", "#FFF3B0");
rellenarFigura([[130, 60], [130, 80], [160, 95], [160, 75]], "black", "#E6CCFF");

// Figura #3

rellenarFigura([[10, 130], [10, 180], [50, 200], [50, 170], [20, 155], [20, 135]], "black", "#E0E0E0");
rellenarFigura([[20, 135], [20, 155], [28, 150], [28, 130]], "black", "#D6F0F0");
rellenarFigura([[28, 130], [28, 150], [38, 155], [38, 135]], "black", "#D4EDDA");
rellenarFigura([[10, 130], [20, 135], [28, 130], [38, 135], [58, 125], [38, 115]], "black", "#FADADD");
rellenarFigura([[38, 135], [38, 155], [58, 145], [58, 125]], "black", "#E6D3B3");
rellenarFigura([[20, 155], [50, 170], [95, 165], [58, 145], [38, 155], [28, 150]], "black", "#E6CCFF");
rellenarFigura([[50, 170], [50, 185], [95, 179], [95, 165]], "black", "#F8C8DC");
rellenarFigura([[50, 185], [50, 200], [80, 185], [80, 181]], "black", "#CDE7F0");


//Figura 4

rellenarFigura([[130, 180], [165, 200], [199, 155], [189, 148], [182, 157], [172, 151], [178, 142], [165, 135]], "black", "#E0E0E0");
rellenarFigura([[165, 200], [199, 155], [215, 145], [215, 175]], "black", "#D6F0F0");
rellenarFigura([[189, 148], [199, 155], [215, 145], [205, 139]], "black", "#E6D3B3");
rellenarFigura([[178, 142], [165, 135], [181, 125], [192, 133]], "black", "#E6D3B3");
rellenarFigura([[192, 133], [178, 142], [172, 151], [192, 146]], "black", "#FFF3B0");
rellenarFigura([[172, 151], [182, 157], [189, 148], [192, 146]], "black", "#F8C8DC");
