import React from "react";
import { type CardProps } from "~/types/staff";
import { Link } from "~/i18n/routing";
import ImageWithLoader from "~/app/_Components/ImageWithLoader";

const Card: React.FC<CardProps> = ({ employee, className }) => {
  const { id, image, name, role } = employee;

  const employeeDetailPageLink = `/staff/details/${id}`;
  const PLACEHOLDER_IMAGE =
    "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluSH3gZgnEW7pyXzGrTZQb21kmdgPfAOJ8h3NC";

  console.log("employee", employee);
  return (
    <>
      <div className={`doctor-card ${className}`}>
        <Link className={"doctor-card-link"} href={employeeDetailPageLink}>
          <div className="doctor-item">
            <div className="doctor-top">
              <ImageWithLoader
                src={image || PLACEHOLDER_IMAGE}
                alt="Doctor"
                className="object-fit-cover"
              />
              {/*  /!*TODO: Uncomment in the future*!/*/}
              {/*  /!*<Link href="/appointment">Get Appointment</Link>*!/*/}
            </div>
            <div className="doctor-bottom">
              {name && (
                <h3>
                  <Link
                    href={employeeDetailPageLink}
                    onClick={(e) => e.preventDefault()}
                  >
                    {name}
                  </Link>
                </h3>
              )}
              {role && <span>{role.toLowerCase()}</span>}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
