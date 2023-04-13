var fechaLimite = new Date("April 20, 2023 00:00:00").getTime();
var x = setInterval(function() {
    var ahora = new Date().getTime();
    var tiempoRestante = fechaLimite - ahora;
    var dias = Math.floor(tiempoRestante/(1000*60*60*24))
    var horas = Math.floor((tiempoRestante % (1000*60*60*24))/(1000*60*60));
    var minutos = Math.floor((tiempoRestante % (1000*60*60))/(1000*60));
    var segundos = Math.floor((tiempoRestante % (1000*60))/(1000));
document.getElementById("timer").innerHTML= dias + " días " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";
if (tiempoRestante<0){
    clearInterval(x);
    document.getElementById("timer").innerHTML = "La oferta expiró"
}
}, 1000);