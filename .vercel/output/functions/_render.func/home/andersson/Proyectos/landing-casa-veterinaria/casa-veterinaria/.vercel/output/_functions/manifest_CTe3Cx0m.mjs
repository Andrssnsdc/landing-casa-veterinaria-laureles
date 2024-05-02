import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_Dac1kztP.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.OX7vguM7.js"}],"styles":[{"type":"external","src":"/_astro/index.BMBzdQp_.css"},{"type":"external","src":"/_astro/nosotros.DcIMFMjZ.css"},{"type":"inline","content":"iframe[data-astro-cid-cyd354rm]{overflow:hidden}\n"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CIut6nP_.js"}],"styles":[{"type":"external","src":"/_astro/index.BMBzdQp_.css"},{"type":"inline","content":"@keyframes rotate{0%{transform:rotateY(0)}to{transform:rotateY(360deg)}}.card[data-astro-cid-bkz5zztz].rotate{animation:rotate 3s linear forwards;transform-style:preserve-3d}\n"}],"routeData":{"route":"/servicios","isIndex":false,"type":"page","pattern":"^\\/servicios\\/?$","segments":[[{"content":"servicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios.astro","pathname":"/servicios","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BwlHU6jX.js"}],"styles":[{"type":"external","src":"/_astro/index.BMBzdQp_.css"}],"routeData":{"route":"/vidas","isIndex":false,"type":"page","pattern":"^\\/vidas\\/?$","segments":[[{"content":"vidas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/vidas.astro","pathname":"/vidas","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BS8a3kx2.js"}],"styles":[{"type":"external","src":"/_astro/index.BMBzdQp_.css"},{"type":"inline","content":"#scroll[data-astro-cid-qwsjowbz]::-webkit-scrollbar{width:5px;height:7px;background-color:transparent}#scroll[data-astro-cid-qwsjowbz]::-webkit-scrollbar-thumb{background-color:#00aae5;border-radius:20px}#scroll[data-astro-cid-qwsjowbz]::-webkit-scrollbar-thumb:hover{background-color:#0077b6}#scroll[data-astro-cid-qwsjowbz]::-webkit-scrollbar-thumb:active{background-color:#00aae5}#scroll[data-astro-cid-qwsjowbz]::-webkit-scrollbar-thumb:window-inactive{background-color:#00ace5b6}#scroll[data-astro-cid-qwsjowbz]::-webkit-scrollbar-thumb:inactive{background-color:#02b8f5}\niframe[data-astro-cid-cyd354rm]{overflow:hidden}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/andersson/Proyectos/landing-casa-veterinaria/casa-veterinaria/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/andersson/Proyectos/landing-casa-veterinaria/casa-veterinaria/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["/home/andersson/Proyectos/landing-casa-veterinaria/casa-veterinaria/src/pages/servicios.astro",{"propagation":"none","containsHead":true}],["/home/andersson/Proyectos/landing-casa-veterinaria/casa-veterinaria/src/pages/vidas.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_CMCsoTZi.mjs","/src/pages/nosotros.astro":"chunks/pages/nosotros_EDkTYLxR.mjs","/src/pages/servicios.astro":"chunks/pages/servicios_DQ9AWmC_.mjs","/src/pages/vidas.astro":"chunks/pages/vidas_B1Gud-5D.mjs","\u0000@astrojs-manifest":"manifest_CTe3Cx0m.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BrYU8caZ.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"chunks/nosotros_Cr5Uys8h.mjs","\u0000@astro-page:src/pages/servicios@_@astro":"chunks/servicios_BNGLacrT.mjs","\u0000@astro-page:src/pages/vidas@_@astro":"chunks/vidas_BIOrMOZA.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_Cqv-C1sM.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CIut6nP_.js","/astro/hoisted.js?q=1":"_astro/hoisted.BS8a3kx2.js","/astro/hoisted.js?q=2":"_astro/hoisted.BwlHU6jX.js","/astro/hoisted.js?q=3":"_astro/hoisted.OX7vguM7.js","/home/andersson/Proyectos/landing-casa-veterinaria/casa-veterinaria/node_modules/photoswipe/dist/photoswipe.esm.js":"_astro/photoswipe.esm.C0FT-EY-.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/onest-cyrillic-wght-normal.CiQTuMoU.woff2","/_astro/onest-latin-ext-wght-normal.0BME-IPC.woff2","/_astro/onest-latin-wght-normal.DJzCSW5i.woff2","/_astro/index.BMBzdQp_.css","/_astro/nosotros.DcIMFMjZ.css","/_astro/BotonInstagram.astro_astro_type_script_index_0_lang.C8mkYqMp.js","/_astro/BotonWhatsapp.astro_astro_type_script_index_0_lang.DWKVOK5v.js","/_astro/Profesionales2.astro_astro_type_script_index_0_lang.BCTD27Gt.js","/_astro/hoisted.BS8a3kx2.js","/_astro/hoisted.BwlHU6jX.js","/_astro/hoisted.CIut6nP_.js","/_astro/hoisted.OX7vguM7.js","/_astro/photoswipe.esm.C0FT-EY-.js"],"buildFormat":"directory","checkOrigin":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
