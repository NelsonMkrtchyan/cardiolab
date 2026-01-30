import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Service ID',
      type: 'number',
      hidden: true, // Hide from editors
      readOnly: true, // Prevent manual editing
      validation: (Rule) => Rule.required(),
      initialValue: async (_, context) => {
        // Auto-generate next available ID
        const client = context.getClient({ apiVersion: '2024-01-01' });
        const query = '*[_type == "service"] | order(id desc) [0].id';
        const maxId = await client.fetch(query);
        return (maxId || 0) + 1;
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Click "Generate" after entering the service name',
      options: {
        source: (doc: any) => doc?.name?.en || doc?.name?.am || 'service',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .slice(0, 96),
      },
    }),
    defineField({
      name: 'name',
      title: 'Service Name',
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
      description: 'Optional multilingual service description',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Consultation', value: 'consultation' },
          { title: 'Cardiac Care', value: 'cardiac-care' },
          { title: 'Ultrasound', value: 'ultrasound' },
          { title: 'Duplex Scan', value: 'duplex-scan' },
          { title: 'Preventive Screening', value: 'preventive-screening' },
        ],
      },
    }),
    defineField({
      name: 'price',
      title: 'Price (AMD)',
      type: 'number',
    }),
    defineField({
      name: 'hideInServicesPage',
      title: 'Hide in Services Page',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'hideInPriceListPage',
      title: 'Hide in Price List Page',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'doneByNurses',
      title: 'Performed by Nurses',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'doctors',
      title: 'Associated Doctors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'staff' }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name.en',
      subtitle: 'category',
      price: 'price',
    },
    prepare({ title, subtitle, price }) {
      return {
        title: title || 'Untitled',
        subtitle: `${subtitle} - ${price ? `${price} AMD` : 'No price'}`,
      };
    },
  },
});
