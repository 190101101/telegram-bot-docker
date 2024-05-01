require("dotenv").config();
const { Telegraf } = require("telegraf");

const bot = new Telegraf('7145070219:AAFHIDa6G30aSp3eP0QTP16IG-AqPu6UC0g');

bot.start((ctx) => ctx.reply("hello its echo bot"));
bot.help((ctx) => ctx.reply("send any message and i will copy it"));

bot.on("message", (ctx) => {
  ctx.telegram.sendCopy(ctx.chat.id, ctx.message);
});

bot
  .launch()
  .then((res) => console.log("run"))
  .catch((error) => console.log(error));
