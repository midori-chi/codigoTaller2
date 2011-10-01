function Circulo(juego, x, y ) {
	this.juego = juego;
	this.x = x;
	this.y = y;
	this.remover = false;
	this.direccion = "derecha";
}

Circulo.prototype.actualizar = function() { 
    if(this.direccion == "derecha") {
       this.x += 25;
    }	
    else if (this.direccion == "izquierda") {
       this.x -= 25;
    } 

    if (this.x >= this.juego.ctx.canvas.width) {
        this.direccion = "izquierda"
    }
    
    if (this.x <= 0) {
        this.direccion = "derecha"
    }
};

Circulo.prototype.dibujar = function(ctx) { 
    ctx.beginPath();
    ctx.strokeStyle = "brown";
    ctx.fillStyle = "orange";
    ctx.arc(this.x, this.y, 75, 0, Math.PI*2, false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
};