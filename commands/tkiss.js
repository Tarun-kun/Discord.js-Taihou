const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let kiss = ['add gif here']

module.exports = {
    data: new SlashCommandBuilder()
    .setName('tkiss')
    .setDescription('do a naughty kiss ~')
    .addUserOption(option =>
        option.setName('target')
        .setDescription("this being is about to be kissed")
        ),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
	let randomImage = kiss[Math.floor(Math.random() * kiss.length)]
        const user = interaction.options.getUser('target');
        const embed = new EmbedBuilder()
        .setTitle(`${user.username} has been spoiled by ${interaction.user.username} with`+':kiss:')
        .setDescription('Target got kissed `lets move on`')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}
