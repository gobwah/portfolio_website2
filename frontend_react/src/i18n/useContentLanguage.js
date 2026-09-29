// Current site language for picking translated Sanity fields.
// Placeholder until the EN/FR switch (PR #1) lands; then replace with:
//   import { useLanguage } from './LanguageContext'
//   const useContentLanguage = () => useLanguage().language
const useContentLanguage = () => 'en'

export default useContentLanguage
