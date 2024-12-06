import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { CardioLabInfo } from "~/constants/menus";

const TopHeader = () => {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-8 col-lg-9">
              <div className="header-top-item">
                <div className="header-top-left">
                  <ul>
                    <li>
                      <a href={`tel:${CardioLabInfo.phone}`}>
                        {/*<i className="icofont-ui-call"></i>*/}
                        <IoCall className="icon" />
                        Call : {CardioLabInfo.phone}
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${CardioLabInfo.email}`}>
                        {/*<i className="icofont-ui-message"></i>*/}
                        <IoMail className="icon" />
                        {CardioLabInfo.email}
                      </a>
                    </li>
                    <li>
                      {/*<i className="icofont-location-pin"></i>*/}
                      <IoLocation className="icon" />
                      {CardioLabInfo.address}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-3">
              <div className="header-top-item">
                <div className="header-top-right">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/people/CardioLabArmenia/61566450466884/"
                        target="_blank"
                      >
                        <FaFacebookF className="" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/cardiolab.armenia/"
                        target="_blank"
                      >
                        <FaInstagram className="" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@CardioLabMed"
                        target="_blank"
                      >
                        <FaYoutube className="" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/cardiolab-armenia"
                        target="_blank"
                      >
                        <FaLinkedinIn className="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
