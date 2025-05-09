import React from "react";
import { type CardI } from "~/constants/staff";
import { Link } from "~/i18n/routing";
import ImageWithLoader from "~/app/_Components/ImageWithLoader";
import { useLocale } from "next-intl";
import { type LocaleT } from "~/types";

const Card = ({ employee }: CardI) => {
  const locale: string = useLocale();
  const { id, image } = employee;
  const name = employee.name[locale as LocaleT];
  const role = employee.role[locale as LocaleT];

  const employeeDetailPageLink = `/staff/details/${id}`;

  return (
    <>
      <div className="col-sm-6 col-lg-4">
        <Link href={employeeDetailPageLink} onClick={(e) => e.preventDefault()}>
          <div className="doctor-item">
            <div className="doctor-top">
              <ImageWithLoader
                src={image}
                alt="Doctor"
                className="object-fit-cover"
              />
              {/*TODO: Uncomment in the future*/}
              {/*<Link href="/appointment">Get Appointment</Link>*/}
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
              {role && <span>{role?.toLowerCase()}</span>}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
