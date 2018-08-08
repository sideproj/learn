const logger = require("./logger.js");

function sayHello(name){
    console.log("hello "+ name);
}
sayHello("test");

logger.log("hello module");
