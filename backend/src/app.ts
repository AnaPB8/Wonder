import express from 'express';

const app = express();

// Prevent exposing the Express framework in
// the response headers for security reasons
app.disable('x-powered-by');

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    application: 'Wonder API'
  });
});

export default app;
