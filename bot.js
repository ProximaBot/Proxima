const Discord = require('discord.js');
const client = new Discord.Client();
var version = '1.2.7'
client.on('ready', () => {
  let statuses = [
    `https://www.twitch.tv/jbmagination | n!help`,
    `a small ${client.users.size} users! | n!help`,
    `all I want for christmas is a custom status | n!help`,
    `you read this for some reason super dooper ultra extra super much extended status message | n!help`,
    `01010001 01001110 01100111 00111001 01110010 01110111 00110100 | n!help`,
    `all the typos in this server | n!help `,
    `to make sure you\'re having a good day | n!help`,
    `the Cacti | n!help`,
    `large egg | n!help`,
    `just 1 server! | n!help`,
    `nothing | n!help`,
    `you type in this server | n!help`,
    `the solar system | n!help`,
    `you read these status messages | n!help`,
    `Discord | n!help`,
    `@egg#1000 add random stuff to my code | n!help`,
    `@JBMagination#5512 code me | n!help`,
    `you click to read this extended status message | n!help`,
    `\${status_message} | n!help`,
    `our favorite planet revolve around the sun | n!help`,
    `and pleading for you to boost the server | n!help`,
    ` `,
    `Google Chrome`,
    ` | n!help `,
    `you | n!help `,
    `the other bots plead to be at my glory | n!help`,
    `COPPA kill YouTube | n!help`,
    `the clock, waiting for 1645568542 | n!help`,
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
  if(message.author.bot) return;
  else if (message.channel.type == "dm") {
    let messages = [
      `hi`,
      `hey this isn't google`,
      `hello`,
      `you suck`,
      `large egg`,
      `now thats what i call a bruh moment`,
      `hope you're having a nice day`,
      `what?`,
      `noted`,
      `oh`,
      `ok`,
      `psst... i'm not a real person`,
      `:warning: You require an IQ of 200 or higher to talk to Proxima`,
      `01010001 01001110 01100111 00111001 01110010 01110111 00110100`,
      `Not funny; didn't laugh`,
      `Was funny; did laugh`,
      `who are you`,
      `i feel like i've been asked this before`,
      `1645568542`,
      `1577836800`,
      `fantastic`,
      `why are you talking to a robot`,
      `I'm sorry, but you do not have permission to perform this command. Please contact the server administrators if you believe that this is an error.`,
      `please dont dm me im scared`,
      `pizza time`,
      `HONEY IM ON THE PHONE`,
      `not right now son`,
      `would you look at the time`,
      `...said the moron`,
      `i love talking with you`,
      `yoo it smell like broke in here`,
      `oof`,
      `affirmative`,
      `help`,
      `i dont speak broke`,
      `¯\\_(ツ)_/¯`,
      `why are you talking to a robot`,
      `did i mention that im vegan?`,
      `im scared`,
      `<:bot:649884329174106122>`,
      `bruh moment`,
      `bruh momento`,
      `<:fluashed:642193080295882773>`,
      `<:NeptuneCurrency:641150181655445532>`,
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
      `_ _`,
      `goodbye`,
      `bye`,
      `eggs dee`,
      `ecks dee`,
      `xD`,
      `xd`,
      `egg`,
      `you should be glad i cant block you. like i literally cant im a bot`,
      `you should talk to a therapist`,
      `i agree`,
      `i don't agree`,
      `what's wrong with you`,
      `${message.author}`,
      `are you braindead`,
      `do you are has stupid`,
      `i love you`,
      `i hate you`,
      `beep boop`,
      `whos joe`,
      `joe mama`,
      `<@!381862688298631168>`,
      `<@!521458738981502987>`,
      `Hi! This was randomly picked out of all 64 messages. Please read.

You see, YouTube is going to die unless we contact the FTC. You probably already know, but COPPA is going to kill YouTube.

I won't go into details why, but please, look into it. If you feel that it's a big deal, please contact the FTC now: https://www.regulations.gov/document?D=FTC-2019-0054-0001`,
      ];
     let response = messages[Math.floor(Math.random() * messages.length)];
    message.author.send(response);
  }
else if (message.content.startsWith("<@648213854798479380>")) {
    message.channel.send(new Discord.RichEmbed()
                      .setColor('#8ab9f8')
                      .addField('Hi there! I\'m Proxima, a special helper for the Neptune server!','If you\'d to know more, DM <@381862688298631168> or use `n!help` for a list of commands!')
                      .setTimestamp()
                      .setFooter(version + ` | n!help`)
 )}
 else if (message.content === ("n!help")) {
   message.channel.send(new Discord.RichEmbed()
                       .setColor('#8ab9f8')
                       .addField('n!admin','Check if you have admin permissions.')
                       .addField('n!avatar','Gives you a link and display of your avatar.')
                       .setTimestamp()
                       .setFooter(version + ` | n!help`)
                     )}
  else if (message.content === ("n!avatar")) {
    message.reply(message.author.avatarURL);
  }
 else if (message.content === ("n!admin")) {
 if(message.member.roles.some(r=>["Admin", "Co-Owner", "Temp Owner", "Owner"].includes(r.name)) ) {
  message.channel.send("You **do** have admin permissions!")
 } else
  message.channel.send("You **don't** have admin permissions!")
} else if (message.content === ("n!slowmode")) {
   if(message.member.roles.some(r=>["Admin", "Co-Owner", "Temp Owner", "Owner"].includes(r.name)) ) {
     let duration = args[1]
     if(!args[1]) return message.channel.send(new Discord.RichEmbed()
                         .setColor('#1634F0')
                         .addField('Error!','You didn\'t put in an argument! Please specify a number in seconds.')
                         .setTimestamp()
                         .setFooter(version + ` | n!help`)
                       )} else
    message.channel.send("You **don't** have permission to run this command!")
   }
  })
client.login(process.env.BOT_TOKEN);
