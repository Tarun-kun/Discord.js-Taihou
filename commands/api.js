const {request} = require('undici');
const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`neko`)
    .setDescription('cat will pop-in'),
    async execute(interaction){
		const catResult = await request('https://aws.random.cat/meow');
		const { file } = await catResult.body.json();
		interaction.reply({ files: [file] });
    }
}
