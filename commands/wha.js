const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let whatGif = ['https://safebooru.org//images/1885/6943162c129cf365a7a10287ace32a15e7c4c707.gif?1967531',
'https://safebooru.org//images/1626/57f4dd6eae9c43e2e9546ff4dbdd53c0f8abc75f.gif?1703289',
'https://safebooru.org//images/1792/980428ce32f8f93c37708726a91cfb6c41f0d395.gif?1874858',
'https://safebooru.org//images/1553/e1cb137cbaa0124ac8fdf52cbfa0e537be293eb8.gif?1626308',
'https://safebooru.org//images/1405/85a1be7f0316589c1d5ffeba22c8b6451e33fed0.gif?1471751',
'https://safebooru.org//images/1280/293e548cf158bcabd6d9b8bbaa7e707c12b66fc3.gif?1333492',
'https://img3.gelbooru.com//images/06/51/0651aa31a988fbe0bb6ec670f88ef4d4.gif',
'https://img3.gelbooru.com//images/34/b6/34b696e69153c4a41b32094cb1c47758.gif',
'https://img3.gelbooru.com//samples/f9/bc/sample_f9bc208a8ec459e52d86cc92bf6b1d38.jpg',
'https://img3.gelbooru.com//samples/ab/4f/sample_ab4f5845e29b466ce6c2d7522a10eb78.jpg',
'https://img3.gelbooru.com//samples/d0/90/sample_d09057c0a5086e419b58fd0aed4cea51.jpg',
'https://img3.gelbooru.com//images/81/11/81115a768094e720bbe09f11f2722cc2.png',
'https://img3.gelbooru.com//samples/c9/0f/sample_c90f5d552fc5238399283d445befc699.jpg']

module.exports = {
    data: new SlashCommandBuilder()
    .setName('what')
    .setDescription('what the internet! `[Warning]: NSFW`'),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = whatGif[Math.floor(Math.random() * whatGif.length)]
        const user = interaction.options.getUser('target');
        const embed = new EmbedBuilder()
        .setTitle(`**OK, what was that ??**`)
        .setDescription('hmm ~~ this was SuS')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}