if (
  localStorage.getItem('theme') === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
  window.__btn_switch = "Dark";
} else {
  document.documentElement.classList.remove('dark');
  window.__btn_switch = "Light";
}