import { useLocale } from "next-intl";
import { usePathname } from "next/dist/client/components/navigation";
import { doctorGuides } from "~/constants/doctorGuide";

const useDoctorGuides = () => {
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

  const currentDoctorGuidesList = doctorGuides[locale as "en" | "ru" | "am"];

  const currentDoctorGuide = currentDoctorGuidesList.find(
    (item) => item.path === pageName,
  );

  return { currentDoctorGuide };
};

export default useDoctorGuides;
