/* eslint-env node */
module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-recommended",
    "eslint:recommended"
  ],
  "rules": {
    "semi": ["error", "always"],
  },
  "env": {
    "vue/setup-compiler-macros": true
  }
};
