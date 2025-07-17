export default {
  semi: true,
  singleQuote: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 100,
  bracketSameLine: false,
  htmlWhitespaceSensitivity: 'ignore',
  vueIndentScriptAndStyle: false,
  singleAttributePerLine: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.css', '*.scss', '*.sass', '*.less', '*.vue'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
