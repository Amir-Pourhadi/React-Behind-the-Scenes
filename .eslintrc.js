module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    node: true,
    jest: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react/jsx-runtime"],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
    ecmaVersion: 12,
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": ["off"],
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
