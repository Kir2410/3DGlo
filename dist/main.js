(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),c=e=>e<10?`0${e}`:e;let l=setInterval((()=>{let e=(()=>{let e=(new Date("25 november 2021 23:11").getTime()-(new Date).getTime())/1e3;return{timeRemainig:e,hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=c(e.hours),n.textContent=c(e.minutes),o.textContent=c(e.seconds),e.timeRemainig<=1&&(clearInterval(l),t.textContent="00",n.textContent="00",o.textContent="00")}),1e3)})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector(".menu"),n=e.querySelector(".close-btn"),o=e.querySelectorAll("ul>li>a"),c=()=>{e.classList.toggle("active-menu")};t.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),n=document.querySelectorAll(".popup-btn"),o=e.querySelector(".popup-close");let c=-50;const l=()=>{let n=requestAnimationFrame(l);e.style.display="block",c<21?t.style.top=`${c}%`:(cancelAnimationFrame(n),c=-50),c+=2};n.forEach((t=>{t.addEventListener("click",(()=>{window.screen.availWidth>=768?l():e.style.display="block",console.dir(window.screen)}))})),o.addEventListener("click",(()=>{e.style.display=""}))})()})();