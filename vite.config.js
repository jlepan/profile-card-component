import { defineConfig } from "vite";

export default defineConfig({
  base: "/profile-card-component/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
});
