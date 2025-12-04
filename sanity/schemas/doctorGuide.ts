import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'doctorGuide',
  title: 'Doctor Guide',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Guide ID',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Useful Materials', value: 'useful-materials' },
          { title: 'Accredited Trainings', value: 'accredited-trainings' },
          { title: 'Seminars', value: 'seminars' },
          { title: 'Job Openings', value: 'job-openings' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        { name: 'am', title: 'Armenian', type: 'array', of: [{ type: 'block' }] },
        { name: 'en', title: 'English', type: 'array', of: [{ type: 'block' }] },
        { name: 'ru', title: 'Russian', type: 'array', of: [{ type: 'block' }] },
      ],
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'datetime',
      description: 'For seminars and trainings',
      hidden: ({ parent }) =>
        parent?.category !== 'seminars' && parent?.category !== 'accredited-trainings',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        { name: 'am', title: 'Armenian', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ru', title: 'Russian', type: 'string' },
      ],
      hidden: ({ parent }) =>
        parent?.category !== 'seminars' && parent?.category !== 'accredited-trainings',
    }),
    defineField({
      name: 'attachment',
      title: 'Attachment',
      type: 'file',
      description: 'PDF, DOC, or other document',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
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
      subtitle: 'category',
    },
  },
});
