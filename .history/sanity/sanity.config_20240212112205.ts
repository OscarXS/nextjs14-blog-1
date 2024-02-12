import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '/sa'
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
