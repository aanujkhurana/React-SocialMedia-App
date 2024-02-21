import { defineCliConfig } from 'sanity/cli'

const sanityProjectId = process.env.VITE_SANITY_PROJECT_ID;
const sanityDataset = process.env.VITE_SANITY_DATASET;

export default defineCliConfig({
  api: {
    projectId: sanityProjectId,
    dataset: sanityDataset,
  }
})
