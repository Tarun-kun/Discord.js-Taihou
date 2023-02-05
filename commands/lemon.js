
const { SlashCommandBuilder , EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let lemonImages = ['https://media.discordapp.net/attachments/630553822036623370/1009843028317450280/ess_azurlane220818.gif',
'https://cdn.discordapp.com/attachments/709448812795658261/1005476518635524186/SPOILER_unknown-12.png','https://cdn.discordapp.com/attachments/968498862144770058/998613155716530176/unknown.png',
'https://media.discordapp.net/attachments/1008049783144988816/1038482755958362162/optimized_remon_snowman.gif',
'https://cdn.discordapp.com/attachments/968498862144770058/1051478637511192728/test_1.gif',
'https://safebooru.org//images/3805/73eefce966a6398dfd80639218ec416d.gif?4250498',
'https://safebooru.org//images/4047/18bc1c3aae2120488da0134f6b9fa64c.gif?4228721',
'https://cdn.discordapp.com/attachments/321284961921531905/869199414743425054/Ezex.gif']
module.exports = {
	data: new SlashCommandBuilder()
	.setName("lemon")
    .setDescription("Lemons will be provided")
    .addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show')),
    async execute(interaction,client){
		let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = lemonImages[Math.floor(Math.random() * lemonImages.length)] ;
        const user = interaction.options.getUser('target');
        const embed = new EmbedBuilder()
        .setTitle(`${user.username} has been Lemoned`)
        .setDescription('Target got lemoned **HARD**')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    },
};
//add more data to lemon iamges