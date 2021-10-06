const { moama } = require('orpex') // Import Package

module.exports = { // bara handler khodeton change bedid
    name: 'moama',
    description: 'moama command',
    async execute(message) { 
        if(message.author.bot) return;
        if(message.channel.type === 'DM') return;

            const result = await moama(); gereftan etelaat
    
            return message.channel.send(`>>>  ${result.moama}`);
       
    }
}
