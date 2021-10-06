const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "helpsecurity",
    description: "با جوین در داخل سرور دیسکورد از اخرین اطلاعات بات با خبر بشید",
    execute : async(client , message) =>{
        const embed = new MessageEmbed()
        .addFields(
                             
            {
              "name": "<:HiDDeN_Security:846937042159271967> Anti Link",
              "value": "`?antilink [on / off]`",
            },
            {
             "name": "<:HiDDeN_Security:846937042159271967> Anti Spam",
             "value": "`Updateing`",
           },

           {
             
             "name": "<:HiDDeN_Security:846937042159271967> Anti Kick",
             "value": "`Updateing`",
           },
           {
             
            "name": "<:HiDDeN_Security:846937042159271967> Anti Ban",
            "value": "`Updateing`",
          },



           )
           .setTitle('Security Commands')
           .setFooter(message.author.username, message.author.avatarURL())
           .setColor('RANDOM')
           .setTimestamp()
           message.channel.send(embed)
          }
   }
   