import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const name = 'gizmoSdk';

// Declarations are emitted separately by `tsc` (see package.json "types" script);
// this plugin only transpiles .ts -> .js for bundling, so disable its own declaration output.
const ts = () => typescript({ tsconfig: './tsconfig.json', declaration: false, declarationMap: false, declarationDir: undefined });

export default [
  // Development build (with JSDoc comments, not minified)
  {
    input: 'src/index.ts',
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
      ts(),
      resolve(),
      commonjs(),
      json()
    ]
  },
  // Production build (minified)
  {
    input: 'src/index.ts',
    external: ['axios', 'event-source-plus', 'eventsource'],
    output: [
      {
        file: 'dist/gizmo-sdk.cjs.min.js',
        format: 'cjs',
        exports: 'named'
      },
      {
        file: 'dist/gizmo-sdk.esm.min.js',
        format: 'es'
      }
    ],
    plugins: [
      ts(),
      resolve(),
      commonjs(),
      json(),
      terser({
        output: {
          comments: false
        }
      })
    ]
  }
];
