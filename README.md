<div align="center">
  <h1>Natpress</h1>
</div>

> Testing Vuepress and building Pupil theme

## Config

### Header
In `config.js` file

```javascript
module.exports = {
  title: '<header title>',
  description: '<description>',
  themeConfig: {
    nav: [
      { text: 'Name', link: '/name' },
      { text: 'Name', link: '/name' },
      { text: 'Name', link: '/name' },
      { text: 'Name', link: '/name' },
      { text: 'Name', link: '/name' },
    ],
    external: [
      { text: 'Name', link: 'https://<url>.com'},
    ]
  }
};
```

### Homepage
Set the frontmatter in the `README.md` in docs folder

```yaml
home: true
heroImage: '/img_path'
heroAlt: 'image alt description'
footer: 'footer description'
```