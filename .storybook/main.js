const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
