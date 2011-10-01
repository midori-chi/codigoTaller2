var canvas = document.getElementById('fondo');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = "brown";
ctx.fillStyle = "orange";
ctx.arc(250, 300, 100, 0, Math.PI*2, false);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "green";
ctx.font = "32pt Century Ghotic";
ctx.fillText("Warning", 300, 100);
ctx.closePath();

var assetManager = new AssetManager();
//assetManager.queueDownload("./imagenes/vaca_normal.png","vacanormal");

assetManager.downloadAll(function() {
    //var imagen = assetManager.getAsset("vacanormal");
    //ctx.drawImage(imagen, 500,225);

    var juego = new Juego(ctx);
    var circulo = new Circulo(juego, 0, 225);
    juego.addEntidad(circulo);
    juego.iniciar();
});