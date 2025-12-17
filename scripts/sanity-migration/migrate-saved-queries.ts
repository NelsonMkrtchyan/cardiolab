/**
 * Migration script to populate Sanity with saved GROQ queries
 * These queries will be visible in the Studio and easily copyable
 *
 * Usage:
 * npx tsx scripts/sanity-migration/migrate-saved-queries.ts
 */

import "./load-env";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-12-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const queries = [
  // STAFF QUERIES
  {
    title: "All Medical Staff",
    category: "staff",
    description: "Get all medical staff with full details",
    query: `*[_type == "staff" && category == "medical"] {
  id,
  name,
  role,
  category,
  visibility,
  "hasAcademicActivities": defined(personalInfo.academicActivities) && personalInfo.academicActivities.length > 0
}`,
    useCase: "Find all doctors and medical professionals in the system",
    order: 1,
  },
  {
    title: "Staff by Category",
    category: "staff",
    description: "Count staff members in each category",
    query: `*[_type == "staff"] {
  category,
  "count": count(*)
}`,
    useCase: "Get statistics on staff distribution across categories",
    order: 2,
  },
  {
    title: "Staff Without Images",
    category: "staff",
    description: "Find staff members missing profile images",
    query: `*[_type == "staff" && !defined(image)] {
  id,
  name,
  role,
  category
}`,
    useCase: "Identify which staff members need profile pictures uploaded",
    order: 3,
  },
  {
    title: "Staff Visible on Landing Page",
    category: "staff",
    description: "Get staff marked to show on landing page",
    query: `*[_type == "staff" && visibility.showInLandingPage == true] {
  id,
  name,
  category
}`,
    useCase: "See which staff are featured on the landing page",
    order: 4,
  },
  {
    title: "Staff with Academic Activities",
    category: "staff",
    description: "Find staff with academic activities",
    query: `*[_type == "staff" && defined(personalInfo.academicActivities) && personalInfo.academicActivities.length > 0] {
  id,
  name,
  "academicActivityCount": personalInfo.academicActivities.length
}`,
    useCase: "See which staff have academic activities listed",
    order: 5,
  },

  // SERVICE QUERIES
  {
    title: "All Services with Doctors",
    category: "services",
    description: "Get all services with doctor count",
    query: `*[_type == "service"] {
  id,
  name,
  category,
  price,
  "doctorCount": length(doctors),
  hideInServicesPage,
  hideInPriceListPage
}`,
    useCase: "View all services and which doctors provide them",
    order: 10,
  },
  {
    title: "Services Without Doctors",
    category: "services",
    description: "Find services not assigned to any doctor",
    query: `*[_type == "service" && (!defined(doctors) || length(doctors) == 0)] {
  id,
  name,
  category
}`,
    useCase: "Identify services that need doctor assignments",
    order: 11,
  },
  {
    title: "Services by Price Range",
    category: "services",
    description: "See price distribution of services",
    query: `*[_type == "service"] | group(price) | map({
  "price": @[0].price,
  "count": length(@),
  "services": @[].name
})`,
    useCase: "Analyze pricing patterns and distribution",
    order: 12,
  },
  {
    title: "Services Done by Nurses",
    category: "services",
    description: "Get services performed by nursing staff",
    query: `*[_type == "service" && doneByNurses == true] {
  id,
  name,
  price,
  category
}`,
    useCase: "See which services are performed by nurses vs doctors",
    order: 13,
  },

  // VALIDATION QUERIES
  {
    title: "All Category Values",
    category: "validation",
    description: "See all unique category values used",
    query: `*[_type == "staff"] {
  "category": category
} | unique() {
  category
}`,
    useCase: "Verify category values are correct and consistent",
    order: 20,
  },
  {
    title: "Staff Missing Required Fields",
    category: "validation",
    description: "Find staff with missing required fields",
    query: `*[_type == "staff" && (!defined(id) || !defined(name) || !defined(category))] {
  id,
  name,
  category,
  "_issues": [
    !defined(id) => "Missing ID",
    !defined(name) => "Missing Name",
    !defined(category) => "Missing Category"
  ]
}`,
    useCase: "Data quality check - find incomplete staff records",
    order: 21,
  },

  // AUDIT QUERIES
  {
    title: "Document Count by Type",
    category: "audit",
    description: "Count total documents in each content type",
    query: `*[] | group(_type) | map({
  "type": _key,
  "count": length(@)
})`,
    useCase: "Get overview statistics of all content",
    order: 30,
  },
  {
    title: "Recently Modified Documents",
    category: "audit",
    description: "See recently updated documents",
    query: `*[] | sort(_updatedAt desc) | limit(20) {
  _type,
  _updatedAt,
  "title": name || title || slug
}`,
    useCase: "Audit recent changes and activity",
    order: 31,
  },
  {
    title: "Documents Without Images",
    category: "audit",
    description: "Find staff/services missing images",
    query: `*[_type == "staff" || _type == "service"] | select(!defined(image)) {
  _type,
  id,
  "name": name || title,
  "needsImage": true
}`,
    useCase: "Identify content that needs media assets",
    order: 32,
  },

  // LOCALIZATION QUERIES
  {
    title: "Staff Language Availability",
    category: "localization",
    description: "See which languages are available per staff",
    query: `*[_type == "staff"] {
  id,
  name,
  "languages": [
    defined(personalInfo.am) => "Armenian",
    defined(personalInfo.en) => "English",
    defined(personalInfo.ru) => "Russian"
  ]
}`,
    useCase: "Check localization coverage across all staff",
    order: 40,
  },

  // ADVANCED QUERIES
  {
    title: "Category Distribution",
    category: "advanced",
    description: "See staff distribution by category",
    query: `*[_type == "staff"] | group(category) | map({
  "category": @[0].category,
  "count": length(@),
  "staff": @[].name
})`,
    useCase: "Analyze organizational structure and staffing",
    order: 50,
  },
];

async function migrateQueries() {
  console.log("Starting saved queries migration...");
  console.log(`Total queries to migrate: ${queries.length}`);

  let created = 0;
  let failed = 0;

  for (const query of queries) {
    try {
      const doc = {
        _type: "savedQuery",
        _id: `query-${query.title.toLowerCase().replace(/\s+/g, "-")}`,
        ...query,
      };

      await client.createOrReplace(doc);
      console.log(`✓ Created: ${query.title}`);
      created++;
    } catch (error) {
      console.error(`✗ Failed to create "${query.title}":`, error instanceof Error ? error.message : error);
      failed++;
    }
  }

  console.log(`\n✓ Migration completed!`);
  console.log(`  Created: ${created} queries`);
  console.log(`  Failed: ${failed} queries`);
}

migrateQueries()
  .then(() => {
    console.log("\n✓ Saved queries are now available in your Studio!");
    console.log("Go to http://localhost:3000/studio and look for 'Saved GROQ Queries'");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n✗ Migration failed:", error);
    process.exit(1);
  });
