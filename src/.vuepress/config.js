module.exports = {
  title: 'Pupil Labs',
  description: 'Pupil Labs website',
  themeConfig: {
    nav: [
      { text: 'Products', link: '/products/' },
      { text: 'Learn', link: '/learn/' },
      { text: 'News', link: '/news/' },
      { text: 'Careers', link: '/careers/' },
    ],
    // external: [
    //   { text: 'Sign in', link: 'https://cloud.pupil-labs.com/sign-in'},
    //   { text: 'Sign up', link: 'https://cloud.pupil-labs.com/sign-up', button: 'fill' },
    // ]
  },
  plugins: [
    ['@vuepress/blog',{ permalink: '/news/:year/:month/:slug' }],
    ['@vuepress/pagination', { perPagePosts: '10' }],
    ['axios']
  ]

  // permalink: '/:year/:month/:day/:slug'
};