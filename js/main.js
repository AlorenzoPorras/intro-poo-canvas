const canvasOOP = document.getElementById("canvasOOP");
const ctx = canvasOOP.getContext("2d");

// Se ulitiza a nivel global en la page para sacar el ancho y alto de la pantalla
/* const window_height = window.innerHeight;
const window_width = window.innerWidth; */

// maneja la altura
canvasOOP.height = 200; //window_height;
canvasOOP.width = 300; //window_width;
canvasOOP.style.background = "#ff8";

class Circle {
    // constructor que carga los valores posx y posy al objeto
    constructor(x, y, radius, color, text) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
    }

    //metodo para renderizar el objeto
    draw(context) {

        //empieza el dibujo
        context.beginPath();
        //estilo de la linea
        context.strokeStyle = this.color;
        //alinear de forma horizontal
        context.textAlign = "center";
        //alinear de forma vertical
        context.textBaseline = "middle";
        context.font = "20px Arial";
        //texto que voy a dibujar en una cordenada. Renderiza un texto en el centro del objeto
        context.fillText(this.text, this.posX, this.posY);
        //ancho de linea a 2
        context.lineWidth = 2;
        //dibujar un arco -

        /*En false
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI / 2, false); //0 a 90 
        context.arc(this.posX, this.posY, this.radius, Math.PI / 2, Math.PI, false); //90 a 180 
        context.arc(this.posX, this.posY, this.radius, Math.PI, Math.PI * 3 / 2, false); //180 a 270 
        context.arc(this.posX, this.posY, this.radius, Math.PI * 3 / 2, Math.PI * 2, false); //270 qa 360 */

        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);// false encontra de las manesillas del reloj
        context.stroke();
        context.closePath();
    }
}


/*let randomX =  Math.random()* window_width;
let randomY =  Math.random()* window_height;
let randomRadius = Math.floor(Math.random()*100 + 30);*/

let miCirculo = new Circle(canvasOOP.height / 2, canvasOOP.width / 2, 50, 'red', 'Tec');

miCirculo.draw(ctx);

