import { importAssertions } from "acorn-import-assertions";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import litcss from "rollup-plugin-lit-css";

export default {
  input: "foo.js",
  output: {
    file: "dist/bundle-a.js",
    format: "es",
  },
  plugins: [nodeResolve(), litcss()],
  acornInjectPlugins: [importAssertions],
};
