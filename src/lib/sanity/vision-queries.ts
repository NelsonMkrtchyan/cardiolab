/**
 * Vision Queries Reference
 *
 * These are common GROQ queries useful for data validation, auditing,
 * and exploration in Sanity Vision tab at /studio
 *
 * Copy the query string and paste it into Vision to run it.
 */

// ============================================================================
// STAFF QUERIES
// ============================================================================

export const STAFF_QUERIES = {
  allMedicalStaff: `
    *[_type == "staff" && category == "medical"] {
      id,
      name,
      role,
      category,
      visibility,
      "hasAcademicActivities": defined(personalInfo.academicActivities) && personalInfo.academicActivities.length > 0
    }
  `,

  staffByCategory: `
    *[_type == "staff"] {
      category,
      "count": count(*)
    }
  `,

  staffWithAcademicActivities: `
    *[_type == "staff" && defined(personalInfo.academicActivities) && personalInfo.academicActivities.length > 0] {
      id,
      name,
      "academicActivityCount": personalInfo.academicActivities.length
    }
  `,

  staffVisibleOnLanding: `
    *[_type == "staff" && visibility.showInLandingPage == true] {
      id,
      name,
      category
    }
  `,

  staffWithoutImages: `
    *[_type == "staff" && !defined(image)] {
      id,
      name,
      role,
      category
    }
  `,

  visibilityStructure: `
    *[_type == "staff"] {
      id,
      name,
      visibility
    } | limit(5)
  `,

  allNursingStaff: `
    *[_type == "staff" && category == "nursing"] {
      id,
      name,
      role,
      visibility
    }
  `,

  allAdministrativeStaff: `
    *[_type == "staff" && category == "administrative"] {
      id,
      name,
      role
    }
  `,

  staffWithContact: `
    *[_type == "staff" && defined(personalInfo.flags.showContact) && personalInfo.flags.showContact == true] {
      id,
      name,
      "contactInfo": personalInfo.am.contact
    } | limit(10)
  `,
};

// ============================================================================
// SERVICE QUERIES
// ============================================================================

export const SERVICE_QUERIES = {
  allServicesWithDoctors: `
    *[_type == "service"] {
      id,
      name,
      category,
      price,
      "doctorCount": length(doctors),
      hideInServicesPage,
      hideInPriceListPage
    }
  `,

  servicesByCategory: `
    *[_type == "service" && category == "consultation"] {
      id,
      name,
      price,
      "doctors": doctors[]->{name, role}
    }
  `,

  servicesHiddenFromPriceList: `
    *[_type == "service" && hideInPriceListPage == true] {
      id,
      name,
      price
    }
  `,

  servicesDoneByNurses: `
    *[_type == "service" && doneByNurses == true] {
      id,
      name,
      price,
      category
    }
  `,

  servicesByCategory2: `
    *[_type == "service"] {
      category
    } | group(_._key) | map({
      "category": @[0].category,
      "count": length(@)
    })
  `,

  servicesWithoutDoctors: `
    *[_type == "service" && (!defined(doctors) || length(doctors) == 0)] {
      id,
      name,
      category
    }
  `,

  totalServiceCount: `
    *[_type == "service"] {
      "totalServices": count(*)
    }
  `,

  servicesByPriceRange: `
    *[_type == "service"] | group(price) | map({
      "price": @[0].price,
      "count": length(@),
      "services": @[].name
    })
  `,
};

// ============================================================================
// GALLERY QUERIES
// ============================================================================

export const GALLERY_QUERIES = {
  allGalleriesByType: `
    *[_type == "gallery"] {
      id,
      type,
      title,
      "itemCount": length(images) + length(videos)
    }
  `,

  imageGalleries: `
    *[_type == "gallery" && type == "images"] {
      id,
      title,
      "imageCount": length(images),
      "coverImage": images[0]
    }
  `,

  podcastGalleries: `
    *[_type == "gallery" && type == "podcasts"] {
      id,
      title,
      "podcastCount": length(videos),
      "hosts": hosts[]->{name}
    }
  `,

  allImages: `
    *[_type == "gallery" && type == "images"]{
      images[]
    } | length(@)
  `,

  allVideos: `
    *[_type == "gallery" && type == "podcasts"]{
      videos[]
    } | length(@)
  `,
};

// ============================================================================
// DATA VALIDATION QUERIES
// ============================================================================

export const VALIDATION_QUERIES = {
  allCategoryValues: `
    *[_type == "staff"] {
      "category": category
    } | unique() {
      category
    }
  `,

  missingRequiredFields: `
    *[_type == "staff" && (!defined(id) || !defined(name) || !defined(category))] {
      id,
      name,
      category,
      "_issues": [
        !defined(id) => "Missing ID",
        !defined(name) => "Missing Name",
        !defined(category) => "Missing Category"
      ]
    }
  `,

  visibilityFlagsSummary: `
    *[_type == "staff"] {
      id,
      name,
      visibility
    }
  `,

  staffWithoutPersonalInfo: `
    *[_type == "staff" && !defined(personalInfo)] {
      id,
      name,
      "needsPersonalInfo": true
    }
  `,
};

// ============================================================================
// CONTENT AUDIT QUERIES
// ============================================================================

export const AUDIT_QUERIES = {
  documentCountByType: `
    *[] | group(_type) | map({
      "type": _key,
      "count": length(@)
    })
  `,

  recentlyModified: `
    *[] | sort(_updatedAt desc) | limit(20) {
      _type,
      _updatedAt,
      "title": name || title || slug
    }
  `,

  documentsWithoutImages: `
    *[_type == "staff" || _type == "service"] | select(!defined(image)) {
      _type,
      id,
      "name": name || title,
      "needsImage": true
    }
  `,

  createdToday: `
    *[dateTime(_createdAt) > dateTime(now()) - 86400000] {
      _type,
      _createdAt,
      "title": name || title || id
    }
  `,

  documentSizeAnalysis: `
    *[_type == "staff"] | map({
      "id": id,
      "name": name,
      "size": length(.)
    }) | sort(size desc) | limit(10)
  `,
};

// ============================================================================
// LOCALIZATION QUERIES
// ============================================================================

export const LOCALIZATION_QUERIES = {
  staffLanguageAvailability: `
    *[_type == "staff"] {
      id,
      name,
      "languages": [
        defined(personalInfo.am) => "Armenian",
        defined(personalInfo.en) => "English",
        defined(personalInfo.ru) => "Russian"
      ]
    }
  `,

  missingTranslations: `
    *[_type == "staff" && !defined(personalInfo.en)] {
      id,
      name,
      "missingLanguages": [
        !defined(personalInfo.en) => "English",
        !defined(personalInfo.ru) => "Russian"
      ]
    }
  `,
};

// ============================================================================
// ADVANCED QUERIES
// ============================================================================

export const ADVANCED_QUERIES = {
  staffWithMostActivities: `
    *[_type == "staff"] {
      id,
      name,
      "activitiesCount": length(personalInfo.academicActivities)
    } | sort(activitiesCount desc) | limit(10)
  `,

  servicesWithMostDoctors: `
    *[_type == "service"] {
      id,
      name,
      "doctorCount": length(doctors)
    } | sort(doctorCount desc)
  `,

  staffVisibilityReport: `
    *[_type == "staff"] {
      id,
      name,
      "visibleInStaffPage": visibility.showInStaffPage,
      "visibleInLandingPage": visibility.showInLandingPage
    }
  `,

  categoryDistribution: `
    *[_type == "staff"] | group(category) | map({
      "category": @[0].category,
      "count": length(@),
      "staff": @[].name
    })
  `,
};

/**
 * Helper to get all queries organized by type
 */
export const ALL_VISION_QUERIES = {
  staff: STAFF_QUERIES,
  services: SERVICE_QUERIES,
  gallery: GALLERY_QUERIES,
  validation: VALIDATION_QUERIES,
  audit: AUDIT_QUERIES,
  localization: LOCALIZATION_QUERIES,
  advanced: ADVANCED_QUERIES,
};
