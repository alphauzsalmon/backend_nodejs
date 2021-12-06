const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/physical')
    .then(() => console.log("MongoDB has ben started"))
    .catch(err => console.log("DB error: " + err));