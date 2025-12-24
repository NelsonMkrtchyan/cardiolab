"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { getServicesForPriceList } from "~/lib/sanity/queries";
import type { AppServiceType } from "~/types/services";
import { formatPrice, getServiceDisplayName } from "~/types/services";

const PriceList = () => {
  const locale = useLocale() as "am" | "en" | "ru";
  const t = useTranslations("PriceList");
  const [services, setServices] = useState<AppServiceType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setError(null);
        const data = await getServicesForPriceList();
        setServices(data || []);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load services";
        console.error("Error fetching services:", err);
        setError("Unable to load price list. Please refresh the page.");
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const visibleServices = services.filter(
    (service) => !service.hideInPriceListPage,
  );

  return (
    <div className="pt-100 pb-70 price-list container">
      <div className="section-title">
        <h2>{t("title")}</h2>
      </div>

      {error && (
        <div
          style={{
            backgroundColor: "#f8d7da",
            color: "#721c24",
            padding: "15px 20px",
            borderRadius: "5px",
            marginBottom: "20px",
            border: "1px solid #f5c6cb",
          }}
        >
          {error}
        </div>
      )}

      <div className="price-list-content row">
        <div className="w-full">
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th
                    className="service-name-column"
                    style={{
                      backgroundColor: "#1034a6",
                      color: "white",
                      padding: "15px 20px",
                      borderRadius: "5px 0 0 5px",
                    }}
                  >
                    {t("serviceName")}
                  </th>
                  <th
                    className="price-column text-right"
                    style={{
                      backgroundColor: "#1034a6",
                      color: "white",
                      padding: "15px 20px",
                      borderRadius: "0 5px 5px 0",
                    }}
                  >
                    {t("price")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={2} className="py-5 text-center">
                      Loading services...
                    </td>
                  </tr>
                ) : visibleServices.length === 0 ? (
                  <tr>
                    <td colSpan={2} className="py-5 text-center">
                      No services available
                    </td>
                  </tr>
                ) : (
                  visibleServices.map((service) => (
                    <tr key={`service-${service.id}`}>
                      <td>{getServiceDisplayName(service.name, locale)}</td>
                      <td className="text-right">
                        {formatPrice(service.price)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row price-list-info">
        <div className="w-full">
          <div className="section-title">
            <p>{t("serviceInfo")}</p>
            <p>{t("foreignPassportInfo")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
