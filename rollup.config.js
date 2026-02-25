import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

const name = 'gizmoSdk';

export default {
  input: 'src/index.js',
  external: ['axios', 'event-source-plus', 'eventsource'],
  output: [
    {
      file: 'dist/gizmo-sdk.cjs.js',
      format: 'cjs',
      exports: 'named'
    },
    {
      file: 'dist/gizmo-sdk.esm.js',
      format: 'es'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    terser()
  ]
};
