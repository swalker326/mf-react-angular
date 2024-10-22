import { dependencies } from "./package.json";

export const moduleFederationConfig = {
  name: "reactHost",
  dts: false,
  remotes: {
    reactRemote:
      "reactRemote@https://latest_shane_swalker_dev-react-remote-mf-react-angula-a92d00-ze.averygood.dev/remoteEntry.js"
    // angularRemote: "angularRemote@http://localhost:4200/mf-manifest.json"
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
