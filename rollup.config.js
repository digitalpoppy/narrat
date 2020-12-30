// rollup.config.js
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import vuePlugin from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2' 
import packageJson from "./package.json";
import postcss from 'rollup-plugin-postcss';
import paths from 'rollup-plugin-paths';

export default {
  input: 'src/index.ts',
  output: [
    {
      sourcemap: true,
      format: 'cjs',
      file: packageJson.main,
    },
    {
      format: 'esm',
      file: packageJson.module,
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    typescript(),
    resolve({
      extensions: ['.ts', '.js', '.vue', '.css'],
    }),
    commonjs(),
    paths({
      '@': './src/',
    }),
    // typescriptPaths(),
    vuePlugin(),
    postcss(),
  ],
};
