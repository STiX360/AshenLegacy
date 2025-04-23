PlayerEvents.loggedIn(event => {
  event.player.tell(Text.translate('ashenlegacy.chat.update_notice'));
  event.player.tell(Text.translate('ashenlegacy.chat.discord_link').blue().underlined().click('https://discord.com/invite/JF7EgjUZ6E'));
 //if (!event.player.stages.has('second_start')) {
    //event.player.stages.add('second_start');
    //event.player.tell(Text.translate('ashenlegacy.chat.first_start_message'));
    //event.player.tell(Text.translate('ashenlegacy.chat.discord_link').blue().underlined().click('https://discord.com/invite/JF7EgjUZ6E'));
  //}
});