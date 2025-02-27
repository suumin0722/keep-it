module.exports = [
  {
    ignores: ["node_modules", "build", "dist", "public"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: require("@babel/eslint-parser"), // JSX 파싱을 위해 Babel ESLint 파서 추가
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      import: require("eslint-plugin-import"),
      "jsx-a11y": require("eslint-plugin-jsx-a11y"),
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
      "import/no-unresolved": "off",
      "react/prop-types": "off"
    },
  },
];
