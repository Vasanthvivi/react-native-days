const { getDefaultConfig } = require('metro-config');

/**
 * Metro configuration for React Native
 * https://github.com/facebook/metro/blob/main/docs/configuration.md
 */

module.exports = (async () => {
  const {
    resolver: { sourceExtensions, assetExts },
  } = await getDefaultConfig(__dirname);

  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      sourceExtensions: [...sourceExtensions, '.web.js', '.web.jsx', '.web.ts', '.web.tsx'],
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
    },
  };
})();