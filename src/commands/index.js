const guildID = process.env.GUILD_ID;
const channelID = process.env.CHANNEL_ID;

const ping = require('./ping');

const commands = {
  ping,
};

module.exports = async (msg) => {
  console.log(msg.guild.id);
  console.log('======');

  if (msg.guild.id === guildID && msg.channel.id === channelID) {
    const args = msg.content.split(' ');
    if (args.length == 0 || args[0].charAt(0) !== '!') return;

    const command = args.shift().substr(1);
    if (Object.keys(commands).includes(command)) {
      await commands[command](msg, args);
    }
  }
};
