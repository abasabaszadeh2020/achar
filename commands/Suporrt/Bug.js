const Discord = require('discord.js');
module.exports = {
    name: 'bug',
    description: 'report bug',
    execute(client, message, args) {


        const ordakserver = client.guilds.cache.get("788432726922625074");
        const channelbug = ordakserver.channels.cache.get('845926177662828554')
        let invite = message.channel.createInvite({
            maxAge: 10 * 60 * 1000,
            maxUses: 5
        }, )

        const soal = new Discord.MessageEmbed().setColor('RANDOM')
            .setTitle(`Report : `)
            .setDescription(`
        User : ${message.author.tag} \n 
        Send : ${message}\n 
        Server : ${invite}`)
        channelbug.send(soal)
        message.reply('درخواست باگ یا نظر شما به سرور پشتیبانی ارسال شد یا ادمین ها جوین سرور میشوند و حل میکنند یا به شما در خواست فرندی میدهند با تشکر')
    },
};
