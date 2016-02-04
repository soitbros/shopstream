var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser')
var app = express();

mongoose.connect('mongodb://localhost/shopstream-01');

app.use(express.static('./client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/client/views')
app.set('view engine', 'ejs')

var indexRouter = require('./server/routes/index');
var itemsRouter = require('./server/routes/api/items');

app.use('/', indexRouter);
app.use('/api/items', itemsRouter);

app.listen(8080, function(){
  console.log('broadcasting');
});
