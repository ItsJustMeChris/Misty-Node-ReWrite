const Discord = require("discord.js");
const client = new Discord.Client();
const key = "Your Key";

//Require Modules
const antiswear = require("./modules/antiswear.js");

//Prepare modules
var modules = {
    [antiswear.id] : {"status":function() { return antiswear.status() }, "toggle":function() { antiswear.toggle(); console.log("Toggle called") } },
}



//Initialize Modules
antiswear.initialize();

//Enable Bot
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

//Listen to messages
client.on('message', msg => {
    if (msg.guild)
    {
        if (msg.guild.roles.find("name", "Developer").members.find("user", msg.author).id)
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
        
        if (word[0] === "!classes")
        {
            //Death Knight
            msg.author.sendEmbed({
                hexColor:"#C41F3B",
                author: {
                    name: "Death Knight",
                    icon_url: "http://vignette2.wikia.nocookie.net/wowwiki/images/3/30/Death_knight_crest.png/revision/latest?cb=20130813094520",
                },
                title: "Class Forum",
                url: "https://waterhack.co/forumdisplay.php?fid=14",
                fields: [{
                    name: 'Blood',
                    value: "Dungeon Ready"
                },
                {
                    name: 'Unholy',
                    value: "Dungeon Ready",
                    
                },
                {
                    name: 'Frost',
                    value: "Dungeon Ready",
                },],
                timestamp: new Date(),
                
            })
            
            //Demon Hunter
            msg.author.sendEmbed({
                hexColor:"#A330C9",
                author: {
                    name: "Demon Hunter",
                    icon_url: "https://hydra-media.cursecdn.com/wow.gamepedia.com/thumb/0/00/Demon_Hunter_Crest.png/250px-Demon_Hunter_Crest.png?version=ad4667b13563cfaf82f72034c0089964",
                },
                title: "Class Forum",
                url: "https://waterhack.co/forumdisplay.php?fid=15",
                fields: [{
                    name: 'Havoc',
                    value: "Dungeon Ready/Very optimized",
                },
                {
                    name: 'Vengeance',
                    value: "Dungeon Ready/Very optimized",
                    
                }],
                timestamp: new Date(),
                
            })
            
            //Druid
            msg.author.sendEmbed({
                hexColor:"#FF7D0A",
                author: {
                    name: "Druid",
                    icon_url: "http://vignette2.wikia.nocookie.net/wowwiki/images/5/55/Druid_crest.png/revision/latest?cb=20130813094831",
                },
                title: "Class Forum",
                url: "https://waterhack.co/forumdisplay.php?fid=16",
                fields: [{
                    name: 'Guardian',
                    value: "Dungeon Ready/Very optimized",
                },
                {
                    name: 'Feral',
                    value: "Not yet started",
                },
                {
                    name: 'Balance',
                    value: "Rough outline",
                    
                },
                {
                    name: 'Restoration',
                    value: "Dungeon Ready",
                },],
                timestamp: new Date(),
                
            })
            
            //Hunter
            msg.author.sendEmbed({
                hexColor:"#ABD473",
                author: {
                    name: "Hunter",
                    icon_url: "http://vignette3.wikia.nocookie.net/wowwiki/images/2/20/Hunter_crest.png/revision/latest?cb=20130813094921",
                },
                title: "Class Forum",
                url: "https://waterhack.co/forumdisplay.php?fid=17",
                fields: [{
                    name: 'Survival',
                    value: "Dungeon Ready",
                },
                {
                    name: 'Marksmanship',
                    value: "Dungeon Ready",
                    
                },
                {
                    name: 'Beast Mastery',
                    value: "Dungeon Ready/Very optimized",
                    
                },],
                timestamp: new Date(),
                
            })
            
            //Mage
            msg.author.sendEmbed({
                hexColor:"#69CCF0",
                author: {
                    name: "Mage",
                    icon_url: "http://vignette2.wikia.nocookie.net/wowwiki/images/b/b8/Mage_crest.png/revision/latest?cb=20130813094952",
                },
                title: "Class Forum",
                url: "https://waterhack.co/forumdisplay.php?fid=18",
                fields: [{
                    name: 'Frost',
                    value: "Dungeon Ready",
                },
                {
                    name: 'Fire',
                    value: "Dungeon Ready",
                    
                },
                {
                    name: 'Arcane',
                    value: "Dungeon Ready",
                    
                }],
                timestamp: new Date(),
                
            })
            
            //Monk
            msg.author.sendEmbed({
                hexColor:"#00FF96",
                author: {
                    name: "Monk",
                    icon_url: "http://vignette1.wikia.nocookie.net/wowwiki/images/6/60/Monk_crest.png/revision/latest?cb=20130817144820",
                },
                title: "Class Forum",
                url: "https://waterhack.co/forumdisplay.php?fid=19",
                fields: [{
                    name: 'Brew Master',
                    value: "Dungeon Ready",
                },
                {
                    name: 'Wind Walker',
                    value: "Dungeon Ready/Very optimized",
                    
                },
                {
                    name: 'Mist Weaver',
                    value: "Dungeon Ready",
                    
                }],
                timestamp: new Date(),
                
            })
            
            //Paladin
            msg.author.sendEmbed({
                hexColor:"#69CCF0",
                author: {
                    name: "Paladin",
                    icon_url: "http://vignette1.wikia.nocookie.net/wowwiki/images/0/09/Paladin_crest.png/revision/latest?cb=20130813095032",
                },
                title: "Class Forum",
                url: "https://waterhack.co/forumdisplay.php?fid=20",
                fields: [{
                    name: 'Holy',
                    value: "Not Started",
                },
                {
                    name: 'Protection',
                    value: "Dungeon Ready",
                    
                },
                {
                    name: 'Retribution',
                    value: "Dungeon Ready",
                    
                }],
                timestamp: new Date(),
                
            })
            
            //Priest
            msg.author.sendEmbed({
                hexColor:"#69CCF0",
                author: {
                    name: "Priest",
                    icon_url: "http://vignette2.wikia.nocookie.net/wowwiki/images/7/71/Priest_crest.png/revision/latest?cb=20130813095106",
                },
                title: "Class Forum",
                url: "https://waterhack.co/forumdisplay.php?fid=21",
                fields: [{
                    name: 'Holy',
                    value: "Dungeon Ready",
                },
                {
                    name: 'Shadow',
                    value: "In Progress",
                    
                },
                {
                    name: 'Discipline',
                    value: "In Progress",
                    
                }],
                timestamp: new Date(),
                
            })
            
            //Rogue
            msg.author.sendEmbed({
                hexColor:"#69CCF0",
                author: {
                    name: "Rogue",
                    icon_url: "http://vignette2.wikia.nocookie.net/wowwiki/images/e/e2/Rogue_crest.png/revision/latest?cb=20130813095139",
                },
                title: "Class Forum",
                url: "https://waterhack.co/forumdisplay.php?fid=22",
                fields: [{
                    name: 'Subtlety',
                    value: "Dungeon Ready",
                },
                {
                    name: 'Assassination',
                    value: "Dungeon Ready",
                    
                },
                {
                    name: 'Combat',
                    value: "Dungeon Ready",
                    
                }],
                timestamp: new Date(),
                
            })
            
            //Shaman
            msg.author.sendEmbed({
                hexColor:"#69CCF0",
                author: {
                    name: "Shaman",
                    icon_url: "http://vignette1.wikia.nocookie.net/wowwiki/images/d/df/Shaman_crest.png/revision/latest?cb=20130813095240",
                },
                title: "Class Forum",
                url: "https://waterhack.co/forumdisplay.php?fid=23",
                fields: [{
                    name: 'Elemental',
                    value: "Dungeon Ready",
                },
                {
                    name: 'Enhancement',
                    value: "Dungeon Ready",
                    
                },
                {
                    name: 'Restoration',
                    value: "Not Started",
                    
                }],
                timestamp: new Date(),
                
            })
            
            //Warlock
            msg.author.sendEmbed({
                hexColor:"#69CCF0",
                author: {
                    name: "Warlock",
                    icon_url: "http://vignette3.wikia.nocookie.net/wowwiki/images/4/4f/Warlock_crest.png/revision/latest/scale-to-width-down/130?cb=20130813095321",
                },
                title: "Class Forum",
                url: "https://waterhack.co/forumdisplay.php?fid=24",
                fields: [{
                    name: 'Demonology',
                    value: "Dungeon Ready",
                },
                {
                    name: 'Affliction',
                    value: "Dungeon Ready",
                    
                },
                {
                    name: 'Destruction',
                    value: "Dungeon Ready",
                    
                }],
                timestamp: new Date(),
                
            })
            
            //Warrior
            msg.author.sendEmbed({
                hexColor:"#69CCF0",
                author: {
                    name: "Warrior",
                    icon_url: "http://vignette2.wikia.nocookie.net/wowwiki/images/e/ee/Warrior_crest.png/revision/latest/scale-to-width-down/130?cb=20130813095500",
                },
                title: "Class Forum",
                url: "https://waterhack.co/forumdisplay.php?fid=25",
                fields: [{
                    name: 'Arms',
                    value: "Dungeon Ready",
                },
                {
                    name: 'Fury',
                    value: "Dungeon Ready/Very optimized",
                    
                },
                {
                    name: 'Protection',
                    value: "Dungeon Ready",
                    
                }],
                timestamp: new Date(),
                
            })
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
