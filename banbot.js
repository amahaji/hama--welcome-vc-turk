//http://www.discordbotkodlari.online
const express = require('express');
const ayarlar = require('./ayarlar.json');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);
//////Const
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const client2 = new Discord.Client();
const client3 = new Discord.Client();


client.on("message", message => {
  if (!message.guild) return;
  if (message.content === "warn") {
    if (!message.author.id) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("باشە کاکە!");
        })
        .catch(console.log);
    } else {
      message.reply("");
    }
  }
});
client2.on("message", message => {
  if (!message.guild) return;
  if (message.content === "warn") {
    if (!message.author.id) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("باشە کاکە!");
        })
        .catch(console.log);
    } else {
      message.reply("");
    }
  }
});
client3.on("message", message => {
  if (!message.guild) return;
  if (message.content === "warn") {
    if (!message.author.id) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("باشە کاکە!");
        })
        .catch(console.log);
    } else {
      message.reply("");
    }
  }
});




///////Command
client.on('message', msg => {
  if (msg.content === 'test') {
    msg.delete()
  for (var i = 0; i < 1; i++) {
    msg.channel.send(' ✅')
}
}
});
client2.on('message', msg => {
  if (msg.content === 'test') {
    msg.delete()
  for (var i = 0; i < 1; i++) {
    msg.channel.send(' ✅')
}
}
});
client3.on('message', msg => {
  if (msg.content === 'test') {
    msg.delete()
  for (var i = 0; i < 1; i++) {
    msg.channel.send(' ✅')
}
}
});

 


///////Playing


///////Spam
client.on('message', msg => {
  if (msg.content === 'sp') {
    msg.delete()
  for (var i = 0; i < 1000; i++) {
    msg.channel.send('AWDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDAWDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDAWDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDAWDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDAWDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDAWDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD')
}
}
});
client2.on('message', msg => {
  if (msg.content === 'sp') {
    msg.delete()
  for (var i = 0; i < 1000; i++) {
    msg.channel.send('AWDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDAWDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDAWDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDAWDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDAWDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDAWDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD')
}
}
});
client3.on('message', msg => {
  if (msg.content === 'sp') {
    msg.delete()
  for (var i = 0; i < 1000; i++) {
    msg.channel.send('AWDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDAWDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDAWDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDAWDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDAWDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDAWDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD')
}
}
});


client.login("OTY1NjYzMTg1Nzc4NjcxNjE2.Ynf9oA.eKZHnrqj7vS431GlE5YK0ZGNF1U");///KSD symbols
client2.login("OTY1NjgxNzQyNzIxNzM2NzY1.GjnXdQ.g51M2Chfz1oGFRDYUVaPhJ8f60qS65degX2evk"); /// Kurdnine000
client3.login("OTM4NDkxMzA3MTYzMjc1MzI0.Yl_iVw.vLT-LBdQPubTErr1-p6wZhqtLxk"); ///Kurdnine00