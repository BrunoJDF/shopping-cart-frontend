import eslintPluginVue from "eslint-plugin-vue";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginTypeScript from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser"; // Importación del parser de TypeScript

export default [
  {
    files: ["**/*.{js,ts,vue}"], // Archivos a analizar
    ignores: ["dist", "node_modules"], // Carpetas a ignorar
    plugins: {
      vue: eslintPluginVue,
      prettier: eslintPluginPrettier,
      "@typescript-eslint": eslintPluginTypeScript,
    },
    languageOptions: {
      parser: tsParser, // Parser configurado correctamente
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        extraFileExtensions: [".vue"], // Soporte para archivos .vue
      },
    },
    rules: {
      ...eslintConfigPrettier.rules, // Desactiva conflictos entre ESLint y Prettier
      "prettier/prettier": [
        "warn", // Advertencia para reglas de Prettier
        {
          singleQuote: false, // Comillas dobles como preferidas
          semi: true, // Punto y coma obligatorio
        },
      ],
    },
  },
];
