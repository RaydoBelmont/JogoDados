var numAleatorio1 = Math.floor(Math.random() * 6) + 1;
var numAleatorio2 = Math.floor(Math.random() * 6) + 1;

var listaImagens = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];

function refreshInicial (){

    while(numAleatorio1 === numAleatorio2){
        var numAleatorio1 = Math.floor(Math.random() * 6);
        var numAleatorio2 = Math.floor(Math.random() * 6);
    }

    document.querySelector(".img1").setAttribute("src", listaImagens[numAleatorio1]);
    document.querySelector(".img2").setAttribute("src", listaImagens[numAleatorio2]);

    if(numAleatorio1 > numAleatorio2 ){
        document.querySelector("h1").innerHTML = "</h1>🚩Vitória Player 1</h1>";
    }else if(numAleatorio2 > numAleatorio1){
        document.querySelector("h1").innerHTML = "<h1>Vitória Player 2🚩";
    }
}

refreshInicial();