import type React from "react";
import { FaDiagnoses, FaHeartbeat } from "react-icons/fa";

export interface ServiceI {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CardI {
  service: ServiceI;
}

interface ServicesI {
  en: ServiceI[];
  am: ServiceI[];
  ru: ServiceI[];
}

export const services: ServicesI = {
  en: [
    {
      id: 1,
      title: "Cardiology, Arrhythmology and Vascular Consultations",
      description: "",
      icon: <FaDiagnoses className="icon largest-icon-size mb-4" />,
    },
    {
      id: 2,
      title: "Echocardiography- basic",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 3,
      title: "Echocardiography- advanced",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 4,
      title: "Echocardiography- fetal",
      description: "",
      icon: <FaDiagnoses className="icon largest-icon-size mb-4" />,
    },
    {
      id: 5,
      title: "Echocardiography- pediatric",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 6,
      title: "Electrocardiography",
      description: "",
      icon: <FaDiagnoses className="icon largest-icon-size mb-4" />,
    },
    {
      id: 7,
      title: "Holter Monitoring (real-time, up to 30 days)",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 8,
      title: "Event Recording",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 9,
      title: "Exercise Test",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 10,
      title: "6-Minute Walk Test",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 11,
      title: "Cardiac screenings and Risk Stratification",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 12,
      title: "Outpatient Follow-up and Cardiovascular Disease Management",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
  ],
  am: [
    {
      id: 1,
      title:
        "Սրտաբանական, առիթմոլոգիական և անոթային վիրաբուժական խորհրդատվություն",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 2,
      title: "Էխոկարդիոգրաֆիա – հիմնական",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 3,
      title: "Էխոկարդիոգրաֆիա – խորացված",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 4,
      title: "Էխոկարդիոգրաֆիա – պտղի սրտի",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 5,
      title: "Էխոկարդիոգրաֆիա – մանկական",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 6,
      title: "Էլեկտրասրտագրություն",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 7,
      title: "Հոլտեր մոնիտորինգ(իրական ժամանակում, մինչև 30 օրյա)",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 8,
      title: "Պատահարների ձայնագրում",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 9,
      title: "Սթրես թեստ",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 10,
      title: "6 րոպե քայլքի թեստ",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 11,
      title: "Սրտաբանական զննում և ռիսկի գնահատում",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 12,
      title:
        "Արտահիվանդանոցային հսկողություն և սիրտանոթային հիվանդությունների կառավարում",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
  ],
  ru: [
    {
      id: 1,
      title: "Кардиологические, аритмологические и сосудистые консультации",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 2,
      title: "Эхокардиография – базовая",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 3,
      title: "Эхокардиография – расширенная",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 4,
      title: "Эхокардиография – плода",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 5,
      title: "Эхокардиография – детская",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 6,
      title: "Электрокардиография",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 7,
      title: "Холтеровское мониторирование (в реальном времени, до 30 дней)",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 8,
      title: "Регистрация событий",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 9,
      title: "Стресс-тест",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 10,
      title: "6-минутный тест ходьбы",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 11,
      title: "Кардиологическое обследование и оценка риска",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
    {
      id: 12,
      title:
        "Амбулаторное наблюдение и управление сердечно-сосудистыми заболеваниями",
      description: "",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
    },
  ],
};
