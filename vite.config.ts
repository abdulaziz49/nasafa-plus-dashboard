import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		// process.env.NODE_ENV === "development" && basicSsl(), // Conditionally include basicSsl()
	].filter(Boolean), // Filter out `false` values if basicSsl() is not included
});
