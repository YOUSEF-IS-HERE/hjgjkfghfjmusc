const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Phoneix's Bot`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {
    if (message.content === 'حمودي') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/519940850122489856/762222464372965376/Screenshot_89.png")
    }
});
client.on('message', message => {
    if (message.content === 'زعلان') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/519940850122489856/762229348584521728/Screenshot_189.png")
    }
});
client.on('message', message => {
    if (message.content === 'قودزيلا') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/519940850122489856/762229587521437706/Screenshot_188.png")
    }
});
client.on('message', message => {
    if (message.content === 'سعودي') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/519940850122489856/762230503226343444/Screenshot_26.png")
    }
});
client.on('message', message => {
    if (message.content === 'مارد') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/759673970223480832/762202006017278002/kljjkljkl.png")
    }
});
client.on('message', message => {
    if (message.content === 'صعوطي') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/661101649238163487/762232089785008158/1600328461557.png")
    }
});
client.on('message', message => {
    if (message.content === 'مركز') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/661101649238163487/761211962910179369/2020-10-01_160235.png")
    }
});
client.on('message', message => {
    if (message.content === 'السلام عليكم') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/661101649238163487/762233908540080158/Screenshot_132.png")
    }
});
client.on('message', message => {
    if (message.content === 'سوداني') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/732286802320425083/761173308757901353/unknown.png")
    }
});
client.on('message', message => {
    if (message.content === 'واحد كب كيك') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/764227981668384800/768792356639997972/besso4.PNG")
    }
});
client.on('message', message => {
    if (message.content === 'بعوص') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/764227981668384800/768791782653165618/besso3.PNG")
    }
});
client.on('message', message => {
    if (message.content === 'واحد تحميله') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/764227981668384800/768794640002318346/t7mela.PNG")
    }
});
client.on('message', message => {
    if (message.content === 'بكوري') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/764227981668384800/768792929476411412/bkory.PNG")
    }
});
client.on('message', message => {
    if (message.content === 'معجون سنسوداين') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/764227981668384800/768795372273270784/kobh.PNG")
    }
});
client.on('message', message => {
    if (message.content === 'زول') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/574361533816111104/770535901272473600/8fcc9f4d2cd5affc.png")
    }
});

client.login(process.env.BOT_TOKEN);
