const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const url =config.get('mongo "mongodb+srv://cluster0-xwrmz.mongodb.net/test"  --username xquisite');
mongoose.connect((url, {useNewUrlParser: true, useCreateIndex.true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log(`mongoDB Connection has been established successfully`);
});
app.listen(port,()=>{
    console.log(`Your server is running on port:&{port}`);
});
