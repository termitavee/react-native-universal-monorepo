// const exclusionList = require("metro-config/src/defaults/exclusionList");
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// const monorepoMetroTools = getMetroTools();

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// module.exports = {
//   transformer: {
//     // Apply the Android assets resolution fix to the public path...
//     publicPath: androidAssetsResolutionFix.publicPath,
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
//   server: {
//     // ...and to the server middleware.
//     enhanceMiddleware: (middleware) => {
//       return androidAssetsResolutionFix.applyMiddleware(middleware);
//     },
//   },
//   // Add additional Yarn workspace package roots to the module map.
//   // This allows importing importing from all the project's packages.
//   watchFolders: monorepoMetroTools.watchFolders,
//   resolver: {
//     // Ensure we resolve nohoist libraries from this directory.
//     blockList: exclusionList(monorepoMetroTools.blockList),
//     extraNodeModules: monorepoMetroTools.extraNodeModules,
//   },
// };
