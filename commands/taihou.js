const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let taihouContent = ['add string gif goes here']

let fdgGif = [
    'add gifs here for specific content or character '
]

module.exports = {
    data: new SlashCommandBuilder()
    .setName('taihou')
    .setDescription('legs are ready ~!'),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = taihouContent[Math.floor(Math.random() * taihouContent.length)]
		let randomfdg = fdgGif[Math.floor(Math.random() * fdgGif.length)]
        const embed = new EmbedBuilder()
        .setTitle(`I'm here ${interaction.user.username} `)
        .setDescription('taihou image')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now());

        const embed2 = new EmbedBuilder()
        .setTitle(`I ain't for you.`)
        .setDescription('This taihou will ignore this user')
        .setColor(randomColor)
        .setImage('https://img3.gelbooru.com//images/46/82/468281a2af12e768786ea0d1b82dc553.gif')
        .setTimestamp(Date.now());

        const embed3 = new EmbedBuilder()
        .setTitle(`Ohh~ So you are boy`)
        .setDescription('Taihou`s skk ask me to grab **friedrich der grosse** for ya, enjoy with her')
        .setColor(randomColor)
        .setImage(randomfdg)
        .setTimestamp(Date.now());

        const embed4 = new EmbedBuilder()
        .setTitle(`Ohh~ So you are girl`)
        .setDescription('Taihou`s skk ask me to grab **friedrich der grosse** for ya, enjoy with her')
        .setColor(randomColor)
        .setImage(randomfdg)
        .setTimestamp(Date.now());
        switch (interaction.user.username) {
            case 'userName1':
                await interaction.reply({embeds: [embed]})
                break;
            case 'userName2':
                await interaction.reply({embeds: [embed3]})
                break;
            case 'userName3':
                await interaction.reply({embeds: [embed4]})
                break;
            case 'userName4':
                await interaction.reply({embeds: [embed3]})
                break;
            default: await interaction.reply({embeds: [embed2]})
                break;
        }

    }
}
