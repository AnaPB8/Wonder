
import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    application: 'Wonder API'
  });
});

export default app;
