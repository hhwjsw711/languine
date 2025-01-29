import { defineConfig } from "languine";

export default defineConfig({
  locale: {
    source: "en",
    targets: [
      "ar",
      "az",
      "bg",
      "ca",
      "cs",
      "da",
      "de",
      "el",
      "es",
      "et",
      "fi",
      "fr",
      "he",
      "hr",
      "hu",
      "id",
      "it",
      "iw",
      "ja",
      "km",
      "ko",
      "lv",
      "nl",
      "no",
      "pl",
      "pt-BR",
      "pt",
      "ro",
      "ru",
      "sk-SK",
      "sk",
      "sr",
      "sv",
      "ta",
      "th",
      "tr",
      "uk",
      "vi",
      "zh-CN",
      "zh-TW",
    ],
  },
  files: {
    json: {
      include: ["src/messages/[locale].json"],
    },
    mdx: {
      include: ["src/markdown/docs/en/*.mdx"],
    },
  },
});
