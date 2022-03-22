//Definimos variables principales

const precio = 820000;
let back = document.getElementById("arrow");
let cot = document.getElementById("calcular");
let back2 = document.getElementById("back2");
let formulario = document.getElementById("second-form");
let padre = document.getElementById("first-form");

// funcion de calcular
cot.addEventListener("click", () => {

    //Definimos variables internas

    let calc = document.getElementById("const").value;
    let spCompra = document.getElementById("val-compra");
    let spDescuento = document.getElementById("val-dcto");
    let spTotal = document.getElementById("val-total");
    let compra = precio * calc;
    let fDescuento = compra * 0.10;
    let sDescuento = compra * 0.20;
    let tDescuento = compra * 0.30;
    let cDescuento = compra * 0.40;
    let qDescuento = compra * 0.50;
    let mensaje = document.getElementById("msj");

    //Muestra de un nuevo form

    padre.style.setProperty("display", "none");
    formulario.style.setProperty("display", "flex");

    //Calcular

    if(calc <= 0){
        alert("No es una cantidad válida");
        location.reload();
    } else if (calc <= 2) {
        spCompra.innerHTML = compra + " $";
        spDescuento.innerHTML = 0;
        spTotal.innerHTML = compra + " $";
        mensaje.innerHTML = "No Hay Descuento para ésta compra."
    } else if (calc <= 4) {
        spCompra.innerHTML = compra + " $";
        spDescuento.innerHTML = fDescuento + " $";
        spTotal.innerHTML = compra + fDescuento + " $";
        mensaje.innerHTML = "El Descuento es de 10%";
    } else if (calc <= 6) {
        spCompra.innerHTML = compra + " $";
        spDescuento.innerHTML = sDescuento + " $";
        spTotal.innerHTML = compra + sDescuento + " $";
        mensaje.innerHTML = "El Descuento es de 20%";
    } else if (calc <= 8) {
        spCompra.innerHTML = compra + " $";
        spDescuento.innerHTML = tDescuento + " $";
        spTotal.innerHTML = compra + tDescuento + " $";
        mensaje.innerHTML = "El Descuento es de 30%";
    } else if (calc <= 10) {
        spCompra.innerHTML = compra + " $";
        spDescuento.innerHTML = cDescuento + " $";
        spTotal.innerHTML = compra + cDescuento + " $";
        mensaje.innerHTML = "El Descuento es de 40%";
    } else if (calc <= 12) {
        spCompra.innerHTML = compra + " $";
        spDescuento.innerHTML = qDescuento + " $";
        spTotal.innerHTML = compra + qDescuento + " $";
        mensaje.innerHTML = "El Descuento es de 50%";
    } else {
        spCompra.innerHTML = compra + " $";
        spDescuento.innerHTML = 0;
        spTotal.innerHTML = compra + " $";
        mensaje.innerHTML = "No Hay Descuento para ésta compra."
    }
})


//Botón de retroceso

back.addEventListener("click", () => {
    location.href = "../index.html";
})

//Botón de repetir cotización

back2.addEventListener("click", () =>{
    formulario.style.setProperty("display", "none");
    padre.style.setProperty("display", "flex");
    padre.style.setProperty("flex-direction", "column");
    padre.style.setProperty("align-items", "center");
})