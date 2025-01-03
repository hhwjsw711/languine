import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { MockLanguageModelV1 } from "ai/test";
import { expect, test } from "vitest";
import { javascript } from "../src/translators/js.js";
import type { Config } from "../src/types.js";
import { getPromptText } from "./test-utils.js";

const dir = path.dirname(fileURLToPath(import.meta.url));

test("JavaScript adapter: new", async () => {
  const result = await javascript.onNew({
    config: {} as unknown as Config,
    content: await readFile(path.join(dir, "resources/js-new.js")).then((res) =>
      res.toString(),
    ),
    format: "js",
    contentLocale: "en",
    targetLocale: "cn",
    model: new MockLanguageModelV1({
      defaultObjectGenerationMode: "json",
      async doGenerate(v) {
        await expect(getPromptText(v.prompt)).toMatchFileSnapshot(
          "snapshots/js-new.prompt.txt",
        );

        return {
          rawCall: { rawPrompt: null, rawSettings: {} },
          finishReason: "stop",
          usage: { promptTokens: 10, completionTokens: 20 },
          text: JSON.stringify({
            items: [
              "标题",
              "介绍",
              "在开始之前，请确保您具备以下条件：\n一个 GitHub 账户",
              "您可以在自己的云基础设施上自托管 Midday，以便更好地控制您的数据。\n    本指南将引导您完成设置 Midday 的整个过程。",
              `当前时间是 ${Date.now()}`,
            ],
          }),
        };
      },
    }),
  });

  await expect(result.content).toMatchFileSnapshot("snapshots/js-new.js");
});

test("JavaScript adapter: diff", async () => {
  const result = await javascript.onUpdate({
    config: {} as unknown as Config,
    content: await readFile(path.join(dir, "resources/js-diff.js")).then(
      (res) => res.toString(),
    ),
    previousContent: (
      await readFile(path.join(dir, "resources/js-diff.previous.js"))
    ).toString(),
    previousTranslation: (
      await readFile(path.join(dir, "resources/js-diff.translated.js"))
    ).toString(),
    format: "js",
    contentLocale: "en",
    targetLocale: "cn",
    model: new MockLanguageModelV1({
      defaultObjectGenerationMode: "json",
      async doGenerate(v) {
        await expect(getPromptText(v.prompt)).toMatchFileSnapshot(
          "snapshots/js-diff.prompt.txt",
        );

        return {
          rawCall: { rawPrompt: null, rawSettings: {} },
          finishReason: "stop",
          usage: { promptTokens: 10, completionTokens: 20 },
          text: JSON.stringify({
            items: [
              "title",
              "Updated",
              "Updated\nUpdated",
              `Updated ${Date.now()}`,
            ],
          }),
        };
      },
    }),
  });

  await expect(result.content).toMatchFileSnapshot("snapshots/js-diff.js");
});
