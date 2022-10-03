import { sveltekit } from '@sveltejs/kit/vite';

import type { UserConfig } from 'vite';

const config: UserConfig = {
  define: {
    'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
  },
  plugins: [sveltekit()],
};

export default config;
