import"./BotonWhatsapp.astro_astro_type_script_index_0_lang.DWKVOK5v.js";const n=document.querySelectorAll(".card");function o(t){const e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}function i(){n.forEach(t=>{o(t)&&!t.classList.contains("rotate")&&c(t)})}window.addEventListener("scroll",i);function c(t){t.classList.add("rotate"),setTimeout(()=>{t.classList.remove("rotate")},3e3)}
