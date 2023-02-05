const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let gyaruGif = ['https://img3.gelbooru.com//images/39/fa/39fa601a40cb596405eb38b81514854b.gif',
'https://img3.gelbooru.com//images/08/26/0826ef0c26006c0df73e3121fa6808e3.gif',
'https://img3.gelbooru.com//images/13/fc/13fcaa0655978df7f8501745366805a5.gif',
'https://img3.gelbooru.com//images/66/0b/660bfe6cf7c83396d2d65c395e615fcc.gif',
'https://img3.gelbooru.com//images/8c/b5/8cb5307b5907b3f3d059991de0f9b793.gif',
'https://img3.gelbooru.com//images/88/84/8884cee6fed817aeb8527e87aa036380.gif',
'https://img3.gelbooru.com//images/f1/56/f156346cec38d61ddb8269de327e545e.gif',
'https://img3.gelbooru.com//images/31/a8/31a89faabbcd64e9f8d88f35546265d1.gif',
'https://img3.gelbooru.com//images/da/d6/dad6da013356bc8317a34bc6ec08d82f.gif',
'https://img3.gelbooru.com//images/5e/bd/5ebdc76ac818afdacdfd807fac58e7e9.gif',
'https://img3.gelbooru.com//images/c9/4d/c94d432bc72d5798caadca48bc157d65.gif',
'https://img3.gelbooru.com//images/db/d4/dbd40c168777081e3639bcad3b7ae845.gif',
'https://img3.gelbooru.com//images/37/d0/37d055e7b1be2560dbda1b0e64c2226b.gif',
'https://img3.gelbooru.com//images/5a/ed/5aed793a14d0aaa3ec5d32499b0de7d2.gif',
'https://img3.gelbooru.com//images/34/0c/340c14ed8c3fd68a875e4ecf1c70ee84.gif',
'https://img3.gelbooru.com//images/44/ee/44ee0356c77174cc957864cd92bf2e62.gif',
'https://img3.gelbooru.com//images/52/48/524857c9c9f11495657f1adf660fdcce.gif',
'https://img3.gelbooru.com//images/ec/0d/ec0d1a2416231cc0e862cf8476b0eda9.gif',
'https://img3.gelbooru.com//images/50/7b/507b1886bc24e177cab25c5ced27e707.gif',
'https://img3.gelbooru.com//images/9e/4e/9e4e16bccf83d72388295e33d3025ef5.gif',
'https://img3.gelbooru.com//images/b4/72/b4722a41fd28278d93cb50585dfcfedb.gif',
'https://img3.gelbooru.com//images/1e/85/1e855b1110cf3ac4380bb094058e5829.gif',
'https://img3.gelbooru.com/images/31/f6/31f625d0585f8986fbb1de09761a74b4.gif',
'https://img3.gelbooru.com//images/6d/5d/6d5d3f3cbf3cf6084122bc50b2cf4028.gif'
]

module.exports = {
    data: new SlashCommandBuilder()
    .setName('gyaru')
    .setDescription('slap someone HARD'),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = gyaruGif[Math.floor(Math.random() * gyaruGif.length)]
        const embed = new EmbedBuilder()
        .setTitle(`Anime Gyaru are the hottest babe ~!`)
        .setDescription(`My o MY~~ Taihou can be a gyaru too ~ skk-sama but for now it's ok`)
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}