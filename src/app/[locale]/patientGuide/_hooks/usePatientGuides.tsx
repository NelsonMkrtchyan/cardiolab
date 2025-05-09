import { useLocale } from "next-intl";
import { usePathname } from "next/dist/client/components/navigation";
import { patientGuides } from "~/constants/patientGuide";
import { type LocaleT } from "~/types";

const usePatientGuides = () => {
  const locale: string = useLocale();
  const pathname = usePathname();

  function getLastPart(url: string) {
    if (!url) {
      throw new Error("Invalid input. Please provide a valid string.");
    }
    const parts = url.split("/");
    return `/${parts[parts.length - 1]}`;
  }

  const pageName = getLastPart(pathname);

  const currentPatientGuidesList = patientGuides[locale as LocaleT];

  const currentPatientGuide = currentPatientGuidesList.find(
    (item) => item.path === pageName,
  );

  return { currentPatientGuide };
};

export default usePatientGuides;
