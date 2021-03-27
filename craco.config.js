const darkTheme = require("@ant-design/dark-theme");
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { ...darkTheme.default },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
