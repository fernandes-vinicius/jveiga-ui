import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const themeCss = readFileSync(
  fileURLToPath(new URL("./theme.css", import.meta.url)),
  "utf-8",
);

describe("theme.css", () => {
  it("defines the core semantic tokens", () => {
    for (const token of [
      "--background",
      "--foreground",
      "--card",
      "--border",
      "--muted-foreground",
      "--primary",
      "--destructive",
      "--radius-sm",
      "--radius-md",
      "--radius-lg",
    ]) {
      expect(themeCss).toContain(token);
    }
  });

  it("defines chart tokens 1 through 8", () => {
    for (let i = 1; i <= 8; i++) {
      expect(themeCss).toContain(`--chart-${i}`);
    }
  });

  it("defines a dark mode override", () => {
    expect(themeCss).toMatch(/\.dark\s*{/);
  });
});
