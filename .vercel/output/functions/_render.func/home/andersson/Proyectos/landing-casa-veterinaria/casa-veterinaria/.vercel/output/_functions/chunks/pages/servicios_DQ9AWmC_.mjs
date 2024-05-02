/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent } from '../astro_Dac1kztP.mjs';
import 'kleur/colors';
import 'html-escaper';
import { b as $$BotonWhatsapp, e as $$Layout } from './index_ClOC4nm9.mjs';
import 'clsx';
/* empty css                              */

const $$Astro$3 = createAstro();
const $$BannerServicios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BannerServicios;
  return renderTemplate`${maybeRenderHead()}<section> <div class=" bg-fondo-servicios-mobile  h-600 bg-cover bg-center bg-no-repeat w-full mt-16"> <div class="flex flex-col px-4 min-[930px]:flex-row "> <img src="../src/image/imagen-banner-servicio.webp" alt="Logo casa veterinaria" class=" scale-down animate-fade-down" style="mask-image: linear-gradient(white 90%, transparent);"> <div class="flex flex-col justify-evenly min-w-[50px] "> <h2 class="md:my-20 lg:mb-0 text-center px-2 xl:text-5xl lg:text-4xl md:text-start md:text-4xl sm:text-3xl text-3xl font-bold text-purple-700 ">
Clínica veterinaria </h2> <p class="animate-fade-left animate-delay-500 my-10 md:my-0 text-center px-2 xl:text-4xl lg:text-3xl md:text-start md:text-3xl sm:text-2xl text-2xl text-stone-900 ">
Casa Veterinaria Laureles un lugar <strong>en Bogotá con todos los servicios</strong> y cuidados que tu mascota necesita.<br><br><strong>¡DESCÚBRELOS AQUÍ!</strong></p> <div class="flex justify-center md:my-20 lg:mb-0"> ${renderComponent($$result, "BotonWhatsapp", $$BotonWhatsapp, { "textBoton": "Contactenos" })} </div> </div> </div> </div> </section>`;
}, "/home/andersson/Proyectos/landing-casa-veterinaria/casa-veterinaria/src/components/BannerServicios.astro", void 0);

const $$Astro$2 = createAstro();
const $$BotonWhatsappRedondo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BotonWhatsappRedondo;
  return renderTemplate`${maybeRenderHead()}<a href="https://api.whatsapp.com/send?phone=+573014588503&text=Hola%20Casa%20veterinaria%20Laureles,%20requiero%20una%20consulta%20o%20cita%20para%20" target="_blank" class="animate-bounce scale-[0.9] h-16  w-16 flex flex-row justify-center items-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]    sm:scale-75   lg:scale-100   bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-full "> <svg width="45" height="45" viewBox="0 0 61 60" fill="none"> <g clip-path="url(#clip0_465_292)"> <path d="M32.375 0C16.8125 0 4.25 12.5625 4.25 28.125C4.25 34.5 6.3125 40.5 10.25 45.375L6.3125 57.375C6.125 58.125 6.3125 58.875 6.875 59.4375C7.0625 59.8125 7.625 60 8 60C8.1875 60 8.5625 60 8.75 59.8125L21.6875 54C25.0625 55.5 28.625 56.25 32.375 56.25C47.9375 56.25 60.5 43.6875 60.5 28.125C60.5 12.5625 47.9375 0 32.375 0Z" fill="#25D366"></path> <path d="M48.6875 38.4375C47.9375 40.6875 45.125 42.5625 42.6875 42.9375C42.125 43.125 41.5625 43.125 40.8125 43.125C39.3125 43.125 37.0625 42.75 33.125 41.0625C28.625 39.1875 24.125 35.25 20.5625 30.1875V30C19.4375 28.3125 17.375 25.125 17.375 21.75C17.375 17.625 19.4375 15.5625 20.1875 14.625C21.125 13.6875 22.4375 13.125 23.9375 13.125C24.3125 13.125 24.5 13.125 24.875 13.125C26.1875 13.125 27.125 13.5 28.0625 15.375L28.8125 16.875C29.375 18.375 30.125 20.0625 30.3125 20.25C30.875 21.375 30.875 22.3125 30.3125 23.25C30.125 23.8125 29.75 24.1875 29.375 24.5625C29.1875 24.9375 29 25.125 28.8125 25.125C28.625 25.3125 28.625 25.3125 28.4375 25.5C29 26.4375 30.125 28.125 31.625 29.4375C33.875 31.5 35.5625 32.0625 36.5 32.4375C36.875 32.0625 37.25 31.3125 37.8125 30.75L38 30.375C38.9375 29.0625 40.4375 28.6875 41.9375 29.25C42.6875 29.625 46.8125 31.5 46.8125 31.5L47.1875 31.6875C47.75 32.0625 48.5 32.25 48.875 33C49.625 34.6875 49.0625 37.125 48.6875 38.4375Z" fill="white"></path> </g> <defs> <clipPath id="clip0_465_292"> <rect width="60" height="60" fill="white" transform="translate(0.5)"></rect> </clipPath> </defs> </svg> </a>`;
}, "/home/andersson/Proyectos/landing-casa-veterinaria/casa-veterinaria/src/components/BotonWhatsappRedondo.astro", void 0);

const $$Astro$1 = createAstro();
const $$ServiciosDetallado = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServiciosDetallado;
  return renderTemplate`${maybeRenderHead()}<section class=" w-auto mx-4 md:mx-16 mb-14" data-astro-cid-bkz5zztz> <div class="text-center mt-16 md:my-16 " data-astro-cid-bkz5zztz> <h2 class="text-3xl font-bold text-purple-700 mb-2" data-astro-cid-bkz5zztz>SERVICIOS VETERINARIOS</h2> <span class="text-2xl font-light text-purple-700" data-astro-cid-bkz5zztz>Encuentra todo en un solo lugar</span> </div> <div class="px-2 py-6 flex justify-end mr-2 md:mr-4 sticky top-24 xl:mr-40  z-[100] overflow-y-auto" data-astro-cid-bkz5zztz> ${renderComponent($$result, "BotonWhatsappRedondo", $$BotonWhatsappRedondo, { "data-astro-cid-bkz5zztz": true })} </div> <div class="flex flex-col   items-center" data-astro-cid-bkz5zztz> <article id="consulta" class=" px-4 lg:px-0 lg:w-9/12 flex flex-col items-center   md:flex-row w-full overflow-hidden mb-12" data-astro-cid-bkz5zztz> <div class="relative  mb-8  md:mr-12 " id="card1" data-astro-cid-bkz5zztz> <img style="mask-image: linear-gradient(white 80%, transparent);" class="card z-50 [280px] h-[420px] object-containt rounded-lg " src="../src/image/card-consulta-fondo.webp " alt="perro en consulta veterinaria " data-astro-cid-bkz5zztz> </div> <div class="flex flex-col w-fit  md:w-2/3 self-start" data-astro-cid-bkz5zztz> <h2 class="text-center  text-3xl  font-bold  mb-8 text-purple-700 " data-astro-cid-bkz5zztz>Consulta veterinaria</h2> <ul class="md:text-start leading-relaxed  space-y-2 font-light leading-normal text-stone-900  text-lg sm:text-xl list-disc" data-astro-cid-bkz5zztz> <li data-astro-cid-bkz5zztz> <strong class="font-semibold" data-astro-cid-bkz5zztz>Por dolor inexplicable</strong> o <strong class="font-semibold" data-astro-cid-bkz5zztz>cojera en extremidades</strong>, para diagnóstico rápido y preciso.</li> <li data-astro-cid-bkz5zztz>Evaluación veterinaria <strong class="font-semibold" data-astro-cid-bkz5zztz>por pérdida de apetito</strong> o <strong class="font-semibold" data-astro-cid-bkz5zztz>cambios en hábitos alimenticios</strong>, con atención profesional y empática.</li> <li data-astro-cid-bkz5zztz>Tratamiento veterinario <strong class="font-semibold" data-astro-cid-bkz5zztz>para vómitos y diarrea</strong> persistentes, garantizando el bienestar de tu mascota.</li> <li data-astro-cid-bkz5zztz>Diagnóstico y manejo de <strong class="font-semibold" data-astro-cid-bkz5zztz>alergias cutáneas</strong>, asegurando la salud de tu mascota.</li> <li data-astro-cid-bkz5zztz>Atención especializada para <strong class="font-semibold" data-astro-cid-bkz5zztz> problemas urinarios</strong> en mascotas, con cuidado experto y soluciones efectivas.</li> </ul> </div> </article> <article id="urgencias" class=" px-4 lg:px-0 lg:w-9/12 flex flex-col  items-center   md:flex-row w-full overflow-hidden mb-12" data-astro-cid-bkz5zztz> <div class="relative  mb-8  md:ml-12 md:order-2 order-1" id="card2" data-astro-cid-bkz5zztz> <img style="mask-image: linear-gradient(white 80%, transparent);" class="card z-50 w-[280px] h-[420px] object-none rounded-lg " src="../src/image/card-urgencias-fondo.webp " alt="gato en urgencias " data-astro-cid-bkz5zztz> </div> <div class="flex flex-col w-fit  md:w-2/3 md:order-1 order-2 md:ml-12 self-start" data-astro-cid-bkz5zztz> <h2 class="text-center  text-3xl  font-bold  mb-8 text-purple-700 " data-astro-cid-bkz5zztz>Urgencias veterinarias</h2> <ul class="md:text-start leading-relaxed  space-y-2 font-light leading-normal text-stone-900  text-lg sm:text-xl list-disc" data-astro-cid-bkz5zztz> <li data-astro-cid-bkz5zztz>Evaluación rápida, <strong class="font-semibold" data-astro-cid-bkz5zztz>tratamiento de heridas y lesiones en mascotas</strong>, garantizando cuidado urgente y efectivo.</li> <li data-astro-cid-bkz5zztz>Atención inmediata<strong class="font-semibold" data-astro-cid-bkz5zztz> para casos de envenenamiento o intoxicación</strong>, con diagnóstico y tratamiento urgentes.</li> <li data-astro-cid-bkz5zztz>Estabilización y manejo de emergencias médicas, como <strong class="font-semibold" data-astro-cid-bkz5zztz>convulsiones o dificultad respiratoria</strong>, asegurando una atención oportuna.</li> <li data-astro-cid-bkz5zztz><strong class="font-semibold" data-astro-cid-bkz5zztz>Radiografías, ecografías y análisis de laboratorio urgentes </strong>para diagnóstico rápido de problemas de salud, con resultados precisos.</li> </ul> </div> </article> <article id="ecografia" class=" px-4 lg:px-0 lg:w-9/12 flex flex-col items-center   md:flex-row w-full overflow-hidden mb-12" data-astro-cid-bkz5zztz> <div class="relative  mb-8  md:mr-12 " id="card" data-astro-cid-bkz5zztz> <img style="mask-image: linear-gradient(white 80%, transparent);" class="card z-50 w-[280px] h-[420px] object-none rounded-lg " src="../src/image/card-ecografia-fondo.webp " alt="veterinario realizando ecografia " data-astro-cid-bkz5zztz> </div> <div class="flex flex-col w-fit  md:w-2/3 self-start" data-astro-cid-bkz5zztz> <h2 class="text-center  text-3xl  font-bold  mb-8 text-purple-700 " data-astro-cid-bkz5zztz>Ecografías</h2> <ul class="md:text-start leading-relaxed  space-y-2 font-light leading-normal text-stone-900  text-lg sm:text-xl list-disc" data-astro-cid-bkz5zztz> <li data-astro-cid-bkz5zztz><strong class="font-semibold" data-astro-cid-bkz5zztz>Evaluación de órganos internos </strong>para diagnóstico de enfermedades abdominales.</li> <li data-astro-cid-bkz5zztz><strong class="font-semibold" data-astro-cid-bkz5zztz>Seguimiento embarazo en mascotas</strong>, incluyendo <strong class="font-semibold" data-astro-cid-bkz5zztz>control prenatal y monitoreo fetal</strong>.</li> <li data-astro-cid-bkz5zztz>Diagnóstico de enfermedad cardíaca y <strong class="font-semibold" data-astro-cid-bkz5zztz>evaluación de la función cardíaca</strong>.</li> <li data-astro-cid-bkz5zztz>Detección y seguimiento de <strong class="font-semibold" data-astro-cid-bkz5zztz>masas o tumores internos.</strong></li> <li data-astro-cid-bkz5zztz><strong class="font-semibold" data-astro-cid-bkz5zztz>Evaluación del tracto urinario</strong> para diagnóstico de <strong class="font-semibold" data-astro-cid-bkz5zztz>enfermedades renales o del tracto urinario</strong> inferior.</li> </ul> </div> </article> <article id="peluqueria" class=" px-4 lg:px-0 lg:w-9/12 flex flex-col  items-center   md:flex-row w-full overflow-hidden mb-12" data-astro-cid-bkz5zztz> <div class="relative  mb-8  md:ml-12 md:order-2 order-1" id="card" data-astro-cid-bkz5zztz> <img style="mask-image: linear-gradient(white 80%, transparent);" class="card z-50 w-[280px] h-[420px] object-none rounded-lg " src="../src/image/card-peluqueria-fondo.webp " alt="perro prepradonse para bañar " data-astro-cid-bkz5zztz> </div> <div class="flex flex-col w-fit  md:w-2/3 md:order-1 order-2 md:ml-12 self-start" data-astro-cid-bkz5zztz> <h2 class="text-center  text-3xl  font-bold  mb-8 text-purple-700 " data-astro-cid-bkz5zztz>Peluquería felina y canina</h2> <ul class="md:text-start leading-relaxed  space-y-2 font-light leading-normal text-stone-900  text-lg sm:text-xl list-disc" data-astro-cid-bkz5zztz> <li data-astro-cid-bkz5zztz><strong class="font-semibold" data-astro-cid-bkz5zztz>Baño completo</strong> con champú y acondicionador adecuados para cada tipo de pelaje.</li> <li data-astro-cid-bkz5zztz><strong class="font-semibold" data-astro-cid-bkz5zztz>Corte de pelo</strong> y arreglo estético según las preferencias del dueño y las necesidades de la mascota.</li> <li data-astro-cid-bkz5zztz>Limpieza e <strong class="font-semibold" data-astro-cid-bkz5zztz>higiene de oídos.</strong></li> <li data-astro-cid-bkz5zztz><strong class="font-semibold" data-astro-cid-bkz5zztz>Corte de uñas,</strong> para evitar problemas de salud y lesiones.</li> <li data-astro-cid-bkz5zztz>Tratamientos de spa adicionales, como hidratación profunda del pelaje o <strong class="font-semibold" data-astro-cid-bkz5zztz>aplicaciones de fragancias.</strong></li> </ul> </div> </article> <article id="hospitalizacion" class=" px-4 lg:px-0 lg:w-9/12 flex flex-col items-center   md:flex-row w-full overflow-hidden mb-12" data-astro-cid-bkz5zztz> <div class="relative  mb-8  md:mr-12 " id="card" data-astro-cid-bkz5zztz> <img style="mask-image: linear-gradient(white 80%, transparent);" class="card z-50 w-[280px] h-[420px] object-none rounded-lg " src="../src/image/card-hopitalizacion-fondo.webp " alt="perro hospitalizado " data-astro-cid-bkz5zztz> </div> <div class="flex flex-col w-fit  md:w-2/3 self-start" data-astro-cid-bkz5zztz> <h2 class="text-center  text-3xl  font-bold  mb-8 text-purple-700 " data-astro-cid-bkz5zztz>Hospitalización</h2> <ul class="md:text-start leading-relaxed  space-y-2 font-light leading-normal text-stone-900  text-lg sm:text-xl list-disc" data-astro-cid-bkz5zztz> <li data-astro-cid-bkz5zztz><strong class="font-semibold" data-astro-cid-bkz5zztz>Monitoreo constante </strong>del estado de salud y signos vitales de tu mascota.</li> <li data-astro-cid-bkz5zztz><strong class="font-semibold" data-astro-cid-bkz5zztz>Administración de medicamentos </strong>y tratamientos según las necesidades que tenga tu mascota.</li> <li data-astro-cid-bkz5zztz><strong class="font-semibold" data-astro-cid-bkz5zztz>Fluidoterapia y alimentación intravenosa </strong>para garantizar la hidratación y nutrición adecuadas.</li> <li data-astro-cid-bkz5zztz>Control del dolor y manejo de síntomas para mejorar el bienestar del paciente.</li> <li data-astro-cid-bkz5zztz><strong class="font-semibold" data-astro-cid-bkz5zztz>Atención veterinaria especializada</strong> y cuidado compasivo las <strong class="font-semibold" data-astro-cid-bkz5zztz>24 horas del día.</strong></li> </ul> </div> </article> <article id="cirugia" class=" px-4 lg:px-0 lg:w-9/12 flex flex-col  items-center   md:flex-row w-full overflow-hidden mb-12" data-astro-cid-bkz5zztz> <div class="relative  mb-8  md:ml-12 md:order-2 order-1" id="card" data-astro-cid-bkz5zztz> <img style="mask-image: linear-gradient(white 80%, transparent);" class="card z-50 w-[280px] h-[420px] object-none rounded-lg " src="../src/image/card-cirugia-fondo.webp " alt="perro y su cria" data-astro-cid-bkz5zztz> </div> <div class="flex flex-col w-fit  md:w-2/3 md:order-1 order-2 md:ml-12 self-start" data-astro-cid-bkz5zztz> <h2 class="text-center  text-3xl  font-bold  mb-8 text-purple-700 " data-astro-cid-bkz5zztz>Cirugía y Ortopedia</h2> <ul class="md:text-start leading-relaxed  space-y-2 font-light leading-normal text-stone-900  text-lg sm:text-xl list-disc" data-astro-cid-bkz5zztz> <li data-astro-cid-bkz5zztz><strong class="font-semibold" data-astro-cid-bkz5zztz>Evaluación preoperatoria </strong>exhaustiva para garantizar la seguridad del paciente y el éxito del procedimiento.</li> <li data-astro-cid-bkz5zztz><strong class="font-semibold" data-astro-cid-bkz5zztz>Cirugías de tejidos blandos </strong>y procedimientos quirúrgicos especializados para abordar problemas como <strong class="font-semibold" data-astro-cid-bkz5zztz>tumores, heridas profundas, esterilización, cesárea o hernias</strong>.</li> <li data-astro-cid-bkz5zztz><strong class="font-semibold" data-astro-cid-bkz5zztz>Cirugía ortopédica para corrección de fracturas</strong>, luxaciones y otras lesiones musculoesqueléticas, con enfoque en la <strong class="font-semibold" data-astro-cid-bkz5zztz>restauración de la movilidad y la función.</strong></li> <li data-astro-cid-bkz5zztz><strong class="font-semibold" data-astro-cid-bkz5zztz>Implantes ortopédicos</strong> y dispositivos de fijación para <strong class="font-semibold" data-astro-cid-bkz5zztz>estabilización de huesos y articulaciones</strong>, mejorando la calidad de vida del paciente.</li> <li data-astro-cid-bkz5zztz><strong class="font-semibold" data-astro-cid-bkz5zztz>Rehabilitación postoperatoria </strong>y seguimiento personalizado para asegurar una recuperación completa y duradera, promoviendo una rápida vuelta a la actividad normal de la mascota.</li> </ul> </div> </article> <article id="vacunacion" class=" px-4 lg:px-0 lg:w-9/12 flex flex-col items-center   md:flex-row w-full overflow-hidden mb-12" data-astro-cid-bkz5zztz> <div class="relative  mb-8  md:mr-12 " id="card" data-astro-cid-bkz5zztz> <img style="mask-image: linear-gradient(white 80%, transparent);" class="card z-50 w-[280px] h-[420px] object-none rounded-lg " src="../src/image/card-vacunacion-fondo.webp " alt="gato siendo vacunado " data-astro-cid-bkz5zztz> </div> <div class="flex flex-col w-fit  md:w-2/3 self-start" data-astro-cid-bkz5zztz> <h2 class="text-center  text-3xl  font-bold  mb-8 text-purple-700 " data-astro-cid-bkz5zztz>Vacunación de perros y gatos</h2> <ul class="md:text-start leading-relaxed  space-y-2 font-light leading-normal text-stone-900  text-lg sm:text-xl list-disc" data-astro-cid-bkz5zztz> <li data-astro-cid-bkz5zztz>Vacunación veterinaria <strong class="font-semibold" data-astro-cid-bkz5zztz>para prevenir enfermedades infecciosas </strong>y proteger la salud de tu mascota a largo plazo.</li> <li data-astro-cid-bkz5zztz><strong class="font-semibold" data-astro-cid-bkz5zztz>Programa de vacunación adaptado</strong> a las necesidades específicas de tu mascota para brindar una protección efectiva.</li> <li data-astro-cid-bkz5zztz><strong class="font-semibold" data-astro-cid-bkz5zztz>Vacunación para cachorros y adultos</strong>, siguiendo las pautas recomendadas por los expertos veterinarios.</li> <li data-astro-cid-bkz5zztz>Vacunación contra enfermedades comunes como la <strong class="font-semibold" data-astro-cid-bkz5zztz>rabia, parvovirus y moquillo</strong> para mantener a tu mascota saludable y feliz.</li> <li data-astro-cid-bkz5zztz>Vacunas específicas para gatos, incluyendo protección contra la <strong class="font-semibold" data-astro-cid-bkz5zztz>rinotraqueitis felina, el calicivirus felino, la leucemia felina y rabia </strong>garantizando su bienestar óptimo.</li> </ul> </div> </article> <article id="laboratorio" class=" px-4 lg:px-0 lg:w-9/12 flex flex-col  items-center   md:flex-row w-full overflow-hidden mb-12" data-astro-cid-bkz5zztz> <div class="relative  mb-8  md:ml-12 md:order-2 order-1" id="card" data-astro-cid-bkz5zztz> <img style="mask-image: linear-gradient(white 80%, transparent);" class="card z-50 w-[280px] h-[420px] object-none rounded-lg " src="../src/image/card-laboratorio-fondo.webp " alt="Perro que le estan tomando muestra de sangre " data-astro-cid-bkz5zztz> </div> <div class="flex flex-col w-fit  md:w-2/3 md:order-1 order-2 md:ml-12 self-start mb-14" data-astro-cid-bkz5zztz> <h2 class="text-center  text-3xl  font-bold  mb-8 text-purple-700 " data-astro-cid-bkz5zztz>Examenes de laboratorio</h2> <ul class="md:text-start leading-relaxed  space-y-2 font-light leading-normal text-stone-900  text-lg sm:text-xl list-disc" data-astro-cid-bkz5zztz> <li data-astro-cid-bkz5zztz>Nuestros exámenes de laboratorio ofrecen un análisis exhaustivo <strong class="font-semibold" data-astro-cid-bkz5zztz></strong>para identificar cualquier problema de salud en tu mascota.</li> <li data-astro-cid-bkz5zztz>Realizamos exámenes de laboratorio regularmente <strong class="font-semibold" data-astro-cid-bkz5zztz>para controlar el progreso y la respuesta al tratamiento de enfermedades crónicas</strong> como la diabetes o enfermedad renal.</li> <li data-astro-cid-bkz5zztz>Antes de cualquier procedimiento quirúrgico, llevamos a cabo exámenes de laboratorio para evaluar la salud general de tu mascota y<strong class="font-semibold" data-astro-cid-bkz5zztz> minimizar los riesgos durante la cirugía.</strong></li> <li data-astro-cid-bkz5zztz>Como parte de un <strong class="font-semibold" data-astro-cid-bkz5zztz>chequeo de salud de rutina</strong>, nuestros exámenes de laboratorio proporcionan información vital sobre la salud de tu mascota, detectando cualquier <strong class="font-semibold" data-astro-cid-bkz5zztz>problema en etapas tempranas.</strong></li> </ul> </div> </article> ${renderComponent($$result, "BotonWhatsapp", $$BotonWhatsapp, { "textBoton": "Solicitar un servicio", "data-astro-cid-bkz5zztz": true })} </div> </section>  `;
}, "/home/andersson/Proyectos/landing-casa-veterinaria/casa-veterinaria/src/components/ServiciosDetallado.astro", void 0);

const $$Astro = createAstro();
const $$Servicios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Servicios;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios Veterinarios", "description": "Encuentra una lista de servicios veterinarios que ofrecemos en las instalaciones de Casa veterianaria Laureles" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerServicios", $$BannerServicios, {})} ${renderComponent($$result2, "ServiciosDetallado", $$ServiciosDetallado, {})} ` })}`;
}, "/home/andersson/Proyectos/landing-casa-veterinaria/casa-veterinaria/src/pages/servicios.astro", void 0);

const $$file = "/home/andersson/Proyectos/landing-casa-veterinaria/casa-veterinaria/src/pages/servicios.astro";
const $$url = "/servicios";

export { $$Servicios as default, $$file as file, $$url as url };
