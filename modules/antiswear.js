const key = "Your Key";

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
    const swears = require('./swears.js');
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
                if (swears.list[word[i]])
                {
                    msg.reply("That's a bad word >:(")
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
