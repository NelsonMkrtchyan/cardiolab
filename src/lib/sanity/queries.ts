import { client } from './client';
import { type SanityStaff } from '~/types/staff';
import { type SanityAboutPage } from '~/types/aboutPage';
import { type SanityContactPage } from '~/types/contactPage';

// Staff Queries
export async function getAllStaff(): Promise<SanityStaff[]> {
  return client.fetch(`
    *[_type == "staff"] | order(id asc) {
      _id,
      id,
      name,
      role,
      "image": image.asset->url,
      category,
      visibility,
      personalInfo
    }
  `);
}

export async function getStaffByCategory(category: string): Promise<SanityStaff[]> {
  return client.fetch(
    `
    *[_type == "staff" && category == $category && visibility.showInStaffPage == true] | order(id asc) {
      _id,
      id,
      name,
      role,
      "image": image.asset->url,
      category,
      visibility,
      personalInfo
    }
  `,
    { category }
  );
}

export async function getStaffById(staffId: number): Promise<SanityStaff | null> {
  return client.fetch(
    `
    *[_type == "staff" && id == $staffId][0] {
      _id,
      id,
      name,
      role,
      "image": image.asset->url,
      category,
      visibility,
      personalInfo
    }
  `,
    { staffId }
  );
}

export async function getStaffForLanding(): Promise<SanityStaff[]> {
  return client.fetch(`
    *[_type == "staff" && visibility.showInLandingPage == true] | order(id asc) {
      _id,
      id,
      name,
      role,
      "image": image.asset->url,
      category
    }
  `);
}

// Service Queries
export async function getAllServices() {
  return client.fetch(`
    *[_type == "service"] | order(id asc) {
      _id,
      id,
      slug,
      name,
      description,
      category,
      price,
      hideInServicesPage,
      hideInPriceListPage,
      doneByNurses,
      "doctors": doctors[]->{ id, name, role, "image": image.asset->url, visibility }
    }
  `);
}

export async function getServicesByCategory(category: string) {
  return client.fetch(
    `
    *[_type == "service" && category == $category && hideInServicesPage != true] | order(id asc) {
      _id,
      id,
      slug,
      name,
      description,
      category,
      price,
      "doctors": doctors[]->{ id, name, role, "image": image.asset->url, visibility }
    }
  `,
    { category }
  );
}

export async function getServiceBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "service" && slug.current == $slug][0] {
      _id,
      id,
      slug,
      name,
      description,
      category,
      price,
      doneByNurses,
      "doctors": doctors[]->{ id, name, role, "image": image.asset->url, visibility }
    }
  `,
    { slug }
  );
}

export async function getServicesForPriceList() {
  return client.fetch(`
    *[_type == "service" && hideInPriceListPage != true] | order(category asc, id asc) {
      _id,
      id,
      name,
      category,
      price
    }
  `);
}

// Podcast Queries
export async function getAllPodcasts() {
  return client.fetch(`
    *[_type == "podcast"] | order(publishedAt desc) {
      _id,
      id,
      title,
      description,
      "thumbnail": thumbnail.asset->url,
      audioUrl,
      videoUrl,
      publishedAt,
      duration,
      "hosts": hosts[]->{ id, name, role, "image": image.asset->url },
      tags
    }
  `);
}

export async function getPodcastById(podcastId: number) {
  return client.fetch(
    `
    *[_type == "podcast" && id == $podcastId][0] {
      _id,
      id,
      slug,
      title,
      description,
      "thumbnail": thumbnail.asset->url,
      audioUrl,
      videoUrl,
      publishedAt,
      duration,
      "hosts": hosts[]->{ id, name, role, "image": image.asset->url },
      tags
    }
  `,
    { podcastId }
  );
}

export async function getPodcastBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "podcast" && slug.current == $slug][0] {
      _id,
      id,
      slug,
      title,
      description,
      "thumbnail": thumbnail.asset->url,
      audioUrl,
      videoUrl,
      publishedAt,
      duration,
      "hosts": hosts[]->{ id, name, role, "image": image.asset->url },
      tags
    }
  `,
    { slug }
  );
}

// News Queries
export async function getAllNews() {
  return client.fetch(`
    *[_type == "news"] | order(publishedAt desc) {
      _id,
      id,
      slug,
      title,
      excerpt,
      content,
      "featuredImage": featuredImage.asset->url,
      publishedAt,
      "author": author->{ id, name, role, "image": image.asset->url },
      category,
      tags
    }
  `);
}

export async function getNewsBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "news" && slug.current == $slug][0] {
      _id,
      id,
      slug,
      title,
      excerpt,
      content,
      "featuredImage": featuredImage.asset->url,
      publishedAt,
      "author": author->{ id, name, role, "image": image.asset->url },
      category,
      tags
    }
  `,
    { slug }
  );
}

export async function getNewsByCategory(category: string) {
  return client.fetch(
    `
    *[_type == "news" && category == $category] | order(publishedAt desc) {
      _id,
      id,
      slug,
      title,
      excerpt,
      "featuredImage": featuredImage.asset->url,
      publishedAt,
      "author": author->{ id, name, role },
      category
    }
  `,
    { category }
  );
}

// Gallery Queries
export async function getAllGalleries() {
  return client.fetch(`
    *[_type == "gallery"] | order(order asc, publishedAt desc) {
      _id,
      id,
      slug,
      title,
      description,
      type,
      "images": images[]{ "url": asset->url, caption },
      videos,
      "coverImage": coverImage.asset->url,
      order,
      publishedAt
    }
  `);
}

export async function getGalleryBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "gallery" && slug.current == $slug][0] {
      _id,
      id,
      slug,
      title,
      description,
      type,
      "images": images[]{ "url": asset->url, caption },
      videos,
      "coverImage": coverImage.asset->url,
      publishedAt
    }
  `,
    { slug }
  );
}

export async function getGalleriesByType(type: 'images' | 'videos') {
  return client.fetch(
    `
    *[_type == "gallery" && type == $type] | order(order asc, publishedAt desc) {
      _id,
      id,
      slug,
      title,
      description,
      "coverImage": coverImage.asset->url,
      publishedAt
    }
  `,
    { type }
  );
}

// Patient Guide Queries
export async function getAllPatientGuides() {
  return client.fetch(`
    *[_type == "patientGuide"] | order(order asc, publishedAt desc) {
      _id,
      id,
      slug,
      title,
      category,
      content,
      icon,
      order,
      publishedAt
    }
  `);
}

export async function getPatientGuidesByCategory(category: string) {
  return client.fetch(
    `
    *[_type == "patientGuide" && category == $category] | order(order asc, publishedAt desc) {
      _id,
      id,
      slug,
      title,
      category,
      content,
      icon,
      publishedAt
    }
  `,
    { category }
  );
}

export async function getPatientGuideBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "patientGuide" && slug.current == $slug][0] {
      _id,
      id,
      slug,
      title,
      category,
      content,
      icon,
      publishedAt
    }
  `,
    { slug }
  );
}

// Doctor Guide Queries
export async function getAllDoctorGuides() {
  return client.fetch(`
    *[_type == "doctorGuide"] | order(order asc, publishedAt desc) {
      _id,
      id,
      slug,
      title,
      category,
      content,
      eventDate,
      location,
      "attachment": attachment.asset->url,
      externalUrl,
      order,
      publishedAt
    }
  `);
}

export async function getDoctorGuidesByCategory(category: string) {
  return client.fetch(
    `
    *[_type == "doctorGuide" && category == $category] | order(order asc, eventDate desc, publishedAt desc) {
      _id,
      id,
      slug,
      title,
      category,
      content,
      eventDate,
      location,
      "attachment": attachment.asset->url,
      externalUrl,
      publishedAt
    }
  `,
    { category }
  );
}

export async function getDoctorGuideBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "doctorGuide" && slug.current == $slug][0] {
      _id,
      id,
      slug,
      title,
      category,
      content,
      eventDate,
      location,
      "attachment": attachment.asset->url,
      externalUrl,
      publishedAt
    }
  `,
    { slug }
  );
}

// About Page Queries
export async function getAboutPage(): Promise<SanityAboutPage | null> {
  return client.fetch(`
    *[_type == "aboutPage"][0] {
      _id,
      _type,
      mainSection {
        title,
        description,
        "image": image.asset->url,
        signature
      },
      mission {
        title,
        description,
        order
      },
      vision {
        title,
        description,
        order
      },
      strategicPriorities {
        title,
        items,
        order
      },
      coreValues {
        title,
        values,
        order
      },
      satisfactionSurvey {
        title,
        buttonText,
        surveyUrl,
        showSection
      }
    }
  `);
}

// Contact Page Queries
export async function getContactPage(): Promise<SanityContactPage | null> {
  return client.fetch(`
    *[_type == "contactPage"][0] {
      _id,
      _type,
      contactInfo {
        address,
        email,
        phoneNumbers
      },
      contactForm {
        successMessage,
        "sliderImages": sliderImages[]{ "url": asset->url, alt }
      },
      mapSection {
        title,
        googleMapsEmbedUrl
      }
    }
  `);
}
