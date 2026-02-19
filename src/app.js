const express = require('express');
const healthRoutes = require('./routes/health.routes');
const logger = require('./middleware/logger.middleware');

const app = express();

app.use(express.json());
app.use(logger);

app.use('/api/health', healthRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Hey this is changed' });
});

module.exports = app;