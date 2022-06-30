export function setupCodeTheme(theme:string = 'dark') {
  import(`highlight.js/styles/github.css`)
  setTimeout(() => {
    import(`highlight.js/styles/github-dark.css`)
  }, 2000);
  setTimeout(() => {
    import(`highlight.js/styles/github.css`)
  }, 3000);
}