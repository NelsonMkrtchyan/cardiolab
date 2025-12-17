import React from "react";
import { type CardProps } from "~/types/staff";
import { Link } from "~/i18n/routing";
import ImageWithLoader from "~/app/_Components/ImageWithLoader";

const Card: React.FC<CardProps> = ({ employee, className }) => {
  const { id, image, name, role } = employee;

  const employeeDetailPageLink = `/staff/details/${id}`;
  return (
    <>
      <div className={`doctor-card ${className}`}>
        <Link className={"doctor-card-link"} href={employeeDetailPageLink}>
          <div className="doctor-item">
            <div className="doctor-top">
              <ImageWithLoader
                src={image}
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
