const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const embed = new EmbedBuilder();
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];

module.exports = {
	data: new SlashCommandBuilder()
	.setName("ping")
	.setDescription("This will do a Latency test"),
	async execute(interaction) {
		let random = color[Math.floor(Math.random() * color.length)] ;
			const embed = new EmbedBuilder()
			.setTitle(`🏓 PONG!`)
			.setDescription(' Latency is:')
			.setDescription(`**${(Date.now() - interaction.createdTimestamp)*(-1)}ms.**`)
			.setColor(random)
			await interaction.reply({embeds: [embed]})
		},
};