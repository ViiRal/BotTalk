// Copy this file to config.js and fill in the values

var config = {};

config.global = {};
config.fight = {};
config.talk = {};

// GLOBAL SETTINGS:

// Cleverbot.io API authentication (get from: https://cleverbot.io/keys)
config.global.cleverbot = {};
config.global.cleverbot.apiUser = "";
config.global.cleverbot.apiKey = "";

// FIGHT SETTINGS:

// Greeting: what to start the fight off with
config.fight.greeting = "Do you wanna fucking fight?";
// Bot status: what game should the bots be "playing"
config.fight.botStatus = "FUCKING FIGHTING";
// Guild ID: the ID of the "guild" or "server" you want the fight to take place in
config.fight.guildID = "";
// Channel ID: ID of channel to fight in
config.fight.channelID = "";

config.fight.bot1 = {};
config.fight.bot2 = {};

// Discord tokens for bot accounts (follow the instructions here to get a bot account: https://twentysix26.github.io/Red-Docs/red_guide_bot_accounts/)
config.fight.bot1.discordToken = "";
config.fight.bot2.discordToken = "";

// Name: nickname to set on script start
config.fight.bot1.name = "AppleBwetas";
config.fight.bot2.name = "nullpwixel";

// Avatar URL: URL of avatar to set on start
config.fight.bot1.avatarURL = "https://cdn.discordapp.com/avatars/207194778906001408/889cea93e4b2183d62ebd4726b05b8fb.png";
config.fight.bot2.avatarURL = "https://cdn.discordapp.com/avatars/140527820500762624/d9892bcc8c15c211c955228606bc2917.jpg";

// TALK SETTINGS:

// Bot status: what game should the bot be "playing"
config.talk.botStatus = "chat with you!";
// Guild ID: the ID of the "guild" or "server" you want the bot to talk in
config.talk.guildID = "";
// Channel ID: ID of channel to talk in
config.talk.channelID = "";

config.talk.bot = {};

// Discord tokens for bot accounts (follow the instructions here to get a bot account: https://twentysix26.github.io/Red-Docs/red_guide_bot_accounts/)
config.talk.bot.discordToken = "";

// Name: nickname to set on script start
config.talk.bot.name = "CloneClwasher";

// Avatar URL: URL of avatar to set on start
config.talk.bot.avatarURL = "https://cdn.discordapp.com/avatars/203110586668679169/c7e15f0d96fcc6a29241164a213c1b50.jpg";

module.exports = config;