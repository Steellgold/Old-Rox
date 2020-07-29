const { client, colors, botConfg, fs, database, msg} = require("../../rox");

client.on("message", message => {
    if (!message.guild) return;
    if (message.author.bot) return;

    let sql = `SELECT * FROM servers WHERE guildid = ${message.guild.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }

        const prefix = results[0].prefix
        const dataServer = results[0];

        const language = require('../../database/lang/' + dataServer.lang)

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const cmd = client.commands.get(command);

        database.query(`SELECT * FROM blacklist WHERE userid=${message.author.id}`, function (error, results, fields) {
            if (error) {
                return false;
            } else if (results.length > 0) {
                return message.channel.send("Vous êtes blacklist du bot CHEH") // Message a edit via en.js
            } else {
                if (!message.member.roles.cache.find(role => role.name === 'MUTE')) {
                    if (!cmd) {
                        let sql = `SELECT * FROM servers WHERE guildid = ${message.guild.id}`;
                        database.query(`SELECT * FROM servers WHERE guildid = ${message.guild.id}`, (error, results, fields) => {
                            if (error) {
                                return console.error(error.message);
                            }

                            if (results[0].sysXp === 1) {
                                database.query(`SELECT * FROM servers_xp WHERE guildid = ${message.guild.id} AND userid = ${message.author.id}`, (error, resultsXp, fields) => {
                                    if (error) {
                                        return console.error(error.message);
                                    }

                                    let MaxXp = resultsXp[0].level * 150 + resultsXp[0].level * 35

                                    if (resultsXp[0].xp >= MaxXp) {
                                        const toAddLvl = resultsXp[0].level;
                                        let sqladdlvl = `UPDATE servers_xp SET level=${toAddLvl} + 1 WHERE userid = ${message.author.id} AND guildid = ${message.guild.id}`
                                        database.query(sqladdlvl);

                                        msg.sendMsgA(results[0].levelUpMsg.allReplace({
                                            "{mention}": "<@" + message.author.id + ">",
                                            "{username}": message.author.name,
                                            "{guildName}": message.guild.name,
                                            "{level}": resultsXp[0].level + 1
                                        }), message)
                                    }

                                    const toAdd = resultsXp[0].xp;
                                    let sqladd = `UPDATE servers_xp SET xp=${toAdd} + 1 WHERE userid = ${message.author.id} AND guildid = ${message.guild.id}`
                                    database.query(sqladd);
                                });
                            }
                        });
                    } else {

                        if (message.content.indexOf(prefix) !== 0) return;

                        switch (cmd.help.type) {

                            default:
                                cmd.run(client, message, args, fs, colors, database, dataServer, language);
                                break;
                        }
                    }
                } else {
                    message.delete();
                }
            }
        });
    });
});


String.prototype.allReplace = function (obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};