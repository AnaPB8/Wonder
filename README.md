# Wonder

<p align="center">
  <img src="./docs/media/images/logoDEF.png" alt="Wonder Logo" width="300"/>
</p>

<h3 align="center">Development of a Gamified Web Platform for Educational Environments</h3>
<h4 align="center"><i>Final Degree Project</i></h4>

## Author

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/AnaPB8">
        <img src="https://github.com/AnaPB8.png" width="100" style="border-radius:50%"/><br/>
        <strong>Ana Pérez Bango</strong>
      </a><br/>
      <a href="mailto:UO294100@uniovi.es">UO294100@uniovi.es</a>
    </td>
  </tr>
</table>

## What is Wonder?

<p align= "justify">
Wonder is a gamified web platform for educational environments designed to support both students and teachers alike. Its main objective is to create a pedagogical support tool that meets a set of functional and usability requirements.
</p>

<p align= "justify">
The platform provides different functionalities for its users depending on their role, which include activity participation, progress tracking, and result management, among others.
</p>

## Project Structure

Wonder is organized as a modular monolithic application, with a well-defined separation between the frontend, backend, and project documentation.

```text
Wonder/
├── .github/
│   └── workflows/         # Automated build and quality checks
├── backend/               # REST API and database access
├── docs/                  # Project documentation and resources
├── frontend/              # User interface
├── .gitignore
├── sonar-project.properties
└── README.md
```

## Technology Stack

The project uses the following technologies and tools:

| Category | Technologies |
|---|---|
| Frontend | React, TypeScript, Vite |
| Backend | Node.js, Express, TypeScript |
| Database | PostgreSQL, hosted on Neon |
| ORM | Prisma |
| API | REST |
| Testing | Vitest, React Testing Library, Supertest |
| Code Quality | ESLint, SonarQube Cloud |
| Continuous Integration | GitHub Actions |
| Version Control | Git, GitHub |

## Getting Started

### Prerequisites

Before running Wonder, ensure that the following tools are available and ready:

- Node.js 22
- npm
- Git
- A PostgreSQL database connection

### Installation

Clone the repository:

```bash
git clone https://github.com/AnaPB8/Wonder.git
cd Wonder
```

Install the frontend dependencies:

```bash
cd frontend
npm ci
```

Install the backend dependencies:

```bash
cd ../backend
npm ci
```

### Environment Configuration

The backend requires its environment variables to connect to the PostgreSQL database.


Create a `.env` file inside the `backend` directory, using `.env.example` as a reference.


Configure the required database connection variables with valid credentials.

**NOTE: Never commit `.env` files or expose database credentials.**

### Running the Application

Start the backend development server from the `backend` directory:

```bash
npm run dev
```

The REST API will be available at `http://localhost:3000`.

In a separate terminal, start the frontend development server from the `frontend` directory:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

During development, Vite forwards requests to `/api` to the backend server. It is necessary for both development servers to be running simultaneously for the frontend to communicate with the backend.

For additional details, refer to the [Frontend Documentation](./frontend/README.md) and [Backend Documentation](./backend/README.md).

## Code Quality and Testing

Wonder uses automated tools to support code quality, maintainability, and reliability throughout development.

ESLint performs static code analysis and Vitest is used for automated testing. The use of React Testing Library supports frontend component tests, and Supertest is used to test backend HTTP endpoints.

GitHub Actions automates dependency installation, linting, testing, and builds for both applications. Finally, the use of SonarQube Cloud also provides additional code quality and security analysis.

The following commands are available in both the frontend and backend directories:

| Command | Description |
|---|---|
| `npm ci` | Install dependencies from the lockfile |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm test` | Execute automated tests |
| `npm run build` | Build the application |

The backend also provides `npm run typecheck` for TypeScript validation.
