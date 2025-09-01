export const toTitle = (str) =>
  str.toLowerCase()
     .split(/(\s+|\.|·|-|\/)/g)
     .map(t => (/^[a-záéíóúñü]+$/i.test(t) ? t.charAt(0).toUpperCase() + t.slice(1) : t))
     .join("");
