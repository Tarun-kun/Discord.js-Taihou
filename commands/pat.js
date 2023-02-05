const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let patGif = ['https://media.tenor.com/J4hea4d7x1oAAAAC/headpats-anime.gif',
'https://media.tenor.com/5e1v4RzZY7EAAAAC/mafu-mafumafu.gif',
'https://media.tenor.com/zE9XP7X7VwEAAAAC/dog-pat.gif',
'https://media.tenor.com/pvYCizt4_W8AAAAC/rachnera-monster-musume.gif',
'https://media.tenor.com/PBe8GFz7fAgAAAAd/azur-lane-anime.gif',
'https://media.tenor.com/KjInmjMNW44AAAAC/nichijou-funny.gif',
'https://media.tenor.com/l3LLIuAymSsAAAAC/anime-pat.gif',
'https://media.tenor.com/zhPexlSbgBEAAAAC/punch-pat-on-head.gif',
'https://media.tenor.com/079CvbmFPe8AAAAC/qualidea-code-head-pat.gif',
'https://media.tenor.com/GC9rg-v-wvMAAAAC/anime-pat.gif',
'https://media.tenor.com/Y31nRi2t5-UAAAAC/anime-pat.gif',
'https://media.tenor.com/I-z8cQd69P4AAAAd/hinako-note-pat-pat.gif',
'https://media.tenor.com/764E-lWdcowAAAAC/shimakaze-robot.gif',
'https://media.tenor.com/lOawy4d-SHMAAAAd/anime-cuddle-gauge.gif',
'https://media.tenor.com/SRRnWa6nMAoAAAAC/foxplushy-foxy.gif'
]

module.exports = {
    data: new SlashCommandBuilder()
    .setName('pat')
    .setDescription('target will be pat')
    .addUserOption(option =>
        option.setName('target')
        .setDescription("this being is about to be embrassed")
        ),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = patGif[Math.floor(Math.random() * patGif.length)]
        const user = interaction.options.getUser('target');
        const embed = new EmbedBuilder()
        .setTitle(`${user.username} has been patted by **${interaction.user.username}**`)
        .setDescription('Target has became patted blob `lets move on`')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}