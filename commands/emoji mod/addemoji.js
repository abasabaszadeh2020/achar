const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
require("./ExtendedMessage");


module.exports = {
  name: "stealemoji",
  execute: async (client, message, args) => {
    
    if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
      return message.inlineReply(`Shoma Permission Nadarid 💩 Bayad Permission Manage Emojis Ra Dashte Bashid`)
    }
    
    const emoji = args[0];
    if (!emoji) return mmessage.inlineReply(`Lotfan Yek Emoji Bedid `);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      const name = args.slice(1).join(" ");
      message.guild.emojis.create(
        `${Link}`,
        `${name || `${customemoji.name}`}`
      );
      const Added = new MessageEmbed()
        .setTitle(`Emoji Ezafe Shod`)
        .setColor(`#c93cff`)
        .setDescription(
          `Emoji Add Shod | Name : ${name || `${customemoji.name}`} | Preview : [Click Konid](${Link})`
        );
      return message.channel.send(Added);
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send(`Lotfan Yek Emoji Kamel Bedid`);
        message.channel.send(
        `Shoma Mitavanod Estefeda Konid Az In Emoji Bedon Niyaz Be Add Kardan Dar Dakhel Server Shoma`
      );
    }
  }
};
