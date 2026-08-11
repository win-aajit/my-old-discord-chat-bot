const {Client, Attachment} = require('discord.js');
const bot = new Client();

const cheerio = require('cheerio');
const request = require('request');
const config = require(`C:\\Users\\super_ty27mrp\\Desktop\\DiscordBot\\config.js`);
const token = 'NjI5Mjk4MTQ0NDg3ODAwODQy.XZ5xkw.DZ45803bNDEfaHgUBZ5b60402Js';
 
prefix = config.prefix;
const version = '1.2.0'

 
// sends log to the console once bot turns on 
bot.on('ready', () => {
    console.log('This bot is online! ' + version);
    bot.user.setActivity(',help');
 
})
 
 
 
 
bot.on('message', msg => {
    var command = msg.content.split(" ")[0].replace(prefix,"").toLowerCase();
    let args = msg.content.split(" ").slice(1);
    if(!msg.content.startsWith(prefix)){
    return;
    }
    loadCommand(command, args, msg);
    switch (command) {
        case 'website':
            msg.channel.sendMessage('> www.google.com')
            break;
       // case 'clear':
           // if(!args[1]) return msg.reply('Please define second arg')
          //  msg.channel.bulkDelete(args[1]);
          //  break;
 
     }   
 
});

function loadCommand(command, args, msg){
    for (var x = 0; x < config.commandArr.length; x++){
        if (command == config.commandArr[x]){
            console.log("Halleluyahhhhh")
            const commandClass = require(`C:\\Users\\super_ty27mrp\\Desktop\\DiscordBot\\commands\\${config.commandArr[x]}.js`); //import command in
            commandClass.execute(args,msg,bot);
            break; 
        }
    }

}

bot.login(token);
 

