import { useTranslations } from "next-intl";

const TestingTranslations = () => {
  const t = useTranslations("HomePage");

  return (
    <>
      <h1>{t("title")}</h1>
    </>
  );
};
export default TestingTranslations;
