import type React from "react";
import Image from "next/image";

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
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 2,
      title: "Echocardiography- basic",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 3,
      title: "Echocardiography- advanced",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 4,
      title: "Echocardiography- fetal",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 5,
      title: "Echocardiography- pediatric",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 6,
      title: "Electrocardiography",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 7,
      title: "Holter Monitoring (real-time, up to 30 days)",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 8,
      title: "Event Recording",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 9,
      title: "Exercise Test",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 10,
      title: "6-Minute Walk Test",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 11,
      title: "Cardiac screenings and Risk Stratification",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 12,
      title: "Outpatient Follow-up and Cardiovascular Disease Management",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
  ],
  am: [
    {
      id: 1,
      title:
        "Սրտաբանական, առիթմոլոգիական և անոթային վիրաբուժական խորհրդատվություն",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 2,
      title: "Էխոկարդիոգրաֆիա – հիմնական",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 3,
      title: "Էխոկարդիոգրաֆիա – խորացված",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 4,
      title: "Էխոկարդիոգրաֆիա – պտղի սրտի",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 5,
      title: "Էխոկարդիոգրաֆիա – մանկական",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 6,
      title: "Էլեկտրասրտագրություն",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 7,
      title: "Հոլտեր մոնիտորինգ(իրական ժամանակում, մինչև 30 օրյա)",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 8,
      title: "Պատահարների ձայնագրում",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 9,
      title: "Սթրես թեստ",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 10,
      title: "6 րոպե քայլքի թեստ",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 11,
      title: "Սրտաբանական զննում և ռիսկի գնահատում",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 12,
      title:
        "Արտահիվանդանոցային հսկողություն և սիրտանոթային հիվանդությունների կառավարում",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
  ],
  ru: [
    {
      id: 1,
      title: "Кардиологические, аритмологические и сосудистые консультации",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 2,
      title: "Эхокардиография – базовая",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 3,
      title: "Эхокардиография – расширенная",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 4,
      title: "Эхокардиография – плода",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 5,
      title: "Эхокардиография – детская",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 6,
      title: "Электрокардиография",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 7,
      title: "Холтеровское мониторирование (в реальном времени, до 30 дней)",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 8,
      title: "Регистрация событий",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 9,
      title: "Стресс-тест",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 10,
      title: "6-минутный тест ходьбы",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 11,
      title: "Кардиологическое обследование и оценка риска",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
    {
      id: 12,
      title:
        "Амбулаторное наблюдение и управление сердечно-сосудистыми заболеваниями",
      description: "",
      icon: (
        <Image
          src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
          alt="CardioLab Logo"
          width={35}
          height={35}
          className="mb-4"
        />
      ),
    },
  ],
};
