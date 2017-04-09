//Welcome to the example module
const key = "your_api_key";

var status = true;
var statusWord = "on";
//Module Name
const name = "Your Module Name";
//Module identifier
const id = "lowercaseandonewordistheidentifier";
//Module Description
const desc = "Your module description.";

//Toggle this module

exports.status = function()
{
    return statusWord
}

exports.toggle = function()
{
    if (status)
    {
        console.log("Module toggled off");
        status = false;
        statusWord = "off";
    }
    else
    {
        console.log("Module toggled on");
        status = true;
        statusWord = "on";
    }
}

//Initialize our module
exports.initialize = function() {
    const Discord = require("discord.js");
    const client = new Discord.Client();
    
    if (!status)
    {
        console.log(name + " is disabled, we cannot load it!");
    }
    
    if (status)
    {
        client.on('ready', () => {
            console.log(name + " Loaded!");
            console.log(name + ": " + desc);
        });
        
        client.on('message', msg => {
            var string = msg.content;
            var word = string.split(" ");
            
            for (i = 0; i < word.length; i++)
            {
                if (msg[0] === "ping")
                {
                    msg.reply("pong");
                }
            }
        });
    }
    
    client.login(key);
}

//Globals
exports.toggle.status = status;
exports.name = name;
exports.description = desc;
exports.id = id;
