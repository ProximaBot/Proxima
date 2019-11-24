const Discord = require('discord.js');
const client = new Discord.Client();
var version = '1.0.0'
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
    `our favorite planet travel around the sun | n!help`,
    `and pleading for you to boost the server | n!help`,
    ` `,
    ` | n!help `,
    `you | n!help `,
    `you play Splatoon | n!help`,
    `you play Splatoon 2 | n!help`,
    `you play ROBLOX | n!help`,
    `you play Minecraft | n!help`,
    `you play Mario Kart | n!help`,
    `you play Just Shapes and Beats | n!help`,
    `you play Tomodachi Life | n!help`,
    `the other bots plead to be at my glory | n!help`,
    `COPPA kill YouTube | n!help`,
    `Waiting for 1577836800 | n!help`,
  ];
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`you find the elusive launch message. Congratulations!`, { type: 'WATCHING', status: 'online' });
  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, { type: 'WATCHING', status: 'online' });
  }, 20000);

});
client.on('message', message => { 
if (message.content.startsWith("<@648213854798479380>")) {
    message.channel.send(new Discord.RichEmbed()
                      .setColor('#29752f')
                      .addField('Hi there! I\'m Proteus, a special helper for this server, Neptune!','If you\'d to know more, DM <@381862688298631168> or use `s!help` for a list of commands.')
                      .setTimestamp()
                      .setFooter(version | n!help)
 )}
else if (message.content.startsWith("n!")) {
if (message.content.startsWith("n!help")) {
message.channel.send(new Discord.RichEmbed()
                      .setColor('#1634F0')  
                      .addField('Sorry, nothing yet!','Check back later when a new version is released!')
                      .setTimestamp()
                      .setFooter(version)}
 else message.channel.send(new Discord.RichEmbed()
                      .setColor('#1634F0')  
                      .addField('Command not found','Use n!help!')
                      .setTimestamp()
                      .setFooter(version)
 )}
}
client.login(process.env.BOT_TOKEN);
