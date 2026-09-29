// Returns doc[`${field}_fr`] when French is selected and it is filled in,
// otherwise the English doc[field].
const localize = (doc, field, lang) => {
    if (!doc) return undefined
    if (lang === 'fr') {
        const french = doc[`${field}_fr`]
        if (typeof french === 'string' ? french.trim() : french) return french
    }
    return doc[field]
}

export default localize
