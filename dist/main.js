(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),a=e=>e<10?`0${e}`:e;let c=setInterval((()=>{let e=(()=>{let e=(new Date("25 november 2021 23:11").getTime()-(new Date).getTime())/1e3;return{timeRemainig:e,hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=a(e.hours),o.textContent=a(e.minutes),n.textContent=a(e.seconds),e.timeRemainig<=1&&(clearInterval(c),t.textContent="00",o.textContent="00",n.textContent="00")}),1e3)})(),(()=>{const e=document.querySelector("menu");document.addEventListener("click",(t=>{(t.target.closest(".menu")||"A"===t.target.tagName&&e.classList.contains("active-menu")||t.target.classList.contains("close-btn")||!t.target.classList.contains("active-menu")&&e.classList.contains("active-menu")&&!t.target.closest("li"))&&(console.dir(t.target),e.classList.toggle("active-menu"))}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),o=document.querySelectorAll(".popup-btn");e.querySelector(".popup-close");let n=-50;const a=()=>{let o=requestAnimationFrame(a);e.style.display="block",n<21?t.style.top=`${n}%`:(cancelAnimationFrame(o),n=-50),n+=2};o.forEach((t=>{t.addEventListener("click",(()=>{window.innerWidth>=768?a():e.style.display="block"}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="")}))})(),(()=>{const e=document.querySelector(".calc-block").querySelectorAll("input.calc-item"),t=document.querySelectorAll('input[placeholder="Ваше имя"]'),o=document.querySelector('input[placeholder="Ваше сообщение"]'),n=document.querySelectorAll("input[type=email]"),a=document.querySelectorAll("input[type=tel]");e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9]+/,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-я\s\-]+/,"")}))})),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-я\s\-]+/,"")})),n.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^A-Za-z\@\-\_\.\!\~\*\']+/,"")}))})),a.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9\(\)\-]+/,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");let o,n=document.querySelectorAll(".dot"),a=0;const c=(e,t,o)=>{e[t].classList.remove(o)},r=(e,t,o)=>{e[t].classList.add(o)},l=()=>{c(t,a,"portfolio-item-active"),c(n,a,"dot-active"),a++,a>=t.length&&(a=0),r(t,a,"portfolio-item-active"),r(n,a,"dot-active")},s=(e=1500)=>{o=setInterval(l,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(c(t,a,"portfolio-item-active"),c(n,a,"dot-active"),e.target.matches("#arrow-right")?a++:e.target.matches("#arrow-left")?a--:e.target.classList.contains("dot")&&n.forEach(((t,o)=>{e.target===t&&(a=o)})),a>=t.length&&(a=0),a<0&&(a=t.length-1),r(t,a,"portfolio-item-active"),r(n,a,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(o)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&s(2e3)}),!0),(()=>{let e=t.length-1;for(;e>0;){const t=n[0].cloneNode(!0);n[n.length-1].after(t),n[n.length-1].classList.remove("dot-active"),n=document.querySelectorAll(".dot"),e--}})(),s(2e3),console.dir(n)})()})();