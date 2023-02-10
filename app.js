const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');
//const pathUtil = require('./utilities/path');

const app = express();
const port = 3000;

app.engine('hbs', expressHbs.engine());
app.set('view engine', 'hbs');
app.set('views','./views');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin',adminData.routes);
app.use(shopRouter);
app.use((req, res) => {
   res.render('page404',{title: 'Pag not found', layout: false})
})

app.listen(port);