"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { getServiceBySlug } from "~/lib/sanity/queries";
import type { AppServiceType } from "~/types/services";
import {
  formatPrice,
  getServiceDisplayName,
  getLocalizedDescription,
} from "~/types/services";

const ServiceDetailsContent: React.FC = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const locale = useLocale();
  const [service, setService] = useState<AppServiceType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        const data = await getServiceBySlug(slug);
        setService(data || null);
      } catch (error) {
        console.error("Error fetching service:", error);
        setService(null);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  if (loading) {
    return (
      <div className="service-details-area ptb-100">
        <div className="container">
          <div className="text-center py-5">Loading service details...</div>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="service-details-area ptb-100">
        <div className="container">
          <div className="text-center py-5">Service not found</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="service-details-area ptb-100">
        <div className="container">
          <div className="services-details-img">
            <Image
              src="/images/service-details-bg.jpg"
              alt="Service Details"
              width={1920}
              height={1000}
            />

            <h2>{getServiceDisplayName(service.name, locale)}</h2>
            <p>
              {getLocalizedDescription(
                service.description,
                locale as "am" | "en" | "ru",
              ) ||
                "CardioLab provides professional medical services with experienced healthcare professionals."}
            </p>

            {service.doctors && service.doctors.length > 0 && (
              <blockquote>
                <FaQuoteLeft className="icon largest-icon-size" />
                {service.doctors
                  .map((doctor) =>
                    typeof doctor.name === "string"
                      ? doctor.name
                      : getServiceDisplayName(doctor.name, locale),
                  )
                  .join(", ")}{" "}
                provide this service with expertise and care.
              </blockquote>
            )}

            <p>
              Service Price: <strong>{formatPrice(service.price)}</strong>
            </p>
          </div>

          <div className="row">
            <div className="col-lg-5">
              <div
                className="service-details-inner-left"
                style={{ backgroundImage: `url(/images/signup-bg.jpg)` }}
              >
                <Image
                  src="/images/signup-bg.jpg"
                  alt="Service"
                  width={1920}
                  height={1200}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="service-details-inner">
                <h2>Professional Medical Service</h2>
                <p>
                  <strong>Category:</strong> {service.category}
                </p>
                {service.doctors && service.doctors.length > 0 && (
                  <div>
                    <p>
                      <strong>Healthcare Professionals:</strong>
                    </p>
                    <ul>
                      {service.doctors.map((doctor) => (
                        <li key={`doctor-${doctor.id}`}>
                          {doctor.name} - {doctor.role}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <p>
                  <strong>Service Type:</strong>{" "}
                  {service.doneByNurses ? "Performed by Nurses" : "Medical Service"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
