# Sanity Vision Queries Reference

This file contains all useful GROQ queries for the CardioLab CMS.
Copy any query below into the Vision tab at `/studio` to run it.

## Staff Queries

### All medical staff with full details
```groq
*[_type == "staff" && category == "medical"] {
  id,
  name,
  role,
  category,
  visibility,
  "hasAcademicActivities": defined(personalInfo.academicActivities) && personalInfo.academicActivities.length > 0
}
```

### Count staff by category
```groq
*[_type == "staff"] {
  category,
  "count": count(*)
}
```

### Staff with academic activities
```groq
*[_type == "staff" && defined(personalInfo.academicActivities) && personalInfo.academicActivities.length > 0] {
  id,
  name,
  "academicActivityCount": personalInfo.academicActivities.length
}
```

### Staff visible on landing page
```groq
*[_type == "staff" && visibility.showInLandingPage == true] {
  id,
  name,
  category
}
```

### Staff without images
```groq
*[_type == "staff" && !defined(image)] {
  id,
  name,
  role,
  category
}
```

### Check visibility structure
```groq
*[_type == "staff"] {
  id,
  name,
  visibility
} | limit(5)
```

### All nursing staff
```groq
*[_type == "staff" && category == "nursing"] {
  id,
  name,
  role,
  visibility
}
```

### All administrative staff
```groq
*[_type == "staff" && category == "administrative"] {
  id,
  name,
  role
}
```

### Staff with contact information
```groq
*[_type == "staff" && defined(personalInfo.flags.showContact) && personalInfo.flags.showContact == true] {
  id,
  name,
  "contactInfo": personalInfo.am.contact
} | limit(10)
```

---

## Service Queries

### All services with doctor references
```groq
*[_type == "service"] {
  id,
  name,
  category,
  price,
  "doctorCount": length(doctors),
  hideInServicesPage,
  hideInPriceListPage
}
```

### Services by category with pricing
```groq
*[_type == "service" && category == "consultation"] {
  id,
  name,
  price,
  "doctors": doctors[]->{name, role}
}
```

### Services hidden from price list
```groq
*[_type == "service" && hideInPriceListPage == true] {
  id,
  name,
  price
}
```

### Services done by nurses
```groq
*[_type == "service" && doneByNurses == true] {
  id,
  name,
  price,
  category
}
```

### Count services by category
```groq
*[_type == "service"] {
  category
} | group(_._key) | map({
  "category": @[0].category,
  "count": length(@)
})
```

### Services without doctors assigned
```groq
*[_type == "service" && (!defined(doctors) || length(doctors) == 0)] {
  id,
  name,
  category
}
```

### Total service count
```groq
*[_type == "service"] {
  "totalServices": count(*)
}
```

### Services by price range
```groq
*[_type == "service"] | group(price) | map({
  "price": @[0].price,
  "count": length(@),
  "services": @[].name
})
```

---

## Gallery Queries

### All galleries by type
```groq
*[_type == "gallery"] {
  id,
  type,
  title,
  "itemCount": length(images) + length(videos)
}
```

### Image galleries with image count
```groq
*[_type == "gallery" && type == "images"] {
  id,
  title,
  "imageCount": length(images),
  "coverImage": images[0]
}
```

### Podcast galleries
```groq
*[_type == "gallery" && type == "podcasts"] {
  id,
  title,
  "podcastCount": length(videos),
  "hosts": hosts[]->{name}
}
```

### All images across galleries
```groq
*[_type == "gallery" && type == "images"]{
  images[]
} | length(@)
```

### All videos/podcasts
```groq
*[_type == "gallery" && type == "podcasts"]{
  videos[]
} | length(@)
```

---

## Data Validation Queries

### Check all category values used
```groq
*[_type == "staff"] {
  "category": category
} | unique() {
  category
}
```

### Missing required fields in staff
```groq
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
```

### Visibility flags summary
```groq
*[_type == "staff"] {
  id,
  name,
  visibility
}
```

### Staff with incomplete personal info
```groq
*[_type == "staff" && !defined(personalInfo)] {
  id,
  name,
  "needsPersonalInfo": true
}
```

---

## Content Audit Queries

### Total document count by type
```groq
*[] | group(_type) | map({
  "type": _key,
  "count": length(@)
})
```

### Recently modified documents (last 20)
```groq
*[] | sort(_updatedAt desc) | limit(20) {
  _type,
  _updatedAt,
  "title": name || title || slug
}
```

### Documents with no images
```groq
*[_type == "staff" || _type == "service"] | select(!defined(image)) {
  _type,
  id,
  "name": name || title,
  "needsImage": true
}
```

### All documents created today
```groq
*[dateTime(_createdAt) > dateTime(now()) - 86400000] {
  _type,
  _createdAt,
  "title": name || title || id
}
```

### Document size analysis
```groq
*[_type == "staff"] | map({
  "id": id,
  "name": name,
  "size": length(.)
}) | sort(size desc) | limit(10)
```

---

## Localization Queries

### Staff by language content availability
```groq
*[_type == "staff"] {
  id,
  name,
  "languages": [
    defined(personalInfo.am) => "Armenian",
    defined(personalInfo.en) => "English",
    defined(personalInfo.ru) => "Russian"
  ]
}
```

### Missing translations
```groq
*[_type == "staff" && !defined(personalInfo.en)] {
  id,
  name,
  "missingLanguages": [
    !defined(personalInfo.en) => "English",
    !defined(personalInfo.ru) => "Russian"
  ]
}
```

---

## Advanced Queries

### Staff with most academic activities
```groq
*[_type == "staff"] {
  id,
  name,
  "activitiesCount": length(personalInfo.academicActivities)
} | sort(activitiesCount desc) | limit(10)
```

### Services with most doctor assignments
```groq
*[_type == "service"] {
  id,
  name,
  "doctorCount": length(doctors)
} | sort(doctorCount desc)
```

### Staff visibility report
```groq
*[_type == "staff"] {
  id,
  name,
  "visibleInStaffPage": visibility.showInStaffPage,
  "visibleInLandingPage": visibility.showInLandingPage
}
```

### Category distribution
```groq
*[_type == "staff"] | group(category) | map({
  "category": @[0].category,
  "count": length(@),
  "staff": @[].name
})
```

---

## How to Use These Queries

1. Go to `http://localhost:3000/studio`
2. Click the **Vision** tab in the left sidebar
3. Copy any query from above into the query editor
4. Click **Run** (or press Cmd+Enter)
5. View results below

## Tips

- **Test before coding**: Use Vision to validate queries before adding to your app
- **Use parameters**: Replace hardcoded values with `$variable` and set parameters
- **Check performance**: Vision shows query execution time
- **Reference**: Keep this file open when developing features

## Related Files

- Query functions: `src/lib/sanity/queries.ts`
- Sanity client: `src/lib/sanity/client.ts`
- Schema definitions: `sanity/schemas/`
- Type definitions: `src/types/staff.ts`
