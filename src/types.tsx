export type LocaleT = "en" | "am" | "ru";

export interface nameWithTranslations {
  am: string;
  en: string;
  ru: string;
}

// #############################################
/* eslint-disable no-unused-vars */
export interface ImageProps {
  id: number;
  // height: string;
  // width: string;
  // public_id: string;
  // format: string;
  // blurDataUrl?: string;
  url: string;
}

export interface SharedModalProps {
  index: number;
  images?: ImageProps[];
  currentPhoto?: ImageProps;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}
