var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(
serveStatic("../angularStore")
).listen(5000);