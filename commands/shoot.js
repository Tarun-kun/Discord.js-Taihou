const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let shootingGif = ['https://safebooru.org//images/3678/c042911013751e95cb3c1deac1563afe17f3a8b9.gif?3840785',
'https://safebooru.org//images/1893/bab6c6da0aced84689756f00a50bc3e9d24bab3e.gif?1975017',
'https://safebooru.org//images/1900/58811d4bcc4aea68e8a4a864cdb2a66cc20610a4.gif?1982310',
'https://safebooru.org//images/1890/b4a93d7bd6b78f4e926552812ce287164e4b72c5.gif?1972296',
'https://safebooru.org//images/1889/c806fe392e2aa84b873d1f813c099380b2322e7a.gif?1971132',
'https://safebooru.org//images/1880/a4709802f8b276c5fc6e1b009fc28a88a1de0f1c.gif?1962874',
'https://safebooru.org//images/1860/608343a4d81191cfd2c620e0adb79a9203dd14b5.gif?1942262',
'https://safebooru.org//images/1803/892d8b9a33cdcdf25a9d1a1c456377107a2b029b.gif?1885837',
'https://safebooru.org//images/1244/606cf69b9aa46cca6d91b213a4f8dfef14b82f0c.gif?1297495',
'https://safebooru.org//images/1900/bb431199b0b99f81f740250ac56dec4406c3c44c.gif?1982412',
'https://safebooru.org//images/1803/2d6669241aee6ea530838b35e2569b06cf67010f.gif?1885836',
'https://safebooru.org//images/1413/2e5f552d3a6210d9e5595d7054e657ae.gif?1480365',
'https://safebooru.org//images/1266/eb32a0096d959b0b6b3a5bd3c58b58ba245d887e.gif?1319884']

module.exports = {
    data: new SlashCommandBuilder()
    .setName('shoot')
    .setDescription('taihou shall shoot pest for ya~')
    .addUserOption(option=>
        option.setName('target')
        .setDescription('one to be destroyed')
    ),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = shootingGif[Math.floor(Math.random() * shootingGif.length)]
        const user = interaction.options.getUser('target');
        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} has shot ${user.username}`)
        .setDescription('`press "F" to pay respect`')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}