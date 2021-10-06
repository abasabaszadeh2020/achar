const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "helpsanjeshgah",
    description: "با جوین در داخل سرور دیسکورد از اخرین اطلاعات بات با خبر بشید",
    execute : async(client , message) =>{
        const embed = new MessageEmbed()
        .addFields(
                             
          {
            "name": "<:1_:840413472662487070> Gay Sanjesh",
            "value": "`?gay`",
          },
          {
           "name": "<:1_:840413472662487070> Noob Sanjesh",
           "value": "`?noob`",
         },

         {
           
           "name": "<:1_:840413472662487070> Oskol Sanjesh",
           "value": "`?oskol`",
         },

          
           )
        .setTitle('Sanjesh Commands')
        .setFooter(message.author.username, message.author.avatarURL())
        .setColor('RANDOM')
        .setTimestamp()
        message.channel.send(embed)
      }
}