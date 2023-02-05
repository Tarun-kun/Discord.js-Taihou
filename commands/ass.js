const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let assGif = ['all the gif shall go in this array'];

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ass')
    .setDescription('String you like'),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = assGif[Math.floor(Math.random() * assGif.length)]
        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} asked for a A$$`)
        .setDescription('Target got killed by A$$')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}
