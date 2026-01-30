import { defineType, defineField } from 'sanity';

// Helper to create multilingual string field
const multilingualString = (name: string, title: string, required = false) => ({
  name,
  title,
  type: 'object' as const,
  fields: [
    {
      name: 'am',
      title: 'Armenian',
      type: 'string' as const,
      validation: required ? (Rule: any) => Rule.required() : undefined,
    },
    { name: 'en', title: 'English', type: 'string' as const },
    { name: 'ru', title: 'Russian', type: 'string' as const },
  ],
  validation: required ? (Rule: any) => Rule.required() : undefined,
});

// Helper to create multilingual text field
const multilingualText = (name: string, title: string, required = false) => ({
  name,
  title,
  type: 'object' as const,
  fields: [
    {
      name: 'am',
      title: 'Armenian',
      type: 'text' as const,
      validation: required ? (Rule: any) => Rule.required() : undefined,
    },
    { name: 'en', title: 'English', type: 'text' as const },
    { name: 'ru', title: 'Russian', type: 'text' as const },
  ],
  validation: required ? (Rule: any) => Rule.required() : undefined,
});

export default defineType({
  name: 'contactPage',
  title: 'Contact Us Page',
  type: 'document',
  // Singleton - only one instance allowed
  __experimental_singleton: true,
  fields: [
    // ============================================
    // CONTACT INFORMATION SECTION
    // ============================================
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      description: 'Address, email, and phone numbers',
      fields: [
        multilingualString('address', 'Address', true),
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule) => Rule.required().email(),
        },
        {
          name: 'phoneNumbers',
          title: 'Phone Numbers',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.required().min(1),
          description: 'List of phone numbers (format: +374 11991180)',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    // ============================================
    // CONTACT FORM SECTION
    // ============================================
    defineField({
      name: 'contactForm',
      title: 'Contact Form Settings',
      type: 'object',
      fields: [
        multilingualText('successMessage', 'Success Message', true),
        {
          name: 'sliderImages',
          title: 'Contact Form Slider Images',
          type: 'array',
          description: 'Images displayed in the slider next to the contact form',
          of: [
            {
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  description: 'Alternative text for accessibility',
                },
              ],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        },
      ],
    }),

    // ============================================
    // MAP SECTION
    // ============================================
    defineField({
      name: 'mapSection',
      title: 'Map Section',
      type: 'object',
      fields: [
        multilingualString('title', 'Section Title', true),
        {
          name: 'googleMapsEmbedUrl',
          title: 'Google Maps Embed URL',
          type: 'url',
          description: 'Full embed URL from Google Maps',
          validation: (Rule) =>
            Rule.required().uri({
              scheme: ['http', 'https'],
            }),
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'contactInfo.email',
    },
    prepare(selection) {
      return {
        title: 'Contact Us Page',
        subtitle: selection.title || 'Configure Contact page content',
      };
    },
  },
});
