MoreJSEvents.registerPotionBrewing(event => {
//    [
//      'mutantmonsters:chemical_x'
//    ].forEach((outputID) => event.removeByPotion(null, null, { output: outputID }));
      event.removeByPotion(null, null, "mutantmonsters:chemical_x");
});

MoreJSEvents.registerPotionBrewing((event) => {
  event.removeContainer("minecraft:lingering_potion");
})