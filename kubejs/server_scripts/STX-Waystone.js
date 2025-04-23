ServerEvents.recipes(event => {
event.replaceInput(
  { output: 'waystones:waystone' }, // Arg 1: the filter
  'waystones:warp_stone',            // Arg 2: the item to replace
  'minecraft:ender_pearl'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)
  //console.log('Hello! The recipe event has fired!')
})