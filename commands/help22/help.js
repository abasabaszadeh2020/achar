const { MessageButton } = require('discord-buttons');
const discord = require('discord.js'); //Define the discord.js module
const client = new discord.Client(); //Creating discord.js client (constructor)
const disbut = require('discord-buttons')(client);
const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "help",
    description: "با جوین در داخل سرور دیسکورد از اخرین اطلاعات بات با خبر بشید",
    execute : async(client , message) =>{
        const embed = new MessageEmbed()
        .addFields(
                             

            {
                "name": "Help Mod <a:812127523177234522:840212950672343061> ",
                "value": "`?helpmod`",
              },
              {
               "name": "Help Fun <a:812127523177234522:840212950672343061> ",
               "value": "`?helpfun`",
             },
  
             {
               
               "name": "Help Info <a:812127523177234522:840212950672343061> ",
               "value": "`?helpinfo`",
             },
             
                                            {
               "name": "Help Game <a:812127523177234522:840212950672343061> ",
               "value": "`?helpgame`",
             },
             {
               
              "name": "Help Security <a:812127523177234522:840212950672343061> ",
              "value": "`?helpsecurity`",
           
        })
          .setTitle('All Commands')
          .setThumbnail('https://images-ext-2.discordapp.net/external/dLFDPiD_3qVUe6mJwTuwwuDy9R-dtf1oOOaMPFj569c/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/840600939051089960/5d3115dcf2fd7b06ef588cc072e71c06.webp')
          .setColor('#00AAFF')  
          .setDescription(`**[support server](https://discord.gg/eRPJhW4JK6) ✦ [invite](https://discord.com/api/oauth2/authorize?client_id=836580294102351903&permissions=8&scope=bot)**`)
          .setFooter(message.author.tag, message.author.displayAvatarURL());
          let btn = new disbut.MessageButton()
          btn.setStyle('url') 
          btn.setLabel('invite bot') 
          btn.setURL('https://discord.com/api/oauth2/authorize?client_id=836580294102351903&permissions=8&scope=bot');
        
          let btn2 = new disbut.MessageButton()
          btn2.setStyle('url') 
          btn2.setLabel('support server') 
          btn2.setURL('https://discord.gg/8wGMqA4hVf');
          await message.channel.send( { buttons: [btn, btn2], embed});
                }
      }        