
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Tests for the main App component
describe('App', () => {

    // Successful API connection test
    it('should display the backend connection status', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({ status: 'ok' }),
        }));

        try {
            render(<App />);

            expect(
                await screen.findByText(/Backend connection: ok/i)
            ).toBeInTheDocument();
        } finally {
            vi.unstubAllGlobals();
        }
    });
});
