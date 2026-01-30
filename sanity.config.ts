import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { media } from 'sanity-plugin-media';
import { schemaTypes } from './sanity/schemaTypes';
import { structure } from './sanity/studioStructure';

export default defineConfig({
  name: 'cardiolab',
  title: 'CardioLab CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
    media(),
  ],
  schema: {
    types: schemaTypes,
  },
});
