import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // commonjsOptions: {
  //     esmExternals: true,
  //  },
})


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//     plugins: [react()],
//     optimizeDeps: {
//         exclude: ["html-docx-js"],
//     },
//     build: {
//         commonjsOptions: {
//             include: [/node_modules/, /html-docx-js/],
//         },
//     },
// });


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import commonjs from "vite-plugin-commonjs";

// export default defineConfig({
//     plugins: [react(), commonjs()],
//     optimizeDeps: {
//         include: ["html-docx-js"],
//     },
// });

