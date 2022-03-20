if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
  window.__btn_switch = "Dark";
} else {
  document.documentElement.classList.remove('dark');
  window.__btn_switch = "Light";
}