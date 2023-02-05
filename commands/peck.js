const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let kissGif = ['https://media.tenor.com/8JdJyDd1higAAAAC/kiss-cheek.gif',
'https://media.tenor.com/lYKyQXGYvBkAAAAC/oreshura-kiss.gif',
'https://media.tenor.com/Bw0OLA1NefUAAAAC/anime-chuunibyou.gif',
'https://media.tenor.com/3wE3JNW0fswAAAAC/anime-kiss-love.gif',
'https://media.tenor.com/TGM6MFK-ou8AAAAC/anime.gif',
'https://media.tenor.com/jEqmKqupnOwAAAAC/anime-kiss.gif',
'https://safebooru.org//images/1889/d41303089cef0b6dabce0fee663dd0ed122fb01f.gif?1971531',
'https://safebooru.org//images/1657/010c60963bdfc5e81299791cde31502a63315301.gif?1797427',
'https://safebooru.org//images/1148/c29fe5e28538509c47daec72deedd82d9ec5f49d.gif?1196986',
'https://safebooru.org//images/1864/cee69f5961cbf0081d73e6ede91313e7af590c51.gif?1946740']

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kiss')
    .setDescription('Soft and gentle kiss~')
    .addUserOption(option =>
        option.setName('target')
        .setDescription("this being is about to be kissed")
        ),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = kissGif[Math.floor(Math.random() * kissGif.length)]
        const user = interaction.options.getUser('target');
        const embed = new EmbedBuilder()
        .setTitle(`${user.username} has been kissed~ by ${interaction.user.username}`+' '+':kiss:')
        .setDescription('Now you shall not ask for more, Ok~~'+' '+'`My'+' '+`${user.username}`+'`')
        .addFields(
            [
                {
                    name: 'secret message UwU',
                    value: `||Unless ya wanna see us get spoiled on bed~ :heart:||`,
                    inline: true
                }
            ]
        )
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}