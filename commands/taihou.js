const {SlashCommandBuilder,EmbedBuilder} = require('discord.js');
let color = [0xffe28f,0xf58e8e,0xca0e00,0x5992cd,0x0b6b94];
let taihouContent = ['https://img3.gelbooru.com//images/19/66/196695c63268c86004831be3383528ca.gif',
'https://img3.gelbooru.com//images/8c/87/8c876d9c0cf4d207013de3b72bd9c494.gif',
'https://img3.gelbooru.com//images/dc/69/dc698958badbf742b4cd86fec2400e29.gif',
'https://img3.gelbooru.com//images/d9/13/d9133ca5f3614104bffb95e38ec43dd8.gif',
'https://img3.gelbooru.com//samples/0c/b7/sample_0cb7bd300b09f71d0070fb1da1b0654b.jpg',
'https://img3.gelbooru.com//samples/19/a3/sample_19a341deb777329010146bcb7552e11c.jpg',
'https://img3.gelbooru.com//samples/bd/aa/sample_bdaa5a5d3ffc4193d6ffc71ab476244e.jpg',

'https://img3.gelbooru.com//samples/7f/ba/sample_7fbae28c084ef913da94ca17147ab9ad.jpg',
'https://img3.gelbooru.com//samples/70/5d/sample_705dd8961018e78395e0ffca4db85a6f.jpg',
'https://img3.gelbooru.com//samples/77/50/sample_77500e3292acfe6642594b9f85e07922.jpg',
'https://img3.gelbooru.com//samples/a0/c7/sample_a0c767c4a1b4c3726cd67e7d9f84369f.jpg',
'https://img3.gelbooru.com//images/a5/21/a5210ecc1de72c9c6e84daba16c2d701.jpg',
'https://img3.gelbooru.com//images/1a/46/1a4647d88a6f14ed870086ac8e03c2c2.jpg',
'https://img3.gelbooru.com//images/38/af/38affc7eeb562e7aee837acf4e335fa0.png',
'https://img3.gelbooru.com//samples/ac/27/sample_ac27dbd2073ceaa217c134572ba0f21b.jpg',
'https://img3.gelbooru.com//samples/1d/bd/sample_1dbda5fa37df43fa74bda28e4de7ed05.jpg',
'https://img3.gelbooru.com//samples/9c/cd/sample_9ccd32a7319344e00d4edd5afa7919f9.jpg',
'https://img3.gelbooru.com//samples/5c/8d/sample_5c8d6127d14201e406db89442752266c.jpg',
'https://img3.gelbooru.com//samples/25/1d/sample_251d036ee9b80fd4ddada313e736748f.jpg',
'https://img3.gelbooru.com//samples/f3/41/sample_f3411ef2ba732f1f5fe815c9858f05af.jpg',
'https://img3.gelbooru.com//samples/02/cf/sample_02cf6a1f044c27da8049e54115a1d75e.jpg',
'https://img3.gelbooru.com//samples/25/56/sample_2556f1b8159f0335e12771edc9b87db8.jpg',
'https://img3.gelbooru.com//images/ca/a1/caa19176dce715d4d83d3339c319b8f1.jpg',
'https://img3.gelbooru.com//samples/6b/ae/sample_6bae0eaa9a0da15f98ea7b1668a6798b.jpg',
'https://img3.gelbooru.com//samples/b0/83/sample_b083c7fef8fa1c1ff58f50275916c6d7.jpg',
'https://img3.gelbooru.com//images/52/dc/52dc99fc5cb75b3f766223b658646fcf.jpg',
'https://img3.gelbooru.com//samples/d8/d5/sample_d8d5c337c86614758a6d13947a65d95e.jpg',
'https://img3.gelbooru.com//samples/c9/28/sample_c9289ef67761133fb2388d7c2c68a114.jpg',
'https://img3.gelbooru.com//samples/9c/e4/sample_9ce4321dd7e5d0b9aa15b1e778061853.jpg',
'https://img3.gelbooru.com//samples/9c/56/sample_9c56f692868a28b7647811c02831f63a.jpg',
'https://img3.gelbooru.com//samples/17/ec/sample_17ec9abc0830d4fd29f50a672c391bb7.jpg']

let fdgGif = [
    'https://media.tenor.com/4ZMLhrN4Q3QAAAAC/azur-lane-fdg.gif',
    'https://img-9gag-fun.9cache.com/photo/aXjVb5b_700bwp.webp',
    'https://cdn.donmai.us/original/46/a3/__friedrich_der_grosse_azur_lane_drawn_by_cc_44__46a356a2e96ca79d8ffd3caadcf3c079.jpg'
]

module.exports = {
    data: new SlashCommandBuilder()
    .setName('taihou')
    .setDescription('legs are ready ~!'),
    async execute(interaction){
        let randomColor = color[Math.floor(Math.random() * color.length)] ;
		let randomImage = taihouContent[Math.floor(Math.random() * taihouContent.length)]
		let randomfdg = fdgGif[Math.floor(Math.random() * fdgGif.length)]
        const embed = new EmbedBuilder()
        .setTitle(`I'm here ${interaction.user.username} Skk-sama~! :heart:`)
        .setDescription('I`ll be always along side you ~~💕')
        .setColor(randomColor)
        .setImage(randomImage)
        .setTimestamp(Date.now());

        const embed2 = new EmbedBuilder()
        .setTitle(`I ain't for you. Tsk ~`)
        .setDescription('This taihou only loves her Skk Tarun~:heart:')
        .setColor(randomColor)
        .setImage('https://img3.gelbooru.com//images/46/82/468281a2af12e768786ea0d1b82dc553.gif')
        .setTimestamp(Date.now());

        const embed3 = new EmbedBuilder()
        .setTitle(`Ohh~ So you are Hornii hunty skk talked about`)
        .setDescription('Taihou`s skk ask me to grab **friedrich der grosse** for ya, enjoy with her')
        .setColor(randomColor)
        .setImage(randomfdg)
        .setTimestamp(Date.now());

        const embed4 = new EmbedBuilder()
        .setTitle(`Ohh~ So you are Wolfie`)
        .setDescription('Taihou`s skk ask me to grab **friedrich der grosse** for ya, enjoy with her')
        .setColor(randomColor)
        .setImage(randomfdg)
        .setTimestamp(Date.now());
        switch (interaction.user.username) {
            case 'Dragneel':
                await interaction.reply({embeds: [embed]})
                break;
            case 'NightFox</>':
                await interaction.reply({embeds: [embed3]})
                break;
            case 'Wolfie Phoenix':
                await interaction.reply({embeds: [embed4]})
                break;
            case 'Bunnty Hunter':
                await interaction.reply({embeds: [embed3]})
                break;
            default: await interaction.reply({embeds: [embed2]})
                break;
        }

    }
}