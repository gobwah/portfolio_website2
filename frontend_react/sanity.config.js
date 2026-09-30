'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import schemaTypes from './sanity/schemas/schema'
import { projectId, dataset, apiVersion } from './sanity/env'

export default defineConfig({
    title: 'gobwah_portfolio Studio',
    basePath: '/studio',
    projectId,
    dataset,
    plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
    schema: {
        types: schemaTypes,
    },
})
