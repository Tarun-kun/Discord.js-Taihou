const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let cuddleGif = [
'https://media.discordapp.net/attachments/879697599068774411/901496438394093618/image0-1.gif',
'https://media.tenor.com/BZQz_9lnNEIAAAAC/vermeil-in-gold-anime-hug.gif',
'https://media.tenor.com/-9mPQfULBdAAAAAC/anime-hug.gif',
'https://media.tenor.com/oDGYXy0mwYMAAAAC/loli-hug.gif',
'https://media.tenor.com/3JhgCdprym8AAAAC/kakegurui-yumeko-jabami.gif',
'https://media.tenor.com/DQLvs_3NTkYAAAAC/establife-anime-hug.gif',
'https://media.tenor.com/rL-Y22ZfZxgAAAAC/foxplushy-foxy.gif',
'https://media.tenor.com/RsvLK_zsTkUAAAAC/anime-cute.gif',
'https://media.tenor.com/jSr41Jz0CQYAAAAC/anime-hug-anime-girls.gif',
'https://safebooru.org//images/1316/eb4c6e095583b19f69930422b439e77e04c415ed.gif?1369595',
'https://media.tenor.com/G_IvONY8EFgAAAAC/aharen-san-anime-hug.gif',
'https://img3.gelbooru.com//images/1b/3c/1b3cb88d3d127b569cfcca1f27d3f89b.gif',
'https://safebooru.org//images/1911/df5565531e5d92fd1861a77586e436835e1cb46d.gif?1993130',
'https://safebooru.org//images/1889/d0d3225e8bb6ea984af143f19875f1aba0b9a883.gif?1971087',
'https://safebooru.org//images/1862/5d57a6c5263488c1294bcf36cdb7f75347220583.gif?1944176',
'https://safebooru.org//images/1877/f6a72e5ec46a60b0727d96b5d554e2d43812defd.gif?1959739',
'https://safebooru.org//images/1879/2452b46ef057fea940cdd8f138dcc97e04274318.gif?1961478'
];

module.exports = {
    data: new SlashCommandBuilder()
    .setName('hug')
    .setDescription('target will be embrassed')
    .addUserOption(option =>
        option.setName('target')
        .setDescription("this being is about to be embrassed")
        ),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = cuddleGif[Math.floor(Math.random() * cuddleGif.length)]
        const user = interaction.options.getUser('target');
        const embed = new EmbedBuilder()
        .setTitle(`${user.username} has been hugged`)
        .setDescription('Target has been embrassed `lets move on`')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}