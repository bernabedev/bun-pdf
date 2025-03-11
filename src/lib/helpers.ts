type Locales = Record<string, Record<string, string>>;

const locales: Locales = {};
const languages = ["en", "es"];

// Load translation files using Bun.file
const loadLocales = async () => {
  for (const lang of languages) {
    const file = Bun.file(`src/locales/${lang}.json`);
    locales[lang] = JSON.parse(await file.text());
  }
};

// Call locale loading before using them
await loadLocales();

// Function to get the translation
export const $t = (key: string, lang: string = "en"): string => {
  return locales[lang]?.[key] || key; // Returns the key if no translation is found
};

// Function to get the content type of a file
export const getContentType = (path: string): string => {
  const ext = path.split(".").pop();
  const types: Record<string, string> = {
    ico: "image/x-icon",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    css: "text/css",
    js: "application/javascript",
    html: "text/html",
    json: "application/json",
    svg: "image/svg+xml",
  };
  return types[ext || ""] || "application/octet-stream";
};
