(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds"),l=e=>e<10?`0${e}`:e;let a=setInterval((()=>{let e=(()=>{let e=(new Date("25 november 2021 23:11").getTime()-(new Date).getTime())/1e3;return{timeRemainig:e,hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=l(e.hours),n.textContent=l(e.minutes),c.textContent=l(e.seconds),e.timeRemainig<=1&&(clearInterval(a),t.textContent="00",n.textContent="00",c.textContent="00")}),1e3)})(),(()=>{const e=document.querySelector("menu");document.addEventListener("click",(t=>{(t.target.closest(".menu")||t.target.closest("li")||t.target.classList.contains("close-btn")||!t.target.classList.contains("active-menu")&&e.classList.contains("active-menu"))&&(console.log("мимо"),e.classList.toggle("active-menu"))}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),n=document.querySelectorAll(".popup-btn");e.querySelector(".popup-close");let c=-50;const l=()=>{let n=requestAnimationFrame(l);e.style.display="block",c<21?t.style.top=`${c}%`:(cancelAnimationFrame(n),c=-50),c+=2};n.forEach((t=>{t.addEventListener("click",(()=>{window.innerWidth>=768?l():e.style.display="block"}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="")}))})(),(()=>{const e=document.querySelector(".calc-block").querySelectorAll("input.calc-item"),t=document.querySelectorAll('input[placeholder="Ваше имя"]'),n=document.querySelector('input[placeholder="Ваше сообщение"]'),c=document.querySelectorAll("input[type=email]"),l=document.querySelectorAll("input[type=tel]");e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9]+/,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-я\s\-]+/,"")}))})),n.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-я\s\-]+/,"")})),c.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^A-Za-z\@\-\_\.\!\~\*\']+/,"")}))})),l.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9\(\)\-]+/,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const c=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===c?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}}))})()})();