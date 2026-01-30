/**
 * Migration script to populate About Us page in Sanity
 * This script migrates data from constants/general.tsx and translation files
 *
 * Run: npx tsx scripts/sanity-migration/migrate-about-page.ts
 */

import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';

dotenv.config();

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Translation data from messages/*.json
const translations = {
  am: {
    title: "Բարի գալուստ «CardioLab» բժշկական կենտրոնի պաշտոնական կայք",
    description: "«CardioLab» բժշկական կենտրոնը, որը հիմնադրվել է 2024 թվականին, մասնագիտացված է սրտի ժամանակակից խնամքի մեջ, որը առաջնահերթություն է տալիս ձեր առողջական բարեկեցությանը։ Մեր կենտրոնն ամբողջական, իտեգրացված պացիենտակենտրոն սրտաբանական խնամքի կենտրոն է, որտեղ յուրաքանչյուր պացիենտ մեկ այցելության ընթացքում կարող է անցնել իր սիրտ-անոթային համակարգի հետ կապված բոլոր հետազոտությունները: \nՄենք առաջարկում ենք ծառայությունների լայն շրջանակ մեծահասակների և երեխաների համար՝ սկսած սիրտանոթային խորհրդատվություններից և սրտի զննումներից մինչև համապարփակ առողջության ստուգումներ և առաջադեմ մոնիտորինգի լուծումներ:\nՄեր թիմը համալրված է ոլորտի լավագույն մասնագետներով, ովքեր բարձր հոգատարությամբ կհոգան ձեր սրտի առողջության մասին և կանեն առավելագույնը, որպեսզի դուք բավարարված և գոհունակ մնաք ձեզ մատուցված բժշկական ծառայություններից:\n Եղեք առողջ բառի լավագույն իմաստով:",
    signature1: "\n\n Տաթևիկ Հովակիմյան",
    signature2: "\n«CardioLab»",
    signature3: " բժշկական կենտրոնի համահիմնադիր տնօրեն, սրատաբան-առիթմոլոգ\n",
  },
  en: {
    title: "Welcome to the official website of CardioLab Medical Center",
    description: "CardioLab Medical Center, established in 2024, specializes in modern heart care, prioritizing your health and well-being. Our center is a comprehensive, integrated, patient-centered cardiology facility, where patients can undergo all necessary cardiovascular examinations in a single visit.\nWe offer a wide range of services for both adults and children, from cardiovascular consultations and heart screenings to comprehensive health check-ups and advanced monitoring solutions.\nOur team consists of top professionals in the field, who will take exceptional care of your heart health and do their utmost to ensure you are satisfied with the medical services provided.\nBe healthy — in every sense of the word.",
    signature1: "\n\nTatevik Hovakimyan",
    signature2: "\nCardioLab",
    signature3: " Co-founder and Director of the Medical Center, Cardiologist-Arrhythmologist\n",
  },
  ru: {
    title: "Добро пожаловать на официальный сайт медицинского центра «CardioLab»",
    description: "Медицинский центр «CardioLab», основанный в 2024 году, специализируется на современной кардиологической помощи, уделяя приоритетное внимание вашему здоровью и благополучию. Наш центр представляет собой комплексный, интегрированный, пациент-ориентированный кардиологический центр, где каждый пациент может пройти все необходимые сердечно-сосудистые обследования за один визит.\nМы предлагаем широкий спектр услуг как для взрослых, так и для детей: от кардиологических консультаций и обследований сердца до комплексных медосмотров и передовых решений для мониторинга.\nНаша команда состоит из ведущих специалистов в этой области, которые с особой заботой позаботятся о здоровье вашего сердца и сделают все возможное, чтобы вы остались довольны предоставленными медицинскими услугами.\nБудьте здоровы в лучшем смысле этого слова.",
    signature1: "\n\nТатевик Овакимян",
    signature2: "\n«CardioLab»",
    signature3: " Сооснователь и директор медицинского центра, кардиолог-аритмолог\n",
  },
};

// About content from constants/general.tsx
const aboutContent = {
  mission: {
    title: { am: "Առաքելություն", en: "Mission" },
    description: {
      am: "Հայաստանում սիրտանոթային հիվանդությունների բեռի նվազեցում՝ գերժամանակակից, բուժառուակենտրոն և հիվանդությանն ուղղված բազմապրոֆիլ խնամքի միջոցով, որն անխափան ապահովվում է ինտեգրված խնամքի ուղիներով՝ ավելի լավ արդյունքների և առողջ կյանքի համար",
      en: "To reduce the burden of cardiovascular diseases in Armenia through cutting-edge, patient-centered, and disease-focused multidisciplinary care—seamlessly delivered via integrated care pathways—for better outcomes and healthier lives.",
      ru: "Сократить бремя сердечно-сосудистых заболеваний в Армении с помощью передовой, пациент-ориентированной многопрофильной помощи, направленной на лечение заболеваний и бесперебойно предоставляемой через интегрированные пути лечения для лучших результатов и более здоровой жизни.",
    },
  },
  vision: {
    title: { am: "Տեսլական", en: "Vision" },
    description: {
      am: "CardioLab-ը ձգտում է դառնալ առաջատար «բուտիկ» սիրտանոթային հիվանդանոց՝ իսկական գերազանցության կենտրոն, որը տրամադրում է բարձրորակ, նորարար և անհատականացված խնամք երեխաների և չափահասների համար։\nՄտածված ինտեգրված հանրային-մասնավոր գործընկերության մոդելի միջոցով CardioLab-ը նպատակ ունի վերափոխել սիրտանոթային առողջապահությունը Հայաստանում՝ սահմանելով նոր չափանիշներ պացիենտների փորձի, կլինիկական արդյունքների և առողջապահական համակարգի կայունության հարցում։",
      en: "CardioLab aspires to become a premier \"boutique\" cardiovascular hospital—a true center of excellence that delivers high-quality, innovative, and personalized care for both pediatric and adult patients.\n Through a thoughtfully integrated public-private partnership model, CardioLab aims to reshape cardiovascular healthcare in Armenia by setting new standards in patient experience, clinical outcomes, and healthcare system sustainability.",
      ru: "CardioLab стремится стать ведущей «бутиковой» кардиологической больницей — настоящим центром передового опыта, предоставляющим высококачественную, инновационную и персонализированную помощь как педиатрическим, так и взрослым пациентам.\nЧерез продуманную интегрированную модель государственно-частного партнерства CardioLab стремится изменить кардиологическую медицинскую помощь в Армении, устанавливая новые стандарты в опыте пациентов, клинических результатах и устойчивости системы здравоохранения.",
    },
  },
  strategicPriorities: {
    title: { am: "Մեր ռազմավարական ուղղությունները", en: "Our Strategic Priorities" },
    items: [
      {
        am: "Կլինիկական սիրտ-անոթային բժշկություն",
        en: "Clinical Cardiovascular Medicine",
        ru: "Клиническая сердечно-сосудистая медицина",
      },
      {
        am: "Գիտահետազոտական գործունեություն",
        en: "Scientific Research and Innovation",
        ru: "Научные исследования и инновации",
      },
      {
        am: "Պացիենտի իրազեկվածության բարձրացում",
        en: "Enhancing Patient Awareness",
        ru: "Повышение осведомленности пациентов",
      },
    ],
  },
  coreValues: {
    title: { am: "Մեր Արժեքները", en: "Our Core Values" },
    values: [
      {
        title: {
          am: "Շիտակություն և ազնվություն",
          en: "Integrity and Honesty",
          ru: "Честность и порядочность",
        },
        description: {
          am: "Մենք պահպանում ենք թափանցիկության և էթիկայի ամենաբարձր չափանիշները՝ մեր բոլոր շփումներում՝ պացիենտների, ընտանիքների, գործընկերների և գործընկեր կառույցների հետ։ Վստահությունն այն հիմքն է, որի վրա կառուցվում է մեր խնամքը",
          en: "We uphold the highest standards of transparency and ethics in all our interactions—with patients, families, partners, and affiliated institutions. Trust is the foundation upon which our care is built.",
          ru: "Мы поддерживаем самые высокие стандарты прозрачности и этики во всех наших взаимодействиях — с пациентами, семьями, партнерами и аффилированными учреждениями. Доверие — это основа, на которой строится наша забота.",
        },
      },
      {
        title: {
          am: "Համակրանք և հարգանք",
          en: "Compassion and Respect",
          ru: "Сострадание и уважение",
        },
        description: {
          am: "Մենք յուրաքանչյուրին մոտենում ենք արժանապատվությամբ և կարեկցանքով՝ ապահովելով բոլոր տարիքային խմբերի համար հարգալից և բուժառուակենտրոն սրտանոթային խնամք",
          en: "We treat every individual with dignity and empathy, ensuring respectful and patient-centered cardiovascular care for people of all ages.",
          ru: "Мы относимся к каждому человеку с достоинством и сочувствием, обеспечивая уважительную и ориентированную на пациента кардиологическую помощь для людей всех возрастов.",
        },
      },
      {
        title: {
          am: "Համագործակցություն",
          en: "Collaboration",
          ru: "Сотрудничество",
        },
        description: {
          am: "Մենք հավատում ենք, որ լավագույն արդյունքները ծնվում են համատեղ ուժերից։ Մեր բազմապրոֆիլ թիմը գործում է համադրությամբ՝ ապահովելով համակարգված, ամբողջական և շարունակական խնամք բոլոր հիվանդների համար",
          en: "We believe the best outcomes arise from collective effort. Our multidisciplinary team works in harmony to deliver coordinated, comprehensive, and continuous care for all patients.",
          ru: "Мы верим, что лучшие результаты возникают из коллективных усилий. Наша многопрофильная команда работает в гармонии для предоставления координированной, комплексной и непрерывной помощи всем пациентам.",
        },
      },
      {
        title: {
          am: "Պրոֆեսիոնալիզմ",
          en: "Professionalism",
          ru: "Профессионализм",
        },
        description: {
          am: "Մենք ծառայություններ ենք մատուցում մեծագույն պատասխանատվությամբ և նվիրումով՝ մեր պացիենտների առողջությունը առաջնահերթ դնելով",
          en: "We deliver services with the utmost responsibility and dedication, placing the health of our patients above all else.",
          ru: "Мы предоставляем услуги с максимальной ответственностью и преданностью, ставя здоровье наших пациентов превыше всего.",
        },
      },
      {
        title: {
          am: "Շարունակական Զարգացում",
          en: "Continuous Growth",
          ru: "Непрерывное развитие",
        },
        description: {
          am: "Մենք միշտ ձգտում ենք աճի՝ հետևելով նորագույն գիտական ձեռքբերումներին և բարելավելով մեր հմտություններն ու ծառայությունները",
          en: "We constantly strive for growth—staying abreast of the latest scientific advances and improving our skills and services.",
          ru: "Мы постоянно стремимся к росту, следя за последними научными достижениями и улучшая наши навыки и услуги.",
        },
      },
    ],
  },
};

async function migrateAboutPage() {
  console.log('🚀 Starting About Us page migration to Sanity...\n');

  try {
    // Check if aboutPage document already exists
    const existing = await client.fetch('*[_type == "aboutPage"][0]');

    if (existing) {
      console.log('⚠️  About Us page already exists in Sanity.');
      console.log('   Document ID:', existing._id);
      console.log('\n❓ Do you want to update it? (This will overwrite existing data)');
      console.log('   To proceed, delete the existing document in Sanity Studio first.\n');
      return;
    }

    // Create the aboutPage document
    const aboutPageDoc = {
      _type: 'aboutPage',
      _id: 'aboutPage', // Singleton ID
      mainSection: {
        title: {
          am: translations.am.title,
          en: translations.en.title,
          ru: translations.ru.title,
        },
        description: {
          am: translations.am.description,
          en: translations.en.description,
          ru: translations.ru.description,
        },
        signature: {
          name: {
            am: translations.am.signature1.trim(),
            en: translations.en.signature1.trim(),
            ru: translations.ru.signature1.trim(),
          },
          organization: {
            am: translations.am.signature2.trim(),
            en: translations.en.signature2.trim(),
            ru: translations.ru.signature2.trim(),
          },
          position: {
            am: translations.am.signature3.trim(),
            en: translations.en.signature3.trim(),
            ru: translations.ru.signature3.trim(),
          },
        },
        // Image will need to be uploaded manually in Sanity Studio
      },
      mission: {
        title: aboutContent.mission.title,
        description: aboutContent.mission.description,
        order: 1,
      },
      vision: {
        title: aboutContent.vision.title,
        description: aboutContent.vision.description,
        order: 2,
      },
      strategicPriorities: {
        title: aboutContent.strategicPriorities.title,
        items: aboutContent.strategicPriorities.items.map((item) => ({
          text: {
            am: item.am,
            en: item.en,
            ru: item.ru,
          },
        })),
        order: 3,
      },
      coreValues: {
        title: aboutContent.coreValues.title,
        values: aboutContent.coreValues.values.map((value) => ({
          title: value.title,
          description: value.description,
        })),
        order: 4,
      },
      satisfactionSurvey: {
        title: {
          am: "Բուժառուի բավարարվածության հարցաթերթիկ",
          en: "Patient Satisfaction Survey",
          ru: "Анкета удовлетворенности пациентов",
        },
        buttonText: {
          am: "Լրացնել",
          en: "Fill",
          ru: "Заполнить",
        },
        surveyUrl: "https://docs.google.com/forms/d/16_lgUIGke1yXgtyiMcAfZYuUj1Ugb50EIfxU67MH7_A/edit?pli=1",
        showSection: true,
      },
    };

    // Create the document in Sanity
    const result = await client.create(aboutPageDoc);

    console.log('✅ Successfully created About Us page in Sanity!\n');
    console.log('📄 Document ID:', result._id);
    console.log('📝 Document created with the following sections:');
    console.log('   • Main About Section');
    console.log('   • Mission');
    console.log('   • Vision');
    console.log('   • Strategic Priorities (3 items)');
    console.log('   • Core Values (5 values)');
    console.log('   • Satisfaction Survey');
    console.log('\n📌 Note: You\'ll need to upload the main image manually in Sanity Studio');
    console.log('   Image URL: https://x41q9wll8l.ufs.sh/f/kPqN7718CWlubD8SFgldCU4c8A1oViQtsIJW2aZEXeySMgu3');
    console.log('\n🎉 Migration complete!');

  } catch (error) {
    console.error('❌ Error during migration:', error);
    throw error;
  }
}

// Run the migration
migrateAboutPage();
