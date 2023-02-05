const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let assGif = [
'https://img3.gelbooru.com//images/21/7a/217ada333c912171a5db0156350acc07.gif',
'https://img3.gelbooru.com//images/ec/97/ec973a10d4c14dd5a0b87aa4bf19ca79.gif',
'https://img3.gelbooru.com//images/c5/5e/c55eb7535e4997af5ebd5d1da49c3d44.gif',
'https://img3.gelbooru.com//images/74/7d/747d400caa93bf8d2eca1b5c0cff352e.gif',
'https://img3.gelbooru.com//images/6e/ca/6ecaf185d670f3d8a28792a089247e81.gif',
'https://img3.gelbooru.com//images/98/2e/982e1525a75d5b04924089fb85ca627f.gif',
'https://img3.gelbooru.com//images/5d/cb/5dcb0537068dd5d6c2d75f70ac3a555f.gif',
'https://img3.gelbooru.com//images/98/36/98367ee3231c713c0fde6e53f03d776a.gif',
'https://img3.gelbooru.com//images/87/93/8793619706e2b9155c20fc1523b45515.gif',
'https://img3.gelbooru.com//images/a6/9b/a69bbdead51b65f06b34c2acdf46e892.gif',
'https://img3.gelbooru.com//images/68/15/6815a34a838cba163c222876db98cc6f.gif',
'https://img3.gelbooru.com//images/44/0c/440cdf4523de3b770e6d8b2fbbaacc3b.gif',
'https://img3.gelbooru.com//images/e5/07/e507b7f6dc0048c0c66e3963f10ce04d.gif',
'https://img3.gelbooru.com//images/51/a5/51a5696c2d80ae4a9631960213d406c9.gif',
'https://img3.gelbooru.com//images/7a/6b/7a6bc2ba04c5e98f788f96d5aa2e16c5.gif',
'https://img3.gelbooru.com//images/e4/9d/e49def81159e0db69b0248f59e7294f4.gif',
'https://img3.gelbooru.com//images/2b/f0/2bf0c9370a46258a99ce2927f0668e7b.gif',
'https://img3.gelbooru.com//images/ff/d7/ffd702c08f4dd05a78a15b6b7ec63986.gif',
'https://img3.gelbooru.com//images/c5/74/c574663e0cc8e854e87c4c0b7d8da39e.gif',
'https://img3.gelbooru.com//images/02/02/020271448996a6acd439f2c16be45e3c.gif',
'https://img3.gelbooru.com//images/b7/80/b780157214475ed485dba34d26744eda.gif',
'https://img3.gelbooru.com//images/40/c3/40c3d13b9c1e9107d5f644870226acc3.gif',
'https://img3.gelbooru.com//images/1b/15/1b15ad5b861291c6faf7b7ec586862ac.gif',
'https://img3.gelbooru.com//images/aa/13/aa13b78633f81220017b33ff434116c4.gif',
'https://img3.gelbooru.com//images/ba/db/badb59acfc7accae6e80e7eec8fd9000.gif',
'https://img3.gelbooru.com//images/e9/c3/e9c30f9dd90fa80cd1948b8b7a9e064e.gif',
'https://img3.gelbooru.com//images/62/18/62181b6c582763f3b7a867a8b8294669.gif',
'https://img3.gelbooru.com//images/3f/d6/3fd660a1a74f7ddee861c01ad6ca2927.gif',
'https://img3.gelbooru.com/images/32/60/3260259e786c83081d9b25dce5f2b51c.gif',
'https://img3.gelbooru.com//images/71/08/7108e40343c30e7f4b717f6ad788d42a.gif',
'https://img3.gelbooru.com//images/f3/85/f385d73ebfba71ce5771a2dcb507f330.gif',
'https://img3.gelbooru.com//images/0b/24/0b242beae5ed71e26acb147b4265e0a3.gif',
'https://img3.gelbooru.com//images/2a/2c/2a2c4f7a9c8b1ea2ede34d1f29fad570.gif',
'https://img3.gelbooru.com//images/fa/28/fa283ac641da47a7a4297102d12495de.gif',
'https://img3.gelbooru.com//images/b7/b0/b7b0666a36581379690853e7324b35bc.gif',
'https://img3.gelbooru.com//images/2b/6f/2b6fe5be2fbeea647ed02421a703fde7.gif',
'https://img3.gelbooru.com//images/40/8d/408d26883266a7a1a08976cc35091c8f.gif',
'https://img3.gelbooru.com//images/b4/56/b45676702a00b3dac85d3788bc84f02e.gif',
'https://img3.gelbooru.com//images/a7/cc/a7ccc7c4e9486ad73a67d127ab86f175.gif',
'https://img3.gelbooru.com//images/03/2f/032fe307111f36d6d0511afdbf28958a.gif',
'https://img3.gelbooru.com//images/c9/20/c920a2ac612741c45d82b76a0307d5d4.gif',
'https://img3.gelbooru.com//images/d6/e9/d6e934843f5352a72e6afdd24282edcd.jpg',
'https://img3.gelbooru.com//images/b4/39/b439eb8e33a8f47cd79f0fe994b807ea.png'
];

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ass')
    .setDescription('a naughty slut will show ya a big butt'),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = assGif[Math.floor(Math.random() * assGif.length)]
        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} has been spoiled will massive butt`)
        .setDescription('Target got killed by wet sloppy A$$')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now())
        await interaction.reply({embeds: [embed]})
    }
}