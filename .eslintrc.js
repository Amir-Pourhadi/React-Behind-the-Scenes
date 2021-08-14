module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    commonjs: true,
    es2021: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    ecmaVersion: 12
  },
  plugins: ["react"],
  rules: {
    rules: {
      "react/prop-types": ["off"],
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"]
    }
  }
};
