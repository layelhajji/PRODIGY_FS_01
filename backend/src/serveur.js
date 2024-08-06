const express = require('express');
const cors = require('cors');
require('./config/connect');
const signupRoute = require('./routes/signup');

const app = express();

// Appliquer le middleware CORS avant les routes
app.use(cors());
app.use(express.json());
app.use('/user', signupRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
