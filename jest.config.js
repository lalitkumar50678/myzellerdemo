global.__DEV__ = true; 
module.exports = {
  preset: 'react-native',
  globals: {
    __DEV__: true,
    "ts-jest": {
      transformerConfig: {
        transformIgnorePatterns: [
          "<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)",
          "jest-runner",
        ],
      },
    },
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.maestro/",
    "@react-native",
  ],
};
