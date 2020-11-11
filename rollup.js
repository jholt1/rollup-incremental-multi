const rollup = require('rollup');
const multi = require('@rollup/plugin-multi-entry');
const incremental = require('@mprt/rollup-plugin-incremental');
const resolve = require('@rollup/plugin-node-resolve');

let cache;
const r = async () => {
  console.log('starting...');
  const warning = {
    onwarn(warning, warn) {
      if (warning.code === 'THIS_IS_UNDEFINED') return;
      warn(warning);
    }
  };

  const inputOptions = {
    input: 'src/*/component.js',
    treeshake: false,
    plugins: [
      incremental(),
      resolve.nodeResolve(),
      multi(),
    ],
    cache,
    ...warning
  };

  const outputOptions = {
    dir: 'dist',
    format: 'es',
    preserveModules: true,
    preserveModulesRoot: 'src',
  };

  const watcher = rollup.watch({
    ...inputOptions,
    output: [outputOptions]
  });

  watcher.on('event', async (event) => {
    if (event.code === 'BUNDLE_END') {
      console.log('writing...');
      cache = event.result.cache;
      await event.result.write(outputOptions);
    }

    if (event.code === 'ERROR') {
      console.log(event);
      // process.exit(0);
    }
  });

  const bundle = await rollup.rollup(inputOptions);

  cache = bundle.cache;

  await bundle.write(outputOptions);
};

module.exports = r;