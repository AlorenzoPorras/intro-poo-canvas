const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");

const ctxRandom = canvasRandom.getContext("2d");
const ctx = canvasOPP.getContext("2d");

const canvasMultiobjt = document.getElementById("canvasMultiobjt");
const ctxMultiobjt = canvasMultiobjt.getContext("2d");

canvasOPP.height = "200"
canvasOPP.width = "300" 
canvasOPP.style.background = "#33FFE3";

canvasRandom.height = 200; 
canvasRandom.width = 300; 
canvasRandom.style.background = "#F333FF";

canvasMultiobjt.width = 300;
canvasMultiobjt.height = 200;
canvasMultiobjt.style.background = "#FF3380";

class Circle {
    // Carga los valores determinados del objeto
    constructor(x, y, radius, color, text, backcolor) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.backcolor = backcolor;
    }

    draw(context) {
        context.beginPath();

        // Rellena el círculo con el color de fondo
        context.fillStyle = this.backcolor;
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.fill();

        context.strokeStyle = this.color;
        context.lineWidth = 4; // Para poner más grosor a la línea  
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.stroke();
        
        context.textAlign = "center"; // Alineación horizontal 
        context.textBaseline = "middle"; // Alineación vertical
        context.font = "bold 20px Arial";
        context.fillStyle = "black"; // Cambia el color del texto si lo deseas

        // Renderiza un texto en el centro del objeto
        context.fillText(this.text, this.posX, this.posY);
        context.closePath();
    }
}

//Primer canvas

// Crear el círculo con un color de fondo específico y dibujarlo en el canvas
let miCirculo = new Circle(150, 100, 50, 'rgb(229, 9, 199)', 'Tec', 'rgb(229, 9, 199)');
miCirculo.draw(ctx);

//Segundo canvas

let randomX = Math.random() * canvasRandom.width;
let randomY = Math.random() * canvasRandom.height;
let randomRadius = Math.floor(Math.random() * 100 + 30);

let miCirculoMovimiento = new Circle(randomX, randomY, randomRadius, 'rgb(247, 243, 212)', 'Tec','rgb(247, 243, 212)');
miCirculoMovimiento.draw(ctxRandom);

//Tercer canvas

function validPlacement(x, y, radius, canvas) {
    return (x - radius > 0 && x + radius < canvas.width && 
            y - radius > 0 && y + radius < canvas.height);
}

let arrayCircle = [];

// Generar y dibujar círculos
for (let i = 0; i < 10; i++) {
    let randomRadius, randomX, randomY;

    do {
        randomRadius = Math.floor(Math.random() * 10 + 20);
        randomX = Math.random() * (canvasMultiobjt.width - 2 * randomRadius) + randomRadius;
        randomY = Math.random() * (canvasMultiobjt.height - 2 * randomRadius) + randomRadius;
    } while (!validPlacement(randomX, randomY, randomRadius, canvasMultiobjt));

    let newCircle = new Circle(randomX, randomY, randomRadius, "black", i + 1, 'rgb(212, 247, 243)');
    arrayCircle.push(newCircle);
    newCircle.draw(ctxMultiobjt);
}