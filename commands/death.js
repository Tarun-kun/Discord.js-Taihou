const { SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let dieGif = ['https://img3.gelbooru.com//images/b5/85/b58554e630f7b6139fd2680eec1d4283.gif',
'https://img3.gelbooru.com//images/89/af/89af04c411c9c6350859e24c75ef2ac8.gif',
'https://media.tenor.com/mV2LIwcx7nEAAAAC/kiznaiver-katsuhira-agata.gif',
'https://media.tenor.com/iU20sXcBKOAAAAAC/anime-die.gif',
'https://media.tenor.com/0Uf0-C5vSHMAAAAC/died-of-cringe-anime.gif']
let dieScript = ['is done with the world', '**hp: 0**','has love the game of life','is done', 'ended them self']
module.exports = {
	data: new SlashCommandBuilder()
		.setName('die')
		.setDescription(`You're about to be done`),
	async execute(interaction){
		let random = color[Math.floor(Math.random() * color.length)] ; 
        let randomImage = dieGif[Math.floor(Math.random() * dieGif.length)]
        let randomText = dieScript[Math.floor(Math.random() * dieScript.length)]
        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} ${randomText}`)
        .setDescription('**`Death is the end game ??`**')
        .setColor(random)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    },
};
