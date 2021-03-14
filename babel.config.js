module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          Components: './src/components',
          Routes: './src/routes',
          Styles: './src/styles',
        },
      },
    ],
  ]
};
