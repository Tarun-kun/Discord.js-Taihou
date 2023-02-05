const { SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let coffeeGif = [
'https://media.tenor.com/nw_EqOT4_2YAAAAC/coffee-cafesv.gif',
'https://media.tenor.com/lJlLWprq07kAAAAC/coffee-anime.gif',
'https://media.tenor.com/JZNhKiO-G3AAAAAC/coffee-anime.gif',
'https://media.tenor.com/ZK4Go8otmSoAAAAC/coffee.gif'
];
module.exports = {
	data: new SlashCommandBuilder()
		.setName('coffee')
		.setDescription('Taihou will bring ya coffee with love :heart:'),
	async execute(interaction){
		let random = color[Math.floor(Math.random() * color.length)] ; 
        let randomImage = coffeeGif[Math.floor(Math.random() * coffeeGif.length)]
        const embed = new EmbedBuilder()
        .setTitle(`Coffee's here ${interaction.user.username} skk`)
        .setDescription(`**It's been prepared by yours truly ~:heart:**`)
        .setColor(random)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    },
};
