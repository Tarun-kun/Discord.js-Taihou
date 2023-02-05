const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let tongueKiss = ['https://img3.gelbooru.com//images/b4/ce/b4ce2facc766cac09294699c0ad4da36.gif',
'https://img3.gelbooru.com//images/d7/40/d740f52f0a230b00bfd512519c563548.gif',
'https://img3.gelbooru.com//images/83/4b/834be6055e1388c7a7c221756a7ea55e.gif',
'https://img3.gelbooru.com//images/92/6f/926fd91a291ddd3a7c0dab9e2db6442c.gif',
'https://img3.gelbooru.com//images/6d/bf/6dbf15dd7630a6c8ea69cecc97fe3b5d.gif',
'https://img3.gelbooru.com//images/ab/0a/ab0a61c5601c908253d96821b3916dcb.gif',
'https://img3.gelbooru.com//images/16/0a/160a21feaaf2bcb7da0a682b3da3a017.gif',
'https://img3.gelbooru.com//images/7d/04/7d0422b70e1f91db08b9ddee821f4bee.gif',
'https://img3.gelbooru.com//images/74/1d/741d413aeefbbc48bc34beef517310aa.gif',
'https://img3.gelbooru.com//images/14/1c/141c326969b3c0a2b9e53c72c3c4637e.gif',
'https://img3.gelbooru.com//images/a4/8b/a48b37d6a1107d902f80049ab4a84f35.gif',
'https://img3.gelbooru.com//images/60/08/6008d581ab95995d37ed95ed9f9a4795.gif',
'https://img3.gelbooru.com//images/dc/a3/dca3de82bdc2392194c057cfc7f18ae1.gif',
'https://img3.gelbooru.com/images/da/02/da02a92b6538ac5a5636cb2672540e79.gif',
'https://img3.gelbooru.com//images/70/84/70843ba8c10cfc589b8475ecda402af3.gif',
'https://img3.gelbooru.com//images/13/fa/13fa185bc5d4269bc08a6b0da3db56a5.gif',
'https://img3.gelbooru.com//images/65/45/65453b591a4510660ced8828dc6abfbf.gif',
'https://img3.gelbooru.com//images/5a/70/5a708cfb749b4966010f002b4ff4fee4.gif',
'https://img3.gelbooru.com//images/04/c5/04c5d4c4b7ea2374c1118c8449a5a67a.gif',
'https://media.tenor.com/ZIfFiEBuKsAAAAAC/kiss-anime.gif',
'https://media.tenor.com/dByCkw_u8e4AAAAC/kiss-anime.gif',
'https://safebooru.org//images/1235/7e879eaecd28fc29d22f3f92559ab93882785b8e.gif?1287816',
'https://safebooru.org//images/1858/b1c02ccbfc0a69099436407d98fd02549991d857.gif?1940596']

module.exports = {
    data: new SlashCommandBuilder()
    .setName('tkiss')
    .setDescription('do a deep tonguer kiss ~')
    .addUserOption(option =>
        option.setName('target')
        .setDescription("this being is about to be kissed with tongue")
        ),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = tongueKiss[Math.floor(Math.random() * tongueKiss.length)]
        const user = interaction.options.getUser('target');
        const embed = new EmbedBuilder()
        .setTitle(`${user.username} has been spoiled by ${interaction.user.username} with a juicy`+' '+':kiss:')
        .setDescription('Target got sloppy kissed `lets move on`')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}