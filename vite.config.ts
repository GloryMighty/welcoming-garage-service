import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    server: {
      host: "::",
      port: Number(env.VITE_PORT) || 3000,
      open: env.VITE_AUTO_OPEN === 'true',
      strictPort: true,
      cors: true,
    },
    preview: {
      port: 3000,
      strictPort: true,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      'import.meta.env.VITE_APP_VERSION': JSON.stringify(env.VITE_APP_VERSION || 'local'),
      'import.meta.env.VITE_LOCAL_DEVELOPMENT': env.VITE_LOCAL_DEVELOPMENT === 'true',
    },
    build: {
      sourcemap: mode !== 'production',
      minify: mode === 'production',
    },
  };
});
