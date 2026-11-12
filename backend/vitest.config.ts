import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
    test: {
        exclude: [...configDefaults.exclude, '**/dist/**'],

        coverage: {
            provider: 'v8',
            reporter: ['text', 'html', 'lcov'],
            include: ['src/**/*.ts'],
            exclude: [
                'src/tests/**',
                'src/generated/**',
                'src/server.ts',
                'src/scripts/**',
            ],
        },
    },
});
