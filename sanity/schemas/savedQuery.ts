import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'savedQuery',
  title: 'Saved GROQ Queries',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Query Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Human-readable name for the query',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Staff', value: 'staff' },
          { title: 'Services', value: 'services' },
          { title: 'Gallery', value: 'gallery' },
          { title: 'Validation', value: 'validation' },
          { title: 'Audit', value: 'audit' },
          { title: 'Localization', value: 'localization' },
          { title: 'Advanced', value: 'advanced' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'What does this query do?',
    }),
    defineField({
      name: 'query',
      title: 'GROQ Query',
      type: 'text',
      rows: 10,
      description: 'Write your GROQ query here',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'useCase',
      title: 'Use Case',
      type: 'text',
      description: 'When and why would you use this query?',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display (lower numbers first)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.category,
      };
    },
  },
});
