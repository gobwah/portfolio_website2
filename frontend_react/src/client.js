import { createImageUrlBuilder } from '@sanity/image-url'
import { projectId, dataset } from '../sanity/env'

const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source) =>
    source ? builder.image(source).url() : undefined
