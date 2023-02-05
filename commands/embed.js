const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Returns an Embed")
    .addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show')),
    async execute(interaction,client){
        const user = interaction.options.getUser('target')
        const embed = new EmbedBuilder()
        .setTitle('This is totally an embed')
        .setDescription('This might Work ? Maybe')
        .setTitle('This is totally an embed')
        .setDescription('This might Work ? Maybe')
        .setColor(0x18e1ee)
        .setImage(user.displayAvatarURL())
        .setThumbnail(user.displayAvatarURL())
        .setTimestamp(Date.now())
        .setAuthor({
            url: `https://ww4.gogoanimes.org/`,
            iconURL: user.displayAvatarURL(),
            name: user.tag
        })
        .setFooter({
            iconURL: user.displayAvatarURL(),
            text: user.tag
        })
        .setURL('https://discord.gg/kMb9XZAq')
        .addFields([
            {
                name: 'Field 1',
                value: 'Field value 1',
                inline: true
            },
            {
                name: `Field 2`,
                value: `Field value 2`,
                inline: true
            }
        ]);
        await interaction.reply({embeds: [embed]})
    },
}