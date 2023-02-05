const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let poundGif = [
    'https://img3.gelbooru.com/images/64/0d/640d1f839d79b13d5aac8f19ad75750d.gif',
    'https://img3.gelbooru.com//images/92/42/9242186a6ea80de168c0ca19e369e9bd.gif',
    'https://img3.gelbooru.com//images/6c/19/6c198a9cebbe55b03068082bc93ca196.gif',
    'https://img3.gelbooru.com//images/55/ad/55ade6da2956e1954e406ddb90a45408.gif',
    'https://img3.gelbooru.com//images/fe/7a/fe7a56275a7b34e801522a09a60240eb.gif',
    'https://img3.gelbooru.com/images/10/8b/108b3d4331cb2289e77bde7380a7ae67.gif',
    'https://img3.gelbooru.com//images/6f/ec/6fecb547d44019b6d3a487c4ce2dfbd8.gif',
    'https://img3.gelbooru.com//images/ef/6c/ef6c212d8aa828d9818663fcc7577efd.gif',
    'https://img3.gelbooru.com//images/b9/b6/b9b6adeadf20f2cc8c19b2860a7849ea.gif',
    'https://img3.gelbooru.com//images/a3/eb/a3eb8221dfc02613675618a9c497019f.gif',
'https://img3.gelbooru.com//images/69/2f/692f2b14d9c6113373b84e66758ceeb4.gif',
'https://img3.gelbooru.com//images/df/3a/df3aa78c2c01eaddf567f80779585b48.gif'
]
let texts = ['banged','lewds','spoiled','fucked','ruined','enjoyed']
module.exports = {
    data: new SlashCommandBuilder()
    .setName('pound')
    .setDescription('Soo~~ ya wanna lewd someone huh~!')
    .addUserOption(option=>
        option.setName('target')
        .setDescription('one to be destroyed')
    ),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = poundGif[Math.floor(Math.random() * poundGif.length)]
		let randomText = texts[Math.floor(Math.random() * texts.length)]
        const user = interaction.options.getUser('target');
        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} has ${randomText} ${user.username}`)
        .setDescription('`yup~ that just happened`')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}