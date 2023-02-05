const { SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let answers = ['Totally ~!', 'Hai Shikikan', 'Meh- like that`ll ever happen', 'Negative', 'Shut it~ you pest', 'Nope~ Ask that again and it`ll be a bloodbath' , 'Can happen ~~', 'It`s a possibility', 'Bruh ~~ my love won`t even think that low', 'Yes' , 'NO !!' ];
module.exports = {
	data: new SlashCommandBuilder()
		.setName('8balls')
		.setDescription('Taihou will Predict future for ya **UwU**')
        .addStringOption(option => option   
                        .setName('input')
                        .setDescription('Ask something')),
	async execute(interaction){
		let random = color[Math.floor(Math.random() * color.length)] ; 
        let randomAnswers = answers[Math.floor(Math.random() * answers.length)];
        const input = interaction.options.getString('input') ?? "nothing to predict";
        const embed = new EmbedBuilder()
        .setTitle(`Question: ${input} ?`)
        .setDescription(`Answer: ${randomAnswers}`)
        .setColor(random)
        .setImage('https://media.tenor.com/dkcOo3cnZYwAAAAd/azur-lane-taihou.gif')
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    },
};
