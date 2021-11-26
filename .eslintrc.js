module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier", "import"],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/function-component-definition": "off",
    "prettier/prettier": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "import/extensions": "off",
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        groups: [
          ["builtin", "external"],
          ["internal", "parent", "sibling", "index"],
        ],
      },
    ],
  },
};
