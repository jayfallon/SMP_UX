var express = require('express')
  , passport = require('passport')
  , util = require('util');

// var users = [
//     { id: 2, username: 'username1', password: 'password1', email: 'username1@gmail.com' }
//   , { id: 2, username: 'username2', password: 'password2', email: 'username2@gmail.com' }
// ];
// 
// function findById(id, fn) {
//   var idx = id - 1;
//   if (users[idx]) {
//     fn(null, users[idx]);
//   } else {
//     fn(new Error('User ' + id + ' does not exist'));
//   }
// }
// 
// function findByUsername(username, fn) {
//   for (var i = 0, len = users.length; i < len; i++) {
//     var user = users[i];
//     if (user.username === username) {
//       return fn(null, user);
//     }
//   }
//   return fn(null, null);
// }
// 
// 
// // Passport session setup.
// //   To support persistent login sessions, Passport needs to be able to
// //   serialize users into and deserialize users out of the session.  Typically,
// //   this will be as simple as storing the user ID when serializing, and finding
// //   the user by ID when deserializing.
// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });
// 
// passport.deserializeUser(function(id, done) {
//   findById(id, function (err, user) {
//     done(err, user);
//   });
// });
// 
// 
// // Use the LocalStrategy within Passport.
// //   Strategies in passport require a `verify` function, which accept
// //   credentials (in this case, a username and password), and invoke a callback
// //   with a user object.  In the real world, this would query a database;
// //   however, in this example we are using a baked-in set of users.
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     // asynchronous verification, for effect...
//     process.nextTick(function () {
// 
//       // Find the user by username.  If there is no user with the given
//       // username, or the password is not correct, set the user to `false` to
//       // indicate failure.  Otherwise, return the authenticated `user`.
//       findByUsername(username, function(err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (user.password != password) { return done(null, false); }
//         return done(null, user);
//       })
//     });
//   }
// ));

var app = express.createServer();

// configure Express
app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.logger());
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.session({ secret: 'keyboard cat' }));
  // Initialize Passport!  Also use passport.session() middleware, to support
  // persistent login sessions (recommended).
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
	app.use(express.logger());
	app.use(express.errorHandler({
		dumpExceptions: true,
		showStack: true
	}));
});

app.configure('production', function(){
	app.use(express.logger());
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('layout', {layout: true});
app.set('view options', { pretty: true });

// global
app.get('/', function(req, res){
  res.render('index', { user: req.user, layout: 'layout', legend: 'Please sign in.' });
});

// app.get('/login', function(req, res){
//   res.render('login', { user: req.user, layout: false, legend: 'Please try again.' });
// });


// POST /login
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
// app.post('/login', 
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });
// 
// app.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/');
// });

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) { return next(); }
//   res.redirect('/login')
// }
