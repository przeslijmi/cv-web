
export function scrollToElement(id: string, offset = 0) {
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

export function setHtmlThemeTo(newTheme: 'dark'|'light') {
  const html = document.documentElement;
  html.classList.remove(newTheme === 'dark' ? 'light' : 'dark');
  html.classList.add(newTheme);
}
