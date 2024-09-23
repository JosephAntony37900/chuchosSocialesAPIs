const express = require('express');
const bodyParser = require('body-parser');
const comments = require('./routes/comments')
const owners = require('./routes/owne')
const images = require('./routes/images');
const messages = require('./routes/messages');
const post = require('./routes/posts');
const profilePet = require('./routes/profilePet')

const app = express();

app.use(bodyParser.json());

app.use('/', comments)
app.use('/', owners)
app.use('/', images)
app.use('/', messages)
app.use('/', post)
app.use('/', profilePet)


module.exports = app;