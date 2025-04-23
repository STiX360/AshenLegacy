ItemEvents.tooltip(event => {
      const addTooltip = (itemID, textID) => {
      event.add(itemID, Text.translate(textID));
    };
  
    addTooltip('sophisticatedbackpacks:backpack', 'ashenlegacy.tooltip.backpack');
    addTooltip('sophisticatedbackpacks:iron_backpack', 'ashenlegacy.tooltip.iron_backpack');
    addTooltip('sophisticatedbackpacks:gold_backpack', 'ashenlegacy.tooltip.gold_backpack');
    addTooltip('sophisticatedbackpacks:diamond_backpack', 'ashenlegacy.tooltip.diamond_backpack');
    addTooltip('sophisticatedbackpacks:netherite_backpack', 'ashenlegacy.tooltip.netherite_backpack');
    addTooltip('/fantasy_armor:*/', 'ashenlegacy.tooltip.not_implemented');
  })