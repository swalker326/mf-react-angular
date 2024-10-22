import { defineConfig } from "@rspack/cli";
import { rspack } from "@rspack/core";
import * as RefreshPlugin from "@rspack/plugin-react-refresh";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { dependencies } from "./package.json";
import { withZephyr } from "../../../../zephyr-mono/libs/zephyr-webpack-plugin";

const isDev = process.env.NODE_ENV === "development";

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ["chrome >= 87", "edge >= 88", "firefox >= 78", "safari >= 14"];

export default withZephyr()({
  context: __dirname,
  output: {
    publicPath: "auto"
  },
  entry: {
    main: "./src/main.tsx"
  },
  devServer: {
    port: 3001
  },
  resolve: {
    extensions: ["...", ".ts", ".tsx", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset"
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true
                },
                transform: {
                  react: {
                    runtime: "automatic",
                    development: isDev,
                    refresh: isDev
                  }
                }
              },
              env: { targets }
            }
          }
        ]
      }
    ]
  },
  //@ts-expect-error - This is a known issue with the type definitions
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: "./index.html"
    }),
    new ModuleFederationPlugin({
      name: "reactRemote",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App"
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
    }),
    isDev ? new RefreshPlugin() : null
  ].filter(Boolean),
  optimization: {
    minimizer: [
      //@ts-expect-error - This is a known issue with the type definitions
      new rspack.SwcJsMinimizerRspackPlugin(),
      //@ts-expect-error - This is a known issue with the type definitions
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets }
      })
    ]
  },
  experiments: {
    css: true
  }
});
