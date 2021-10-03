const clock = document.querySelector(".clock");
const day = document.querySelector(".days");
function getClock() {
  const dday = new Date("2021-10-31,00:00:00").getTime();

  const today = new Date().getTime();


  const timeLeftSec = (dday - today)/1000;

  const seconds = String(Math.floor(timeLeftSec)%60).padStart(2,"0");

  const minutes = String(Math.floor(timeLeftSec/60)%60).padStart(2,"0");

  const hours = String(Math.floor(timeLeftSec/(60*60))%24).padStart(2,"0");

  const days = Math.floor(timeLeftSec/(60*60*24));

  day.innerText = `D-${Math.floor(days)}`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}





const init = () => {
  getClock();
  setInterval(getClock, 1000);
};

init();
