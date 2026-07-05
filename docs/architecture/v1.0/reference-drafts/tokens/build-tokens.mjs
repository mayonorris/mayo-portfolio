import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const directory = path.dirname(fileURLToPath(import.meta.url));
const tokens = JSON.parse(
  await readFile(path.join(directory, "tokens.json"), "utf8"),
);

const kebab = (value) =>
  value.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

const cssTheme = (theme) =>
  Object.entries(tokens.color[theme])
    .map(([key, value]) => `  --color-${kebab(key)}: ${value};`)
    .join("\n");

const css = `:root {
${cssTheme("light")}
  --font-sans: ${tokens.font.sans};
  --font-serif: ${tokens.font.serif};
  --font-mono: ${tokens.font.mono};
  --width-wide: ${tokens.width.wide};
  --width-reading: ${tokens.width.reading};
  --width-article: ${tokens.width.article};
  --radius-small: ${tokens.radius.small};
  --radius-medium: ${tokens.radius.medium};
  --radius-large: ${tokens.radius.large};
  --radius-card: ${tokens.radius.card};
  --motion-fast: ${tokens.motion.fast};
  --motion-normal: ${tokens.motion.normal};
  --motion-slow: ${tokens.motion.slow};
  --motion-ease: ${tokens.motion.ease};
}

[data-theme="dark"] {
${cssTheme("dark")}
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --motion-fast: 1ms;
    --motion-normal: 1ms;
    --motion-slow: 1ms;
  }
}
`;

const scss = [
  ...Object.entries(tokens.color.light).map(
    ([key, value]) => `$color-${kebab(key)}: ${value};`,
  ),
  `$font-sans: ${JSON.stringify(tokens.font.sans)};`,
  `$font-serif: ${JSON.stringify(tokens.font.serif)};`,
  `$font-mono: ${JSON.stringify(tokens.font.mono)};`,
  `$width-wide: ${tokens.width.wide};`,
  `$width-reading: ${tokens.width.reading};`,
  `$width-article: ${tokens.width.article};`,
  `$radius-card: ${tokens.radius.card};`,
].join("\n");

await writeFile(path.join(directory, "tokens.css"), css, "utf8");
await writeFile(path.join(directory, "tokens.scss"), `${scss}\n`, "utf8");

console.log("Generated tokens.css and tokens.scss");
