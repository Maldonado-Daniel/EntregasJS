let producto = prompt("Ingrese el tipo de producto");
let precioProducto = parseInt(prompt("ingrese el costo de " + producto));
let cantidadDeProductos = parseInt(prompt("Indique la cantidad que desea compra en unidades"));
let cuotaProducto = parseInt(prompt("Indique la cantidad de cuotas, 6-12-18-24"));
let agregadoDeIva =  (precioTotal(precioProducto, cantidadDeProductos) * 21)  / 100;
function precioTotal(precioProducto, cantidadDeProductos){
   let costo = precioProducto * cantidadDeProductos;
   return costo;
}

function precioEnCuotas(){
   if (cuotaProducto == 6){
       let interesesEn6Cuotas = (precioTotal(precioProducto, cantidadDeProductos) * 5) / 100;
       let precioFinal = precioTotal(precioProducto, cantidadDeProductos) + agregadoDeIva + interesesEn6Cuotas;
      alert("El precio final iva incluido es de/los/las" + producto + " es de $" + precioFinal + " que disfrute su compra");
      return("Su cuota mensual es de $" + (precioFinal / cuotaProducto));
   }
   else if (cuotaProducto == 12){
       let interesesEn12Cuotas = (precioTotal(precioProducto, cantidadDeProductos) * 10 ) / 100; 
       let precioFinal = precioTotal(precioProducto, cantidadDeProductos) + agregadoDeIva + interesesEn12Cuotas;
       alert("El precio final iva incluido de/los/las " + producto + " es de $" + precioFinal + " que disfrute su compra");
       return("Su cuota mensual es de $" + (precioFinal / cuotaProducto));

   }
   else if (cuotaProducto == 18){
       
       let interesesEn18Cuotas = (precioTotal(precioProducto, cantidadDeProductos) * 15) / 100;  
       let precioFinal = precioTotal(precioProducto, cantidadDeProductos) + agregadoDeIva + interesesEn18Cuotas;
       alert("El precio final iva incluido de/los/las " + producto + " es de $" + precioFinal + " que disfrute su compra");
       return("Su cuota mensual es de $" + (precioFinal / cuotaProducto));
   }
   else if (cuotaProducto == 24 ){ 
       let interesesEn24Cuotas = (precioTotal(precioProducto, cantidadDeProductos) * 20) / 100;
       let precioFinal = precioTotal(precioProducto, cantidadDeProductos) + agregadoDeIva + interesesEn24Cuotas;
       alert("El precio final iva incluido de/los " + producto + " es de $" + precioFinal + " que disfrute su compra");
       return("Su cuota mensual es de $" + (precioFinal / cuotaProducto));

   }
   else{
       alert("El texto/numero ingresado es invalido, vuelva a intentarlo")
       console.log("El texto/numero ingresado es invalido, vuelva a intentarlo");
   }
}
alert(precioEnCuotas());
console.log(precioEnCuotas());