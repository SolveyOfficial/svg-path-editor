// Writes LICENSES.txt next to the built app: this project's licence, then the
// third-party licences Angular extracted from the bundle, then the fonts.
import fs from 'node:fs';

const out = 'dist/svg-path-editor';
const read = (file) => fs.readFileSync(file, 'utf8').trim();
const fontNotice = (name, pkg) =>
  `${name} font (${pkg})\n\n${read(`node_modules/${pkg}/LICENSE`)}`;

const parts = [
  `Solvey SVG Path Editor\n\n${read('NOTICE')}\n\n${read('LICENSE')}`,
  `Third-party software\n\n${read(`${out}/3rdpartylicenses.txt`)}`,
  fontNotice('Inter', '@fontsource-variable/inter'),
  fontNotice('Plus Jakarta Sans', '@fontsource-variable/plus-jakarta-sans'),
];

fs.writeFileSync(
  `${out}/browser/LICENSES.txt`,
  `${parts.join(`\n\n${'-'.repeat(72)}\n\n`)}\n`,
);
