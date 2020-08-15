const express = require('express');
const app = express();

// app.get('/', (req, res) =>
//   res.send("Get Done")
// )

const PORT = 3000;
app.listen(PORT || process.env.PORT, () => {
  console.log(`listening on port ${PORT} or http://localhost:${PORT}`);
});