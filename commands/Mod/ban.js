const Discord  = require('discord.js')
module.exports = {
    name : "ban",
    execute : async(client , message) =>{
          if(message.member.hasPermission("ADMINISTRATOR")) {

          const user = message.mentions.users.first();
          if (user) {
            const member = message.guild.member(user);
            if (member) {
              member
                .ban({
                  reason: ':Ban~1: **بن** :Ban~1: ',
                })
                .then(() => {
                  message.reply(`:dorostt: **ممبر مورد نظر از سرور بن شد** :dorostt: `);
                })
                .catch(err => {
                  message.reply(`I Don't Have Permission`);
                  console.error(err);
                });
            } else {
              message.reply(`Member ro Peyda Nemikonam`);
            }
          } else {
            message.reply(`Lotfan Member Morede Nazar Ra Mention Konid
            `);
          }
        }
        }
      }
