module.exports = {
  env: {
    browser: true,
    es2021: true, // 添加所有 ECMAScript 2021 全局变量并自动将 ecmaVersion 解析器选项设置为 12
    node: true
  },
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],

  rules: {
    // 关闭vue组件名必须驼峰且两个单词以上
    'vue/multi-word-component-names': 0,
    // 关闭使用any检测
    '@typescript-eslint/no-explicit-any': ['off'],
    // 关闭非空断言检测
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
}
