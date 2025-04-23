export default {
	lastUpdated: true,
	base: '/AshenLegacy/',
	lang: 'en-US',
	title: 'Ashen Legacy',
	description: 'Documentation for the Ashen Legacy mod-pack.',
	head: [
		['link', {
			rel: 'icon',
			href: '/favicon.ico'
		}]
	],
	themeConfig: {
		editLink: {
			pattern: 'https://github.com/STiX360/AshenLegacy/edit/main/docs/:path',
			text: 'Edit this page on GitHub'
		},
		logo: '/logo.svg',
		search: {
			provider: 'local'
		},
		sidebar: [{
				text: 'Player Guide',
				collapsed: true,
				items: [{
						text: 'Overview',
						link: '/players/index.md'
					},
					{
						text: 'Getting Started',
						link: '/players/getting-started.md'
					},
					{
						text: 'Exploration',
						link: '/players/worldgen.md'
					},
					{
						text: 'Progression & Combat',
						link: '/players/progression.md'
					},
					{
						text: 'Items & Crafting',
						link: '/players/items.md'
					},
					{
						text: 'Creatures',
						link: '/players/mobs.md'
					}
				]
			},
			{
				text: 'Admin Guide',
				collapsed: true,
				items: [{
						text: 'Overview',
						link: '/admins/index.md'
					},
					{
						text: 'Getting Started',
						link: '/admins/getting-started.md'
					},
					{
						text: 'Performance Tweaks',
						link: '/admins/performance-tweaks.md'
					},
					{
						text: 'Recommended Config',
						link: '/admins/recommended-config.md'
					},
					{
						text: 'Mod-Specific Tips',
						link: '/admins/mod-tips.md'
					},
					{
						text: 'Crash Handling',
						link: '/admins/crash-handling.md'
					},
					{
						text: 'Backup & Recovery',
						link: '/admins/backup-recovery.md'
					}
				]
			},
			{
				text: 'Reference',
				items: [{
					text: 'Changelog',
					link: 'reference/CHANGELOG'
				}, ]
			}
		]
	}
}