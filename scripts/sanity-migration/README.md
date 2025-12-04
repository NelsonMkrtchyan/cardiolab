# Sanity Migration Scripts

This directory contains scripts to migrate data from TypeScript constants to Sanity CMS.

## Prerequisites

1. Create a Sanity project at https://www.sanity.io/manage
2. Get your Project ID and create an API token with "Editor" permissions
3. Add these to your `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
   NEXT_PUBLIC_SANITY_DATASET="production"
   SANITY_API_TOKEN="your-api-token-with-write-access"
   ```

## Installation

Install the required packages:
```bash
npm install -D tsx @sanity/client
```

## Running Migrations

Run migrations in this order:

### 1. Staff Migration
```bash
npx tsx scripts/sanity-migration/migrate-staff.ts
```

Migrates all staff members (doctors, nurses, admin) to Sanity.

**Note:** Staff profile images need to be uploaded manually through the Sanity Studio or via the Asset API.

### 2. Services Migration
```bash
npx tsx scripts/sanity-migration/migrate-services.ts
```

Migrates all services and pricing data, including associations with doctors.

### 3. Podcasts Migration (To be created)
```bash
npx tsx scripts/sanity-migration/migrate-podcasts.ts
```

### 4. News Migration (To be created)
```bash
npx tsx scripts/sanity-migration/migrate-news.ts
```

### 5. Gallery Migration (To be created)
```bash
npx tsx scripts/sanity-migration/migrate-gallery.ts
```

## After Migration

1. Open Sanity Studio at `http://localhost:3000/studio`
2. Upload images for staff members and other content
3. Review and verify all migrated data
4. Publish the documents

## Important Notes

- Images are not automatically migrated. You'll need to:
  - Upload them through Sanity Studio, OR
  - Use the Sanity Asset API to programmatically upload

- The scripts use `createOrReplace()` so they're safe to run multiple times

- Each document gets a predictable ID (e.g., `staff-1`, `service-42`) for easy reference

## Troubleshooting

**"Insufficient permissions"**: Make sure your `SANITY_API_TOKEN` has "Editor" role

**"Project not found"**: Verify your `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct

**Reference errors**: Run staff migration before services migration (services reference staff)
