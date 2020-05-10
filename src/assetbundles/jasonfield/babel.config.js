module.exports = {
  presets: ['@vue/app'],
  sourceType: 'unambiguous',
  ignore: ['tailwind.config.js'],
  plugins: [
    [
      'prismjs',
      {
        languages: ['json'],
        plugins: ['line-numbers'],
        theme: 'coy',
        css: true,
      },
    ],
  ],
}
