(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds"),r=e=>e<10?`0${e}`:e;let c=setInterval((()=>{let e=(()=>{let e=(new Date("25 november 2021 23:11").getTime()-(new Date).getTime())/1e3;return{timeRemainig:e,hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=r(e.hours),n.textContent=r(e.minutes),l.textContent=r(e.seconds),e.timeRemainig<=1&&(clearInterval(c),t.textContent="00",n.textContent="00",l.textContent="00")}),1e3)})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector(".menu"),n=e.querySelector(".close-btn"),l=e.querySelectorAll("ul>li>a"),r=()=>{e.classList.toggle("active-menu")};t.addEventListener("click",r),n.addEventListener("click",r),l.forEach((e=>e.addEventListener("click",r)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),n=document.querySelectorAll(".popup-btn"),l=e.querySelector(".popup-close");let r=-50;const c=()=>{let n=requestAnimationFrame(c);e.style.display="block",r<21?t.style.top=`${r}%`:(cancelAnimationFrame(n),r=-50),r+=2};n.forEach((t=>{t.addEventListener("click",(()=>{window.innerWidth>=768?c():e.style.display="block"}))})),l.addEventListener("click",(()=>{e.style.display=""}))})(),(()=>{const e=document.querySelector(".calc-block").querySelectorAll("input.calc-item"),t=document.querySelectorAll('input[placeholder="Ваше имя"]'),n=document.querySelector('input[placeholder="Ваше сообщение"]'),l=document.querySelectorAll("input[type=email]"),r=document.querySelectorAll("input[type=tel]");e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9]+/,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-я\s\-]+/,"")}))})),n.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-я\s\-]+/,"")})),l.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^A-Za-z\@\-\_\.\!\~\*\']+/,"")}))})),r.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9\(\)\-]+/,"")}))}))})()})();