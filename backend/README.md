# Wonder — Backend

Backend application for Wonder, a gamified web platform for educational environments.

## Technologies

- Node.js
- Express
- TypeScript
- PostgreSQL (Neon)
- Prisma
- ESLint
- Vitest
- Supertest

## Getting Started

### Prerequisites

- Node.js 22
- npm
- PostgreSQL database connection

### Installation

From the `backend` directory:

```bash
npm ci
```

### Environment Configuration

Create a `.env` file inside the `backend` directory, using `.env.example` as a reference.

Configure the required environment variables:

- `DATABASE_URL`: Direct PostgreSQL connection string, used by Prisma.
- `DATABASE_URL_POOLED`: Pooled PostgreSQL connection string, used for application database access.

**NOTE: Never commit `.env` files or expose database credentials.**

### Development

Start the backend development server:

```bash
npm run dev
```

The REST API will be available at `http://localhost:3000`.

To verify that the server is running, access:

```text
http://localhost:3000/api/health
```

The endpoint should return:

```json
{
  "status": "ok",
  "application": "Wonder API"
}
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Compile TypeScript into JavaScript |
| `npm start` | Start the compiled application |
| `npm run typecheck` | Check TypeScript types without compiling |
| `npm run lint` | Run ESLint |
| `npm test` | Run automated tests with Vitest |

## Database

Wonder uses PostgreSQL hosted on Neon, with Prisma as its ORM.

The database connection can be verified using:

```bash
npx tsx src/scripts/check-db.ts
```

Prisma configuration is located in `prisma/schema.prisma` and `prisma7.config.ts`.

Database models and migrations will be introduced during the development phase.

## Testing

Backend tests use Vitest and Supertest to validate HTTP endpoints without requiring a separately running server.

Run the tests using:

```bash
npm test
```