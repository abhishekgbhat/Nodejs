/*jslint node:true*/
/*eslint no-unused-params:0*/
/* These lines are hints to the code editor */

/* This file contains the changes outlined in the article "Node.js - So simple a kid can do it".  
The step by step directions to make these changes are also in the worksheets folder. 
To run this code, copy it into you app.js file */
/**
 * Load the appropriate modules for our web application
*/
var port = (process.env.VCAP_APP_PORT || 3000);
var host = (process.env.VCAP_APP_HOST || 'localhost');
var http = require('http');

var userCount = 0;
var userbytwo = 0; /* added the var definition for your new variable, userbytwo here */

/**
 * This is the function that handles incoming requests
**/
var serverHandler = function(req,res) {
     userCount++; 
     userbytwo = userbytwo + 2; /* added incrementing userbytwo by two */
     res.write('Hello from Your name here\n');     /* edit this line to say your name */
     res.write('We have had '+userCount+' visits!\n');
     res.write('We can also count by two.  We have had '+userbytwo+' visits!\n'); /*copied and changed for userbytwo */
     res.end('Good Bye');
};

/**
 * This creates the server and listens for requests
**/
var server = http.createServer( serverHandler );
server.listen(port,host);
