const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let runGif = ['https://media.tenor.com/WSkFy00zxVQAAAAC/seseren01-akairo.gif','https://media.tenor.com/p6SIARawkmgAAAAC/edward-elric-fma.gif','https://media.tenor.com/lvBkK1Ptlm0AAAAC/destiny-anime-run.gif','https://media.tenor.com/Z6pftzdt9VkAAAAC/fate-fate-heavens-feel.gif','https://media.tenor.com/2pmJeOFOkNsAAAAC/edens-zero-runs.gif','https://media.tenor.com/DLVQ3gxoGicAAAAC/jujustroll-anime.gif','https://media.tenor.com/Vuu21qfS4wcAAAAC/maki-natsuo-love-lab.gif',
'https://safebooru.org//images/1894/0f29e399bb83f43adf1757d20e1a0f111bd8bcd1.gif?1976427',
'https://safebooru.org//images/3218/7b1e2dcb54a2400ddb29505de1e9ee5beee52921.gif?3346418']

module.exports = {
    data: new SlashCommandBuilder()
    .setName('run')
    .setDescription('legs are ready ~!'),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = runGif[Math.floor(Math.random() * runGif.length)]
        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} RAN AWAY`)
        .setDescription('YOU`LL NEVER CATCH ME weeee~')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}