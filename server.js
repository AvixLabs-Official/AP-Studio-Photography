const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8091;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`📷 A P Studio server running at http://localhost:${PORT}`);
});
