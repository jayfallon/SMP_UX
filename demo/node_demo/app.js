var express = require('express')
  , passport = require('passport')
  , util = require('util')
  , LocalStrategy = require('passport-local').Strategy;



var app = express.createServer();

// configure Express
app.configure(function() {
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
  res.render('index', [title = "Style Me Pretty - The Ultimate Wedding Blog"]);
});

app.get('/signout', function(req, res){
  res.render('signout', {title: "Style Me Pretty - The Ultimate Wedding Blog", layout: false});
});

// userbar
app.get('/signin', function(req, res){
  res.render('signin', [title = "Style Me Pretty - Sign In"]);
});

app.get('/register', function(req, res){
  res.render('signin', [title = "Style Me Pretty - Register"]);
});

app.get('/help', function(req, res){
  res.render('signin', [title = "Style Me Pretty - Help"]);
});

app.get('/quickboard', function(req, res){
  res.render('signin', [title = "Style Me Pretty - Quickboard"]);
});

app.get('/submission', function(req, res){
  res.render('signin', [title = "Style Me Pretty - Submission Server"]);
});

// titlebar
app.get('/search', function(req, res){
  res.render('search_results', [title = "Style Me Pretty - Search Results"]);
});

// main navigation
app.get('/wedding_inspiration', function(req, res){
  res.render('wedding_inspiration', [title = "Style Me Pretty - Wedding Inspiration"]);
});

app.get('/weddings', function(req, res){
  res.render('real_weddings', [title = "Style Me Pretty - Real Weddings", sectionTitle = "Real Weddings"]);
});

app.get('/real_weddings', function(req, res){
   res.redirect('/weddings');
});

app.get('/little_black_book', function(req, res){
  res.render('little_black_book', {title: "Style Me Pretty - Little Black Book", pageTitle: "Little Black Book"});
});

app.get('/diy', function(req, res){
  res.render('diy', [title = "Style Me Pretty - Do It Yourself"]);
});

app.get('/local_weddings', function(req, res){
  res.render('local_weddings', [title = "Style Me Pretty - Local Weddings"]);
});

app.get('/board_builder', function(req, res){
  res.render('board_builder', [title = "Style Me Pretty - Build A Board"]);
});

// footer

app.get('/about', function(req, res){
  res.render('footer/about', [title = "Style Me Pretty - About"]);
});

app.get('/press', function(req, res){
  res.render('footer/press', [title = "Style Me Pretty - Press"]);
});

app.get('/advertise', function(req, res){
  res.render('footer/advertise', [title = "Style Me Pretty - Advertise"]);
});

app.get('/submit_a_wedding', function(req, res){
  res.render('footer/submit_a_wedding', [title = "Style Me Pretty - Submit A Wedding"]);
});

app.get('/contact', function(req, res){
  res.render('footer/contact', [title = "Style Me Pretty - Contact"]);
});

app.get('/terms', function(req, res){
  res.render('footer/terms', [title = "Style Me Pretty - Terms Of Use"]);
});

// blog

app.get('/blog_post', function(req, res){
  res.render('blog_post', [title = "Style Me Pretty - Napa Valley Wedding"]);
});


// laura's dashboard
app.get('/dashboard/laura.fabian', function(req, res){
  res.render('dashboard/laura', [title = "Style Me Pretty - Dashboard"]);
});

app.post('/dashboard/laura.fabian', function(req, res){
  res.render('dashboard/laura', [title = "Style Me Pretty - Dashboard"]);
});

app.get('/dashboard/laura.fabian/boards', function(req, res){
  res.render('dashboard/laura', [title = "Style Me Pretty - Dashboard"]);
});

app.post('/dashboard/laura.fabian/boards', function(req, res){
  res.render('dashboard/laura', [title = "Style Me Pretty - Dashboard"]);
});

app.get('/dashboard/laura.fabian/boards/single', function(req, res){
  res.render('dashboard/laura/laura_boards_single', [title = "Style Me Pretty - Dashboard"]);
});

app.post('/dashboard/laura.fabian/boards/single', function(req, res){
  res.render('dashboard/laura/laura_boards_single', [title = "Style Me Pretty - Dashboard"]);
});

app.get('/dashboard/laura.fabian/boards/list', function(req, res){
  res.render('dashboard/laura/laura_boards_list', [title = "Style Me Pretty - Dashboard"]);
});

app.post('/dashboard/laura.fabian/boards/list', function(req, res){
  res.render('dashboard/laura/laura_boards_list', [title = "Style Me Pretty - Dashboard"]);
});

app.get('/dashboard/laura.fabian/favorites', function(req, res){
  res.render('dashboard/laura/laura_favorites', [title = "Style Me Pretty - Dashboard"]);
});

app.post('/dashboard/laura.fabian/favorites', function(req, res){
  res.render('dashboard/laura/laura_favorites', [title = "Style Me Pretty - Dashboard"]);
});

app.get('/dashboard/laura.fabian/favorites/list', function(req, res){
  res.render('dashboard/laura/laura_favorites_list', [title = "Style Me Pretty - Dashboard"]);
});

app.post('/dashboard/laura.fabian/favorites/list', function(req, res){
  res.render('dashboard/laura/laura_favorites_list', [title = "Style Me Pretty - Dashboard"]);
});

app.get('/dashboard/laura.fabian/favorites/single', function(req, res){
  res.render('dashboard/laura/laura_favorites_single', [title = "Style Me Pretty - Dashboard"]);
});

app.post('/dashboard/laura.fabian/favorites/single', function(req, res){
  res.render('dashboard/laura/laura_favorites_single', [title = "Style Me Pretty - Dashboard"]);
});

app.get('/dashboard/laura.fabian/following', function(req, res){
  res.render('dashboard/laura/laura_following_stream', [title = "Style Me Pretty - Dashboard"]);
});

app.post('/dashboard/laura.fabian/following', function(req, res){
  res.render('dashboard/laura/laura_following_stream', [title = "Style Me Pretty - Dashboard"]);
});

app.get('/dashboard/laura.fabian/comments', function(req, res){
  res.render('dashboard/laura/laura_comments', [title = "Style Me Pretty - Dashboard"]);
});

app.post('/dashboard/laura.fabian/comments', function(req, res){
  res.render('dashboard/laura/laura_comments', [title = "Style Me Pretty - Dashboard"]);
});

app.get('/dashboard/laura.fabian/comments/filter', function(req, res){
  res.render('dashboard/laura/laura_comments_filter', [title = "Style Me Pretty - Dashboard"]);
});

app.post('/dashboard/laura.fabian/comments/filter', function(req, res){
  res.render('dashboard/laura/laura_comments_filter', [title = "Style Me Pretty - Dashboard"]);
});


// settings
app.get('/settings/laura.fabian', function(req, res){
  res.render('dashboard/laura/laura_edit_profile', [title = "Style Me Pretty - Settings"]);
});

app.get('/settings/laura.fabian/profile', function(req, res){
  res.render('dashboard/laura/laura_edit_profile', [title = "Style Me Pretty - Settings"]);
});

app.post('/settings/laura.fabian/profile', function(req, res){
  res.render('dashboard/laura/laura_edit_profile', [title = "Style Me Pretty - Settings", alert="Your profile settings have been saved."]);
});

app.get('/settings/laura.fabian/subscriptions', function(req, res){
  res.render('dashboard/laura/laura_edit_subscriptions', [title = "Style Me Pretty - Settings"]);
});

app.post('/settings/laura.fabian/subscriptions', function(req, res){
  res.render('dashboard/laura/laura_edit_subscriptions', [title = "Style Me Pretty - Settings"]);
});

app.get('/settings/laura.fabian/privacy', function(req, res){
  res.render('dashboard/laura/laura_edit_privacy', [title = "Style Me Pretty - Settings"]);
});

app.post('/settings/laura.fabian/privacy', function(req, res){
  res.render('dashboard/laura/laura_edit_privacy', [title = "Style Me Pretty - Settings"]);
});

app.get('/settings/laura.fabian/account', function(req, res){
  res.render('dashboard/laura/laura_edit_account', [title = "Style Me Pretty - Settings"]);
});

app.post('/settings/laura.fabian/account', function(req, res){
  res.render('dashboard/laura/laura_edit_account', [title = "Style Me Pretty - Settings"]);
});

app.post('/settings/laura.fabian/account/delete', function(req, res){
  res.render('dashboard/laura/laura_delete_account', [title = "Style Me Pretty - Settings"]);
});

//paul's dashboard

app.get('/paul.marino', function(req, res){
  res.render('dashboard/paul', [title = "Style Me Pretty - Paul Marino"]);
});

app.post('/paul.marino', function(req, res){
  res.render('dashboard/paul', [title = "Style Me Pretty - Paul Marino"]);
});

app.get('/paul.marino/boards', function(req, res){
  res.render('dashboard/paul/paul_boards_icons', [title = "Style Me Pretty - Paul Marino"]);
});

app.post('/paul.marino/boards', function(req, res){
  res.render('dashboard/paul/paul_boards_icons', [title = "Style Me Pretty - Paul Marino"]);
});

app.get('/paul.marino/boards/single', function(req, res){
  res.render('dashboard/paul/paul_boards_single', [title = "Style Me Pretty - Paul Marino"]);
});

app.post('/paul.marino/boards/single', function(req, res){
  res.render('dashboard/paul/paul_boards_single', [title = "Style Me Pretty - Paul Marino"]);
});

app.get('/paul.marino/boards/list', function(req, res){
  res.render('dashboard/paul/paul_boards_list', [title = "Style Me Pretty - Paul Marino"]);
});

app.post('/paul.marino/boards/list', function(req, res){
  res.render('dashboard/paul/paul_boards_list', [title = "Style Me Pretty - Paul Marino"]);
});

app.get('/paul.marino/favorites', function(req, res){
  res.render('dashboard/paul/paul_favorites', [title = "Style Me Pretty - Paul Marino"]);
});

app.post('/paul.marino/favorites', function(req, res){
  res.render('dashboard/paul/paul_favorites', [title = "Style Me Pretty - Paul Marino"]);
});

app.get('/paul.marino/favorites/list', function(req, res){
  res.render('dashboard/paul/paul_favorites_list', [title = "Style Me Pretty - Paul Marino"]);
});

app.post('/paul.marino/favorites/list', function(req, res){
  res.render('dashboard/paul/paul_favorites_list', [title = "Style Me Pretty - Paul Marino"]);
});

app.get('/paul.marino/favorites/single', function(req, res){
  res.render('dashboard/paul/paul_favorites_single', [title = "Style Me Pretty - Paul Marino"]);
});

app.post('/paul.marino/favorites/single', function(req, res){
  res.render('dashboard/paul/paul_favorites_single', [title = "Style Me Pretty - Paul Marino"]);
});

app.get('/paul.marino/following', function(req, res){
  res.render('dashboard/paul/paul_following_stream', [title = "Style Me Pretty - Paul Marino"]);
});

app.post('/paul.marino/following', function(req, res){
  res.render('dashboard/paul/paul_following_stream', [title = "Style Me Pretty - Paul Marino"]);
});

app.get('/paul.marino/comments', function(req, res){
  res.render('dashboard/paul/paul_comments', [title = "Style Me Pretty - Paul Marino"]);
});

app.post('/paul.marino/comments', function(req, res){
  res.render('dashboard/paul/paul_comments', [title = "Style Me Pretty - Paul Marino"]);
});

app.get('/paul.marino/comments/filter', function(req, res){
  res.render('dashboard/paul/paul_comments_filter', [title = "Style Me Pretty - Paul Marino"]);
});

app.post('/paul.marino/comments/filter', function(req, res){
  res.render('dashboard/paul/paul_comments_filter', [title = "Style Me Pretty - Paul Marino"]);
});


// settings
app.get('/paul.marino/edit/profile', function(req, res){
  res.render('dashboard/paul_edit_profile', [title = "Style Me Pretty - Settings"]);
});

app.post('/paul.marino/edit/profile', function(req, res){
  res.render('dashboard/paul_edit_profile', [title = "Style Me Pretty - Settings", alert="Your profile settings have been saved."]);
});

app.get('/paul.marino/edit/subscriptions', function(req, res){
  res.render('dashboard/paul_edit_subscriptions', [title = "Style Me Pretty - Settings"]);
});

app.post('/paul.marino/edit/subscriptions', function(req, res){
  res.render('dashboard/paul_edit_subscriptions', [title = "Style Me Pretty - Settings"]);
});

app.get('/paul.marino/edit/privacy', function(req, res){
  res.render('dashboard/paul_edit_privacy', [title = "Style Me Pretty - Settings"]);
});

app.post('/paul.marino/edit/privacy', function(req, res){
  res.render('dashboard/paul_edit_privacy', [title = "Style Me Pretty - Settings"]);
});

app.get('/paul.marino/edit/account', function(req, res){
  res.render('dashboard/paul_edit_account', [title = "Style Me Pretty - Settings"]);
});

app.post('/paul.marino/edit/account', function(req, res){
  res.render('dashboard/paul_edit_account', [title = "Style Me Pretty - Settings"]);
});

app.post('/paul.marino/delete/account', function(req, res){
  res.render('dashboard/paul_delete_account', [title = "Style Me Pretty - Settings"]);
});

// lbb

app.get('/unique.photography', function(req, res){
  res.render('vendor/unique_photography', {title: "Style Me Pretty - Little Black Book", pageTitle: "Unique Photography", layout: "layout_lbb", region: "California", location: "Carmel By the Sea & Monterey Bay", type: "Photography", vendor: "Unique Photography"});
});

app.get('/unique.photography/contact', function(req, res){
  res.render('vendor/unique_photography/contact', {title: "Style Me Pretty - Little Black Book", pageTitle: "Unique Photography", layout: "layout_lbb", region: "California", location: "Carmel By the Sea & Monterey Bay", type: "Photography", vendor: "Unique Photography"});
});

app.get('/unique.photography/posts', function(req, res){
  res.render('vendor/unique_photography/posts', {title: "Style Me Pretty - Little Black Book", pageTitle: "Unique Photography", layout: "layout_lbb", region: "California", location: "Carmel By the Sea & Monterey Bay", type: "Photography", vendor: "Unique Photography"});
});

app.get('/unique.photography/gallery', function(req, res){
  res.render('vendor/unique_photography/gallery', {title: "Style Me Pretty - Little Black Book", pageTitle: "Unique Photography", layout: "layout_lbb", region: "California", location: "Carmel By the Sea & Monterey Bay", type: "Photography", vendor: "Unique Photography"});
});

app.get('/unique.photography/gallery/wedding', function(req, res){
  res.render('vendor/unique_photography/gallery_view', {title: "Style Me Pretty - Little Black Book", pageTitle: "Unique Photography", layout: "layout_lbb", region: "California", location: "Carmel By the Sea & Monterey Bay", type: "Photography", vendor: "Unique Photography"});
});

app.get('/unique.photography/testimonials', function(req, res){
  res.render('vendor/unique_photography/testimonials', {title: "Style Me Pretty - Little Black Book", pageTitle: "Unique Photography", layout: "layout_lbb", region: "California", location: "Carmel By the Sea & Monterey Bay", type: "Photography", vendor: "Unique Photography"});
});

app.get('/holmanranch', function(req, res){
  res.render('vendor/holmanranch', {title: "Style Me Pretty - Little Black Book", pageTitle: "Holman Ranch", layout: "layout_lbb", region: "California", location: "Carmel By the Sea & Monterey Bay", type: "Venues", vendor: "Holman Ranch"});
});

app.get('/holmanranch/contact', function(req, res){
  res.render('vendor/holmanranch/contact', {title: "Style Me Pretty - Little Black Book", pageTitle: "Holman Ranch", layout: "layout_lbb", region: "California", location: "Carmel By the Sea & Monterey Bay", type: "Venues", vendor: "Holman Ranch"});
});

app.get('/holmanranch/posts', function(req, res){
  res.render('vendor/holmanranch/posts', {title: "Style Me Pretty - Little Black Book", pageTitle: "Holman Ranch", layout: "layout_lbb", region: "California", location: "Carmel By the Sea & Monterey Bay", type: "Venues", vendor: "Holman Ranch"});
});

app.get('/holmanranch/gallery', function(req, res){
  res.render('vendor/holmanranch/gallery', {title: "Style Me Pretty - Little Black Book", pageTitle: "Holman Ranch", layout: "layout_lbb", region: "California", location: "Carmel By the Sea & Monterey Bay", type: "Venues", vendor: "Holman Ranch"});
});

app.get('/holmanranch/gallery/wedding', function(req, res){
  res.render('vendor/holmanranch/gallery_view', {title: "Style Me Pretty - Little Black Book", pageTitle: "Holman Ranch", layout: "layout_lbb", region: "California", location: "Carmel By the Sea & Monterey Bay", type: "Venues", vendor: "Holman Ranch"});
});

app.get('/holmanranch/testimonials', function(req, res){
  res.render('vendor/holmanranch/testimonials', {title: "Style Me Pretty - Little Black Book", pageTitle: "Holman Ranch", layout: "layout_lbb", region: "California", location: "Carmel By the Sea & Monterey Bay", type: "Venues", vendor: "Holman Ranch"});
});

//alternate headers
app.get('/index/alternate_01', function(req, res){
  res.render('index', {title: "Style Me Pretty - The Ultimate Wedding Blog", layout: "layout_alt_01"});
});

app.get('/index/alternate_02', function(req, res){
  res.render('index', {title: "Style Me Pretty - The Ultimate Wedding Blog", layout: "layout_alt_02"});
});

app.get('/index/alternate_03', function(req, res){
  res.render('index', {title: "Style Me Pretty - The Ultimate Wedding Blog", layout: "layout_alt_03"});
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
