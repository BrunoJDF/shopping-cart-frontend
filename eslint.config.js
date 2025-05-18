import eslintPluginVue from "eslint-plugin-vue";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginTypeScript from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser"; // Importación del parser de TypeScript
import vueParser from "vue-eslint-parser"; // Importación del parser de Vue

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
      parser: vueParser, // Parser configurado correctamente
      parserOptions: {
        parser: tsParser, // Parser de TypeScript
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
          tabWidth: 2, // Define la indentación en 2 espacios
          useTabs: false,
          endOfLine: "auto", // Manejo automático de saltos de línea
        },
      ],
      indent: ["error", 2], // Asegúrate de que la indentación se aplique con 2 espacios
    },
  },
];
