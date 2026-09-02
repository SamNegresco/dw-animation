var canvas = document.getElementById("jogo");
var contexto = canvas.getContext("2d");

const Bola1 = {
x : 200,
y : 200,
r : 30,
cor : "black",
velocidade : 1
};

const Bola2 = {
x : 50,
y : 50,
r : 30,
cor : "purple",
velocidade : 1
};

const Bola3 = {
x : 350,
y : 350,
r : 30,
cor : "red",
velocidade : 1
};

const Bola4 = {
x : 150,
y : 270,
r : 20,
cor : "cyan",
velocidade : 1
};

function desenhar(Bola){
contexto.beginPath();//inicia o desenho
contexto.arc(Bola.x, Bola.y, Bola.r, 0, Math.PI*2);
contexto.fillStyle = Bola.cor;
contexto.fill();
contexto.closePath();// encerra o desenho
}

//desenhar(Bola1)
//desenhar(Bola2)
//desenhar(Bola3)
//desenhar(Bola4)

function animar(){
    contexto.clearRect(0,0, canvas.clientWidth, canvas.height);

    Bola1.x+=Bola1.velocidade;
    Bola1.y+=Bola1.velocidade;
    desenhar(Bola1);

if(Bola1.xcanvas.width || Bola1.y>canvas.height){
    Bola1.velocidade = Bola1.velocidade*-1
    }

    else if (Bola1.x<0 || Bola1.y<0){
    Bola1.velocidade = Bola1.velocidade*-1
    }

    Bola2.x+=Bola2.velocidade;
    Bola2.y+=Bola2.velocidade;
    desenhar(Bola2);

    Bola3.x+=Bola3.velocidade;
    Bola3.y+=Bola3.velocidade;
    desenhar(Bola3);

    Bola4.x+=Bola4.velocidade;
    Bola4.y+=Bola4.velocidade;
    desenhar(Bola4);

requestAnimationFrame(animar)
}
animar()