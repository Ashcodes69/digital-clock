let up = () => {
  let n = new Date();
  let h = n.getHours();
  let m = n.getMinutes();
  let s = n.getSeconds();

  let amPm = h >= 12 ? "PM" : "AM";

  h = h % 12 || 12;

  h = String(h).padStart(2, "0");
  m = String(m).padStart(2, "0");
  s = String(s).padStart(2, "0");

  let day = String(n.getDate()).padStart(2, "0");
  let mon = String(n.getMonth() + 1).padStart(2, "0");
  let year = n.getFullYear();

  document.getElementById("time-box").innerText = `${h}:${m}:${s}:${amPm}`;
  document.getElementById("date-box").innerText = `${day}-${mon}-${year}`;
};
setInterval(up, 1000);
up();

let usrInp = document.getElementById("inp");
let outputTxt = document.getElementById("output");
let setBtn = document.getElementById("set");
let msgPara = document.getElementById("msg");
let alarmAudio = document.getElementById("alarm");
let resetBtn = document.getElementById("reset");

usrInp.addEventListener("input", () => {
  outputTxt.innerText = usrInp.value;
});
setBtn.addEventListener("click", () => {
  msgPara.innerText = `Alert set! you will be notified after ${usrInp.value} minutes`;
  setTimeout(() => {
    alarmAudio.play();
  }, usrInp.value * 60000);
});

resetBtn.addEventListener("click", () => {
  alarmAudio.pause();
  msgPara.innerText = "Tell me in how much time you want to get alert";
  usrInp.value = 5;
  outputTxt.innerText = usrInp.value;
});
