// read settings
var PropertiesReader = require("properties-reader");
var properties;
try {
    properties = PropertiesReader("trollbot.properties");
} catch (err) {
    console.log("You need a trollbot.properties file in the application folder. Try copying the example from https://github.com/Starwort/trollbot-for-discord/");
    process.exit(1);
}
// to interact with Discord
const Discord = require("discord.js");
// to interact with filesystem
var fs = require("fs");
// for uuid generation
var uuid = require("uuid-random");
// initialise the bot
const bot = new Discord.Client();
// prepare login
const token = properties.get("token");
if (!token) {
    console.log("trollbot.properties is missing a 'token=[Your bot's token]' line. Check the README for help.");
    process.exit(1);
};
// find owner's ID
var ownerID = properties.get("ownerID");
// retrieve the prefix for the bot's commands
var prefix = properties.get("prefix");
if (!prefix) {
    console.log("Prefix not found in config file, adding it now");
    properties.set("prefix", "!");
    prefix = "!";
};
var annoy;
try {
    annoy = require("./annoylist.json");
} catch (err) {
    console.log(err);
    annoy = {};
}
var pass;
bot.on("ready", () => {
    console.log(" -- BOT LOADED -- ");
    if (!ownerID) {
        pass = uuid();
        console.log("No owner UID defined in trollbot.properties. You can register the bot to you by typing '"+prefix+"owner "+pass+"'");
    }
});
function indexOf(needle) {
    var i = -1, index = -1;
    for(i = 0; i < this.length; i++) {
        var item = this[i];
        if((needle !== needle && item !== item) || item === needle) {
            index = i;
            break;
        }
    }
    return index;
}
bot.on("message", msg => {
     if (msg.content.startsWith(prefix) && msg.content.length > 1) {
        var content = msg.content.split(" ")[0].substring(1);
        if (content == annoy) {
            if (message.author.id == ownerID || !ownerID) {
                var mentions = Array.from(msg.content.mentions.users.values());
                for (var i = 0; i < mentions.length; i ++) {
                var index = indexOf.call(annoy, mentions[i]);
                    if (annoy.includes(mentions[i])) {
                        
                
            
    
