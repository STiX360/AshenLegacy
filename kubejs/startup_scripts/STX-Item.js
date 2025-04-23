console.info('Starting recipe modification scripts...')

StartupEvents.registry('item', event => {
	event.create('copper_coin').displayName('Copper Coin').tooltip('Acquired from Overworld advancement quests.')
	event.create('iron_coin').displayName('Iron Coin').tooltip('Not yet implemented.')
	event.create('gold_coin').displayName('Gold Coin').tooltip('Not yet implemented.')
	event.create('diamond_coin').displayName('Diamond Coin').tooltip('Not yet implemented.')
	event.create('netherite_coin').displayName('Netherite Coin').tooltip('Acquired from Nether advancement quests.')
	event.create('monster_coin').displayName('Monster Coin').tooltip('Acquired from creature quests.')
	event.create('nether_coin').displayName('Nether Coin').tooltip('Acquired from Nether advancement quests.')
	event.create('end_coin').displayName('End Coin').tooltip('Acquired from End advancement quests.')
})