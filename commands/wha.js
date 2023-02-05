const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let whatGif = ['add gifs here']

module.exports = {
    data: new SlashCommandBuilder()
    .setName('what')
    .setDescription('what the internet! `[Warning]: NSFW`'),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = whatGif[Math.floor(Math.random() * whatGif.length)]
        const user = interaction.options.getUser('target');
        const embed = new EmbedBuilder()
        .setTitle(`**OK, what was that ??**`)
        .setDescription('hmm ~~ this was SuS')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}
