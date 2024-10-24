import { dependencies } from "./package.json";

export const moduleFederationConfig = {
  name: "reactHost",
  dts: false,
  remotes: {
    reactRemote: "reactRemote@http://localhost:3001/remoteEntry.js",
    angularRemote: "angularRemote@http://localhost:4200/mf-manifest.json"
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies.react
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"]
    }
  }
};
