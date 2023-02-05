const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let smugGif = ['https://safebooru.org//images/3020/590fe2622ea815b246d22fa31382bbc1.gif?4249949',
'https://safebooru.org//images/4067/c55097ac7572653ede0f474b86f644fd.gif?4249703',
'https://safebooru.org//images/4050/d68fe1c9e2a78069141b9dcf4bd3f89f.gif?4231494',
'https://safebooru.org//images/3282/3f2602316c7170174b25582633b0ba4d86e86fbe.gif?3412817',
'https://safebooru.org//images/3671/e13e989d1ef51647f671fe6282a541fc4dc200e4.gif',
'https://safebooru.org//images/3475/f9dc9d8fab6e3f0121a42ef7250c81fd.gif?4249928',
'https://safebooru.org//images/4067/a8a1a6b018f066435f0bc9a02b403f75.gif?4249820',
'https://safebooru.org//images/1894/c54931a00160972839f67f55d6300ee5d5744eab.gif?1976882',
'https://img3.gelbooru.com//images/b5/9e/b59efd4da0e1a66f1757d332926d94f7.gif',
'https://img3.gelbooru.com//images/b9/50/b9505341220f22fbc628b6e713271895.gif',
'https://img3.gelbooru.com//images/c5/d0/c5d0310707aafc451e5a2fc10a617fdf.gif']

module.exports = {
    data: new SlashCommandBuilder()
    .setName('smug')
    .setDescription('This command is to look sumggy'),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = smugGif[Math.floor(Math.random() * smugGif.length)]
        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} is Smugging menacingly `)
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}