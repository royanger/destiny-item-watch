import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
   const env = loadEnv(mode, process.cwd(), '');
   return {
      plugins: [react()],

      define: {
         $BUNGIE_API_ROOT: JSON.stringify(env.VITE_BUNGIE_API_ROOT),
         $BUNGIE_API_KEY: JSON.stringify(env.VITE_API_KEY),
         $BUNGIE_SECRET: JSON.stringify(env.VITE_BUNGIE_SECRET),
         $APP_URL: JSON.stringify(env.VITE_APP_URL),
         $API_URL: JSON.stringify(env.VITE_API_URL),
      },
   };
});
