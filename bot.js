const Discord = require('discord.js');
const client = new Discord.Client();
var version = '1.1.1'
var catchphrase = 'Harro! s!help'
var footer = version + ' | ' + catchphrase
client.on('ready', () => {
  let statuses = [
    `https://www.twitch.tv/jbmagination | n!help`,
    `a small ${client.users.size} users! | n!help`,
    `just ${client.guilds.size} server! | n!help`,
    `you type in this server | n!help`,
    `the solar system | n!help`,
    `you read these status messages | n!help`,
    `Discord | n!help`,
    `@JBMagination#5512 code me | n!help`,
    `you click to read this extended status message | n!help`,
    `\${status_message} | n!help`,
    `our favorite planet revolve around the sun | n!help`,
    `and pleading for you to boost the server | n!help`,
    ` `,
    ` | n!help `,
    `you | n!help `,
    `the other bots plead to be at my glory | n!help`,
    `COPPA kill YouTube | n!help`,
    `the clock, waiting for 1577836800 | n!help`,
    `the universe | n!help`,
    `the stars and satellites | n!help`,
    `the planets | n!help`,
  ];
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`you find the elusive launch message. Congratulations!`, { type: 'WATCHING', status: 'online' });
  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, { type: 'WATCHING', status: 'online' });
  }, 20000);
});
client.on('message', message => {
  if (message.channel.type == "dm") {
    let messages = [
      `hi`,
      `hello`,
      `you suck`,
      `bruh moment`,
      `bruh momento`,
      `:NeptuneCurrency:`,
      `you suck`,
      `please don't DM me ever again`,
      `don't think that's gonna happen`,
      `why are you here`,
      `just go back to Neptune, let me help you there omg`,
      `there ya go, just click the little x next to my name`,
      `there ya go, just close that dm with that Proxima dude`,
      `have you heard of ACTUALLY TALKING IN THE SERVER I BELONG IN`,
      `dude... stop...`,
      `lol`,
      `ez`,
      `no`,
      `yes`,
      `yeah`,
      `nope`,
      `  `,
      `goodbye`,
      `bye`,
      `eggs dee`,
      `ecks dee`,
      `xD`,
      `xd`,
      `egg`
      ];
     let response = messages[Math.floor(Math.random() * messages.length)];
    message.author.send(response);
  }
else if (message.content.startsWith("<@648213854798479380>")) {
    message.channel.send(new Discord.RichEmbed()
                      .setColor('#29752f')
                      .addField('Hi there! I\'m Proxima, a special helper for the Neptune server!','If you\'d to know more, DM <@381862688298631168> or use `n!help` for a list of commands.')
                      .setTimestamp()
                      .setFooter(version + ` | n!help`)
 )}
else if (message.content === ("n!help")) {
  message.channel.send(new Discord.RichEmbed()
                      .setColor('#1634F0')
                      .addField('Sorry, nothing yet!','Check back later when a new version is released!')
                      .setTimestamp()
                      .setFooter(version + ` | n!help`)
                    )}
})
client.login(process.env.BOT_TOKEN);
