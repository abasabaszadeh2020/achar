const Discord = require("discord.js")

module.exports = {
    name: "avatar",
    description: "avatar command",
    usage: "[command | user] or [command]",
    execute: async(client, message, args) => {

        //command

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;

        if (!member.user.avatarURL) return message.channel.send(`The user Have not any avatar`);

        const avatar = new Discord.MessageEmbed()
            .setTitle(`avatar link`)
            .setColor("RANDOM")
            .setFooter("این پروفایلتو خواست: " + message.member.displayName, message.author.displayAvatarURL())
            .setImage(member.user.avatarURL( {size: 1024, dynamic: true } ))
            .setURL(member.user.avatarURL())
        message.channel.send(avatar)
            .catch(() => message.channel.send('**Error:** Missing permission `Embed link` '));

    }
};
