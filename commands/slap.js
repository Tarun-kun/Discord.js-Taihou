const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let slapGif = [
'https://img3.gelbooru.com//images/3e/81/3e81f7edc7e4bd952d90ea5f6dd552db.gif',
'https://img3.gelbooru.com//images/0f/4b/0f4b5eb023c7aec3639cff19f912e13a.gif',
'https://img3.gelbooru.com//images/71/8f/718ff55e1e79b3c843358d4a26ff7d03.gif',
'https://img3.gelbooru.com//images/46/59/46591c5744a172d487cffccefcb806d0.gif',
'https://img3.gelbooru.com//images/fc/e1/fce12d3716f05d56549cc5e05eed5a50.gif',
'https://img3.gelbooru.com//images/45/a3/45a39494e4cf25f96e66e89a60c8cf8d.gif',
'https://img3.gelbooru.com//images/9c/e0/9ce0602575926ab3199c2183de1a976b.gif',
'https://img3.gelbooru.com//images/5d/d6/5dd61e5bd08201edb7d47b361ac4f3bf.gif',
'https://img3.gelbooru.com//images/88/1a/881a9001b6b60ab3a2c9e289da3bea22.gif',
'https://img3.gelbooru.com//images/f8/8c/f88c26fb9e9d8e3026d224cd8d882bb0.gif',
'https://img3.gelbooru.com//images/9c/16/9c16dad7aa332456055899a471d973c9.gif',
'https://img3.gelbooru.com/images/33/4b/334bc9cd524d61784c9ad9dbd0a88ea1.gif'
]

module.exports = {
    data: new SlashCommandBuilder()
    .setName('slap')
    .setDescription('Target has to be slapped')
    .addUserOption(option =>
        option.setName('target')
        .setDescription('One to be slap')
     ),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = slapGif[Math.floor(Math.random() * slapGif.length)]
        const user = interaction.options.getUser('target');
        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} has slapped ${user.username}`)
        .setDescription('`yup~ someone wasnt behaving nicely`')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}