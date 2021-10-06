const { Client , Message , MessageEmbed } = require('discord.js')

module.exports = { 
    name : "userrole",
    description : "نشان دادن تمامی رول های ممبر مورد نظر",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */

     execute : async(client , message ,args) =>{
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!member) return message.reply('Lotfan Member Morede Nazar Ra Mention Konid. ❗️');

        const memberRoles = member.roles.cache
            .filter(roles => roles.id !== message.guild.id)
            .map((role) => role.toString() );

        message.channel.send(
            new MessageEmbed()
            .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true}))
            .setDescription(` Role Haye ${member} <a:833638588553887774:838456164982194228>  ${memberRoles} `)
            .setColor('#fafafa')
        )    
          




           
    }}