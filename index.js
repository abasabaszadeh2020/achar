const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const db = require("quick.db")
const { MessageEmbed} = require('discord.js')
const client = new Client({
    disableEveryone: true
})
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    }
    else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}
client.on('ready', () => {
    console.log("Bot system is online.")
    console.log(`${client.user.tag} is online.`)
    client.user.setStatus("ONLINE");
    setInterval(function(){
        client.user.setActivity(`${prefix}help | ${client.guilds.cache.size} Servers 🚀 `), { type: "LISTENING" }
        client.user.setActivity(`Version 1.0.1 💾 `, { type: "PLAYING" })
},6000)
client.on('message', async(message) => {
    if(message.content === '!calculator'){
       const { Calculator } = require('weky')
       await Calculator(message)
    }
})

client.on("guildCreate", (guildjoined) => {   
    const ordakserver = client.guilds.cache.get("788432726922625074");
    const channelserver = ordakserver.channels.cache.get('845532171628052480')
    if(guildjoined.name.includes('@'))return
    channelserver.send(`**Achar Bot INVITED **
        Server Name : **${guildjoined.name}**
        Server Owner: <@!${guildjoined.ownerID}> 
        `)
        client.user.setPresence({
        activity: {
          name: `?help | ${client.guilds.cache.size} Server! `,
          type: 0,
        },
      })

    });

  

})

client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.execute(client, message, args) 
})

client.login(token)
