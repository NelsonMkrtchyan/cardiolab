"use client";

import React from "react";
import Image from "next/image";
import type { employeeI } from "~/constants/staff";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

interface SidebarI {
  employee: employeeI;
}

const Sidebar = ({ employee }: SidebarI) => {
  return (
    <>
      <div className="doctor-details-item doctor-details-left">
        <Image src={employee.image} alt="Doctor" width={364} height={393} />

        <div className="doctor-details-contact">
          <h3>Contact info</h3>
          <ul>
            <li>
              <IoIosCall className="icon medium-icon-size" />
              Call: +07 554 332 322
            </li>
            <li>
              <IoIosMail className="icon medium-icon-size" />
              hello@cardiolab.com
            </li>
            <li>
              <FaLocationDot className="icon medium-icon-size" />
              4th Floor, 408 No Chamber
            </li>
          </ul>
        </div>

        <div className="doctor-details-work">
          <h3>Working hours</h3>
          <div className="appointment-item-two-right">
            <div className="appointment-item-content">
              <ul>
                <li>
                  Monday <span>9:00 AM - 8:00 PM</span>
                </li>
                <li>
                  Tuesday <span>9:00 AM - 8:00 PM</span>
                </li>
                <li>
                  Wednesday <span>9:00 AM - 8:00 PM</span>
                </li>
                <li>
                  Sunday <span>9:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
