const express = require('express');
const app = express();
const roasts = require('./routes/roasts');

app.use('/roasts', roasts);
app.listen(3000);
