ItemEvents.modification(event => {

    event.modify('minecraft:diamond_helmet', item => {
        item.armorProtection = 4
    })
    event.modify('minecraft:diamond_boots', item => {
        item.armorProtection = 4
    })
	event.modify('minecraft:diamond_chestplate', item => {
        item.armorProtection = 9
    })
    event.modify('minecraft:diamond_leggings', item => {
        item.armorProtection = 7
    })
    event.modify('minecraft:netherite_leggings', item => {
        item.armorProtection = 8
    })
    event.modify('minecraft:netherite_helmet', item => {
        item.armorProtection = 5
    })
    event.modify('minecraft:netherite_chestplate', item => {
        item.armorProtection = 10
    })
    event.modify('minecraft:netherite_boots', item => {
        item.armorProtection = 5
    })

})