const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "discord",
    description: "با جوین در داخل سرور دیسکورد از اخرین اطلاعات بات با خبر بشید",
    execute : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle('Nexo Discord Link ')
        .setDescription('Link Discord : https://discord.gg/p6pYMXNmRf')
        .setColor('#fafafa')
        .setTimestamp()
        message.channel.send(embed)
    }
}