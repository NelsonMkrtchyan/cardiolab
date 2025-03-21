import Image from "next/image";
import React from "react";
import { type CardI } from "~/constants/stuff";
// import { Link } from "~/i18n/routing";

const Card = ({ employee }: CardI) => {
  const {
    // id,
    name,
    image,
    position,
  } = employee;
  return (
    <>
      <div className="col-sm-6 col-lg-4">
        {/*<Link href={`/stuff/details/${id}`}>*/}
        <div className="doctor-item">
          <div className="doctor-top">
            <Image src={image} alt="Doctor" width={364} height={393} />
            {/*TODO: Uncomment in the future*/}
            {/*<Link href="/appointment">Get Appointment</Link>*/}
          </div>
          <div className="doctor-bottom">
            <h3>
              {/*<Link href={`/stuff/details/${id}`}>{name}</Link>*/}
              {name}
            </h3>
            <span>{position}</span>
          </div>
        </div>
        {/*</Link>*/}
      </div>
    </>
  );
};

export default Card;
