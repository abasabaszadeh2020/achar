const Discord = require('discord.js');
module.exports = {
	name: 'unbanall',
	description: 'Ping!',
    execute(client, message, args) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
                message.guild.fetchBans().then(bans => {
                    if (bans.size == 0) {message.channel.send("There are no banned users."); throw "No members to unban."};
                    bans.forEach(ban => {
                        message.guild.members.unban(ban.user.id);
                    });
                }).then(() => message.channel.send("Unbanned all users.")).catch(e => console.log(e))
            } else {message.channel.send("You do not have enough permissions for this command.")}
	},
};
