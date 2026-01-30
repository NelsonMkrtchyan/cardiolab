import { defineType, defineField } from 'sanity';
import { AutoSlugInput } from '../components/AutoSlugInput';

export default defineType({
  name: 'podcast',
  title: 'Podcasts',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Podcast ID',
      type: 'number',
      hidden: true, // Hide from editors
      readOnly: true, // Prevent manual editing
      validation: (Rule) => Rule.required(),
      initialValue: async (_, context) => {
        // Auto-generate next available ID
        const client = context.getClient({ apiVersion: '2024-01-01' });
        const query = '*[_type == "podcast"] | order(id desc) [0].id';
        const maxId = await client.fetch(query);
        return (maxId || 0) + 1;
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      hidden: true,
      components: {
        input: AutoSlugInput,
      },
      options: {
        source: (doc: any) => doc?.title?.en || doc?.title?.am || 'podcast',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'am', title: 'Armenian', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'en', title: 'English', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'ru', title: 'Russian', type: 'string' },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        { name: 'am', title: 'Armenian', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
        { name: 'ru', title: 'Russian', type: 'text' },
      ],
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'audioUrl',
      title: 'Audio URL',
      type: 'url',
      description: 'External audio file URL (e.g., SoundCloud, Spotify)',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube or Vimeo URL',
      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      hidden: true, // Hide from editors
      description: 'e.g., "45:30"',
    }),
    defineField({
      name: 'hosts',
      title: 'Hosts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'staff' }],
        },
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'publishedAt',
      media: 'thumbnail',
    },
  },
});
