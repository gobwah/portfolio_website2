import { createRoot } from 'react-dom/client'

import App from './App'
import { LanguageProvider } from './i18n'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <LanguageProvider>
        <App />
    </LanguageProvider>
)
