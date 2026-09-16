import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemaTypes from './schemas/schema'

export default defineConfig({
  title: 'gobwah_portfolio Studio',
  projectId: 'bgu6nodr',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
