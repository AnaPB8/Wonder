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

    // Failed HTTP response test
    it('should display an error when the API response is not successful', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            ok: false,
        }));

        try {
            render(<App />);

            expect(
                await screen.findByText(/Backend connection: Connection failed/i)
            ).toBeInTheDocument();
        } finally {
            vi.unstubAllGlobals();
        }
    });

    // Network error test
    it('should display an error when the API connection fails', async () => {
        vi.stubGlobal('fetch', vi.fn().mockRejectedValue(
            new Error('Network error')
        ));

        try {
            render(<App />);

            expect(
                await screen.findByText(/Backend connection: Connection failed/i)
            ).toBeInTheDocument();
        } finally {
            vi.unstubAllGlobals();
        }
    });
});
