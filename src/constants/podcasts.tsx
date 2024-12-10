import type React from "react";
import { FaDiagnoses, FaHeartbeat } from "react-icons/fa";

export interface PodcastI {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  posterUrl: string;
  date: Date;
}

export interface CardI {
  podcast: PodcastI;
}

interface PodcastsI {
  en: PodcastI[];
  am: PodcastI[];
  ru: PodcastI[];
}

// johPec-7sexni-norpos

export const podcasts: PodcastsI = {
  en: [
    {
      id: 1,
      title: "CardioLab 01",
      description: "Heart transplantation and artificial blood circulation",
      icon: <FaDiagnoses className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=ksAkHj7KceI&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=12&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab01.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 2,
      title: "CardioLab 02",
      description: "Heart transplantation and artificial blood circulation.",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=-s4Y53WylRw&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=11&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab02.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 3,
      title: "CardioLab 03",
      description: "Evidence-based medicine, public health, and science.",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=i34WMaQ4iFk&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=10&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab03.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 4,
      title: "CardioLab 04",
      description: "Diagnosis of arrhythmia, risk factors, and management.",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=IwYVsFNAFzc&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=9&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab04.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 5,
      title: "CardioLab 05",
      description: "Arrhythmias. Implantation of pacemakers and ablation.",
      icon: <FaDiagnoses className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=TomwbYICxaw&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=8&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab05.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 6,
      title: "CardioLab 06",
      description: "Prevention of cardiovascular diseases and risk factors.",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=09zmigrWKoQ&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=7&ab_channel=CardioLab",
      posterUrl: "url(/images/feedback-bg.jpg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 7,
      title: "CardioLab 07",
      description: "Mental health, living in the present, managing emotions.",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=fBIsPXOJBic&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=6&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab07.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 9,
      title: "CardioLab 09",
      description: "High blood pressure: From prevention to treatment.",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=dNM2pEcR81A&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=5&t=1s&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab09.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 10,
      title: "CardioLab 10",
      description: "Heart valve disease: Causes, diagnosis, and treatment.",
      icon: <FaDiagnoses className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=wB09BIkGlDc&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=4&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab10.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 11,
      title: "CardioLab 11",
      description: "Heart failure: From causes to treatment.",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=mNVvxlsCe10&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=3&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab11.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 12,
      title: "CardioLab 12",
      description:
        "How to cope with the end of life, obsessive thoughts, and heart problems.",
      icon: <FaDiagnoses className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=OD9Ni0_I3Tc&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=2&t=7s&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab12.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 13,
      title: "CardioLab 13",
      description:
        "The harms of smoking, psychological addiction, and its usage among women and children.",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=M_rJ3aL2BEA&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=1&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab13.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 14,
      title: "CardioLab 14",
      description:
        "Sudden cardiac death and its causes, implantation of pacemakers",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=2AiH_Ys3zCI&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=14&t=3s&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab14.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
  ],
  am: [
    {
      id: 1,
      title: "Կարդիոլաբ 01",
      description: "Սրտի փոխպատվաստում և արյան արհեստական շրջանառություն",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=ksAkHj7KceI&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=12&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab01.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 2,
      title: "Կարդիոլաբ 02",
      description: "Սրտի փոխպատվաստում և արյան արհեստական շրջանառություն",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=-s4Y53WylRw&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=11&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab02.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 3,
      title: "Կարդիոլաբ 03",
      description:
        "Ապացուցողական բժշկությունը, հանրային առողջապահությունն ու գիտությունը։",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=i34WMaQ4iFk&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=10&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab03.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 4,
      title: "Կարդիոլաբ 04",
      description:
        "Շողացող առիթմիայի ախտորոշումը, ռիսկի գործոններն ու վերահսկումը ",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=IwYVsFNAFzc&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=9&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab04.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 5,
      title: "Կարդիոլաբ 05",
      description: "Առիթմիաներ։ Ռիթմավար սարքերի իմպլանտացիա և աբլյացիա։",
      icon: <FaDiagnoses className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=TomwbYICxaw&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=8&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab05.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 6,
      title: "Կարդիոլաբ 06",
      description:
        "Սիրտանոթային հիվանդությունների կանխարգելումն ու ռիսկի գործոնները։",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=09zmigrWKoQ&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=7&ab_channel=CardioLab",
      posterUrl: "url(/images/feedback-bg.jpg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 7,
      title: "Կարդիոլաբ 07",
      description:
        "Հոգեկան առողջությունը, ներկայում ապրելը, էմոցիաների կառավարումը։",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=fBIsPXOJBic&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=6&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab07.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 9,
      title: "Կարդիոլաբ 09",
      description: "Արյան բարձր ճնշում․ կանխարգելումից մինչև բուժում։",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=dNM2pEcR81A&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=5&t=1s&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab09.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 10,
      title: "Կարդիոլաբ 10",
      description:
        "Սրտի փականային հիվանդություն․ առաջացման պատճառները, ախտորոշումը և բուժումը։",
      icon: <FaDiagnoses className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=wB09BIkGlDc&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=4&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab10.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 11,
      title: "Կարդիոլաբ 11",
      description: "Սրտային անբավարարություն՝ պատճառներից մինչև բուժում։",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=mNVvxlsCe10&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=3&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab11.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 12,
      title: "Կարդիոլաբ 12",
      description:
        "Ինչպես համակերպվել կյանքի ավարտի հետ, կպչուն մտքերն ու սրտի խնդիրները։",
      icon: <FaDiagnoses className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=OD9Ni0_I3Tc&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=2&t=7s&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab12.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 13,
      title: "Կարդիոլաբ 13",
      description:
        "Ծխախոտի վնասները, հոգեկան կախվածությունը, կիրառումը կանանց և երեխաների շրջանում։",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=M_rJ3aL2BEA&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=1&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab13.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 14,
      title: "Կարդիոլաբ 14",
      description:
        "Հանկարծամահությունն ու դրա պատճառները, սրտի ռիթմավար սարքերի իմպլանտացիան",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=2AiH_Ys3zCI&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=14&t=3s&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab14.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
  ],
  ru: [
    {
      id: 1,
      title: "КардиоЛаб 01",
      description: "Пересадка сердца и искусственное кровообращение",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=ksAkHj7KceI&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=12&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab01.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 2,
      title: "КардиоЛаб 02",
      description: "Пересадка сердца и искусственное кровообращение",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=-s4Y53WylRw&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=11&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab02.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 3,
      title: "КардиоЛаб 03",
      description: "Доказательная медицина, общественное здоровье и наука.",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=i34WMaQ4iFk&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=10&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab03.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 4,
      title: "КардиоЛаб 04",
      description: "Диагностика аритмии, факторы риска и управление ",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=IwYVsFNAFzc&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=9&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab04.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 5,
      title: "КардиоЛаб 05",
      description: "Аритмии. Имплантация ритмовых устройств и абляция.",
      icon: <FaDiagnoses className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=TomwbYICxaw&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=8&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab05.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 6,
      title: "КардиоЛаб 06",
      description:
        "Профилактика сердечно-сосудистых заболеваний и факторы риска.",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=09zmigrWKoQ&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=7&ab_channel=CardioLab",
      posterUrl: "url(/images/feedback-bg.jpg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 7,
      title: "КардиоЛаб 07",
      description:
        "Психическое здоровье, жизнь в настоящем, управление эмоциями.",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=fBIsPXOJBic&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=6&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab07.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 9,
      title: "КардиоЛаб 09",
      description: "Высокое кровяное давление: от профилактики до лечения.",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=dNM2pEcR81A&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=5&t=1s&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab09.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 10,
      title: "КардиоЛаб 10",
      description:
        "Заболевание сердечных клапанов: причины, диагностика и лечение.",
      icon: <FaDiagnoses className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=wB09BIkGlDc&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=4&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab10.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 11,
      title: "КардиоЛаб 11",
      description: "Сердечная недостаточность: от причин до лечения.",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=mNVvxlsCe10&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=3&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab11.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 12,
      title: "КардиоЛаб 12",
      description:
        "Как смириться с окончанием жизни, навязчивыми мыслями и проблемами с сердцем.",
      icon: <FaDiagnoses className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=OD9Ni0_I3Tc&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=2&t=7s&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab12.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 13,
      title: "КардиоЛаб 13",
      description:
        "Вред курения, психологическая зависимость и его употребление среди женщин и детей.",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=M_rJ3aL2BEA&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=1&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab13.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 14,
      title: "КардиоЛаб 14",
      description:
        "Внезапная смерть и её причины, имплантация кардиостимуляторов",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=2AiH_Ys3zCI&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=14&t=3s&ab_channel=CardioLab",
      posterUrl: "url(/images/podcasts/lab14.jpeg)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
  ],
};
