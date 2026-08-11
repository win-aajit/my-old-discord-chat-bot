const Discord = require("discord.js");
const config = require("C:\\Users\\super_ty27mrp\\Desktop\\DiscordBot\\config.js");
version = config.version;
prefix = config.prefix;

exports.execute = function(args,msg,bot){



    if(args[0] === 'version'){
        const versionEmbed = new Discord.RichEmbed()
        .setTitle('Version: ' + version)
        .setColor(0x00d8ff)
        .setFooter('auth. kaySauce');
        msg.channel.sendEmbed(versionEmbed);
    }
    if(args[0] === 'commands'){
        const commandEmbed = new Discord.RichEmbed()
        .setTitle('Command List')
        .addField(prefix + 'daily', "sends user's daily message and a special picture")
        .addField(prefix + 'embed', "sends basic user information")
        .addField(prefix + 'kiss', "sends you a wonderful anime kiss :kissing_heart:")
        .addField(prefix + 'ping', "ping!, pong!, or plop... - an intense table tennis match awaits")
        .setColor(0x00d8ff)
        .setFooter('auth. kaySauce');
        msg.channel.sendEmbed(commandEmbed);
    }

    if(args[0] === 'author')
        msg.channel.sendMessage("> Lord kaySauce is my father and creator ");
    if(args[0] === undefined){
        const helpEmbed = new Discord.RichEmbed()
        .setTitle('Basic Help')
        .addField(prefix + 'help commands', "a list of all current commands with their uses")
        .addField(prefix + 'help version', "current version number")
        .addField(prefix + 'help author', "this project was created by...")
        .setColor(0x00d8ff)
        .setFooter('auth. kaySauce');

        msg.channel.sendEmbed(helpEmbed);

    }
}
