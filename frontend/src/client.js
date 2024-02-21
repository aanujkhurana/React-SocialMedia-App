import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const sanityProjectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const sanityToken = import.meta.env.VITE_SANITY_TOKEN;
const sanityDataset = import.meta.env.VITE_SANITY_DATASET;

export const client = createClient({
    projectId: sanityProjectId,
    token: sanityToken,
    dataset: sanityDataset,
    apiVersion: '2021-08-31',
    useCdn: true,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

