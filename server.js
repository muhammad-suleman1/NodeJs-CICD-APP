const app = require('./src/app');
const { PORT } = require('./src/config/env');

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  res.send("Updated via CI/CD 🚀");

});