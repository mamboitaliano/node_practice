module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index.html');
  });
  app.get('/dishwashers', function(req, res) {
    res.render('dishwashers', {list: pass_this_to_router});
    // why isn't this getting passed to dishwashers.ejs?
  });
}


