import type React from "react";

type MediaType = {
  image: string;
  video: string;
};

export interface NewsI {
  id: number;
  title: string;
  date: Date;
  media: MediaType;
  content: React.ReactNode;
}

interface ShortNewsI {
  id: number;
  title: string;
  date: Date;
  media: MediaType;
}

export interface NewsCardI {
  news: ShortNewsI;
}

interface NewsListI {
  en: NewsI[];
  ru: NewsI[];
  am: NewsI[];
}

export const news: NewsListI = {
  en: [
    {
      id: 1,
      title: "Understanding Heart Health: 5 Tips for a Strong Heart",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
      media: { image: "/images/blog/blog1.jpg", video: "" },
      content: (
        <>
          <p>
            Heart health is critical to overall well-being. Taking care of your
            heart involves healthy habits and lifestyle changes.
          </p>
          <p>
            From managing stress to eating the right foods, these practices can
            significantly reduce the risk of heart diseases.
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
    {
      id: 2,
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
    {
      id: 3,
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
            A heart-healthy diet includes fruits, vegetables, whole grains, and
            lean proteins, avoiding trans fats and excessive sugar.
          </p>
          <ul>
            <li>Eat plenty of fresh produce.</li>
            <li>Choose whole-grain products over refined ones.</li>
            <li>Opt for healthy fats like olive oil and avocados.</li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
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
    {
      id: 5,
      title: "Benefits of Regular Cardio Exercise",
      date: new Date(new Date().setDate(new Date().getDate() - 5)),
      media: { image: "/images/blog/blog5.jpg", video: "" },
      content: (
        <>
          <p>
            Cardio exercises like running, cycling, or swimming strengthen your
            heart and improve circulation.
          </p>
          <p>
            Regular cardio reduces blood pressure, boosts endurance, and
            minimizes the risk of heart diseases.
          </p>
          <ul>
            <li>Aim for at least 150 minutes of moderate cardio weekly.</li>
            <li>Mix up your routine to stay motivated.</li>
            <li>Track your progress to set achievable goals.</li>
          </ul>
        </>
      ),
    },
    {
      id: 6,
      title: "The Importance of Routine Check-ups for Heart Health",
      date: new Date(new Date().setDate(new Date().getDate() - 6)),
      media: { image: "/images/blog/blog6.jpg", video: "" },
      content: (
        <>
          <p>
            Routine check-ups can help detect potential heart issues early,
            making treatment more effective.
          </p>
          <p>
            Discuss your family history and lifestyle with your doctor to tailor
            a personalized heart health plan.
          </p>
          <ul>
            <li>Schedule annual check-ups with a cardiologist.</li>
            <li>Track cholesterol and blood pressure levels.</li>
            <li>Discuss any unusual symptoms with your doctor promptly.</li>
          </ul>
        </>
      ),
    },
    {
      id: 7,
      title: "Understanding the Link Between Sleep and Heart Health",
      date: new Date(new Date().setDate(new Date().getDate() - 7)),
      media: { image: "/images/blog/blog7.jpg", video: "" },
      content: (
        <>
          <p>
            Poor sleep habits can lead to increased risk of heart disease.
            Quality sleep helps maintain healthy blood pressure and heart
            function.
          </p>
          <p>
            Establishing a sleep schedule and creating a restful environment can
            improve heart health significantly.
          </p>
          <ul>
            <li>Aim for 7-8 hours of sleep per night.</li>
            <li>Reduce screen time before bedtime.</li>
            <li>Create a quiet, dark, and comfortable sleeping environment.</li>
          </ul>
        </>
      ),
    },
    {
      id: 8,
      title: "Heart Health in Women: What You Need to Know",
      date: new Date(new Date().setDate(new Date().getDate() - 3)),
      media: { image: "/images/blog/blog8.jpg", video: "" },
      content: (
        <>
          <p>
            Heart disease is a leading cause of death among women. Recognizing
            risk factors and taking preventive measures is crucial.
          </p>
          <p>
            Regular screenings, balanced diets, and stress management can
            significantly reduce the risk.
          </p>
          <ul>
            <li>Know your risk factors, including family history.</li>
            <li>Maintain an active lifestyle.</li>
            <li>Manage stress effectively through relaxation techniques.</li>
          </ul>
        </>
      ),
    },
    {
      id: 9,
      title: "How Technology is Revolutionizing Cardiac Care",
      date: new Date(new Date().setDate(new Date().getDate() - 1)),
      media: { image: "/images/blog/blog9.jpg", video: "" },
      content: (
        <>
          <p>
            Innovations like wearable devices and AI are transforming the way we
            monitor and treat heart conditions.
          </p>
          <p>
            These advancements enable early detection and personalized treatment
            plans, improving patient outcomes.
          </p>
          <ul>
            <li>Wearable devices for continuous monitoring.</li>
            <li>AI-powered tools for diagnostics.</li>
            <li>Telemedicine for accessible cardiac care.</li>
          </ul>
        </>
      ),
    },
  ],
  ru: [
    {
      id: 1,
      title: "Понимание здоровья сердца: 5 советов для сильного сердца",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
      media: { image: "/images/blog/blog1.jpg", video: "" },
      content: (
        <>
          <p>
            Здоровье сердца является важной частью общего благополучия. Забота о
            сердце включает здоровые привычки и изменения образа жизни.
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
    {
      id: 2,
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
            <li>Обратите внимание на необычную боль или дискомфорт в груди.</li>
            <li>Регулярно измеряйте кровяное давление.</li>
            <li>
              Обратитесь за помощью, если испытываете одышку или головокружение.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 3,
      title: "Роль диеты в предотвращении сердечных заболеваний",
      date: new Date(new Date().setDate(new Date().getDate() - 1)),
      media: { image: "/images/blog/blog3.jpg", video: "" },
      content: (
        <>
          <p>
            Диета играет значительную роль в поддержании здоровья сердца. Умные
            пищевые выборы могут предотвратить сердечно-сосудистые заболевания.
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
    {
      id: 4,
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
    {
      id: 5,
      title: "Преимущества регулярных кардиоупражнений",
      date: new Date(new Date().setDate(new Date().getDate() - 5)),
      media: { image: "/images/blog/blog5.jpg", video: "" },
      content: (
        <>
          <p>
            Кардиоупражнения, такие как бег, велосипед или плавание, укрепляют
            сердце и улучшают кровообращение.
          </p>
          <p>
            Регулярные кардионагрузки снижают кровяное давление, повышают
            выносливость и минимизируют риск сердечных заболеваний.
          </p>
          <ul>
            <li>Занимайтесь умеренным кардио минимум 150 минут в неделю.</li>
            <li>Смешивайте упражнения, чтобы сохранить мотивацию.</li>
            <li>Отслеживайте прогресс для достижения реальных целей.</li>
          </ul>
        </>
      ),
    },
    {
      id: 6,
      title: "Важность регулярных обследований для здоровья сердца",
      date: new Date(new Date().setDate(new Date().getDate() - 6)),
      media: { image: "/images/blog/blog6.jpg", video: "" },
      content: (
        <>
          <p>
            Регулярные обследования помогают выявить потенциальные проблемы с
            сердцем на ранних стадиях, делая лечение более эффективным.
          </p>
          <p>
            Обсудите с врачом свою семейную историю и образ жизни для
            составления персонального плана по уходу за сердцем.
          </p>
          <ul>
            <li>Проходите ежегодные осмотры у кардиолога.</li>
            <li>Отслеживайте уровень холестерина и кровяного давления.</li>
            <li>Своевременно обсуждайте необычные симптомы с врачом.</li>
          </ul>
        </>
      ),
    },
    {
      id: 7,
      title: "Признаки инсульта, которые нельзя игнорировать",
      date: new Date(new Date().setDate(new Date().getDate() - 7)),
      media: { image: "/images/blog/blog7.jpg", video: "" },
      content: (
        <>
          <p>
            Инсульт требует немедленного внимания. Знание его признаков может
            значительно улучшить результаты лечения.
          </p>
          <p>
            Симптомы включают внезапную слабость, трудности с речью и потерю
            координации. Быстрое обращение за медицинской помощью имеет решающее
            значение.
          </p>
          <ul>
            <li>Проверьте асимметрию лица или проблемы с движением.</li>
            <li>Обратите внимание на спутанность речи.</li>
            <li>
              Не откладывайте вызов скорой помощи при подозрении на инсульт.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 8,
      title: "Роль сна в здоровье сердца",
      date: new Date(new Date().setDate(new Date().getDate() - 8)),
      media: { image: "/images/blog/blog8.jpg", video: "" },
      content: (
        <>
          <p>
            Недостаток сна может привести к повышению кровяного давления,
            ожирению и другим сердечным проблемам.
          </p>
          <p>
            Установление здорового режима сна важно для поддержки общего
            благополучия, включая здоровье сердца.
          </p>
          <ul>
            <li>Стремитесь к 7-8 часам сна каждую ночь.</li>
            <li>Создайте спокойную обстановку для сна.</li>
            <li>Избегайте использования экранов за час до сна.</li>
          </ul>
        </>
      ),
    },
    {
      id: 9,
      title: "Как высокое кровяное давление влияет на сердце",
      date: new Date(new Date().setDate(new Date().getDate() - 9)),
      media: { image: "/images/blog/blog9.jpg", video: "" },
      content: (
        <>
          <p>
            Высокое кровяное давление, или гипертония, может вызвать чрезмерную
            нагрузку на сердце, увеличивая риск инфарктов и инсультов.
          </p>
          <p>
            Управление гипертонией через диету, упражнения и лекарства имеет
            решающее значение для снижения этих рисков.
          </p>
          <ul>
            <li>Ограничьте потребление соли в рационе.</li>
            <li>Контролируйте уровень стресса и избегайте курения.</li>
            <li>Регулярно проверяйте свое кровяное давление.</li>
          </ul>
        </>
      ),
    },
  ],
  am: [
    {
      id: 1,
      title: "Սրտի առողջություն. 5 խորհուրդ ամուր սրտի համար",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
      media: { image: "/images/blog/blog1.jpg", video: "" },
      content: (
        <>
          <p>
            Սրտի առողջությունը կենսական նշանակություն ունի ընդհանուր
            բարեկեցության համար։ Սրտի խնամքը ներառում է առողջ սովորություններ և
            կյանքի փոփոխություններ։
          </p>
          <p>
            Սթրեսի կառավարումից մինչև ճիշտ սնուցում՝ այս սովորությունները կարող
            են զգալիորեն նվազեցնել սրտանոթային հիվանդությունների ռիսկը։
          </p>
          <ul>
            <li>
              Բալանսավորված դիետա՝ հարուստ մրգերով, բանջարեղենով և ամբողջական
              ձավարեղենով։
            </li>
            <li>
              Ամեն օր կատարեք առնվազն 30 րոպե չափավոր ֆիզիկական վարժություններ։
            </li>
            <li>Խուսափեք ծխելուց և սահմանափակեք ալկոհոլի օգտագործումը։</li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
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
    {
      id: 3,
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
            ձավարեղեն և մաքուր սպիտակուցներ՝ խուսափելով տրանսճարպերից և ավելորդ
            շաքարից։
          </p>
          <ul>
            <li>Ավելի շատ ուտեք թարմ բանջարեղեն և մրգեր։</li>
            <li>Ընտրեք ամբողջական ձավարեղեններ՝ ռաֆինացվածի փոխարեն։</li>
            <li>
              Օգտագործեք օգտակար ճարպեր, ինչպիսիք են ձիթապտղի յուղը և ավոկադոն։
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
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
            Նման տեխնիկաներ, ինչպիսիք են մեդիտացիան, ֆիզիկական վարժությունները և
            աշխատանք-կյանք հավասարակշռությունը, կարևոր են սրտի վրա սթրեսի
            ազդեցությունը նվազեցնելու համար։
          </p>
          <ul>
            <li>
              Ամեն օր կատարեք մեդիտացիա կամ օգտագործեք մտածողության տեխնիկաներ։
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
    {
      id: 5,
      title: "Կանոնավոր սրտային վարժությունների առավելությունները",
      date: new Date(new Date().setDate(new Date().getDate() - 5)),
      media: { image: "/images/blog/blog5.jpg", video: "" },
      content: (
        <>
          <p>
            Սրտային վարժությունները, ինչպիսիք են վազքը, հեծանվավարությունը կամ
            լողը, ամրացնում են սիրտը և բարելավում արյան շրջանառությունը։
          </p>
          <p>
            Կանոնավոր սրտային վարժությունները նվազեցնում են արյան ճնշումը,
            բարձրացնում դիմացկունությունը և նվազեցնում սրտի հիվանդությունների
            ռիսկը։
          </p>
          <ul>
            <li>
              Կատարեք չափավոր սրտային վարժություններ՝ շաբաթական առնվազն 150
              րոպե։
            </li>
            <li>Փոխեք վարժությունները՝ մոտիվացիան պահպանելու համար։</li>
            <li>Հետևեք առաջընթացին՝ իրական նպատակներին հասնելու համար։</li>
          </ul>
        </>
      ),
    },
    {
      id: 6,
      title: "Կանոնավոր սրտային ստուգումների կարևորությունը",
      date: new Date(new Date().setDate(new Date().getDate() - 6)),
      media: { image: "/images/blog/blog6.jpg", video: "" },
      content: (
        <>
          <p>
            Կանոնավոր ստուգումները օգնում են հայտնաբերել հնարավոր սրտային
            խնդիրները վաղ փուլերում՝ դարձնելով բուժումը ավելի արդյունավետ։
          </p>
          <p>
            Քննարկեք ձեր ընտանեկան պատմությունը և կենսակերպը բժշկի հետ՝ սրտի
            խնամքի անձնական պլան կազմելու համար։
          </p>
          <ul>
            <li>Տարեկան այցելեք սրտաբանին ստուգումների համար։</li>
            <li>Հետևեք խոլեստերինի և արյան ճնշման մակարդակներին։</li>
            <li>Անմիջապես քննարկեք անսովոր ախտանշանները բժշկի հետ։</li>
          </ul>
        </>
      ),
    },
    {
      id: 7,
      title: "Ինսուլտի նշանները, որոնք պետք չէ անտեսել",
      date: new Date(new Date().setDate(new Date().getDate() - 7)),
      media: { image: "/images/blog/blog7.jpg", video: "" },
      content: (
        <>
          <p>
            Ինսուլտը պահանջում է անհապաղ ուշադրություն։ Իմանալով դրա նշանները՝
            դուք կարող եք զգալիորեն բարելավել բուժման արդյունքները։
          </p>
          <p>
            Ախտանշանները ներառում են հանկարծակի թուլություն, խոսքի
            դժվարություններ և կոորդինացիայի կորուստ։ Արագ բժշկական օգնությունը
            վճռորոշ է։
          </p>
          <ul>
            <li>Ստուգեք դեմքի ասիմետրիան կամ շարժման խնդիրները։</li>
            <li>Ուշադրություն դարձրեք խոսքի խառնաշփոթին։</li>
            <li>
              Մի հետաձգեք շտապ օգնություն կանչելը ինսուլտի կասկածի դեպքում։
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 8,
      title: "Քնի դերը սրտի առողջության մեջ",
      date: new Date(new Date().setDate(new Date().getDate() - 8)),
      media: { image: "/images/blog/blog8.jpg", video: "" },
      content: (
        <>
          <p>
            Քնի պակասը կարող է հանգեցնել բարձր արյան ճնշման, գիրության և սրտային
            այլ խնդիրների։
          </p>
          <p>
            Առողջ քնի ռեժիմի հաստատումը կարևոր է ընդհանուր բարեկեցության, այդ
            թվում՝ սրտի առողջության համար։
          </p>
          <ul>
            <li>Ձգտեք քնել ամեն գիշեր 7-8 ժամ։</li>
            <li>Ստեղծեք հանգիստ միջավայր քնելու համար։</li>
            <li>Խուսափեք էկրաններից քնելուց մեկ ժամ առաջ։</li>
          </ul>
        </>
      ),
    },
    {
      id: 9,
      title: "Ինչպես է բարձր արյան ճնշումը ազդում սրտի վրա",
      date: new Date(new Date().setDate(new Date().getDate() - 9)),
      media: { image: "/images/blog/blog9.jpg", video: "" },
      content: (
        <>
          <p>
            Բարձր արյան ճնշումը, կամ հիպերտենզիան, կարող է ավելորդ
            ծանրաբեռնվածություն առաջացնել սրտի վրա, մեծացնելով ինֆարկտների և
            ինսուլտների ռիսկը։
          </p>
          <p>
            Հիպերտենզիայի կառավարումը սննդակարգի, վարժությունների և դեղորայքի
            միջոցով վճռորոշ է այս ռիսկերը նվազեցնելու համար։
          </p>
          <ul>
            <li>Սահմանափակեք աղի օգտագործումը սննդակարգում։</li>
            <li>Կառավարեք սթրեսի մակարդակը և խուսափեք ծխելուց։</li>
            <li>Պարբերաբար ստուգեք ձեր արյան ճնշումը։</li>
          </ul>
        </>
      ),
    },
  ],
};
