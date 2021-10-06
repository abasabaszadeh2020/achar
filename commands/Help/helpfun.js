const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "helpfun",
    description: "با جوین در داخل سرور دیسکورد از اخرین اطلاعات بات با خبر بشید",
    execute : async(client , message) =>{
        const embed = new MessageEmbed()
        .addFields(
                             
            {
              "name": "<a:5_:840247789425262593> Avatar",
              "value": "`?addrole name role`",
            },
            {
             "name": "<a:5_:840247789425262593> emoji-list",
             "value": "`?emoji-list`",
           },

           {
             
             "name": "<a:5_:840247789425262593> Emoji Text",
             "value": "`?emojitxt`",
           },
           
                                          {
             "name": "<a:5_:840247789425262593> Ping",
             "value": "`?ping`",
           },
                         
           {
            "name": "<a:5_:840247789425262593> Mashin Hesab",
            "value": "`?riyazi 2+2`",
          },
           
          {
            "name": "<a:5_:840247789425262593> User Role",
            "value": "`?userrole @member`",
          },

          
           )
        .setTitle('Fun Commands')
        .setFooter(message.author.username, message.author.avatarURL())
        .setColor('RANDOM')
        .setTimestamp()
        message.channel.send(embed)
      }
}