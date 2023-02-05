const { SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let scaredGif = ['https://safebooru.org//images/1880/b4fb5a65ae8d6f0e4477a7dd3e2616b6d039249b.gif?1962193',
'https://safebooru.org//images/1880/02661cafa6c8cf3c3d245b257daf35904365f0d2.gif?1962521',
'https://safebooru.org//images/4067/d90192288a4b3aa2e74d4aca6a14f31f.gif?4250013']
let scaredScript = ['has been terried', 'got a super chill ran down their spine','has frozen stiff','became scared']
module.exports = {
	data: new SlashCommandBuilder()
		.setName('scared')
		.setDescription(`Expression of being scared`),
	async execute(interaction){
		let random = color[Math.floor(Math.random() * color.length)] ; 
        let randomImage = scaredGif[Math.floor(Math.random() * scaredGif.length)]
        let randomText = scaredScript[Math.floor(Math.random() * scaredScript.length)]
        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} ${randomText}`)
        .setDescription(`**Taihou know that feeling, A freaking sub of Eagles pranks me to death :c**`)
        .setColor(random)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    },
};
