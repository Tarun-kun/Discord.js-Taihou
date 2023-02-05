const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let assSlapGif = ['add gifs here'];

module.exports = {
    data: new SlashCommandBuilder()
    .setName('buttslap')
    .setDescription('slap someone HARD')
    .addUserOption(option=>
        option.setName('target')
        .setDescription('one to be slapped')
    ),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = assSlapGif[Math.floor(Math.random() * assSlapGif.length)]
        const user = interaction.options.getUser('target');
        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} has Slapped ${user.username}`)
        .setDescription('Target got slapped')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}
