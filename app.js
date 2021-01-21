require('dotenv/config');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server Running in ${PORT}`);
})