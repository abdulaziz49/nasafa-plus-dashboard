// import {defineConfig} from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// // import mkcert from 'vite-plugin-mkcert'
// import basicSsl from '@vitejs/plugin-basic-ssl'
// // import pkg from './package.json' with {type: "json"}
//
// export default defineConfig({
//     plugins: [react(), tailwindcss(), basicSsl(),],
//     server: {
//         host: true,
//         https: true,
//     },
//     // define: {
//     //     APP_VERSION: JSON.stringify(process.env.npm_package_version),   // Create a variable tp store project version from package.json file
//     // },
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        process.env.NODE_ENV === 'development' && basicSsl(), // Conditionally include basicSsl()
    ].filter(Boolean), // Filter out `false` values if basicSsl() is not included
    server: {
        host: true,
        https: true,
    },
})