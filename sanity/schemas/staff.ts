import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'staff',
  title: 'Staff Members',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Staff ID',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'object',
      fields: [
        { name: 'am', title: 'Armenian', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ru', title: 'Russian', type: 'string' },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'object',
      fields: [
        { name: 'am', title: 'Armenian', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ru', title: 'Russian', type: 'string' },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Medical', value: 'medical' },
          { title: 'Nursing', value: 'nursing' },
          { title: 'Administrative', value: 'administrative' },
        ],
      },
    }),
    defineField({
      name: 'visibility',
      title: 'Visibility Settings',
      type: 'object',
      fields: [
        {
          name: 'showInStaffPage',
          title: 'Show in Staff Page',
          type: 'boolean',
          initialValue: true,
          description: 'Display this staff member in the staff listing page',
        },
        {
          name: 'showInLandingPage',
          title: 'Show in Landing Page',
          type: 'boolean',
          initialValue: true,
          description: 'Display this staff member in the landing page "Meet Our Staff" section',
        },
      ],
      initialValue: {
        showInStaffPage: true,
        showInLandingPage: true,
      },
    }),
    defineField({
      name: 'personalInfo',
      title: 'Personal Information',
      type: 'object',
      fields: [
        {
          name: 'flags',
          title: 'Display Flags',
          type: 'object',
          fields: [
            { name: 'showBio', title: 'Show Biography', type: 'boolean', initialValue: false },
            { name: 'showExperience', title: 'Show Experience', type: 'boolean', initialValue: false },
            { name: 'showEducation', title: 'Show Education', type: 'boolean', initialValue: false },
            { name: 'showPublications', title: 'Show Publications', type: 'boolean', initialValue: false },
            { name: 'showAchievements', title: 'Show Achievements', type: 'boolean', initialValue: false },
            { name: 'showLanguages', title: 'Show Languages', type: 'boolean', initialValue: false },
            { name: 'showMemberships', title: 'Show Memberships', type: 'boolean', initialValue: false },
            { name: 'showHobbies', title: 'Show Hobbies', type: 'boolean', initialValue: false },
            { name: 'showAcademicActivities', title: 'Show Academic Activities', type: 'boolean', initialValue: false },
            { name: 'showContact', title: 'Show Contact', type: 'boolean', initialValue: false },
            { name: 'showSocial', title: 'Show Social Media', type: 'boolean', initialValue: false },
            { name: 'showSpecialties', title: 'Show Specialties', type: 'boolean', initialValue: false },
          ],
        },
        {
          name: 'am',
          title: 'Armenian Content',
          type: 'object',
          fields: [
            { name: 'bio', title: 'Biography', type: 'text' },
            {
              name: 'contact',
              title: 'Contact Information',
              type: 'object',
              fields: [
                { name: 'phone', title: 'Phone', type: 'string' },
                { name: 'email', title: 'Email', type: 'string' },
                { name: 'location', title: 'Location', type: 'string' },
              ],
            },
            {
              name: 'social',
              title: 'Social Media',
              type: 'object',
              fields: [
                { name: 'linkedin', title: 'LinkedIn', type: 'url' },
                { name: 'twitter', title: 'Twitter', type: 'url' },
              ],
            },
            {
              name: 'specialties',
              title: 'Specialties',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'experience',
              title: 'Experience',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'period', title: 'Period', type: 'string' },
                  { name: 'title', title: 'Title', type: 'string' },
                  { name: 'organization', title: 'Organization', type: 'string' },
                  { name: 'description', title: 'Description', type: 'text' },
                ],
              }],
            },
            {
              name: 'education',
              title: 'Education',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'year', title: 'Year', type: 'string' },
                  { name: 'degree', title: 'Degree', type: 'string' },
                  { name: 'institution', title: 'Institution', type: 'string' },
                ],
              }],
            },
            {
              name: 'memberships',
              title: 'Memberships',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'hobbies',
              title: 'Hobbies',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'achievements',
              title: 'Achievements',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'title', title: 'Title', type: 'string' },
                  { name: 'description', title: 'Description', type: 'text' },
                  { name: 'organization', title: 'Organization', type: 'string' },
                  { name: 'date', title: 'Date', type: 'string' },
                ],
              }],
            },
            {
              name: 'academicActivities',
              title: 'Academic Activities',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'title', title: 'Title', type: 'string' },
                  { name: 'description', title: 'Description', type: 'text' },
                  { name: 'organization', title: 'Organization', type: 'string' },
                  { name: 'date', title: 'Date', type: 'string' },
                ],
              }],
            },
            {
              name: 'publications',
              title: 'Publications',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'title', title: 'Title', type: 'string' },
                  { name: 'journal', title: 'Journal', type: 'string' },
                  { name: 'description', title: 'Description', type: 'text' },
                  { name: 'year', title: 'Year', type: 'string' },
                  { name: 'url', title: 'URL', type: 'url' },
                ],
              }],
            },
            {
              name: 'languages',
              title: 'Languages',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'language', title: 'Language', type: 'string' },
                  { name: 'level', title: 'Level', type: 'string' },
                ],
              }],
            },
          ],
        },
        {
          name: 'en',
          title: 'English Content',
          type: 'object',
          fields: [
            { name: 'bio', title: 'Biography', type: 'text' },
            {
              name: 'contact',
              title: 'Contact Information',
              type: 'object',
              fields: [
                { name: 'phone', title: 'Phone', type: 'string' },
                { name: 'email', title: 'Email', type: 'string' },
                { name: 'location', title: 'Location', type: 'string' },
              ],
            },
            {
              name: 'social',
              title: 'Social Media',
              type: 'object',
              fields: [
                { name: 'linkedin', title: 'LinkedIn', type: 'url' },
                { name: 'twitter', title: 'Twitter', type: 'url' },
              ],
            },
            {
              name: 'specialties',
              title: 'Specialties',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'experience',
              title: 'Experience',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'period', title: 'Period', type: 'string' },
                  { name: 'title', title: 'Title', type: 'string' },
                  { name: 'organization', title: 'Organization', type: 'string' },
                  { name: 'description', title: 'Description', type: 'text' },
                ],
              }],
            },
            {
              name: 'education',
              title: 'Education',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'year', title: 'Year', type: 'string' },
                  { name: 'degree', title: 'Degree', type: 'string' },
                  { name: 'institution', title: 'Institution', type: 'string' },
                ],
              }],
            },
            {
              name: 'memberships',
              title: 'Memberships',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'hobbies',
              title: 'Hobbies',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'achievements',
              title: 'Achievements',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'title', title: 'Title', type: 'string' },
                  { name: 'description', title: 'Description', type: 'text' },
                  { name: 'organization', title: 'Organization', type: 'string' },
                  { name: 'date', title: 'Date', type: 'string' },
                ],
              }],
            },
            {
              name: 'academicActivities',
              title: 'Academic Activities',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'title', title: 'Title', type: 'string' },
                  { name: 'description', title: 'Description', type: 'text' },
                  { name: 'organization', title: 'Organization', type: 'string' },
                  { name: 'date', title: 'Date', type: 'string' },
                ],
              }],
            },
            {
              name: 'publications',
              title: 'Publications',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'title', title: 'Title', type: 'string' },
                  { name: 'journal', title: 'Journal', type: 'string' },
                  { name: 'description', title: 'Description', type: 'text' },
                  { name: 'year', title: 'Year', type: 'string' },
                  { name: 'url', title: 'URL', type: 'url' },
                ],
              }],
            },
            {
              name: 'languages',
              title: 'Languages',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'language', title: 'Language', type: 'string' },
                  { name: 'level', title: 'Level', type: 'string' },
                ],
              }],
            },
          ],
        },
        {
          name: 'ru',
          title: 'Russian Content',
          type: 'object',
          fields: [
            { name: 'bio', title: 'Biography', type: 'text' },
            {
              name: 'contact',
              title: 'Contact Information',
              type: 'object',
              fields: [
                { name: 'phone', title: 'Phone', type: 'string' },
                { name: 'email', title: 'Email', type: 'string' },
                { name: 'location', title: 'Location', type: 'string' },
              ],
            },
            {
              name: 'social',
              title: 'Social Media',
              type: 'object',
              fields: [
                { name: 'linkedin', title: 'LinkedIn', type: 'url' },
                { name: 'twitter', title: 'Twitter', type: 'url' },
              ],
            },
            {
              name: 'specialties',
              title: 'Specialties',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'experience',
              title: 'Experience',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'period', title: 'Period', type: 'string' },
                  { name: 'title', title: 'Title', type: 'string' },
                  { name: 'organization', title: 'Organization', type: 'string' },
                  { name: 'description', title: 'Description', type: 'text' },
                ],
              }],
            },
            {
              name: 'education',
              title: 'Education',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'year', title: 'Year', type: 'string' },
                  { name: 'degree', title: 'Degree', type: 'string' },
                  { name: 'institution', title: 'Institution', type: 'string' },
                ],
              }],
            },
            {
              name: 'memberships',
              title: 'Memberships',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'hobbies',
              title: 'Hobbies',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'achievements',
              title: 'Achievements',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'title', title: 'Title', type: 'string' },
                  { name: 'description', title: 'Description', type: 'text' },
                  { name: 'organization', title: 'Organization', type: 'string' },
                  { name: 'date', title: 'Date', type: 'string' },
                ],
              }],
            },
            {
              name: 'academicActivities',
              title: 'Academic Activities',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'title', title: 'Title', type: 'string' },
                  { name: 'description', title: 'Description', type: 'text' },
                  { name: 'organization', title: 'Organization', type: 'string' },
                  { name: 'date', title: 'Date', type: 'string' },
                ],
              }],
            },
            {
              name: 'publications',
              title: 'Publications',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'title', title: 'Title', type: 'string' },
                  { name: 'journal', title: 'Journal', type: 'string' },
                  { name: 'description', title: 'Description', type: 'text' },
                  { name: 'year', title: 'Year', type: 'string' },
                  { name: 'url', title: 'URL', type: 'url' },
                ],
              }],
            },
            {
              name: 'languages',
              title: 'Languages',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'language', title: 'Language', type: 'string' },
                  { name: 'level', title: 'Level', type: 'string' },
                ],
              }],
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name.en',
      subtitle: 'role.en',
      media: 'image',
    },
  },
});
