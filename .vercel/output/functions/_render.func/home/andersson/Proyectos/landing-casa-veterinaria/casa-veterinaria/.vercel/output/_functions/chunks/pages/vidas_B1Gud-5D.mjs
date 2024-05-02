/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_Dac1kztP.mjs';
import 'kleur/colors';
import 'html-escaper';
import { f as $$Historias, g as $$HistoriasInvertido, d as $$BotonInstagram, e as $$Layout } from './index_ClOC4nm9.mjs';

const $$Astro = createAstro();
const $$Vidas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Vidas;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Vidas salvadas", "description": "Algunas historias de mascotas que gracias nosotros hoy viven felices junto a sus familias" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col justify-center items-center  bg-top bg-auto md:bg-containt bg-repeat-y bg-fondo-vidas  "> ${renderComponent($$result2, "Historias", $$Historias, { "historiaTittle": "Max", "historiaText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien quis magna fermentum consequat. Curabitur euismod vestibulum lectus, vitae luctus magna suscipit id. Nulla facilisi. Integer vel ullamcorper nisi. Quisque euismod lectus non felis convallis, at ultrices arcu sagittis.", "historiaAltImage": "", "historiaImage": "src/image/Historia1.webp" })} ${renderComponent($$result2, "HistoriasInvertido", $$HistoriasInvertido, { "historiaTittle": "Max", "historiaText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien quis magna fermentum consequat. Curabitur euismod vestibulum lectus, vitae luctus magna suscipit id. Nulla facilisi. Integer vel ullamcorper nisi. Quisque euismod lectus non felis convallis, at ultrices arcu sagittis.", "historiaAltImage": "", "historiaImage": "src/image/Historia2.webp" })} ${renderComponent($$result2, "Historias", $$Historias, { "historiaTittle": "Max", "historiaText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien quis magna fermentum consequat. Curabitur euismod vestibulum lectus, vitae luctus magna suscipit id. Nulla facilisi. Integer vel ullamcorper nisi. Quisque euismod lectus non felis convallis, at ultrices arcu sagittis.", "historiaAltImage": "", "historiaImage": "src/image/Historia1.webp" })} ${renderComponent($$result2, "HistoriasInvertido", $$HistoriasInvertido, { "historiaTittle": "Max", "historiaText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien quis magna fermentum consequat. Curabitur euismod vestibulum lectus, vitae luctus magna suscipit id. Nulla facilisi. Integer vel ullamcorper nisi. Quisque euismod lectus non felis convallis, at ultrices arcu sagittis.", "historiaAltImage": "", "historiaImage": "src/image/Historia2.webp" })} <div> ${renderComponent($$result2, "BotonInstagram", $$BotonInstagram, { "textBoton": "Siguenos" })}</div> </section> ` })}`;
}, "/home/andersson/Proyectos/landing-casa-veterinaria/casa-veterinaria/src/pages/vidas.astro", void 0);

const $$file = "/home/andersson/Proyectos/landing-casa-veterinaria/casa-veterinaria/src/pages/vidas.astro";
const $$url = "/vidas";

export { $$Vidas as default, $$file as file, $$url as url };
