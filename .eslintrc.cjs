/* eslint-env node */
module.exports = {
  'root': true,
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  'rules': {
    'semi': ['error', 'always'],
    'no-multi-spaces': ['error'],
    'quotes': ['error', 'single'],
    'comma-spacing': ['error']
  },
  'env': {
    'vue/setup-compiler-macros': true
  }
};
