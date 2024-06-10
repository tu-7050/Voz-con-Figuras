x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.lang="es-MX"
function start() {
    document.getElementById("status").innerHTML = "El sistema esta escuchando. Por favor, habla.";
    recognition.start();
}


recognition.onresult = function(event) {

 console.log(event);

var content = event.results[0][0].transcript;

document.getElementById("status").innerHTML = "La voz se reconoció como: " + content;
if(content =="Círculo.")
   {
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "Se empezó a dibujar un circulo ";
    draw_circle = "set";
   }
   if(content =="Rectángulo.")
    {
     x = Math.floor(Math.random() * 900);
     y = Math.floor(Math.random() * 600);
     document.getElementById("status").innerHTML = "Se empezó a dibujar un rectángulo ";
     draw_rect = "set";
    }
}

function setup() {
  canvas = createCanvas(900, 600);
}

function draw() {
  if(draw_circle == "set")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Se dibujo un círculo. ";
    draw_circle = "";
  }

  if(draw_rect == "set")
    {
      rect(x,y,70,50);
      document.getElementById("status").innerHTML = "Se dibujo un rectángulo. ";
      draw_rect = "";
    }

}