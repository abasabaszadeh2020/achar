const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "invite",
    description: "با اینوایت کردن با در اخل سرورتون از ما حمایت کنید",
    execute : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle('Invite Link')
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=836580294102351903&permissions=8&scope=bot`)
        .setColor('RANDOM')
        .setFooter(`Developer Bot ꗈ 𝐒𝐚𝐛𝐫𝐢𝐞𝐥 𝐖𝐨𝐧𝐝𝐞𝐫#1400`)
        .setThumbnail('')
        .setTimestamp()
        message.channel.send(embed)
    }
}