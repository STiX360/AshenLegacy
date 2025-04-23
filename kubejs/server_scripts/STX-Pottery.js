// LIST OF CREEPY CRAWLIES
const CREEPY_CRAWLY = [
    "minecraft:vex",
    "minecraft:silverfish",
    "minecraft:endermite",
    "minecraft:bee"
];

BlockEvents.broken('minecraft:decorated_pot', event => {

    // 95% chance to do nothing, 5% chance to run the below
    let chance = Math.random() * 100
    if (chance > 95) return
    if (chance <= 95){

    // PICK CREEPY CRAWLY
    let chosenMob = CREEPY_CRAWLY[Math.floor(Math.random() * CREEPY_CRAWLY.length)];
    const entity = event.block.createEntity(chosenMob)
    const {x, y, z} = event.block.getPos();
    entity.portalCooldown = 250
    entity.z = z + 0.5
    entity.x = x + 0.5
    entity.y = y + 0.1
    entity.spawn()}
  })