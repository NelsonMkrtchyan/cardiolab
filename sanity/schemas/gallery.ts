import { defineType, defineField } from 'sanity';
import { MultiImageInput } from '../components/MultiImageInput';

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Gallery ID',
      type: 'number',
      hidden: true,
      readOnly: true,
      validation: (Rule) => Rule.required(),
      initialValue: async (_, context) => {
        const client = context.getClient({ apiVersion: '2024-01-01' });
        const query = '*[_type == "gallery"] | order(id desc) [0].id';
        const maxId = await client.fetch(query);
        return (maxId || 0) + 1;
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      hidden: true,
      options: {
        source: (doc: any) => doc?.title?.en || doc?.title?.am || 'gallery',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
      initialValue: (_, context) => ({
        _type: 'slug',
        current: `gallery-${Date.now()}`,
      }),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'am', title: 'Armenian', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
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
      name: 'type',
      title: 'Gallery Type',
      type: 'string',
      options: {
        list: [
          { title: 'Images', value: 'images' },
          { title: 'Videos', value: 'videos' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      description: 'Upload multiple images at once using the button above',
      components: {
        input: MultiImageInput,
      },
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
            accept: 'image/*',
          },
          fields: [
            {
              name: 'caption',
              title: 'Caption (Optional)',
              type: 'object',
              description: 'Leave empty if no caption is needed',
              fields: [
                {
                  name: 'am',
                  title: 'Armenian',
                  type: 'string',
                  initialValue: '',
                },
                {
                  name: 'en',
                  title: 'English',
                  type: 'string',
                  initialValue: '',
                },
                {
                  name: 'ru',
                  title: 'Russian',
                  type: 'string',
                  initialValue: '',
                },
              ],
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
      hidden: ({ parent }) => parent?.type !== 'images',
    }),
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'url', title: 'Video URL', type: 'url' },
            {
              name: 'title',
              title: 'Title',
              type: 'object',
              fields: [
                { name: 'am', title: 'Armenian', type: 'string' },
                { name: 'en', title: 'English', type: 'string' },
                { name: 'ru', title: 'Russian', type: 'string' },
              ],
            },
            { name: 'thumbnail', title: 'Thumbnail', type: 'image' },
          ],
        },
      ],
      hidden: ({ parent }) => parent?.type !== 'videos',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'type',
      media: 'coverImage',
    },
  },
});
