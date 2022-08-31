let usuario_registrado = "Josesito";




function saludar(){

    let nombre = document.getElementById("nombre_usuario");

 
    console.log("Hola bienvenido/a al sistema:" , nombre.value)


}




function validar(){

    let nombre = document.getElementById("nombre_usuario");
    let mensaje = document.getElementById("mensaje");


    if( nombre.value == usuario_registrado){
 
        let parrafo = document.createElement("p");
        mensaje.innerHTML = "";   
        parrafo.innerText = "Bienvenido/a al sistema";
        parrafo.style.fontFamily = "Verdana";
        parrafo.style.fontSize = "24px";
        mensaje.append(parrafo);
     
    

    }
    else{
        document.body.innerHTML = `<h2>ERROR USUARIO INCORRECTO</h2>
                                   <p>El usuario: ${nombre.value} no se encontro</p>
                                   `;
    }


}


