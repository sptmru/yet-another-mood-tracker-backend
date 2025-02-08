// eslint.config.cjs
const js = require("@eslint/js");
const tseslint = require("@typescript-eslint/eslint-plugin");
const tsp = require("@typescript-eslint/parser");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      parser: tsp,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest", // Enables latest JavaScript features
      },
      globals: {
        process: "readonly",
        console: "readonly",
        __dirname: "readonly",
        module: "readonly",
        require: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        { "selector": "variable", "format": ["camelCase", "PascalCase", "UPPER_CASE"] },
        { "selector": "function", "format": ["camelCase", "PascalCase"] },
        { "selector": "typeLike", "format": ["PascalCase"] }
      ],
      "arrow-body-style": ["error", "as-needed"],
      "no-nested-ternary": "error",
      "max-params": ["error", 3],
      "require-await": "error",
      "no-shadow": "error",
      "complexity": "error",
      "comma-dangle": ["error", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "never"
      }]
    },
    ignores: ["build/*", "eslint.config.cjs"], // Ignore eslint config file
  },
  {
    files: ["**/*.ts"], // Apply TypeScript parser only to TypeScript files
    languageOptions: {
      parser: tsp,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
];
