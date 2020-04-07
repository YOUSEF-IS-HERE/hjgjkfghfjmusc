const Discord = require('discord.js');

const client = new Discord.Client({disableEveryone: true});

const prefix = "$";
client.on("message",LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === "كيفك بخير") {
    LGD_GHASSAN.channel.send("تمام");
  }
});

client.on("message",LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === "تمام") {
    LGD_GHASSAN.channel.send("اش اخبارك");
  }
});
client.on("message",LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === "اش اخبارك") {
    LGD_GHASSAN.channel.send("كويس");
  }
});
client.on("message",LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === "كويس") {
    LGD_GHASSAN.channel.send("اكيد");
  }
});
client.on("message",LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === "اكيد") {
    LGD_GHASSAN.channel.send("ايوا");
  }
});
client.on("message",LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === "ايوا") {
    LGD_GHASSAN.channel.send("اوك");
  }
});
client.on("message",LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === "اوك") {
    LGD_GHASSAN.channel.send("كيفك بخير");
  }
});

client.on("message",LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === "$c") {
    LGD_GHASSAN.channel.send("#credit");
  }
});
client.on("message",LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === "$d") {
    LGD_GHASSAN.channel.send("#daily");
  }
});
client.login(process.env.BOT_TOKEN);
