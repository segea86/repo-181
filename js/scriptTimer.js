const fechaLimite = new Date("May 1, 2023 00:00:00").getTime();
const x = setInterval(()=> {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaLimite - ahora;
    const dias = Math.floor(tiempoRestante/(1000*60*60*24))
    const horas = Math.floor((tiempoRestante % (1000*60*60*24))/(1000*60*60));
    const minutos = Math.floor((tiempoRestante % (1000*60*60))/(1000*60));
    const segundos = Math.floor((tiempoRestante % (1000*60))/(1000));
document.getElementById("timer").innerHTML= dias + " días " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";
if (tiempoRestante<0){
    clearInterval(x);
    document.getElementById("timer").innerHTML = "La oferta expiró"
}
}, 1000);

const ahora = new Date().getTime();
console.log(ahora);