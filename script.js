const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr
    if (min < 10) min = '0' + min
    if (sec < 10) sec = '0' + sec

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = sec

    const diaNoite = document.getElementById('container')

    if( hr > 6 && hr < 18) {
        diaNoite.classList.add("dia")
    } else {
        diaNoite.classList.add("noite")
    }

    var title = document.querySelector("#title")
    
        if (0 <= hr && hr < 6) {
            title.textContent = "Boa madrugada!"
        } else if (6 <= hr && hr < 12) {
            title.textContent = "Bom dia!"
        } else if (12 <= hr && hr < 18) {
            title.textContent = "Boa tarde!"
        } else if (18 <= hr && hr < 24) {
            title.textContent = "Boa noite!"
        }

})