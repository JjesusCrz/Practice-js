/*const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(hr < 10) {hr = '0' + hours;}
    if(min< 10) {min = '0' +minutes;}
    if(s< 10) {s = '0' + seconds;}

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = s;
});
*/

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time() {
    let dateToday = new Date(); 
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) { hr = '0' + hr; }
    if (min < 10) { min = '0' + min; }
    if (s < 10) { s = '0' + s; }

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = s;
}, 1000); // I added the interval of 1000 milliseconds (1 second) to update the clock every second// I added the interval of 1000 milliseconds (1 second) to update the clock every second
