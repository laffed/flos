module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
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
            '@app': './src',
            '@core': './src/core',
            '@styles': './src/styles',
            '@hooks': './src/util/hooks',
            '@toolbox': './src/toolbox'
          },
        },
      ],
    ],
  };
};
