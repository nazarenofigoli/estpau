let operacionesBancarias = [2000, -1500, 4500, -500, 3000, -3000];
function calcularSaldos(operaciones) {
let saldoDepositos = 0;
let saldoRetiros = 0;
for (let i = 0; i < operaciones.length; i++) {
    if (operaciones[i] > 0) {
    saldoDepositos += operaciones[i];
    } else {
    saldoRetiros += operaciones[i];
    }
}
let saldoActual = saldoDepositos + saldoRetiros;
return {
    saldoDepositos, saldoRetiros, saldoActual,
};
}
function mostrarResultados(nombre, apellido, operaciones) {
let saldos = calcularSaldos(operaciones);
console.log("Estimada " + nombre + " " + apellido);
console.log("Total de depósitos es de: $" + saldos.saldoDepositos);
console.log("Total de retiros es de: $" + -saldos.saldoRetiros);
console.log("Su saldo actual en la cuenta es de: $"+ saldos.saldoActual);
}
mostrarResultados("Gloria", "Medina", operacionesBancarias);