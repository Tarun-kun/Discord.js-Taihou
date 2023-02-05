const { SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let thinkingGif = ['https://media.tenor.com/wp2GoailYtcAAAAd/anime-thinking-benisumomo.gif',
'https://media.tenor.com/K3LslQdLo04AAAAd/inugami-korone-hololive.gif',
'https://media.tenor.com/YBDLlOOCtrsAAAAC/anime-think.gif',
'https://media.tenor.com/k9FR8gD2YU4AAAAC/silvervale-buffer-anime-thinking.gif',
'https://media.tenor.com/nlMTcR-3hWAAAAAC/thinking-bored.gif',
'https://media.tenor.com/dTVq-4H1ltkAAAAC/thinking-anime.gif',
'https://media.tenor.com/zrethE8ewlQAAAAC/anime-bamboo-blade.gif',
'https://media.tenor.com/FuMLN3yutTIAAAAC/why-pondering.gif',
'https://media.tenor.com/wqp1JAiYEk4AAAAC/anime-hand.gif',
'https://media.tenor.com/nS0LAosoaRMAAAAC/yui-hirasawa-kon.gif',
'https://media.tenor.com/xll3nWXVE_cAAAAd/black-rock.gif',
'https://media.tenor.com/TfvDji6XaMMAAAAd/tsukasa-yuzaki-yuzaki.gif',
'https://media.tenor.com/3FYx8JeGiGUAAAAC/thinking.gif',
'https://media.tenor.com/D3sesqm4zogAAAAC/anime-type.gif']
module.exports = {
	data: new SlashCommandBuilder()
		.setName('think')
		.setDescription('User will think with Taihou'),
	async execute(interaction){
		let random = color[Math.floor(Math.random() * color.length)] ; 
        let randomImage = thinkingGif[Math.floor(Math.random() * thinkingGif.length)]
        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} is thinking hmmmmmmm~~~~`)
        .setDescription('`brain.exe is lagging because of info traffic`')
        .setColor(random)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    },
};
