# Wonder — Frontend

Frontend application for Wonder, a gamified web platform for educational environments.

## Technologies

- React
- TypeScript
- Vite
- ESLint
- Vitest
- React Testing Library

## Getting Started

### Prerequisites

- Node.js 22
- npm

### Installation

From the `frontend` directory:

```bash
npm ci
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

During development, Vite proxies requests to `/api` to the backend running at `http://localhost:3000`. It is necessary for both development servers to be running simultaneously for the frontend to communicate with the backend.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build the application |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run automated tests with Vitest |

## Testing

Frontend tests use Vitest and React Testing Library with a jsdom environment.

Run the tests using:

```bash
npm test
```