import dayjs from "dayjs";
import { getLocale } from "~/utils/helpers";

export const formattingDate = ({
  date,
  locale,
  format = "MMM DD, YYYY",
}: {
  date: Date;
  locale: string;
  format?: string;
}) => {
  return dayjs(date).locale(getLocale(locale)).format(format);
};
