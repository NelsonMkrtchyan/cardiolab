"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { flatPriceListData } from "~/constants/priceList";
import { type LocaleT } from "~/types";
import { type ServiceI } from "~/constants/priceList";
// import { FaDownload } from "react-icons/fa";

const PriceList = () => {
  const locale: string = useLocale();
  const t = useTranslations("PriceList");
  const localisedPriceList = flatPriceListData[locale as LocaleT];

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
        {/*<p>{t("description")}</p>*/}
      </div>

      {/*<div className="mb-4 text-right">*/}
      {/*  <button*/}
      {/*    onClick={handleDownload}*/}
      {/*    className="default-btn"*/}
      {/*    aria-label={t("downloadButton")}*/}
      {/*  >*/}
      {/*    <FaDownload className="mr-2" /> {t("downloadButton")}*/}
      {/*  </button>*/}
      {/*</div>*/}
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
                {localisedPriceList.map((service: ServiceI) => (
                  <tr key={service.id}>
                    <td>{service.name}</td>
                    <td className="text-right">
                      {typeof service.price === "number"
                        ? formatPrice(service.price)
                        : service.price}
                    </td>
                  </tr>
                ))}
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
