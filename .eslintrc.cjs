/* eslint-env node */
module.exports = {
  'root': true,
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  'rules': {
    'comma-spacing': ['error'],
    'keyword-spacing': ['error'],
    'no-multi-spaces': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'space-before-blocks': ['error'],
    'space-before-function-paren': ['error', 'never'],
  },
  'env': {
    'vue/setup-compiler-macros': true
  }
};
