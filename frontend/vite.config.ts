import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [react()],

    server: {
        proxy: {
            '/api': 'http://localhost:3000',
        },
    },

    test: {
        environment: 'jsdom',
        setupFiles: ['./src/tests/setup.ts'],
        exclude: [
            '**/node_modules/**',
            '**/dist/**',
        ],

        coverage: {
            provider: 'v8',
            reporter: ['text', 'html', 'lcov'],
            include: ['src/**/*.{ts,tsx}'],
            exclude: [
                'src/tests/**',
                'src/main.tsx',
                'src/vite-env.d.ts',
            ],
        },
    },
});