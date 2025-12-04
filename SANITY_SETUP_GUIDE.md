# Sanity.io Integration Guide

This document explains how to set up and use Sanity CMS in the CardioLab project.

## 🎯 Why Sanity?

We've integrated Sanity.io to solve these critical issues:

1. **Massive hardcoded data**: 8,900+ lines of content in TypeScript constants
2. **Difficult content updates**: Required developer intervention for all changes
3. **Large bundle size**: All content loaded at build time
4. **Poor scalability**: Adding new content meant code deployment

## 📋 What's Been Set Up

### 1. Sanity Schemas Created

All content types now have Sanity schemas:

- **Staff** (`staff.ts`) - Doctors, nurses, administrative staff with full CV details
- **Services** (`service.ts`) - Medical services with pricing and doctor associations
- **Podcasts** (`podcast.ts`) - CardioLab podcast series
- **News** (`news.ts`) - News articles and blog posts
- **Gallery** (`gallery.ts`) - Image and video galleries
- **Patient Guide** (`patientGuide.ts`) - Patient resources and information
- **Doctor Guide** (`doctorGuide.ts`) - Professional resources for doctors

### 2. Sanity Studio

Access the CMS at: `http://localhost:3000/studio`

Location: `/src/app/studio/[[...tool]]/page.tsx`

### 3. Sanity Client & Queries

- **Client**: `/src/lib/sanity/client.ts`
- **Queries**: `/src/lib/sanity/queries.ts` (pre-built queries for all content types)
- **Utils**: `/src/lib/sanity/utils.ts` (localization helpers)

### 4. Migration Scripts

Location: `/scripts/sanity-migration/`

- `migrate-staff.ts` - Migrate 30+ staff members
- `migrate-services.ts` - Migrate 84 services
- `README.md` - Detailed migration instructions

## 🚀 Setup Instructions

### Step 1: Create Sanity Project

1. Go to https://www.sanity.io/manage
2. Click "Create New Project"
3. Choose a name (e.g., "CardioLab CMS")
4. Select "Production" dataset
5. Copy your **Project ID**

### Step 2: Generate API Token

1. In Sanity dashboard, go to "API" tab
2. Click "Add API Token"
3. Name it "Migration Token"
4. Select "Editor" permissions
5. Copy the token (you won't see it again!)

### Step 3: Configure Environment Variables

Create `.env.local` (or update existing):

```bash
# Existing
POSTGRES_URL="postgres://..."

# Add Sanity variables
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id-here"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="your-api-token-here"
```

### Step 4: Run Migrations

```bash
# 1. Migrate staff first (services reference staff)
npx tsx scripts/sanity-migration/migrate-staff.ts

# 2. Migrate services
npx tsx scripts/sanity-migration/migrate-services.ts

# More migration scripts coming soon for podcasts, news, etc.
```

### Step 5: Upload Images

The migration scripts don't upload images automatically. You have two options:

**Option A: Manual Upload (Easier)**
1. Start dev server: `npm run dev`
2. Go to `http://localhost:3000/studio`
3. Open each staff member/service
4. Upload their image manually

**Option B: Programmatic Upload (Advanced)**
Use Sanity's Asset API to bulk upload images. Documentation: https://www.sanity.io/docs/assets

### Step 6: Update Components

Replace constant imports with Sanity queries:

**BEFORE:**
```typescript
import { staffMembers } from '@/constants/staff';

export default function StaffPage() {
  const doctors = staffMembers.filter(s => s.category === 'medical');

  return (
    <div>
      {doctors.map(doctor => (
        <div key={doctor.id}>{doctor.name.en}</div>
      ))}
    </div>
  );
}
```

**AFTER:**
```typescript
import { getStaffByCategory } from '@/lib/sanity/queries';
import { getLocalizedValue } from '@/lib/sanity/utils';

export default async function StaffPage({
  params
}: {
  params: { locale: 'en' | 'am' | 'ru' }
}) {
  const doctors = await getStaffByCategory('medical');

  return (
    <div>
      {doctors.map(doctor => {
        const name = getLocalizedValue(doctor.name, params.locale);
        return <div key={doctor._id}>{name}</div>;
      })}
    </div>
  );
}
```

See examples in `/src/components/sanity-examples/` for more patterns.

## 📚 Available Queries

### Staff
- `getAllStaff()` - All staff members
- `getStaffByCategory(category)` - Filter by medical/nursing/administrative
- `getStaffById(id)` - Single staff member
- `getStaffForLanding()` - Staff shown on landing page

### Services
- `getAllServices()` - All services
- `getServicesByCategory(category)` - Filter by service type
- `getServiceBySlug(slug)` - Single service
- `getServicesForPriceList()` - Services for pricing page

### Podcasts
- `getAllPodcasts()` - All podcasts, newest first
- `getPodcastById(id)` - Single podcast

### News
- `getAllNews()` - All articles
- `getNewsBySlug(slug)` - Single article
- `getNewsByCategory(category)` - Filter by category

### Gallery
- `getAllGalleries()` - All galleries
- `getGalleryBySlug(slug)` - Single gallery
- `getGalleriesByType(type)` - Filter by images/videos

### Guides
- `getAllPatientGuides()` - Patient resources
- `getPatientGuidesByCategory(category)` - Filtered guides
- `getAllDoctorGuides()` - Doctor resources
- `getDoctorGuidesByCategory(category)` - Filtered guides

## 🎨 Localization Helpers

```typescript
import { getLocalizedValue, getLocalizedArray } from '@/lib/sanity/utils';

// Get localized string
const name = getLocalizedValue(staff.name, locale); // Falls back to Armenian

// Get localized array
const experience = getLocalizedArray(staff.personalInfo.am.experience, locale);
```

## 🔄 Migration Status

| Content Type | Status | Lines Saved |
|-------------|--------|-------------|
| Staff | ✅ Ready | ~6,038 |
| Services | ✅ Ready | ~696 |
| Podcasts | ⏳ Script needed | ~674 |
| News | ⏳ Script needed | ~717 |
| Gallery | ⏳ Script needed | ~486 |
| Patient Guide | ⏳ Script needed | ~327 |
| Doctor Guide | ⏳ Script needed | ~441 |
| **TOTAL** | | **~9,379 lines** |

## 🚦 Next Steps

### Phase 1: Core Content (High Priority)
1. ✅ Set up Sanity project
2. ✅ Create schemas
3. ✅ Write migration scripts for staff & services
4. ⏳ Run migrations
5. ⏳ Upload images
6. ⏳ Update main components (staff page, services page, price list)

### Phase 2: Media Content (Medium Priority)
1. ⏳ Create podcast migration script
2. ⏳ Create news migration script
3. ⏳ Create gallery migration script
4. ⏳ Update related components

### Phase 3: Guide Content (Low Priority)
1. ⏳ Create patient guide migration
2. ⏳ Create doctor guide migration
3. ⏳ Update guide pages

### Phase 4: Cleanup (Final)
1. ⏳ Remove old constant files
2. ⏳ Update all component imports
3. ⏳ Test thoroughly
4. ⏳ Deploy

## 💡 Benefits After Full Migration

1. **Content updates without deployment** - Edit in Sanity Studio, changes reflect immediately
2. **Non-developer editing** - Content team can manage all content
3. **Smaller bundle size** - Content loaded on-demand, not at build time
4. **Better performance** - Sanity CDN for image optimization
5. **Version control** - Sanity tracks all content changes
6. **Preview mode** - See changes before publishing
7. **Easier maintenance** - 9,000+ fewer lines of code to maintain

## 🔧 Troubleshooting

**Can't access Studio**
- Make sure dev server is running: `npm run dev`
- Check `.env.local` has correct Sanity credentials
- Visit `http://localhost:3000/studio`

**Migration fails with "Insufficient permissions"**
- Verify `SANITY_API_TOKEN` has "Editor" role
- Regenerate token if needed

**Images not showing**
- Images must be uploaded separately
- Use Sanity Studio UI to upload
- Or implement Asset API script

**TypeScript errors in components**
- Run `npm run build` to check for issues
- Update imports from constants to Sanity queries
- Use type annotations from schemas

## 📖 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/plugins/next-sanity)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Asset API](https://www.sanity.io/docs/http-api-assets)

## 🤝 Support

For questions or issues:
1. Check this guide
2. Review migration script READMEs
3. Check example components in `/src/components/sanity-examples/`
4. Consult Sanity documentation
