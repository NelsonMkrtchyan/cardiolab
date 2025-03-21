"use client";

import React from "react";
import Sidebar from "./Sidebar";
import { type employeeI } from "~/constants/stuff";

interface DetailsContentI {
  employee: employeeI;
}

const DetailsContent = ({ employee }: DetailsContentI) => {
  return (
    <>
      <div className="doctor-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <Sidebar employee={employee} />
            </div>

            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-details-biography">
                    <h3>
                      {employee.name} ({employee.position})
                    </h3>
                    <p>
                      MBBS in {employee.position}, PHD in {employee.position}
                    </p>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Biography</h3>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>

                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt.
                    </p>

                    <p>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter consequences that are
                      extremely painful.
                    </p>

                    <p></p>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Education</h3>
                    <ul>
                      <li>
                        PHD Degree in Cardiology at University of UCLan School
                        of Medicine Preston (2006)
                      </li>
                      <li>
                        Master of Cardiology at University of University of
                        Exeter Medical School Exeter (2002)
                      </li>
                    </ul>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Experience</h3>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsContent;
