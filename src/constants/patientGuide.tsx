import type React from "react";
import { IoLibrary } from "react-icons/io5";
import { FaHandHoldingMedical } from "react-icons/fa6";

export interface PGuideI {
  id: number;
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
}

export interface CardI {
  guide: PGuideI;
}

interface PGuidesI {
  en: PGuideI[];
  am: PGuideI[];
  ru: PGuideI[];
}

export const patientGuides: PGuidesI = {
  en: [
    {
      id: 1,
      title: "Insurance Information",
      description: "",
      path: "/insuranceInfo",
      icon: <FaHandHoldingMedical className="icon largest-icon-size" />,
    },
    {
      id: 2,
      title: "Health Library",
      description: "",
      path: "/healthLibrary",
      icon: <IoLibrary className="icon largest-icon-size" />,
    },
  ],
  am: [
    {
      id: 1,
      title: "Ապահովագրական տեղեկատվություն",
      description: "",
      path: "/insuranceInfo",
      icon: <FaHandHoldingMedical className="icon largest-icon-size" />,
    },
    {
      id: 2,
      title: "Առողջության գրադարան",
      description: "",
      path: "/healthLibrary",
      icon: <IoLibrary className="icon largest-icon-size" />,
    },
  ],
  ru: [
    {
      id: 1,
      title: "Страховая информация",
      description: "",
      path: "/insuranceInfo",
      icon: <FaHandHoldingMedical className="icon largest-icon-size" />,
    },
    {
      id: 2,
      title: "Библиотека здоровья",
      description: "",
      path: "/healthLibrary",
      icon: <IoLibrary className="icon largest-icon-size" />,
    },
  ],
};
