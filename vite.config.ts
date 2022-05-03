import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import unocss from 'unocss/vite';
import { presetAttributify, presetUno, transformerVariantGroup } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    unocss({
      presets: [presetAttributify(), presetUno()],
      theme: {
        colors: {
          violet: 'hsl(257, 40%, 49%)',
          magenta: 'hsl(300, 69%, 71%)',
          white: 'hsl(0, 0%, 100%)',
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          open: ['Open Sans', 'sans-serif'],
        },
      },
      transformers: [transformerVariantGroup()],
    }),
  ],
});
