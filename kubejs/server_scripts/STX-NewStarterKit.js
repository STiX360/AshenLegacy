PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('new_starter')) {
        event.player.stages.add('new_starter');
        event.entity.setItemSlot(0, Item.of('minecraft:wooden_sword'));
        event.entity.setItemSlot(5, Item.of('minecraft:leather_helmet').enchant('soulbound:soulbound', 1));
        event.entity.setItemSlot(4, Item.of('minecraft:leather_chestplate').enchant('soulbound:soulbound', 1));
        event.entity.setItemSlot(3, Item.of('minecraft:leather_leggings').enchant('soulbound:soulbound', 1));
        event.entity.setItemSlot(2, Item.of('minecraft:leather_boots').enchant('soulbound:soulbound', 1));
        event.player.give(Item.of('minecraft:bread', 8));
    }
    return;
});