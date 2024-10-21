const ModuleFederationPlugin =
  require("@module-federation/enhanced/webpack").ModuleFederationPlugin;

console.log("webpack.config.js LOADED");
module.exports = {
  optimization: {
    runtimeChunk: false, // Required for Module Federation
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "angularRemote",
      library: { type: "var", name: "angularRemote" },
      filename: "remoteEntry.js",
      exposes: {
        "./Component": "./src/app/app.component.ts",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"],
    }),
  ],
};
