const Discord = require("discord.js");
const config = require("C:\\Users\\super_ty27mrp\\Desktop\\DiscordBot\\config.js");
version = config.version;

exports.execute = function(args,msg,bot){

    const embedBasic = new Discord.RichEmbed()
    .setTitle('User Information')
    //.setDescription('test embed')
    .setImage(`https://digitalgeetam.com/wp-content/uploads/2018/10/url-amigavel.jpg`)
    .addField(`Player Name`, msg.author.username, true)
    .addField('Version', version, true)
    //.addBlankField() //adds a blank lane
    .addField('Current Server', msg.guild.name, true)
    .setColor(0x00d8ff)
    .setThumbnail(msg.author.avatarURL)
    .setFooter('auth. kaySauce')
    msg.channel.sendEmbed(embedBasic);

 
}
