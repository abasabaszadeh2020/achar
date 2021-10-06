const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "helpmod",
    description: "help mod",
    execute : async(client , message) =>{
        const embed = new MessageEmbed()
        .addFields(
                             
            {
              "name": "<a:2_:840111324810051624> addrole",
              "value": "`?addrole name role`",
              "inline": true
            },
            {
             "name": "<a:2_:840111324810051624> Removerole",
             "value": "`?removerole @role `",
             "inline": true
           },

           {
             
             "name": "<a:2_:840111324810051624> voicemute",
             "value": "`?voicemute`",
             "inline": true
           },
           
                                          {
             "name": "<a:2_:840111324810051624>   Voice Unmute",
             "value": "`?voiceunmute`",
             "inline": true
           },
                         
           {
            "name": "<a:2_:840111324810051624> say",
            "value": "`?say Message`",
            "inline": true
          },
           
          {
            "name": "<a:2_:840111324810051624> say-embed",
            "value": "`?say-embed Message`",
            "inline": true
          },
           
          {
            "name": "<a:2_:840111324810051624> Add Role Member",
            "value": "`?addrole @member  @role`",
            "inline": true
          },
                          
          {
            "name": "<a:2_:840111324810051624> Remove Role Member",
            "value": "`?removerole @member  @role`",
            "inline": true
          },                                          
                            
          {
            "name": "<a:2_:840111324810051624> Lock Channel",
            "value": "`?lock`",
            "inline": true
          },
                     
          {
            "name": "<a:2_:840111324810051624> UnLock Channel",
            "value": "`?unlock`",
            "inline": true
          },
                     
          {
            "name": "<a:2_:840111324810051624> Delete Channel",
            "value": "`?delchannel #channel`",
            "inline": true
          },
           
          {
            "name": "<a:2_:840111324810051624> dm",
            "value": "`?dm @member message`",
            "inline": true
          },
                     
          {
            "name": "<a:2_:840111324810051624> Clear",
            "value": "`?clear 1>100`",
            "inline": true
          },
                     
          {
            "name": "<a:2_:840111324810051624> show-bans",
            "value": "`?show-bans`",
            "inline": true
          },

          {
            "name": "<a:2_:840111324810051624> Avatar",
            "value": "`?avatar @member`",
            "inline": true
          },


          
           )
        .setTitle('Mod Commands')
        .setFooter(message.author.username, message.author.avatarURL())
        .setColor('RANDOM')
        .setTimestamp()
        message.channel.send(embed)
    }
}