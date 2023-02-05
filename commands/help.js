const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let bonkGif = []

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Taihou will help you **UwU**'),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} has asked for help :3`)
        .setDescription('Taihou has presented ya document')
        .setColor(randomColor)
        .setImage()
        .addFields([
            {
                name: `Actions :hugging:`,
                value: '`8ball`,`neko`,`avatar`,`bonk`,`coffee`,`kick`,`lemon`,`pat`,`kiss`,`ping`,`run`,`scared`,`server`,`shoot`,`slap`,`smug`,`thinking`,`user`,`embed`,`vibecheck`',
                inline: true
            },
            {
                name: `NSFW :smirk_cat:`,
                value: '`ass`,`booba`,`buttslap`,`fuck`,`gyaru`,`tkiss`,`what`',
                inline: false
            },
            {
                name: `Special :heart:`,
                value: '`taihou`',
                inline: true
            }
        ])
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}