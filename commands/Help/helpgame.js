const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "helpgame",
    description: "با جوین در داخل سرور دیسکورد از اخرین اطلاعات بات با خبر بشید",
    execute : async(client , message) =>{
        const embed = new MessageEmbed()
        .addFields(
                             
            {
              "name": "<a:__:840255774940725278> Mahigiri",
              "value": "`?mahigiri`",
            },
            {
             "name": "<a:__:840255774940725278> Rps",
             "value": "`?rps`",
           },

           {
             
             "name": "<a:__:840255774940725278> shir-khat",
             "value": "`?shir-khat`",
           },

          
           )
        .setTitle('Game Commands')
        .setFooter(message.author.username, message.author.avatarURL())
        .setColor('RANDOM')
        .setTimestamp()
        message.channel.send(embed)
    }
}