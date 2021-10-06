const Discord = require('discord.js');
require("./ExtendedMessage");
const db = require('quick.db')

module.exports = {
    name: 'antilink',
    description: 'Ping!',
    execute(client, message, args) {
        if(message.member.hasPermission("ADMINISTRATOR")){
        if(args[0] === 'on'){
            db.set(`antilink_${message.guild.id}`,'on')
            message.channel.send(`anti link is now **ON**`)
        }else if(args[0] === 'off'){
            db.set(`antilink_${message.guild.id}`,'off')
            message.channel.send(`anti link is now **OFF**`)
        }else{
            message.channel.send(`Just Use **[ON/OFF]**`)
        }
    }else{
        message.channel.send('You Dont have `ADMINSTRATOR` Premission !')
    }
    },
};
