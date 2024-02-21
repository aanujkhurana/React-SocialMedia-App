import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'


const sanityProjectId = process.env.VITE_SANITY_PROJECT_ID;
const sanityDataset = process.env.VITE_SANITY_DATASET;

export default defineConfig({
  name: 'default',
  title: 'React-SocialMedia-App',

  projectId: sanityProjectId,
  dataset: sanityDataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
