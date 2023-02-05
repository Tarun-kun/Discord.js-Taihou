const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('checkvibe')
		.setDescription('Vibe Check shall be committed !')
        .addUserOption(option => option.setName('target').setDescription('The user\'s vibe check time')),

	async execute(interaction) {
		const user = interaction.options.getUser('target');
        if (user) return interaction.reply(`**@${user.username}** is under vibe Check\nhttps://cdn.discordapp.com/attachments/675135507587530754/1064013609748942978/WEBM_-_Reimu_vibe_check.mp4`);
    },
};