/* eslint-env node */
module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-recommended",
    "eslint:recommended"
  ],
  "rules": {
    "semi": [2, "always"]
  },
  "env": {
    "vue/setup-compiler-macros": true
  }
};
