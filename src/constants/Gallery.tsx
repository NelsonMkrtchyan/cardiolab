import { type nameWithTranslations } from "~/types";

export const images = [
  {
    id: 1,
    url: "/images/podcasts/lab01.jpeg",
  },
  {
    id: 2,
    url: "/images/podcasts/lab02.jpeg",
  },
  {
    id: 3,
    url: "/images/podcasts/lab03.jpeg",
  },
  {
    id: 4,
    url: "/images/podcasts/lab04.jpeg",
  },
  {
    id: 5,
    url: "/images/podcasts/lab05.jpeg",
  },
  {
    id: 6,
    url: "/images/podcasts/lab07.jpeg",
  },
  {
    id: 7,
    url: "/images/podcasts/lab07.jpeg",
  },
  {
    id: 8,
    url: "/images/podcasts/lab09.jpeg",
  },
  {
    id: 9,
    url: "/images/podcasts/lab09.jpeg",
  },
  {
    id: 10,
    url: "/images/podcasts/lab10.jpeg",
  },
  {
    id: 11,
    url: "/images/podcasts/lab11.jpeg",
  },
  {
    id: 12,
    url: "/images/podcasts/lab12.jpeg",
  },
  {
    id: 13,
    url: "/images/podcasts/lab13.jpeg",
  },
  {
    id: 14,
    url: "/images/podcasts/lab14.jpeg",
  },
];

export interface ImageI {
  id: number;
  name?: string;
  url: string;
}

export interface VideoI {
  id: number;
  name?: string;
  url: string;
}

export interface FolderI {
  id: number;
  name: nameWithTranslations;
  date: Date;
  bannerUrl: string;
  images: ImageI[];
  videos?: VideoI[];
}

export interface FolderCardI {
  folder: FolderI;
}

export type GalleryI = FolderI[];

export const gallery: GalleryI = [
  {
    id: 1,
    name: {
      en: "First Folder",
      am: "Առաջին թղթապանակ",
      ru: "Первая папка",
    },
    date: new Date(new Date().setDate(new Date().getDate() - 2)),
    bannerUrl: "url(/images/login-bg.jpg)",
    images,
  },
  {
    id: 2,
    name: {
      en: "Second Folder",
      am: "Երկրորդ թղթապանակ",
      ru: "Вторая папка",
    },
    date: new Date(new Date().setDate(new Date().getDate() - 2)),
    bannerUrl: "url(/images/about2.jpg)",
    images,
  },
];
