const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let boobaGif = ['add gif shall go in array'];

module.exports = {
    data: new SlashCommandBuilder()
    .setName('booba')
    .setDescription('taihou will show ya randomly implemented oppai'),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = boobaGif[Math.floor(Math.random() * boobaGif.length)]
        const user = interaction.options.getUser('target');
        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} asked for lewds`)
        .setDescription('kono hentai **UwU**')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]/*ephemeral: true*/ })
    }
}
