export default {
  version: "1.0.0",
  locale: {
    source: "en",
    targets: ["fr"],
  },
  files: {
    ts: {
      include: ["locales/[locale].ts"],
    },
  },
  openai: {
    model: "gpt-4-turbo",
  },
};
