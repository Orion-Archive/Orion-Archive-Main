module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // ADDED PLUGIN FOR ENABLE REACT-NATIVE-DOTENV
    plugins: [
      ['module:react-native-dotenv'],
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: false,
      },
    ],
  };
};
