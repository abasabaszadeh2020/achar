const  { Message }  = require('discord.js')

module.exports = {
    name : "addrole",
    description : "دادن رول به یک ممبر",
    execute : async(client , message , args) => {
        /**
         * @param { Message } message
         */
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Shoma Permission Nadarid <a:798526823976796161:838455109515477002> ")
        const target = message.mentions.members.first()
        if(!target) return message.channel.send('Lotfan Member Morede Nazar Ra Mention Konid. ❗️')
        const role = message.mentions.roles.first()
        if(!role) return message.channel.send('Role Morede Nazar Ra Lotfan Mention Konid. ❗️')
        await target.roles.add(role)
        message.channel.send(`${target.user.username} Role Behesh Dade Shod ✅`)
    
        }

}