/**
 * Example component showing how to fetch and display staff data from Sanity
 *
 * This replaces the old pattern of importing from constants/staff.tsx
 *
 * BEFORE (Old way with constants):
 * import { staffMembers } from '@/constants/staff';
 * const doctors = staffMembers.filter(s => s.category === 'medical');
 *
 * AFTER (New way with Sanity):
 * const doctors = await getStaffByCategory('medical');
 */

import { getAllStaff, getStaffByCategory } from '@/lib/sanity/queries';
import { getLocalizedValue } from '@/lib/sanity/utils';
import { type Locale } from '@/lib/i18n/types';

interface StaffListProps {
  locale: Locale;
  category?: 'medical' | 'nursing' | 'administrative';
}

export default async function StaffListExample({ locale, category }: StaffListProps) {
  // Fetch staff from Sanity instead of importing from constants
  const staff = category
    ? await getStaffByCategory(category)
    : await getAllStaff();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {staff.map((member: any) => {
        // Use helper function to get localized content
        const name = getLocalizedValue(member.name, locale);
        const role = getLocalizedValue(member.role, locale);
        const bio = getLocalizedValue(member.personalInfo?.am || {}, locale);

        return (
          <div key={member._id} className="border rounded-lg p-4">
            {member.image && (
              <img
                src={member.image}
                alt={name || ''}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-600">{role}</p>
            {member.personalInfo?.flags?.showBio && (
              <p className="mt-2 text-sm">{bio?.bio}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
