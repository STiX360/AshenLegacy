LootJS.modifiers((event) => {
    event.addLootTypeModifier(LootType.ENTITY)
        .removeLoot("endermanoverhaul:summoner_pearl")
        .removeLoot("endermanoverhaul:soul_pearl")
        .removeLoot("endermanoverhaul:corrupted_pearl")
})

ServerEvents.entityLootTables(event => {
    // Minecraft - Husk
    event.modifyEntity('minecraft:husk', table => {
      table.addPool(pool => {
        pool.rolls = 1;
        pool.addItem('mekanism:ingot_tin');
        pool.killedByPlayer();
        pool.randomChanceWithLooting(0.11, 0.02);
      });
    });
    
    // Minecraft - Pillager
    event.modifyEntity('minecraft:pillager', table => {
      table.addPool(pool => {
        pool.rolls = 1;
        pool.addItem('immersiveengineering:ingot_silver');
        pool.killedByPlayer();
        pool.randomChanceWithLooting(0.11, 0.02);
      });
    });

    // Minecraft - Ravager
    event.modifyEntity('minecraft:ravager', table => {
      table.addPool(pool => {
        pool.rolls = 1;
        pool.addItem('quark:ravager_hide');
      });
    });
    
    // Minecraft - Stray
    event.modifyEntity('minecraft:stray', table => {
      table.addPool(pool => {
        pool.rolls = 1;
        pool.addItem('immersiveengineering:ingot_silver');
        pool.killedByPlayer();
        pool.randomChanceWithLooting(0.11, 0.02);
      });
    });
  
    // Quark - Wraith
    event.modifyEntity('quark:wraith', table => {
      table.addPool(pool => {
        pool.rolls = 1;
        pool.addItem('mekanism:ingot_lead');
        pool.killedByPlayer();
        pool.randomChanceWithLooting(0.11, 0.02);
      });
    });
  
});