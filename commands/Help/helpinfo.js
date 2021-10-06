const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "helpinfo",
    description: "با جوین در داخل سرور دیسکورد از اخرین اطلاعات بات با خبر بشید",
    execute : async(client , message) =>{
        const embed = new MessageEmbed()
        .addFields(
                             
            {
              "name": "<a:727630497991229540:838454198348808212> Bot-Info",
              "value": "`?bot-info`",
            },
            {
             "name": "<a:727630497991229540:838454198348808212> Discord",
             "value": "`?discord`",
           },

           {
             
             "name": "<a:727630497991229540:838454198348808212> Invite",
             "value": "`?invite`",
           },
             
           {
            "name": "<a:727630497991229540:838454198348808212> Up Time",
            "value": "`?uptime`",
          },


           )
        .setTitle('Game Commands')
        .setFooter(message.author.username, message.author.avatarURL())
        .setColor('RANDOM')
        .setTimestamp()
        message.channel.send(embed)
    }
}