const express = require('express');
const app = express();

const PORT = 5000;
app.listen(PORT || process.env.PORT, () => {
  console.log(`listening on port ${PORT} or http://localhost:${PORT}`);
});