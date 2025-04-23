ServerEvents.recipes(event => {
  [
    'ftbquests:book',
    'ftbquests:barrier',
    'ftbquests:stage_barrier',
    'ftbquests:detector',
    'ftbquests:loot_crate_opener',
    'ftbquests:screen_1',
    'ftbquests:screen_3',
    'ftbquests:screen_5',
    'ftbquests:screen_7',
    'ftbquests:task_screen_configurator',
    'ftbquests:loot_crate',
    'sophisticatedbackpacks:void_upgrade',
    'sophisticatedbackpacks:advanced_void_upgrade',
    'storagedrawers:diamond_storage_upgrade',
    'storagedrawers:emerald_storage_upgrade',
    'storagedrawers:void_upgrade',
    'supplementaries:globe_sepia'
    //'/fantasy_armor:*/'

  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Remove recipes by input.
  [
    // Note: Should generally use recipe IDs instead of input ingredient.

  ].forEach((ingredientID) => event.remove({input: ingredientID}));
  
  // Remove recipes by output.
  [
    
  ].forEach((itemID) => event.remove({output: itemID}));

});