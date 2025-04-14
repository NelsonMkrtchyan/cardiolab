import Image from "next/image";
import React from "react";
import { type CardI } from "~/constants/staff";
import { Link } from "~/i18n/routing";
import ImageWithLoader from "~/app/_Components/ImageWithLoader";

const Card = ({ employee, disabled }: CardI) => {
  const { id, name, image, position } = employee;

  return (
    <>
      <div className="col-sm-6 col-lg-4">
        {/*<Link*/}
        {/*  href={`/staff/details/${id}`}*/}
        {/*  onClick={(e) => disabled && e.preventDefault()}*/}
        {/*>*/}
        <div className="doctor-item">
          <div className="doctor-top">
            <ImageWithLoader src={image} alt="Doctor" />
            {/*<Image src={image} alt="Doctor" fill />*/}
            {/*TODO: Uncomment in the future*/}
            {/*<Link href="/appointment">Get Appointment</Link>*/}
          </div>
          <div className="doctor-bottom">
            <h3>
              {/*<Link*/}
              {/*  href={`/staff/details/${id}`}*/}
              {/*  onClick={(e) => disabled && e.preventDefault()}*/}
              {/*>*/}
              {name}
              {/*</Link>*/}
            </h3>
            <span>{position.toLowerCase()}</span>
          </div>
        </div>
        {/*</Link>*/}
      </div>
    </>
  );
};

export default Card;
