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
