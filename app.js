require('dotenv').config();

const express = require('express');
const app = express();
const pies = require('./controllers/gamescontroller');
const user = require('./controllers/usercontroller');
const sequelize = require('./db');

sequelize.sync();
app.use(express.json());
app.use(require('./middleware/headers'));
app.use('/games', pies);
app.use('/auth', user);


app.listen(process.env.PORT, () => console.log(`app is listening on port ${process.env.PORT}`));