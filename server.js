var connect = require("connect");
var serveStatic = require("serve-static");

connect().use(serveStatic(__dirname)).listen(8080);

console.log("NodeJS running on http://localhost:8080");