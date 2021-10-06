const { Client , Message, User} = require('discord.js');
module.exports = { 
    name : "dm",
    description : "دایرکت مسیج دادن به ممبر خاصی که خودتون بگید",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

     execute : async(client , message ,args) =>{
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return;

        const user =
         message.mentions.users.first() ||
         message.guild.members.cache.get(args[0]).user;

       const str  = args.slice(1).join(" ");
       
        if(message.content.includes('-a')) {
            user.send(str.replace("-a", ""));
        }else{
            user.send(`${message.author.tag}: ${str}`);
        }
        },
    };
