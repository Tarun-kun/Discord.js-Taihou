const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let gyaruGif = ['add gifs to array']

module.exports = {
    data: new SlashCommandBuilder()
    .setName('gyaru')
    .setDescription('random implemented gyaru will come'),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = gyaruGif[Math.floor(Math.random() * gyaruGif.length)]
        const embed = new EmbedBuilder()
        .setTitle(`Anime Gyaru will pop in ~!`)
        .setDescription(`My o MY~~ Taihou can be a gyaru too ~ skk-sama but for now it's ok`)
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}
