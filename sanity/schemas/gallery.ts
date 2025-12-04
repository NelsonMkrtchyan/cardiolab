import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Gallery ID',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
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
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'object',
              fields: [
                { name: 'am', title: 'Armenian', type: 'string' },
                { name: 'en', title: 'English', type: 'string' },
                { name: 'ru', title: 'Russian', type: 'string' },
              ],
            },
          ],
        },
      ],
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
