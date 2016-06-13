/*jslint node:true*/
/*eslint no-unused-params:0*/
/* These lines are hints to the code editor */

/**
 * Load the appropriate modules for our web application
*/
var port = (process.env.VCAP_APP_PORT || 3000);
var host = (process.env.VCAP_APP_HOST || 'localhost');
var http = require('http');

var userCount = 0;
/* add the var definition for your new variable, userbytwo here */

/**
 * This is the function that handles incoming requests
**/
var serverHandler = function(req,res) {
     userCount++;  
     /* add the incrementing by two for your new variable, userbytwo here */    
     res.write('Hello from Ruth\n');     /* edit this line to say your name */
     res.write('We have had '+userCount+' visits!\n');
     /* copy the line above, change the wording to include by two, and change userCount to userbytwo */
     res.end('Good Bye');
};

/**
 * This creates the server and listens for requests
**/
var server = http.createServer( serverHandler );
server.listen(port,host);
