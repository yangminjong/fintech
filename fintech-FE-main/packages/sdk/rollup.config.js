import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  input: "src/index.ts",
  output: {
    file: "dist/payment-sdk.js",
    format: "umd",
    name: "PaymentSDK",
    exports: "default",
  },
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs(),
    typescript({
      declaration: true,
      declarationDir: "./dist/types",
      rootDir: "./src",
    }),
  ],
});
