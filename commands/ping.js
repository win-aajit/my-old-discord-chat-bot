exports.execute = function(args,msg,bot){

     var random = Math.random();
     if(random <= .4){
        return msg.channel.sendMessage('> pong!');
     }
     else if (.4 < random && random <= .8) {
        return msg.channel.sendMessage('> ping!');
     }
     else {
        return msg.channel.sendMessage('> plop...');
     }
 
}
