import type React from "react";
import { IoLibrary } from "react-icons/io5";
import { FaHandHoldingMedical, FaInfo, FaPeopleLine } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";

export interface DGuideI {
  id: number;
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
}

export interface CardI {
  guide: DGuideI;
}

interface DGuidesI {
  en: DGuideI[];
  am: DGuideI[];
  ru: DGuideI[];
}

export const doctorGuides: DGuidesI = {
  en: [
    {
      id: 1,
      title: "Useful Materials",
      description: "",
      path: "/usefulMaterials",
      icon: <FaInfo className="icon largest-icon-size" />,
    },
    {
      id: 2,
      title: "Accredited Trainings",
      description: "",
      path: "/accreditedTrainings",
      icon: <GrWorkshop className="icon largest-icon-size" />,
    },
    {
      id: 3,
      title: "Seminars",
      description: "",
      path: "/seminars",
      icon: <FaPeopleLine className="icon largest-icon-size" />,
    },
    {
      id: 4,
      title: "Job Openings",
      description: "",
      path: "/jobOpenings",
      icon: <TfiWrite className="icon largest-icon-size" />,
    },
  ],
  am: [
    {
      id: 1,
      title: "Օգտակար նյութեր",
      description: "",
      path: "/usefulMaterials",
      icon: <FaInfo className="icon largest-icon-size" />,
    },
    {
      id: 2,
      title: "Կրեդիտավորված Վերապատրաստումներ",
      description: "",
      path: "/accreditedTrainings",
      icon: <GrWorkshop className="icon largest-icon-size" />,
    },
    {
      id: 3,
      title: "Սեմինարներ",
      description: "",
      path: "/seminars",
      icon: <FaPeopleLine className="icon largest-icon-size" />,
    },
    {
      id: 4,
      title: "Թափուր հաստիքներ",
      description: "",
      path: "/jobOpenings",
      icon: <TfiWrite className="icon largest-icon-size" />,
    },
  ],
  ru: [
    {
      id: 1,
      title: "Полезные материалы",
      description: "",
      path: "/usefulMaterials",
      icon: <FaInfo className="icon largest-icon-size" />,
    },
    {
      id: 2,
      title: "Аккредитованные Тренинги",
      description: "",
      path: "/accreditedTrainings",
      icon: <GrWorkshop className="icon largest-icon-size" />,
    },
    {
      id: 3,
      title: "Семинары",
      description: "",
      path: "/seminars",
      icon: <FaPeopleLine className="icon largest-icon-size" />,
    },
    {
      id: 4,
      title: "Вакансии",
      description: "",
      path: "/jobOpenings",
      icon: <TfiWrite className="icon largest-icon-size" />,
    },
  ],
};
