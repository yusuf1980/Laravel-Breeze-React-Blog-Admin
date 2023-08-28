import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    publicDir: '/',
    plugins: [
        laravel({
            input: [
                "resources/scss/app.scss",
                "resources/assets/highlight/highlight.min.js",
                "resources/js/app.jsx"
            ],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
            "~highlight": path.resolve(__dirname, "resources/assets/highlight/styles"),
        },
    },
    // optimizeDeps: {
    //     include: ["ckeditor5-custom-build"],
    // },
    // build: {
    //     commonjsOptions: { exclude: ["ckeditor5-custom-build"], include: [] },
    // },
});
