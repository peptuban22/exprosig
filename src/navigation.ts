import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Dashboard',
      links: [
        {
          text: '📉 Main Dashboard',
          href: getPermalink('/'),
        },
        {
          text: '📊 Monitoring Jasa',
          href: getPermalink('/monitorjasa'),
        },
      ],
    },
    {
      text: 'PSC',
      links: [
        {
          text: 'TKDN 2026',
          href: getPermalink('/tkdn-26'),
        },
      ],
    },

    {
      text: 'Weekly Report', // Mengarah langsung ke halaman baru
      href: getPermalink('/weeklyreport'),
    },
    {
      text: 'Laporan',
      href: getPermalink('/services'), // Bisa digunakan untuk detail data
    },
    {
      text: 'Tentang',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Login', href: '#', variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Exprosig Project',
      links: [
        { text: 'Documentation', href: '#' },
        { text: 'Data Source', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/peptuban22/exprosig' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="#"> Ariswa</a> · All rights reserved.
  `,
};