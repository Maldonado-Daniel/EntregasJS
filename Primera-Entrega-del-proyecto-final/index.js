class Procesadores{
    constructor(gama, marca, cantidad) {
        this.gama = gama;
        this.marca = marca;
        this.cantidad = cantidad;
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

    let nuevo_procesador = new Procesadores(gama, marca, cantidad);
    lista_procesadores.push(nuevo_procesador);

}
//se muestra array con los datos cargados 
console.log(lista_procesadores);


let productos = [
    {nombre:"Intel Pentium" , precio:15000},
    {nombre:"AMD Bulldozer" , precio:12000},
    {nombre:"Intel Core" , precio:23000},
    {nombre:"AMD Ryzen" , precio:26000},
];


function agregar_iva( producto ){

    let iva = producto.precio * 0.21;

    return {
        nombre: producto.nombre,
        precio: producto.precio+iva
    }
}

console.log( productos );

let resultado_map = productos.map(  agregar_iva );
console.log( resultado_map);

