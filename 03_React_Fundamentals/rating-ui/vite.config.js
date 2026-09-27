import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Any plugins we install, you gonna import here and it goes to plugin array below.

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
