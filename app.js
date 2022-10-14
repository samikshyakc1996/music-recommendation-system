console.log('server running');
const express=require('express');
const { home } = require('nodemon/lib/utils');
const app=express();
const homeRoutes=require('./routes/home');
const loginRoutes=require('./routes/login');
const listenRoutes=require('./routes/listen');

app.use(homeRoutes);

app.use(loginRoutes);
app.use(listenRoutes);
app.listen(3000);