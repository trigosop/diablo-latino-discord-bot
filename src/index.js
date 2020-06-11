const Discord = require('discord.js');
require('dotenv').config();
const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.write('hey!');
    res.end();
  })
  .listen(process.env.PORT || 80);

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.once('ready', () => {
  console.log('BOT READY 🤖!');
});

client.on('guildMemberAdd', async (member) => {
  await member.send(
    '¡Bienvenid@ a Diablo Latino! Hacé click en el canal #⭐-elige-tu-clase para poder participar del server. Si jugás con varios personajes, no te preocupes, puedes cambiar la clase todas las veces que quieras. Nos vemos en Santuario!'
  );
});

// const commandHandler = require('./commands');
// client.on('message', commandHandler);
