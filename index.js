const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTI3MjIzMTUwNjQxNTY1NzA2.YdHF2g.W5PNu_EgHEqy_-Mhjt7clIiGk4g"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on("messageCreate", (message) => {
    if (message.content == "Salut"){
        message.reply("La ferme")
    }
})

client.login(process.env.TOKEN)