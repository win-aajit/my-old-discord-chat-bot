const Discord = require("discord.js");
const config = require("C:\\Users\\super_ty27mrp\\Desktop\\DiscordBot\\config.js");
version = config.version;

exports.execute = function(args,msg,bot){
    const pumpPic = ["https://cdn.discordapp.com/attachments/625144072868462593/633130038434201603/video2.mov", "https://cdn.discordapp.com/attachments/625144072868462593/633130037733883917/image0.jpg",
     "https://cdn.discordapp.com/attachments/625144072868462593/633130037264252961/image3.jpg", "/https://cdn.discordapp.com/attachments/625144072868462593/633130036630650892/image1.jpg",
     "https://cdn.discordapp.com/attachments/625144072868462593/633130034227445770/image4.jpg"];
    const dailyEmbed = new Discord.RichEmbed()
    .setTitle(`The daily news`)
    .setImage(pumpPic[Math.floor(Math.random() * pumpPic.length)])
    .setColor(0x00d8ff)
    .setThumbnail(msg.author.avatarURL)
    msg.channel.sendEmbed(dailyEmbed);
    //https://cdn.discordapp.com/attachments/625144072868462593/633130038434201603/video2.mov
    //https://cdn.discordapp.com/attachments/625144072868462593/633130037733883917/image0.jpg
    //https://cdn.discordapp.com/attachments/625144072868462593/633130037264252961/image3.jpg
    //https://cdn.discordapp.com/attachments/625144072868462593/633130036630650892/image1.jpg
    //https://cdn.discordapp.com/attachments/625144072868462593/633130034227445770/image4.jpg
 
}
