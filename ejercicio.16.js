/*
    Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/

const finalAmount = (money=undefined, discount=undefined) => {
    if (money === undefined) return console.warn("Debe ingresar el monto");
    if (discount === undefined) return console.warn("Debe ingresar el descuento");
    if (money < 0) return console.error("El monto no puede ser negativo");
    if (discount < 0) return console.error("El descuento no puede ser negativo");
    if (!Number.isInteger(money)) return console.error("El valor del monto debe ser númerico");
    if (!Number.isInteger(discount)) return console.error("El valor del descuento debe ser númerico");

    let finalPrice =  money - ((discount*money) / 100 );

    return console.info(`El monto ingresado fue: $${money} y el descuento a hacer: ${discount}%. Precio final: ${finalPrice}`);
}


console.info("EJERCICIO 16");
finalAmount();
finalAmount(10);
finalAmount(-1000,20);
finalAmount(2000,-5);
finalAmount(true,20);
finalAmount(2000,"40");
finalAmount(1000,20);
finalAmount(1000,50);