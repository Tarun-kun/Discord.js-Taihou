const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let assSlapGif = [
'https://img3.gelbooru.com//images/8b/66/8b66e00bd5336be341e516044eac6612.gif',
'https://img3.gelbooru.com//images/21/ed/21ed17a7deeafa0dcd43406775d3c486.gif',
'https://img3.gelbooru.com//images/d6/f4/d6f452d3a3e10b1a91ba034a7a84a5bd.gif',
'https://img3.gelbooru.com//images/8d/61/8d611022807aae029c6d20aefdb22974.gif',
'https://img3.gelbooru.com//images/93/9c/939c487dff01eec03d81bb848d33c0c9.gif',
'https://img3.gelbooru.com//images/15/df/15df26aa953b69959a459ba5777fa8ec.gif',
'https://img3.gelbooru.com//images/bf/21/bf216b1d1abd1b667f711aae0f351a28.gif',
'https://img3.gelbooru.com//images/64/8e/648eb73e7b3d03b0c94f4e4f1cb4166f.gif',
'https://img3.gelbooru.com//images/2b/e6/2be6dcd56528b604ece58c4474e20401.gif',
'https://img3.gelbooru.com//images/fd/1e/fd1e551817804ed5f2464e2a45148604.gif',
'https://img3.gelbooru.com//images/f6/4b/f64bcbd2166409d52b6e175ef5ed5acc.gif',
'https://img3.gelbooru.com//images/b2/ba/b2baa74542d4e2d499ac1a517f44bae7.gif',
'https://img3.gelbooru.com//images/19/d3/19d33a4dac7352483af4b0bd69bc0295.gif',
'https://img3.gelbooru.com//images/d0/7f/d07f0f09a76b14aabf7943d73085e0be.gif'
];

module.exports = {
    data: new SlashCommandBuilder()
    .setName('buttslap')
    .setDescription('slap someone HARD')
    .addUserOption(option=>
        option.setName('target')
        .setDescription('one to be slapped')
    ),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = assSlapGif[Math.floor(Math.random() * assSlapGif.length)]
        const user = interaction.options.getUser('target');
        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} has Slapped ${user.username}`)
        .setDescription('Target got killed by wet sloppy A$$')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}