import { Link } from "~/i18n/routing";
import { type ReactNode } from "react";

const BlueCard = ({
  path,
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  path: string;
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className="col-sm-6 col-lg-6">
        <Link href={path}>
          <div className="blue-card-item-inner">
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </>
  );
};
export default BlueCard;
