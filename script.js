
// setTimeout -> executa uma vez
// setInterval -> executta infinitas vezes
//clearInterval -> vai pausar o setInterval


let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.stop.onclick = () => stop();
function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
  }
  
  function pause() {
    clearInterval(cron);
  }
  
  function stop() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
  }
  function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
  }
  
  function returnData(input) {
    return input > 10 ? input : `0${input}`
  }
// let h1 = document.querySelector("h1")

// function start() {

//     cron = setInterval(function () {
//          number++
//         h1.innerHTML = number
//     }, 100)
// }


// let h2 = document.querySelector("h2")

// function start() {

//     hour = setInterval(function () {
//          number++
//         h2.innerHTML = number
//     }, 60)
// }

// function stop() {
// clearInterval(cron)
// }