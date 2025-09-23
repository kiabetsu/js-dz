import css from 'rollup-plugin-import-css';
import nodeResolve from 'rollup-plugin-node-resolve';

console.log(nodeResolve);

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
  },
  plugins: [css({ output: 'bundle.css' }), nodeResolve()],
};
