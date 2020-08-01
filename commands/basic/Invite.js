const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!message.guild) return;

        let lien = language("INVITE").split(' ');

        const embed = new Discord.MessageEmbed()
            .setTitle("Rox • Invite")
            .addField("Invitation", `Click [${lien[0]}](https://discordapp.com/oauth2/authorize?client_id=733760070503890994&scope=bot&permissions=8) ${lien.slice(1).join(' ')}`)
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setFooter('Rox • ' + msg.version,client.user.avatarURL())

        message.channel.send(embed)

}

exports.help = {
    name: "invite",
}