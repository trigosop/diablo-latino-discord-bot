const Discord = require('discord.js');
require('dotenv').config();

const commandHandler = require('./commands');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('BOT READY 🤖!');
});

client.on('message', commandHandler);

client.on('guildMemberAdd', async (member) => {
  await member.send(
    '¡Bienvenid@ a Diablo Latino! Hacé click en el canal #⭐-elige-tu-clase para poder participar del server. Si jugás con varios personajes, no te preocupes, puedes cambiar la clase todas las veces que quieras. Nos vemos en Santuario!'
  );
});

client.login(process.env.BOT_TOKEN);
