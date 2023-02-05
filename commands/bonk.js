const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let bonkGif = ['https://media.tenor.com/NS2upjfHs6wAAAAC/bonk.gif',
                'https://media.tenor.com/kFNtXOJGyooAAAAC/azura-bonk-azura.gif',
                'https://media.tenor.com/b5tAzjbsG68AAAAC/minmi-bonk.gif',
                'https://media.tenor.com/GQVoTVtfLvoAAAAC/psyduck-farfetchd.gif',
                'https://cdn.discordapp.com/attachments/915285519498358917/1068892139087482990/bonk-ultimate-bonk.gif',
                'https://safebooru.org//images/2305/975b43ec409897c75cc14b050de8c4c2a2b24669.gif?2399186'
            ];

module.exports = {
    data: new SlashCommandBuilder()
    .setName('bonk')
    .setDescription('bonk someone HARD')
    .addUserOption(option=>
        option.setName('target')
        .setDescription('one to be bonked')
    ),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = bonkGif[Math.floor(Math.random() * bonkGif.length)]
        const user = interaction.options.getUser('target');
        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} has **Bonked** ${user.username}`)
        .setDescription('Target got bonked')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}