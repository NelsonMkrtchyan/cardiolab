import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Show only these document types in the Studio
      S.listItem()
        .title('Staff')
        .schemaType('staff')
        .child(S.documentTypeList('staff').title('Staff Members')),

      S.listItem()
        .title('Services')
        .schemaType('service')
        .child(S.documentTypeList('service').title('Services')),

      S.listItem()
        .title('Podcasts')
        .schemaType('podcast')
        .child(S.documentTypeList('podcast').title('Podcasts')),

      S.listItem()
        .title('Gallery')
        .schemaType('gallery')
        .child(S.documentTypeList('gallery').title('Gallery')),

      S.listItem()
        .title('About Us Page')
        .schemaType('aboutPage')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),

      S.listItem()
        .title('Contact Us Page')
        .schemaType('contactPage')
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage')
        ),

      // Divider
      S.divider(),

      // Hidden sections (commented out, but kept for reference)
      // - News & Articles (news)
      // - Patient Guide (patientGuide)
      // - Doctor Guide (doctorGuide)
      // - Saved GROQ Queries (savedQuery)
    ]);
