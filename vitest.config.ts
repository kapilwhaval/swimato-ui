import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        coverage: {
            provider: 'istanbul', // or 'v8'
            thresholds: {
                lines: 100,
                functions: 100,
                branches: 100,
                statements: 100
              }
        },
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/__tests__/setup.tsx',
    },
})