const express     = require("express");
const mongoose    = require('mongoose');
const config      = require('./config/config');
const cors        = require('cors');
const route       = require('./routes/router.js');
const createAdmin = require('./migrations/migrate');
const path        = require('path');

const app = express();

mongoose.connect(config.db, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/', route.init());

app.listen(8080,()=>{

    console.log("Server is running on port : 8080");
    // run this to create a admin only once on the first run
    // createAdmin.createAdmin();
})

  