const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 8089;

app.listen(PORT, () => console.log(`Server running or port ${PORT}`));
