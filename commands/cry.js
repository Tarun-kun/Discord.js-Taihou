const { SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let cryGif = [
'https://img3.gelbooru.com//images/8c/d7/8cd7401eb525f50779f271a9eb29719c.gif',
'https://img3.gelbooru.com/images/32/6d/326dda18030a17186b9c5ef4f326d294.gif',
'https://img3.gelbooru.com//images/ef/5d/ef5d52e46144d7cb2b7a8f6c2a462b7d.gif',
'https://img3.gelbooru.com//images/7f/ad/7fad5b0a30130bd7c47f9a0a4b0c61fe.gif',
'https://img3.gelbooru.com/images/58/81/588136b8d5fb895c273e43fc795d6a5c.gif',
'https://img3.gelbooru.com//images/32/d6/32d61a2f76d5963047ef8be46ff40e7f.gif',
'https://img3.gelbooru.com//images/e0/65/e065e3466ac05ad993cc4d61d6ee91db.gif',
'https://img3.gelbooru.com//images/9d/f1/9df1ad5c4b7dd0d8c984bda6b59f5b7e.gif',
'https://img3.gelbooru.com//images/0b/47/0b47eddf843ddec52c6411b24a626c47.gif',
'https://img3.gelbooru.com//images/8a/5b/8a5bb709f6259c2ad48d08a1be842edf.gif',
'https://img3.gelbooru.com//images/18/1b/181b61d8666c604f91ce52cac3446377.gif',
'https://img3.gelbooru.com//images/68/b8/68b84e37b2b5b7a2c7b8ddf0d5e805a2.gif',
'https://img3.gelbooru.com//images/07/33/073311c5b1be2609fda68819723b31ed.gif',
'https://img3.gelbooru.com//images/39/09/39090ac450eb594d4271b1c247fdd5ea.gif'
];
let cryScript = ['was made sad~', 'has been made sad' , 'is depressed', 'has been engulfed by hard hearted reality', 'needs some to ....']
module.exports = {
	data: new SlashCommandBuilder()
		.setName('cry')
		.setDescription(`You're about to express sadge`),
	async execute(interaction){
		let random = color[Math.floor(Math.random() * color.length)] ; 
        let randomImage = cryGif[Math.floor(Math.random() * cryGif.length)]
        let randomText = cryScript[Math.floor(Math.random() * cryScript.length)]
        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} ${randomText}`)
        .setDescription(`**sadge is a curse, but the curse is ||pats and cuddles||**`)
        .setColor(random)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    },
};
