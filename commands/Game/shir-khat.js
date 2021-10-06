const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "shir-khat",
    execute : async (bot, message) => {
        const replies = ["**خط**", "**شیر**"];

        const reply = replies[Math.floor(Math.random() * replies.length)];

        const embed = new MessageEmbed()
            .setTitle("🦁shir-khat👛")
            .setTitle(`${reply}`)
            .setColor("#005fbe")
            .setFooter(message.author.username)
            .setTimestamp();

        message.channel.send(embed);
    }
};
