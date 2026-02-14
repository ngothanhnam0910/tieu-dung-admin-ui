export function ThemeScript() {
  const code = `(() => {
  try {
    const key = 'td_theme';
    const saved = localStorage.getItem(key);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  } catch (e) {}
})();`;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
