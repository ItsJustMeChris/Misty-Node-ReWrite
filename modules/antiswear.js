const key = "Your_API_Key";

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
            var lower = string.toLowerCase();
            for (i = 0; i < 554; i++)
            {
                if (status && lower.search(swears.list[i]) >= 0)
                {
                    msg.delete();
                    msg.reply("That's a bad word >:(");
                    console.log("I DETECTED A FUCKING SWEAR SHIT!")
                    break;
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
