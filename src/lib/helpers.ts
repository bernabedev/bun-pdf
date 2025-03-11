type Locales = Record<string, Record<string, string>>;

const locales: Locales = {};
const languages = ["en", "es"];

// Cargar los archivos de traducción con Bun.file
const loadLocales = async () => {
  for (const lang of languages) {
    const file = Bun.file(`src/locales/${lang}.json`);
    locales[lang] = JSON.parse(await file.text());
  }
};

// Llamar a la carga de locales antes de usarlos
await loadLocales();

// Función para obtener la traducción
export const $t = (key: string, lang: string = "en"): string => {
  return locales[lang]?.[key] || key; // Devuelve la clave si no encuentra traducción
};
