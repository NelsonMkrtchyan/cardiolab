import { defineType, defineField } from 'sanity';

// Helper to create multilingual text field
const multilingualText = (name: string, title: string, required = false) => ({
  name,
  title,
  type: 'object' as const,
  fields: [
    { name: 'am', title: 'Armenian', type: 'text' as const, validation: required ? (Rule: any) => Rule.required() : undefined },
    { name: 'en', title: 'English', type: 'text' as const },
    { name: 'ru', title: 'Russian', type: 'text' as const },
  ],
  validation: required ? (Rule: any) => Rule.required() : undefined,
});

// Helper to create multilingual string field
const multilingualString = (name: string, title: string, required = false) => ({
  name,
  title,
  type: 'object' as const,
  fields: [
    { name: 'am', title: 'Armenian', type: 'string' as const, validation: required ? (Rule: any) => Rule.required() : undefined },
    { name: 'en', title: 'English', type: 'string' as const },
    { name: 'ru', title: 'Russian', type: 'string' as const },
  ],
  validation: required ? (Rule: any) => Rule.required() : undefined,
});

export default defineType({
  name: 'aboutPage',
  title: 'About Us Page',
  type: 'document',
  // Singleton - only one instance allowed
  __experimental_singleton: true,
  fields: [
    // ============================================
    // MAIN ABOUT SECTION
    // ============================================
    defineField({
      name: 'mainSection',
      title: 'Main About Section',
      type: 'object',
      description: 'The main about content section with image and text',
      fields: [
        multilingualString('title', 'Title', true),
        multilingualText('description', 'Description', true),
        {
          name: 'image',
          title: 'Main Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Main image displayed in the about section',
        },
        {
          name: 'signature',
          title: 'Signature Block',
          type: 'object',
          description: 'Signature information at the bottom of the section',
          fields: [
            multilingualString('name', 'Name', true),
            multilingualString('organization', 'Organization', true),
            multilingualString('position', 'Position/Title', true),
          ],
        },
      ],
    }),

    // ============================================
    // MISSION SECTION
    // ============================================
    defineField({
      name: 'mission',
      title: 'Mission Section',
      type: 'object',
      fields: [
        multilingualString('title', 'Title', true),
        multilingualText('description', 'Description', true),
        {
          name: 'order',
          title: 'Display Order',
          type: 'number',
          description: 'Order in which this section appears (lower numbers first)',
          initialValue: 1,
          validation: (Rule) => Rule.required().min(1),
        },
      ],
    }),

    // ============================================
    // VISION SECTION
    // ============================================
    defineField({
      name: 'vision',
      title: 'Vision Section',
      type: 'object',
      fields: [
        multilingualString('title', 'Title', true),
        multilingualText('description', 'Description', true),
        {
          name: 'order',
          title: 'Display Order',
          type: 'number',
          description: 'Order in which this section appears (lower numbers first)',
          initialValue: 2,
          validation: (Rule) => Rule.required().min(1),
        },
      ],
    }),

    // ============================================
    // STRATEGIC PRIORITIES SECTION
    // ============================================
    defineField({
      name: 'strategicPriorities',
      title: 'Strategic Priorities Section',
      type: 'object',
      fields: [
        multilingualString('title', 'Section Title', true),
        {
          name: 'items',
          title: 'Priority Items',
          type: 'array',
          description: 'List of strategic priorities',
          of: [
            {
              type: 'object',
              fields: [
                multilingualString('text', 'Priority Text', true),
              ],
              preview: {
                select: {
                  title: 'text.en',
                  subtitle: 'text.am',
                },
              },
            },
          ],
        },
        {
          name: 'order',
          title: 'Display Order',
          type: 'number',
          description: 'Order in which this section appears (lower numbers first)',
          initialValue: 3,
          validation: (Rule) => Rule.required().min(1),
        },
      ],
    }),

    // ============================================
    // CORE VALUES SECTION
    // ============================================
    defineField({
      name: 'coreValues',
      title: 'Core Values Section',
      type: 'object',
      fields: [
        multilingualString('title', 'Section Title', true),
        {
          name: 'values',
          title: 'Core Values',
          type: 'array',
          description: 'List of core organizational values',
          of: [
            {
              type: 'object',
              fields: [
                multilingualString('title', 'Value Title', true),
                multilingualText('description', 'Value Description', true),
              ],
              preview: {
                select: {
                  title: 'title.en',
                  subtitle: 'title.am',
                },
              },
            },
          ],
        },
        {
          name: 'order',
          title: 'Display Order',
          type: 'number',
          description: 'Order in which this section appears (lower numbers first)',
          initialValue: 4,
          validation: (Rule) => Rule.required().min(1),
        },
      ],
    }),

    // ============================================
    // SATISFACTION SURVEY SECTION
    // ============================================
    defineField({
      name: 'satisfactionSurvey',
      title: 'Patient Satisfaction Survey',
      type: 'object',
      fields: [
        multilingualString('title', 'Section Title', true),
        multilingualString('buttonText', 'Button Text', true),
        {
          name: 'surveyUrl',
          title: 'Survey URL',
          type: 'url',
          description: 'Link to the Google Forms survey',
          validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
        },
        {
          name: 'showSection',
          title: 'Show This Section',
          type: 'boolean',
          description: 'Toggle to show or hide the satisfaction survey section',
          initialValue: true,
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'mainSection.title.en',
    },
    prepare(selection) {
      return {
        title: 'About Us Page',
        subtitle: selection.title || 'Configure About Us page content',
      };
    },
  },
});
