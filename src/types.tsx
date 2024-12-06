export interface nameWithTranslations {
  en: string;
  ru: string;
  am: string;
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