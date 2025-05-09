import type React from "react";
import { IoLibrary } from "react-icons/io5";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";

type MediaType = {
  image: string;
  video: string;
};

export interface PGuideI {
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
      title: "Health Library",
      description: "",
      path: "/healthLibrary",
      icon: <IoLibrary className="icon largest-icon-size" />,
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
      title: "Price List",
      description: "",
      path: "/pricelist",
      icon: <FaRegMoneyBillAlt className="icon largest-icon-size" />,
      details: {
        title: "Our Services and Prices",
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
        media: { image: "/images/blog/blog3.jpg", video: "" },
        content: (
          <>
            <p>
              At CardioLab, we are committed to providing transparent pricing
              for all our services. Our price list includes consultation fees,
              diagnostic tests, and advanced procedures.
            </p>
            <p>
              Please note that prices may vary based on individual patient needs
              and specific requirements. For the most accurate pricing
              information, we recommend scheduling a consultation with our
              specialists.
            </p>
          </>
        ),
      },
    },
  ],
  am: [
    {
      id: 1,
      title: "Ապահովագրական տեղեկատվություն",
      description: "",
      path: "/insuranceInfo",
      icon: <FaHandHoldingMedical className="icon largest-icon-size" />,
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
      title: "Առողջության գրադարան",
      description: "",
      path: "/healthLibrary",
      icon: <IoLibrary className="icon largest-icon-size" />,
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
      title: "Գնացուցակ",
      description: "",
      path: "/pricelist",
      icon: <FaRegMoneyBillAlt className="icon largest-icon-size" />,
      details: {
        title: "Մեր ծառայությունները և գնացուցակը",
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
        media: { image: "/images/blog/blog3.jpg", video: "" },
        content: (
          <>
            <p>
              CardioLab-ում մենք նվիրված ենք մեր բոլոր ծառայությունների թափանցիկ
              գնագոյացմանը: Մեր գնացուցակը ներառում է խորհրդատվության վճարներ,
              ախտորոշիչ թեստեր և առաջադեմ միջամտություններ:
            </p>
            <p>
              Խնդրում ենք նկատի ունենալ, որ գները կարող են տարբերվել՝ կախված
              հիվանդի անհատական կարիքներից և հատուկ պահանջներից: Առավել ճշգրիտ
              գնային տեղեկությունների համար խորհուրդ ենք տալիս պայմանավորվել
              խորհրդատվություն մեր մասնագետների հետ:
            </p>
          </>
        ),
      },
    },
  ],
  ru: [
    {
      id: 1,
      title: "Страховая информация",
      description: "",
      path: "/insuranceInfo",
      icon: <FaHandHoldingMedical className="icon largest-icon-size" />,
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
      title: "Библиотека здоровья",
      description: "",
      path: "/healthLibrary",
      icon: <IoLibrary className="icon largest-icon-size" />,
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
      title: "Прайс-лист",
      description: "",
      path: "/pricelist",
      icon: <FaRegMoneyBillAlt className="icon largest-icon-size" />,
      details: {
        title: "Наши услуги и цены",
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
        media: { image: "/images/blog/blog3.jpg", video: "" },
        content: (
          <>
            <p>
              В CardioLab мы стремимся обеспечить прозрачное ценообразование на
              все наши услуги. Наш прайс-лист включает стоимость консультаций,
              диагностических тестов и современных процедур.
            </p>
            <p>
              Пожалуйста, обратите внимание, что цены могут варьироваться в
              зависимости от индивидуальных потребностей пациента и конкретных
              требований. Для получения наиболее точной информации о ценах мы
              рекомендуем записаться на консультацию к нашим специалистам.
            </p>
          </>
        ),
      },
    },
  ],
};
