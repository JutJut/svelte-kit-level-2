(function() {
  let userTheme;

  const setTheme = (theme) => {
    window.__theme = theme;
    userTheme = theme;
    document.documentElement.dataset.theme = theme;
  }

  window.__setUserTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
  }

  userTheme = localStorage.getItem('theme');

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  prefersDark.addEventListener('change',({matches})=> {
    setTheme(matches ? 'dark' : 'light')
  });

  setTheme(userTheme || (prefersDark.matches ? 'dark' : 'light'));
})();
