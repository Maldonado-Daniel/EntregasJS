

let votaciones = "";
let Nike = 0;
let Adidas = 0;
let Puma = 0;
let Converse = 0;

while (votaciones != "fin") {
    votaciones = prompt(
        "votar a mejor marca de zapatillas: A =Nike, B = Adidas, c = Puma, D = Converse"
    );
    if (votaciones == "A" || votaciones == "a"){
        console.log("Voto A");
        Nike = Nike + 1;
    } else if (votaciones == "B" || votaciones == "b") {
        console.log("Voto B");
        Adidas = Adidas + 1;
    } else if (votaciones == "C" || votaciones == "c") {
        console.log("Voto C");
        Puma = Puma + 1;
    } else if (votaciones == "D" || votaciones == "d") {
        console.log("Voto D");
        Converse = Converse + 1;
    } else if (votaciones == "fin") {
        console.log("votaciones terminadas");
    } else {
        console.log("voto invalido");
    }
}

if(Nike > Adidas || Nike > Puma || Nike > Converse) {
    alert("La mejor marca de zapatillas es Nike");
} else if (
    Adidas > Nike ||
    Adidas > Puma ||
    Adidas > Converse
) {
    alert("La mejor marca de zapatillas es Adidas");
} else if (Puma > Nike || Puma > Adidas || Puma > Converse) {
    alert("La mejor marca de zapatillas es Puma");
} else if (Converse > Nike || Converse > Adidas || Converse > Puma){
    alert("La mejor marca de zapatillas es Converse");
} else {
    alert("Hay un empate entre todas las marcas");
}