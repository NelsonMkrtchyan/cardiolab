import Image from "next/image";
import React from "react";
import { type AboutUsContentItemType } from "~/constants/general";
import { useLocale } from "next-intl";

const SingleExpertise = ({
  expertise,
}: {
  expertise: AboutUsContentItemType;
}) => {
  const locale: string = useLocale();

  const { className, name } = expertise ?? {};
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const title: string | string[] =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expertise.title[locale] ?? expertise.title.am;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const description: string =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expertise?.description[locale] ?? expertise.description.am;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const list: string[] =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expertise?.list ? expertise?.list[locale] : expertise.list?.am;

  return (
    <div
      // className={`${className} col-sm-12 col-lg-12 ${index % 2 !== 0 ? "right ms-auto" : ""} `}
      className={`${className}`}
    >
      <div className="speciality-inner">
        <div className={"container"}>
          <div
            className={"col align-items-center justify-content-center d-flex"}
          >
            <div>
              <Image
                src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
                alt="CardioLab Logo"
                width={35}
                height={35}
                style={{ marginRight: "20px" }}
                className="icon largest-icon-size mb-4"
              />
            </div>

            {/* TITLE */}
            <div className={"title-area"}>
              {Array.isArray(title) ? (
                title.map((line, i) => <p key={i}>{line}</p>)
              ) : (
                <h3>{title}</h3>
              )}
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className={"description-area container"}>
          {Array.isArray(description) ? (
            <ul>
              {description.map(({ title, description }, i) => (
                <li className={"list-item"} key={i}>
                  <h5>{title}</h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </div>

        {list && (
          <div className={"list-area container"}>
            <ul>
              {list.map((item, i) => (
                <li key={i} className={""}>
                  {item && <p>{item}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleExpertise;
