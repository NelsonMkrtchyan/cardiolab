# Staff Hooks Documentation

This directory contains custom React hooks for managing staff/employee data throughout the application.

## Hooks Overview

### `useStaffData()`

**Purpose**: Fetch and manage a list of all staff members (localized).

**Usage**: Use this hook in components that need to display a list of staff or filter staff data.

**Example**:
```typescript
const { staff, isLoading, error } = useStaffData();

if (isLoading) return <Loader />;
if (error) return <ErrorMessage error={error} />;

return staff.map(employee => <Card key={employee.id} employee={employee} />);
```

**Returns**:
```typescript
{
  staff: AppStaffType[];     // Array of staff members (localized for current locale)
  isLoading: boolean;         // Loading state
  error: Error | null;        // Error state if fetch fails
}
```

**Data Flow**:
1. Calls `/api/staff?locale={currentLocale}`
2. API returns `AppStaffResponse[]` (localized strings)
3. Hook returns data as `AppStaffType[]`

**Dependencies**: `[locale]` - Refetches when locale changes

---

### `useEmployee()`

**Purpose**: Fetch a single staff member by ID (localized).

**Usage**: Use this hook on individual staff detail pages.

**Example**:
```typescript
const { employeeDoNotExist, name, role, image, personalInfo, loading, error } = useEmployee();

if (loading) return <Loader />;
if (employeeDoNotExist) return <NotFound />;

return <DetailsContent name={name} role={role} image={image} personalInfo={personalInfo} />;
```

**Returns**:
```typescript
{
  employeeDoNotExist: boolean;        // True if staff not found
  name: string | null;                // Staff name (localized)
  role: string | null;                // Staff role (localized)
  image: string | null;               // Profile image URL
  personalInfo?: {                    // CV data for current locale
    flags: PersonalInfoFlags;
    data: PersonalInfoSingleType;
  };
  loading: boolean;                   // Loading state
  error: Error | null;                // Error state
}
```

**Data Flow**:
1. Gets staff ID from URL params (using `useParams()`)
2. Calls `/api/staff?locale={currentLocale}`
3. Finds staff member by ID from returned list
4. Returns localized data with correct structure for `DetailsContent`

**Dependencies**: `[slug, locale]` - Refetches when route or locale changes

---

## Hook Usage Patterns

### Pattern 1: List Display
```typescript
// DoctorsClientComponent.tsx
const { staff, isLoading, error } = useStaffData();

// Filter staff
const filtered = staff.filter(emp => emp.visibility?.showInStaffPage);
```

### Pattern 2: Individual Detail Page
```typescript
// staff/details/[slug]/page.tsx
const { employeeDoNotExist, name, role, image, personalInfo } = useEmployee();

// Pass to detail component
<DetailsContent name={name} role={role} image={image} personalInfo={personalInfo} />
```

### Pattern 3: With Context Provider (Recommended for Multiple Components)
```typescript
// app/[locale]/page.tsx - Wrap landing page
<StaffProvider>
  <MeetOurStaff />           // Uses useStaffContext()
  <DoctorAppointmentForm />  // Uses useStaffContext()
</StaffProvider>
```

---

## Important Notes

### Localization
- Both hooks automatically handle localization based on current locale (`useLocale()`)
- Data is fetched with `?locale={currentLocale}` parameter
- API returns only requested locale's strings
- No manual localization needed in components

### Dependency Arrays
- **`useStaffData`**: Depends on `[locale]`
  - Refetches when user changes language
- **`useEmployee`**: Depends on `[slug, locale]`
  - Refetches when navigating to different staff or changing language

### Performance
- API responses are cached (5-minute TTL via `Cache-Control` header)
- Use `StaffProvider` + `useStaffContext()` when multiple components need staff data
- Avoid calling both `useStaffData()` and `StaffProvider` in the same tree (causes duplicate fetches)

### Error Handling
- All hooks return `error` state
- Components should check and display error messages appropriately
- Use `<ErrorMessage error={error} />` component for consistency

---

## When to Use Each Hook

| Scenario | Hook | Notes |
|----------|------|-------|
| Display list of staff | `useStaffData()` | Fetches all staff, handles filtering in component |
| Show individual staff profile | `useEmployee()` | Fetches specific staff by URL ID |
| Multiple components need staff data | `StaffProvider` + `useStaffContext()` | Single fetch, shared across components |
| Landing page with staff section | `StaffProvider` | Wrap page to share data between sections |

---

## Type System

All hooks use TypeScript types from `src/types/staff.ts`:
- `AppStaffType`: Main staff type throughout app
- `PersonalInfoFlags`: CV section visibility flags
- `PersonalInfoSingleType`: CV data for single language

For type definitions, see `src/types/staff.ts`.
