const config = require("C:\\Users\\super_ty27mrp\\Desktop\\DiscordBot\\config.js");
exports.version = '1.2.0'; //exports version number
exports.prefix = ','; //exports prefix

exports.commandArr = ["kiss", "ping", "help", "daily", "image", "embed", "test"];

function makeEmbed(text){
    const embed = new Discord.RichEmbed()
        .setTitle(text)
        .setColor(0x00d8ff)
        msg.channel.sendEmbed(embed);
}

