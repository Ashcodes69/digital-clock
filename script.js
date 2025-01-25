let up = ()=>{
let n = new Date()
let h = n.getHours()
let m = n.getMinutes()
let s = n.getSeconds()

let amPm = h >= 12 ? 'PM' : 'AM';

 h = h % 12 || 12;

 h = String(h).padStart(2,'0');
 m = String(m).padStart(2,'0');
 s = String(s).padStart(2,'0');

 let day = String(n.getDate()).padStart(2,'0');
 let mon = String(n.getMonth()+1).padStart(2,'0');
 let year = n.getFullYear();

 document.getElementById('time-box').innerText =`${h}:${m}:${s}:${amPm}`;
 document.getElementById('date-box').innerText=`${day}-${mon}-${year}`;
}
setInterval(up,1000);
up();
