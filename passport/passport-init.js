




passport.use(require('./authorization/local'))

//===============BOILERPLATE


passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

expressApp.use(session);  

//initialize Passport and let Express know about it
expressApp.use(passport.initialize());
// Set up sessions 
expressApp.use(passport.session());


//==============END BOILERPLATE