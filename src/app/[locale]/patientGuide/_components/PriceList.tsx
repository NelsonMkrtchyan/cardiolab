"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { type LocaleT } from "~/types";
import { getServicesForPriceList } from "~/lib/sanity/queries";
import { getLocalizedValue } from "~/lib/sanity/utils";
// import { FaDownload } from "react-icons/fa";

const PriceList = () => {
  const locale: string = useLocale();
  const t = useTranslations("PriceList");
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServicesForPriceList();
        setServices(data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // const handleDownload = () => {
  //   // PDF file path
  //   const pdfPath = "/assets/pricelist.pdf";
  //
  //   // Create a link element
  //   const link = document.createElement("a");
  //   link.href = pdfPath;
  //   link.download = `cardiolab_pricelist.pdf`;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  // Format price with thousand separator and currency
  const formatPrice = (price: number) => {
    const currencySymbol =
      locale === "en" ? "AMD" : locale === "am" ? "դրամ" : "драм";
    return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${currencySymbol}`;
  };

  return (
    <div className="pt-100 pb-70 price-list container">
      <div className="section-title">
        <h2>{t("title")}</h2>
      </div>

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
                      // textAlign: "center",
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
                      // textAlign: "center",
                    }}
                  >
                    {t("price")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={2} className="text-center py-5">
                      Loading...
                    </td>
                  </tr>
                ) : (
                  services.map((service) => (
                    <tr key={service._id || service.id}>
                      <td>{getLocalizedValue(service.name, locale as LocaleT)}</td>
                      <td className="text-right">{formatPrice(service.price)}</td>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
