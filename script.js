'use strict'

let timer = document.querySelector('.clock__time');
let nowDate = new Date();
 
let str =  '';

function time() {
    nowDate = new Date();
    str = `${nowDate.getDate()} ${months[nowDate.getMonth()]} ${nowDate.getFullYear()}   ${days[nowDate.getDay()]}
    ${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`;
    return timer.innerHTML = str;
}

setInterval(time, 1000);