const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let poundGif = ['add gifs here']
let texts = ['banged','lewds','spoiled','ruined','enjoyed']
module.exports = {
    data: new SlashCommandBuilder()
    .setName('pound')
    .setDescription('Soo~~ ya wanna lewd someone huh~!')
    .addUserOption(option=>
        option.setName('target')
        .setDescription('one to be destroyed')
    ),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = poundGif[Math.floor(Math.random() * poundGif.length)]
		let randomText = texts[Math.floor(Math.random() * texts.length)]
        const user = interaction.options.getUser('target');
        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} has ${randomText} ${user.username}`)
        .setDescription('`yup~ that just happened`')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}
