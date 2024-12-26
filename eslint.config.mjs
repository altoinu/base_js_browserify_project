import { includeIgnoreFile } from "@eslint/compat";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

/** @type {import('eslint').Linter.Config[]} */
export default [
  includeIgnoreFile(gitignorePath),
  { ignores: ["node_modules", "build", "*.css", "example", "src/lib/"] },
  {
    files: ["**/*.{js,cjs,mjs}"],
    languageOptions: { globals: globals.browser, sourceType: "commonjs" },
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
];
