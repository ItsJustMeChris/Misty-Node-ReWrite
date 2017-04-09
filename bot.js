const Discord = require("discord.js");
const client = new Discord.Client();
const key = "your_api_key";

//Require Modules
const antiswear = require("./modules/antiswear.js");
const classes = require("./modules/classes.js");


//Prepare modules
var modules = {
    [antiswear.id] : {"status":function() { return antiswear.status() }, "toggle":function() { antiswear.toggle(); console.log("Toggle called") } },
    [classes.id] : {"status":function() { return classes.status() }, "toggle":function() { classes.toggle(); console.log("Toggle called") } },
    //[Module.id] : {"status":function() { return module.status() }, "toggle":function() { module.toggle(); console.log("Toggle called") } },

}



//Initialize Modules
antiswear.initialize();
classes.initialize();

//Enable Bot
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

//Listen to messages
client.on('message', msg => {
    if (msg.guild)
    {
        console.log("<" + msg.author.username + ">" + ": " + msg.content)
        if (msg.guild.roles.find("name", "Developer").members.find("user", msg.author))
        {
            var isDeveloper = msg.guild.roles.find("name", "Developer").members.find("user", msg.author).id;
        }
        var string = msg.content;
        var word = string.split(" ");
	       if (word[0] === '!misty') {
		 msg.reply('Hello!');
	    }

        //if (msg.guild.roles.find("name", "Developer").members.username)
        //{
        //    console.log("Yup he's a dev!")
        //}

        
        if (isDeveloper && word[0] === "!module")
        {
            if (word[1] === "toggle")
            {
                if (modules[word[2]])
                {
                    modules[word[2]].toggle();
                    msg.reply(word[2] + " was toggled, status: " + modules[word[2]].status())
                }
                else
                {
                    msg.reply (word[2] + " is not a valid module!");
                }
            }
        }
    }
});

//message.channel.sendEmbed({
//    hexColor: 3447003,
//    author: {
//      name: <Client>.user.username,
//      icon_url: <Client>.user.avatarURL
//    },
//    title: 'This is an embed',
//    url: 'http://google.com',
//    description: 'This is a test embed to showcase what they look like and what they can do.',
//    fields: [{
//        name: 'Fields',
//        value: 'They can have different fields with small headlines.'
//      },
//      {
//        name: 'Masked links',
//        value: 'You can put [masked links](http://google.com) inside of rich embeds.'
//      },
//      {
//        name: 'Markdown',
//        value: 'You can put all the *usual* **__Markdown__** inside of them.'
//      }
//    ],
//    timestamp: new Date(),
//    footer: {
//      icon_url: <Client>.user.avatarURL,
//      text: '© Example'
//    }});
//My key
client.login(key);
//TODO: Make key global
