import {defineConfig} from 'sanity/lib/exports'
import {structureTool} from 'sanity/structure'
import {visionTool} from 'sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'nextjs-14-blog',

  projectId: 'lz6wg4y7',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
