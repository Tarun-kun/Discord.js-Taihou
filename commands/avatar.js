const { SlashCommandBuilder , EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];

module.exports = {
	data: new SlashCommandBuilder()
	.setName("avatar")
    .setDescription("Returns a Goffy image of a spoiled boi/girl")
    .addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show')),
    async execute(interaction,client){
		let random = color[Math.floor(Math.random() * color.length)] ;
        const user = interaction.options.getUser('target');
        const embed = new EmbedBuilder()
        .setTitle(`Isn't this thing super cuddlable !!`)
        .setDescription('Avatar is being shown')
        .setColor(random)
        .setImage(user.displayAvatarURL())
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    },
};

//DONE