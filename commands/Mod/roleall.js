const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
	name: 'role',
	description: 'Ping!',
    execute(client, message, args) {
        if(message.member.hasPermission("ADMINISTRATOR")){
            if(args[0] === 'all'){
  
    let role = message.mentions.roles.first();
if (!role) return message.channel.send(`**${message.author.username}**, role not found`)
message.guild.members.cache.filter().forEach(member => member.roles.add(role))
message.channel.send(`**${message.author.username}**, role **${role.name}** was added to all members`)
} else if(args[0]==='humans'){
  
    let role = message.mentions.roles.first();
if (!role) return message.channel.send(`**${message.author.username}**, role not found`)
message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.add(role))
message.channel.send(`**${message.author.username}**, role **${role.name}** was added to all users`)
}else if(args[0]==='bots'){
  
    let role = message.mentions.roles.first();
if (!role) return message.channel.send(`**${message.author.username}**, role not found`)
message.guild.members.cache.filter(m => m.user.bot).forEach(member => member.roles.add(role))
message.channel.send(`**${message.author.username}**, role **${role.name}** was added to all bots`)
}else{
message.channel.send('You can only use `?role [all/humans/bot] !`')
}
    }
	},
};