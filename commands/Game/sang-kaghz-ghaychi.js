const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "rps",
    execute : async (bot, message) => {
        const replies = ["Sang", "Kaghz", "Ghaychi"];

        const reply = replies[Math.floor(Math.random() * replies.length)];

        const embed = new MessageEmbed()
            .setTitle("Sang- Kaghz-Ghaychi")
            .setColor("#bf0044")
            .setDescription(`**${reply}**`)
            .setFooter(message.author.username);

        message.channel.send(embed);
    },
};