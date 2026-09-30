// Runs in <head> before first paint so dark-mode visitors don't see a light flash
export const themeScript = `(function () {
    var theme
    try {
        theme = localStorage.getItem('theme')
    } catch (e) {}
    if (theme !== 'light' && theme !== 'dark') {
        theme =
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }
    document.documentElement.dataset.theme = theme
})()`
