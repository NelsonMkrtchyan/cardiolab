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

export const podcasts: PodcastsI = {
  en: [],
  am: [
    {
      id: 1,
      title: "Կարդիոլաբ 01",
      description: "Սրտի փոխպատվաստում և արյան արհեստական շրջանառություն",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=ksAkHj7KceI&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=12&ab_channel=CardioLab",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWluMjRUL4Smxf0AaeIb7tJwXUHG2sKPOWnoQLik)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 2,
      title: "Կարդիոլաբ 02",
      description: "Սրտի փոխպատվաստում և արյան արհեստական շրջանառություն",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=-s4Y53WylRw&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=11&ab_channel=CardioLab",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWluvIOf7mkBOredpWR2N9YyhZbqVn4KCwD15mIt)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 3,
      title: "Կարդիոլաբ 03",
      description:
        "Ապացուցողական բժշկությունը, հանրային առողջապահությունն ու գիտությունը։",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=i34WMaQ4iFk&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=10&ab_channel=CardioLab",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWluzK6MKwCJcmH7QjURruLeMoFslfS6nVvkpdNb)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 4,
      title: "Կարդիոլաբ 04",
      description:
        "Շողացող առիթմիայի ախտորոշումը, ռիսկի գործոններն ու վերահսկումը ",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=IwYVsFNAFzc&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=9&ab_channel=CardioLab",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu1ocw8U2GN8X3FsiITKCzR9wVM5lohEmPqWDv)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 5,
      title: "Կարդիոլաբ 05",
      description: "Առիթմիաներ։ Ռիթմավար սարքերի իմպլանտացիա և աբլյացիա։",
      icon: <FaDiagnoses className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=TomwbYICxaw&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=8&ab_channel=CardioLab",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWluTJf3LzSIO67xl130tYVbZmnvuKAkc2dHC9gh)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 6,
      title: "Կարդիոլաբ 06",
      description:
        "Սիրտանոթային հիվանդությունների կանխարգելումն ու ռիսկի գործոնները։",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=09zmigrWKoQ&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=7&ab_channel=CardioLab",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWluyUnGW0b6zXn5IYo7kQ219avgmj3i8hJrKlsw)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 7,
      title: "Կարդիոլաբ 07",
      description:
        "Հոգեկան առողջությունը, ներկայում ապրելը, էմոցիաների կառավարումը։",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=fBIsPXOJBic&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=6&ab_channel=CardioLab",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWluYQqC9To17ZsjS0g8pKl2JFLv4rURaVyuX3wt)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 9,
      title: "Կարդիոլաբ 09",
      description: "Արյան բարձր ճնշում․ կանխարգելումից մինչև բուժում։",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=dNM2pEcR81A&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=5&t=1s&ab_channel=CardioLab",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu0owPr6B3uh8TEZLPqWjlAOFybHiDawcvdgUp)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 10,
      title: "Կարդիոլաբ 10",
      description:
        "Սրտի փականային հիվանդություն․ առաջացման պատճառները, ախտորոշումը և բուժումը։",
      icon: <FaDiagnoses className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=wB09BIkGlDc&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=4&ab_channel=CardioLab",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWluEvk2dwbJSpZQ36u72Hw8kvD5PiIMdXj9xVnB)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 11,
      title: "Կարդիոլաբ 11",
      description: "Սրտային անբավարարություն՝ պատճառներից մինչև բուժում։",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=mNVvxlsCe10&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=3&ab_channel=CardioLab",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWluvWg7qpkBOredpWR2N9YyhZbqVn4KCwD15mIt)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 12,
      title: "Կարդիոլաբ 12",
      description:
        "Ինչպես համակերպվել կյանքի ավարտի հետ, կպչուն մտքերն ու սրտի խնդիրները։",
      icon: <FaDiagnoses className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=OD9Ni0_I3Tc&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=2&t=7s&ab_channel=CardioLab",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWluPXIqmSuI6WAbuR912pJOCqoksxfdhDYag8wy)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 13,
      title: "Կարդիոլաբ 13",
      description:
        "Ծխախոտի վնասները, հոգեկան կախվածությունը, կիրառումը կանանց և երեխաների շրջանում։",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=M_rJ3aL2BEA&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=1&ab_channel=CardioLab",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWlusObnGaH8WicdTAJnxzvMXoFQljg5qw7fEkbR)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 14,
      title: "Կարդիոլաբ 14",
      description:
        "Հանկարծամահությունն ու դրա պատճառները, սրտի ռիթմավար սարքերի իմպլանտացիան",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=2AiH_Ys3zCI&list=PLZI6teBY2du2iWrmWHoxTsrMyZjOpUP7T&index=14&t=3s&ab_channel=CardioLab",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWluj4SVDhiHoPFKarUxhRe4v0WQu3LTAnd1lViG)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    //   ##############
    {
      id: 15,
      title: "Կարդիոլաբ 15",
      description:
        "Բուժառուների փորձառությունն ու անվերջ հերթերը, որակը հանրային առողջապահությունում",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=iyRxCJ3JuyU",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWlujyWPY34iHoPFKarUxhRe4v0WQu3LTAnd1lVi)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 16,
      title: "Կարդիոլաբ 16",
      description:
        "Խորհուրդներ Ամանորին, դեղորայքի շարունակական ընդունումը, ինչպես խուսափել խնդիրներից",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=_y2T7XPB6g4",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu2vmcMm3aYOs6XAhJVHKowrlz1WfdjyPxt0Ic)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 17,
      title: "Կարդիոլաբ 17",
      description:
        "Սիրտանոթային հիվանդությունների հետազոտման մեթոդներ, ՄՌՏ, ԿՏ",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=sW1XD62KB14",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu4ftvALTf7FiK13PNukgH8nRVZomx2jIXGJ0T)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 18,
      title: "Կարդիոլաբ 18",
      description:
        "Բժշկություն և բիզնես, կադրերի պատրաստում և սրտի վիրաբույժ լինելու դժվարություններ",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=SFRl4JiePSQ",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWlugCeXjdviePapmd4fjRNBXFSt1CEhgvq2b0rM)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 19,
      title: "Կարդիոլաբ 19",
      description: "Մանկական քաղցկեղի դեմ պայքար, SIOP, Oncodaily ",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=7o34X882m1c",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWluzsHSE1CJcmH7QjURruLeMoFslfS6nVvkpdNb)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 20,
      title: "Կարդիոլաբ 20",
      description:
        "Առողջապահական համակարգի փոփոխությունները Հայաստանում և արտերկրում",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=CS4pXoaN4xo",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu3U6FnI7N5s3FUueQwgdhBEa4x1ScGkiXJAzp)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 21,
      title: "Կարդիոլաբ 21",
      description: "Ինչպե՞ս հաղթահարել վնասակար սովորությունները",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=PqfR7xoviHg",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWluNwuXsjF0whQGd3M2OxKmW5Egjv7s4bfklP8B)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 22,
      title: "Կարդիոլաբ 22",
      description:
        "Սրտային հանկարծամահություն․ պատճառներ, կանխարգելման մեթոդներ",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=o-7T2zVDwxI",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWluimMOYCUMdgQAzE8HpcawsFuGDr9USml2KXOR)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 23,
      title: "Կարդիոլաբ 23",
      description: "Ուղեղի կաթված կամ ինսուլտ․ առաջին նշաններ, կանխարգելում",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=N5yBhSsh5bU",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWluRh0EJ7pwtAKyZqujExl659riehkFnU7WadXQ)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      id: 24,
      title: "Կարդիոլաբ 24",
      description:
        "Շաքարի, սպիտակուցի և տարբերակված սննդակարգի ազդեցությունը սրտի վրա",
      icon: <FaHeartbeat className="icon largest-icon-size mb-4" />,
      url: "https://www.youtube.com/watch?v=wnzVsUFVoGw",
      posterUrl:
        "url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWlum83LyDGaVxeR9o1ihQPJszYySDklZFETMgqw)",
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
  ],
  ru: [],
};
