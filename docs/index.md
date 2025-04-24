---
title: Ashen Legacy
description: Supporting the Ashen Legacy mod-pack.
layout: home

hero:
  name: Ashen Legacy
  text: Documentation
  tagline: Supporting the Ashen Legacy mod-pack.
  actions:
    - theme: brand
      text: Player Guide
      link: /players
    - theme: alt
      text: Server Admins
      link: /admins
    - theme: alt
      text: Contribute
      link: reference/contributing
    - theme: alt
      text: Discord
      link: https://discord.com/invite/JF7EgjUZ6E
features:
  - title: Dynamic Progression
    icon: |
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A6BBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waypoints"><circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/></svg>
    details: Grow your character organically through actions—combat, crafting, and exploration all contribute to personalized aptitudes and playstyles.
	
  - title: Dangerous World Generation
    icon: |
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0
      0 24 24" fill="none" stroke="#49d3e9" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="lucide
      lucide-swords"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line
      x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16"
      y2="20"/><line x1="19" x2="21" y1="21" y2="19"/><polyline points="14.5 6.5
      18 3 21 3 21 6 17.5 9.5"/><line x1="5" x2="9" y1="14" y2="18"/><line
      x1="7" x2="4" y1="17" y2="20"/><line x1="3" x2="5" y1="19" y2="21"/></svg>
    link: /players/worldgen
    details: Reimagined dungeons, biome-specific caves, and custom structures add risk and reward to every corner of the Overworld, Nether, and End.

  - title: Quests & Progression
    icon: |
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0
      0 24 24" fill="none" stroke="#3ccd93" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="lucide
      lucide-book-marked"><path d="M10 2v8l3-3 3 3V2"/><path d="M4 19.5v-15A2.5
      2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1
      0-5H20"/></svg>
    details: A guided experience helps new players select their Origin, Class, and starting aptitudes while uncovering relics, rewards, and ascendencies.

  - title: Origins & Classes System
    icon: |
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A6BBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waypoints"><circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/></svg>
    details: Build your character from the ground up with unique racial powers and profession-based bonuses that define your strengths from day one.

  - title: Relics & Environmental Magic
    icon: |
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D05A6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-ellipsis"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
    details: Unlock powerful ancient artifacts that change how you fight, survive, and explore—with aura effects, passive buffs, and magical synergy.

  - title: Admin Tools & Config Support
    icon: |
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f17c67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-terminal"><path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>
    link: /admins
    details: Easily tune boss difficulty, relic access, XP rates, and more through flexible config files and server-ready documentation.

---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  var preferredKawaii
  try {
    preferredKawaii = localStorage.getItem('uwu')
  } catch (err) {}
  const urlParams = new URLSearchParams(window.location.search)
  const kawaii = urlParams.get('uwu')
  const setKawaii = () => {
    const images = document.querySelectorAll('.VPImage.image-src')
    images.forEach((img) => {
      img.src = '/logo-uwu.svg'
    })
  }
  const resetKawaii = () => {
    const images = document.querySelectorAll('.VPImage.image-src')
    images.forEach((img) => {
      img.src = '/test.png'
    })
  }
  if (kawaii === 'true') {
    try {
      localStorage.setItem('uwu', true)
    } catch (err) {}
    console.log('uwu mode enabled. Disable with "?uwu=false".');
    setKawaii()
  } else if (kawaii === 'false') {
    try {
      localStorage.removeItem('uwu', false)
    } catch (err) {}
    resetKawaii()
  } else if (preferredKawaii) {
    setKawaii()
  }

  let clickCount = 0;
  const heroImage = document.querySelector('.VPImage.image-src');
  
  const handleClick = () => {
    clickCount += 1;
    if (clickCount === 5) {
      const isKawaii = localStorage.getItem('uwu') === 'true';
      if (isKawaii) {
        localStorage.removeItem('uwu');
        resetKawaii();
        console.log('uwu mode disabled.');
      } else {
        localStorage.setItem('uwu', true);
        setKawaii();
        console.log('uwu mode enabled after 5 clicks.');
      }
      clickCount = 0;
    }
  };

  if (heroImage) {
    heroImage.addEventListener('click', handleClick);
  }
})
</script>