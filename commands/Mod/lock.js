const Discord = module.require("discord.js");

module.exports = {
   name: "lock",
   
   execute: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("Shoma Permission Nadarid 💩")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Update Shod")
   .setDescription(`🔒 ${message.channel} Lock Shod`)
   .setColor("00ff20");
   await message.channel.send(embed);
   message.delete();
}
}
