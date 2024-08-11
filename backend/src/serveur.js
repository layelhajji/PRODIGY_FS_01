const express = require('express');
const cors = require('cors');
require('./config/connect');
const signupRoute = require('./routes/signup');
const loginRoute=require("./routes/login")
const userRoute=require("./routes/user")

const app = express();



app.use(cors());
app.use(express.json());
app.use('/user', signupRoute);
app.use('/auth', loginRoute);
app.use('/api', userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
