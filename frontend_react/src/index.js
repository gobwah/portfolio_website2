import { createRoot } from 'react-dom/client'

import App from './App'
import { LanguageProvider } from './i18n'
import { ThemeProvider } from './theme'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <ThemeProvider>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </ThemeProvider>
)
