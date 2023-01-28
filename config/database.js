const mongoose = require('mongoose');
require('dotenv').config()
mongoose.set('strictQuery', false);

mongoose.connect(process.env.DATABASE_KEY)
    .then(() => console.log('Connected!'));



