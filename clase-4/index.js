
const moment = require("moment");

const hoy = moment();

const fechaNacimiento = moment("1996-200-03", "YYYY-MM-DD");

if(fechaNacimiento.isValid()) {
    console.log(`Desde mi nacimiento, han pasado ${ hoy.diff(fechaNacimiento, "years") } años `);
} else {
    console.log("No se puede proseguir ya que la fecha es inválida");
}