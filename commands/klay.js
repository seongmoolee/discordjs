const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

async function main() {
	try {
		const KLAY_KRW = await axios.get('https://api.bithumb.com/public/ticker/KLAY_KRW');
		return "클레이 " + KLAY_KRW.data.data.closing_price.toString() + "원";
	} catch (e) {
		return "조회에러";
	}
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('klay')
		.setDescription('KLAY 가격'),
	async execute(interaction) {
		const klay = await main();
		await interaction.reply(klay);
	},
};