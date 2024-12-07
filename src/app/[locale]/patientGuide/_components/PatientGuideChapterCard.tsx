import { Link } from "~/i18n/routing";
import { type CardI } from "~/constants/patientGuide";

const PatientGuideChapterCard = ({ guide }: CardI) => {
  const { title, description, icon, path } = guide;

  return (
    <>
      <div className="col-sm-6 col-lg-6">
        <Link href={`/patientGuide${path}`}>
          <div className="expertise-inner">
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PatientGuideChapterCard;
