


 
class Procesadores{
    constructor(gama, marca, cantidad, precio) {
        this.gama = gama;
        this.marca = marca;
        this.cantidad = cantidad;
        this.precio;
    }
}
let lista_procesadores = [];

//Se cargaran 3 procesadores al sistema
for (let i = 0; i < 3; i++) {
    //inicia dando a elegir entre 2 opciones
    let gama = prompt("Seleccione la gama que desea: 1)Gama baja -2)Gama alta");
    let marca;
    //en base a la opcion elegida antes, se muestran dos alternativas
    if (gama == 1) {
        marca = prompt("Seleccione la marca comercial: 1)Intel Pentium - 2)AMD Bulldozer");

    } else if (gama == 2) {
        marca = prompt("Seleccione la marca comercial: 1)Intel Core - 2)AMD Ryzen");
    }
    //se "reasignan" los valores de las variables para poder mostrar los nombres, en lugar de numeros 
    if(gama == 1 && marca ==1){
        marca = "Intel Pentium";
        gama = "Gama baja";
    }else if(gama == 1 && marca == 2){
        marca = "AMD Bulldozer";
        gama = "Gama baja"
    }else if(gama == 2 && marca == 1){
        marca = "Intel Core";
        gama = "Gama alta";
    }else if(gama == 2 && marca == 2){
        marca = "AMD Ryzen";
        gama = "Gama alta"
    };
    //se eligen la cantidad que desea comprar y el precio ingresado
    let cantidad = prompt("Unidades que desea comprar 5, 10, 20?");
    let precio = prompt("Ingrese el precio de las unidades");

    let nuevo_procesador = new Procesadores(gama, marca, cantidad, precio);
    lista_procesadores.push(nuevo_procesador);

}
//se muestra array con los datos cargados 
console.log(lista_procesadores);