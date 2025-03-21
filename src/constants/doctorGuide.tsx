import type React from "react";
import { FaInfo, FaPeopleLine } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";

type MediaType = {
  image: string;
  video: string;
};

export interface DGuideI {
  id: number;
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
  details: {
    title: string;
    date: Date;
    media: MediaType;
    content: React.ReactNode;
  };
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
      title: "Useful materials",
      description: "",
      path: "/usefulMaterials",
      icon: <FaInfo className="icon largest-icon-size" />,
      details: {
        title: "Understanding Heart Health: 5 Tips for a Strong Heart",
        date: new Date(new Date().setDate(new Date().getDate() - 2)),
        media: { image: "/images/blog/blog1.jpg", video: "" },
        content: (
          <>
            <p>
              Heart health is critical to overall well-being. Taking care of
              your heart involves healthy habits and lifestyle changes.
            </p>
            <p>
              From managing stress to eating the right foods, these practices
              can significantly reduce the risk of heart diseases.
            </p>
            <ul>
              <li>
                Maintain a balanced diet rich in fruits, vegetables, and whole
                grains.
              </li>
              <li>Engage in at least 30 minutes of moderate exercise daily.</li>
              <li>Avoid smoking and limit alcohol consumption.</li>
            </ul>
          </>
        ),
      },
    },
    {
      id: 2,
      title: "Accredited trainings",
      description: "",
      path: "/accreditedTrainings",
      icon: <GrWorkshop className="icon largest-icon-size" />,
      details: {
        title: "Early Signs of Heart Disease and When to Act",
        date: new Date(new Date().setDate(new Date().getDate() - 4)),
        media: { image: "/images/blog/blog2.jpg", video: "" },
        content: (
          <>
            <p>
              Many people are unaware of the subtle signs of heart disease.
              Recognizing these early signals can save lives.
            </p>
            <p>
              Symptoms like chest discomfort, shortness of breath, and fatigue
              should not be ignored. Consult a healthcare provider if these
              persist.
            </p>
            <ul>
              <li>Pay attention to unusual chest pain or discomfort.</li>
              <li>Monitor your blood pressure regularly.</li>
              <li>
                Seek immediate help if experiencing shortness of breath or
                dizziness.
              </li>
            </ul>
          </>
        ),
      },
    },
    {
      id: 3,
      title: "Seminars",
      description: "",
      path: "/seminars",
      icon: <FaPeopleLine className="icon largest-icon-size" />,
      details: {
        title: "The Role of Diet in Preventing Heart Diseases",
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
        media: { image: "/images/blog/blog3.jpg", video: "" },
        content: (
          <>
            <p>
              Your diet plays a significant role in maintaining heart health.
              Making smart food choices can prevent heart diseases.
            </p>
            <p>
              A heart-healthy diet includes fruits, vegetables, whole grains,
              and lean proteins, avoiding trans fats and excessive sugar.
            </p>
            <ul>
              <li>Eat plenty of fresh produce.</li>
              <li>Choose whole-grain products over refined ones.</li>
              <li>Opt for healthy fats like olive oil and avocados.</li>
            </ul>
          </>
        ),
      },
    },
    {
      id: 4,
      title: "Job openings",
      description: "",
      path: "/jobOpenings",
      icon: <TfiWrite className="icon largest-icon-size" />,
      details: {
        title: "Managing Stress for a Healthier Heart",
        date: new Date(new Date().setDate(new Date().getDate() - 3)),
        media: { image: "/images/blog/blog4.jpg", video: "" },
        content: (
          <>
            <p>
              Chronic stress can harm your heart. Understanding stress and
              managing it effectively are key to preventing heart issues.
            </p>
            <p>
              Techniques like meditation, exercise, and maintaining work-life
              balance are vital for reducing stress&#39;s impact on your heart.
            </p>
            <ul>
              <li>Practice mindfulness or meditation daily.</li>
              <li>Take breaks and avoid overworking.</li>
              <li>Engage in activities that bring joy and relaxation.</li>
            </ul>
          </>
        ),
      },
    },
  ],
  am: [
    {
      id: 1,
      title: "Օգտակար նյութեր",
      description: "",
      path: "/usefulMaterials",
      icon: <FaInfo className="icon largest-icon-size" />,
      details: {
        title: "Սրտի առողջություն. 5 խորհուրդ ամուր սրտի համար",
        date: new Date(new Date().setDate(new Date().getDate() - 2)),
        media: { image: "/images/blog/blog1.jpg", video: "" },
        content: (
          <>
            <p>
              Սրտի առողջությունը կենսական նշանակություն ունի ընդհանուր
              բարեկեցության համար։ Սրտի խնամքը ներառում է առողջ սովորություններ
              և կյանքի փոփոխություններ։
            </p>
            <p>
              Սթրեսի կառավարումից մինչև ճիշտ սնուցում՝ այս սովորությունները
              կարող են զգալիորեն նվազեցնել սրտանոթային հիվանդությունների ռիսկը։
            </p>
            <ul>
              <li>
                Բալանսավորված դիետա՝ հարուստ մրգերով, բանջարեղենով և ամբողջական
                ձավարեղենով։
              </li>
              <li>
                Ամեն օր կատարեք առնվազն 30 րոպե չափավոր ֆիզիկական
                վարժություններ։
              </li>
              <li>Խուսափեք ծխելուց և սահմանափակեք ալկոհոլի օգտագործումը։</li>
            </ul>
          </>
        ),
      },
    },
    {
      id: 2,
      title: "Կրեդիտավորված վերապատրաստումներ",
      description: "",
      path: "/accreditedTrainings",
      icon: <GrWorkshop className="icon largest-icon-size" />,
      details: {
        title: "Սրտի հիվանդությունների վաղ նշանները և ինչ անել",
        date: new Date(new Date().setDate(new Date().getDate() - 4)),
        media: { image: "/images/blog/blog2.jpg", video: "" },
        content: (
          <>
            <p>
              Շատ մարդիկ անտեսում են սրտի խնդիրների նուրբ ազդանշանները։ Այս վաղ
              նշանների ճանաչումը կարող է կյանք փրկել։
            </p>
            <p>
              Նման ախտանշանները, ինչպիսիք են կրծքավանդակի անհանգստությունը,
              շնչահեղձությունը և հոգնածությունը, չպետք է անտեսվեն։ Դիմեք բժշկի,
              եթե դրանք շարունակվում են։
            </p>
            <ul>
              <li>
                Ուշադրություն դարձրեք կրծքավանդակի անսովոր ցավին կամ
                անհանգստությանը։
              </li>
              <li>Պարբերաբար չափեք արյան ճնշումը։</li>
              <li>
                Դիմեք օգնության, եթե շնչահեղձություն կամ գլխապտույտ եք զգում։
              </li>
            </ul>
          </>
        ),
      },
    },
    {
      id: 3,
      title: "Սեմինարներ",
      description: "",
      path: "/seminars",
      icon: <FaPeopleLine className="icon largest-icon-size" />,
      details: {
        title: "Դիետայի դերը սրտի հիվանդությունների կանխարգելման գործում",
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
        media: { image: "/images/blog/blog3.jpg", video: "" },
        content: (
          <>
            <p>
              Դիետան կարևոր դեր է խաղում սրտի առողջության պահպանման մեջ։ Բանական
              սննդի ընտրությունը կարող է կանխարգելել սրտանոթային
              հիվանդությունները։
            </p>
            <p>
              Սրտանոթային դիետան ներառում է մրգեր, բանջարեղեն, ամբողջական
              ձավարեղեն և մաքուր սպիտակուցներ՝ խուսափելով տրանսճարպերից և
              ավելորդ շաքարից։
            </p>
            <ul>
              <li>Ավելի շատ ուտեք թարմ բանջարեղեն և մրգեր։</li>
              <li>Ընտրեք ամբողջական ձավարեղեններ՝ ռաֆինացվածի փոխարեն։</li>
              <li>
                Օգտագործեք օգտակար ճարպեր, ինչպիսիք են ձիթապտղի յուղը և
                ավոկադոն։
              </li>
            </ul>
          </>
        ),
      },
    },
    {
      id: 4,
      title: "Թափուր հաստիքներ",
      description: "",
      path: "/jobOpenings",
      icon: <TfiWrite className="icon largest-icon-size" />,
      details: {
        title: "Սթրեսի կառավարումը՝ սրտի առողջության համար",
        date: new Date(new Date().setDate(new Date().getDate() - 3)),
        media: { image: "/images/blog/blog4.jpg", video: "" },
        content: (
          <>
            <p>
              Քրոնիկ սթրեսը կարող է վնասել սիրտը։ Սթրեսի ըմբռնումը և դրա
              արդյունավետ կառավարումը սրտի խնդիրների կանխարգելման բանալին է։
            </p>
            <p>
              Նման տեխնիկաներ, ինչպիսիք են մեդիտացիան, ֆիզիկական վարժությունները
              և աշխատանք-կյանք հավասարակշռությունը, կարևոր են սրտի վրա սթրեսի
              ազդեցությունը նվազեցնելու համար։
            </p>
            <ul>
              <li>
                Ամեն օր կատարեք մեդիտացիա կամ օգտագործեք մտածողության
                տեխնիկաներ։
              </li>
              <li>Կատարեք ընդմիջումներ և խուսափեք գերհոգնածությունից։</li>
              <li>
                Ներգրավվեք գործունեության մեջ, որը հաճույք և հանգստություն է
                բերում։
              </li>
            </ul>
          </>
        ),
      },
    },
  ],
  ru: [
    {
      id: 1,
      title: "Полезные материалы",
      description: "",
      path: "/usefulMaterials",
      icon: <FaInfo className="icon largest-icon-size" />,
      details: {
        title: "Понимание здоровья сердца: 5 советов для сильного сердца",
        date: new Date(new Date().setDate(new Date().getDate() - 2)),
        media: { image: "/images/blog/blog1.jpg", video: "" },
        content: (
          <>
            <p>
              Здоровье сердца является важной частью общего благополучия. Забота
              о сердце включает здоровые привычки и изменения образа жизни.
            </p>
            <p>
              От управления стрессом до правильного питания — эти практики могут
              значительно снизить риск сердечно-сосудистых заболеваний.
            </p>
            <ul>
              <li>
                Сбалансированная диета, богатая фруктами, овощами и
                цельнозерновыми.
              </li>
              <li>
                Минимум 30 минут умеренной физической активности каждый день.
              </li>
              <li>Избегайте курения и ограничьте потребление алкоголя.</li>
            </ul>
          </>
        ),
      },
    },
    {
      id: 2,
      title: "Аккредитованные тренинги",
      description: "",
      path: "/accreditedTrainings",
      icon: <GrWorkshop className="icon largest-icon-size" />,
      details: {
        title: "Ранние признаки сердечных заболеваний и когда действовать",
        date: new Date(new Date().setDate(new Date().getDate() - 4)),
        media: { image: "/images/blog/blog2.jpg", video: "" },
        content: (
          <>
            <p>
              Многие люди не замечают тонких сигналов сердечных проблем.
              Распознавание этих ранних признаков может спасти жизнь.
            </p>
            <p>
              Симптомы, такие как дискомфорт в груди, одышка и усталость, не
              следует игнорировать. Обратитесь к врачу, если они сохраняются.
            </p>
            <ul>
              <li>
                Обратите внимание на необычную боль или дискомфорт в груди.
              </li>
              <li>Регулярно измеряйте кровяное давление.</li>
              <li>
                Обратитесь за помощью, если испытываете одышку или
                головокружение.
              </li>
            </ul>
          </>
        ),
      },
    },
    {
      id: 3,
      title: "Семинары",
      description: "",
      path: "/seminars",
      icon: <FaPeopleLine className="icon largest-icon-size" />,
      details: {
        title: "Роль диеты в предотвращении сердечных заболеваний",
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
        media: { image: "/images/blog/blog3.jpg", video: "" },
        content: (
          <>
            <p>
              Диета играет значительную роль в поддержании здоровья сердца.
              Умные пищевые выборы могут предотвратить сердечно-сосудистые
              заболевания.
            </p>
            <p>
              Сердечно-сосудистая диета включает фрукты, овощи, цельнозерновые
              продукты и нежирные белки, избегая трансжиров и избытка сахара.
            </p>
            <ul>
              <li>Ешьте больше свежих овощей и фруктов.</li>
              <li>Выбирайте цельнозерновые продукты вместо рафинированных.</li>
              <li>
                Используйте полезные жиры, такие как оливковое масло и авокадо.
              </li>
            </ul>
          </>
        ),
      },
    },
    {
      id: 4,
      title: "Вакансии",
      description: "",
      path: "/jobOpenings",
      icon: <TfiWrite className="icon largest-icon-size" />,
      details: {
        title: "Управление стрессом для здоровья сердца",
        date: new Date(new Date().setDate(new Date().getDate() - 3)),
        media: { image: "/images/blog/blog4.jpg", video: "" },
        content: (
          <>
            <p>
              Хронический стресс может повредить сердце. Понимание стресса и его
              эффективное управление являются ключом к предотвращению сердечных
              проблем.
            </p>
            <p>
              Такие техники, как медитация, физические упражнения и баланс между
              работой и личной жизнью, жизненно важны для уменьшения влияния
              стресса на сердце.
            </p>
            <ul>
              <li>
                Ежедневно занимайтесь медитацией или практикуйте осознанность.
              </li>
              <li>Делайте перерывы и избегайте переутомления.</li>
              <li>
                Участвуйте в мероприятиях, приносящих радость и расслабление.
              </li>
            </ul>
          </>
        ),
      },
    },
  ],
};
