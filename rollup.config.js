const multi = require('@rollup/plugin-multi-entry');
const incremental = require('@mprt/rollup-plugin-incremental');
const resolve = require('@rollup/plugin-node-resolve');

export default {
  input: 'src/*/component.js',
  treeshake: false,
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  plugins: [
    incremental(),
    resolve.nodeResolve(),
    multi()
  ],
}