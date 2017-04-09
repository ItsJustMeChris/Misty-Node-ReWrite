const key = "your_api_key";

var status = true;
var statusWord = "on";
//Module Name
const name = "Anti Swear";
//Module identifier
const id = "antiswear";
//Module Description
const desc = "Prevents users from swaring or using words we don't like.";

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
    const swears = require('./swears/swears.js');
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
            if (msg.guild)
            {
                var string = msg.content;
                var word = string.split(" ");
                var lower = string.toLowerCase();
                console.log(lower);
                console.log(string);
                console.log(msg.content);
                for (i = 0; i < 554; i++)
                {
                    if (status && lower.indexOf(swears.list[i]) >= 0)
                    {
                        console.log(i);
                        msg.delete();
                        break;
                    }
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
