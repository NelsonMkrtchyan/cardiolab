/**
 * Example component showing how to fetch and display services from Sanity
 *
 * BEFORE (Old way):
 * import { priceList } from '@/constants/priceList';
 * const services = priceList.filter(s => s.category === 'consultation');
 *
 * AFTER (New way):
 * const services = await getServicesByCategory('consultation');
 */

import { getAllServices, getServicesByCategory, getServicesForPriceList } from '@/lib/sanity/queries';
import { getLocalizedValue } from '@/lib/sanity/utils';
import { type Locale } from '@/lib/i18n/types';

interface ServicesListProps {
  locale: Locale;
  category?: string;
  priceListMode?: boolean;
}

export default async function ServicesListExample({
  locale,
  category,
  priceListMode = false
}: ServicesListProps) {
  // Fetch services based on context
  const services = priceListMode
    ? await getServicesForPriceList()
    : category
    ? await getServicesByCategory(category)
    : await getAllServices();

  return (
    <div className="space-y-4">
      {services.map((service: any) => {
        const name = getLocalizedValue(service.name, locale);
        const description = getLocalizedValue(service.description, locale);

        return (
          <div key={service._id} className="border rounded-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{name}</h3>
                {description && (
                  <p className="text-gray-600 mt-2">{description}</p>
                )}
                {service.doctors && service.doctors.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-500">Available doctors:</p>
                    <ul className="mt-1 space-y-1">
                      {service.doctors.map((doctor: any) => (
                        <li key={doctor.id} className="text-sm">
                          {getLocalizedValue(doctor.name, locale)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {service.price && (
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">
                    {service.price.toLocaleString()} AMD
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
