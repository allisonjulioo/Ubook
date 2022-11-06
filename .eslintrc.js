module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['prettier'],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'prettier/prettier': 0,
    '@typescript-eslint/no-non-null-assertion': 'off',
    'vue/multi-word-component-names': 0,
    'no-console': ['warn', { allow: ['warn'] }],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
