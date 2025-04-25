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
		socialLinks: [
            { icon: 'github', link: 'https://github.com/stix360/ashenlegacy'}],
		nav : [
			{
				text: 'Contributing',
				link: '/contributing/'
			},
			{
				text: 'About',
				items: [
					{
						text: 'About',
						link: '/about/'
				    },
					{
						text: 'Team',
						link: '/about/team'
				    },
					{
						text: 'Contributors',
						link: '/about/contributors'
				    },
					{
						text: 'License',
						link: '/about/license'
				    }],
			}
			/*{
				text: '🔖 Glossary',
				link: 'https://rentry.org/The-Piracy-Glossary'
			},
			{
				text: '💾 Backups',
				link: 'https://github.com/fmhy/FMHY/wiki/Backups'
			},
			{
				text: '🌱 Ecosystem',
				items: [{
						text: '🌐 Search',
						link: '/posts/search'
					},
					{
						text: '🔗 Bookmarks',
						link: 'https://github.com/fmhy/bookmarks'
					},
					{
						text: '✅ SafeGuard',
						link: 'https://github.com/fmhy/FMHY-SafeGuard'
					},
					{
						text: '📋 snowbin',
						link: 'https://pastes.fmhy.net'
					},
					{
						text: '💡 Site Hunting',
						link: 'https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/find-new-sites/'
					},
					{
						text: '❓ FAQs',
						link: 'https://redd.it/xrxen7'
					},
					{
						text: '😇 SFW FMHY',
						link: 'https://fmhy.xyz/'
					},
					{
						text: '🏠 Selfhosting',
						link: '/other/selfhosting'
					},
					{
						text: '🏞 Wallpapers',
						link: '/other/wallpapers'
					},
					{
						text: '💙 Feedback',
						link: '/feedback'
					}
				]
			}*/
		],
		editLink: {
			pattern: 'https://github.com/STiX360/AshenLegacy/edit/main/docs/:path',
			text: 'Edit this page on GitHub'
		},
		logo: '/logo.svg',
		externalLinkIcon: 'true',
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
						link: '/admins/performance.md'
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
		],
		footer: {
          message: 'Thanks for your support ❤️',
          //copyright: 'Copyright © 2019-present Ashen Legacy'
        }
	}
}