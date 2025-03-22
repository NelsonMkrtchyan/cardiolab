import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { excludeKeys, Languages } from "~/constants/general";
import { usePathname, useRouter } from "~/i18n/routing";
import { LocaleT } from "~/types";

const LanguageSwitcher = () => {
  const locale: string = useLocale();
  const [isVisible, setIsVisible] = useState(false);
  const [otherFlags, setOtherFlags] = useState(
    excludeKeys(Languages, [locale]),
  );
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (locale: string) => {
    router.push(pathname, { locale });
  };

  useEffect(() => {
    setOtherFlags(excludeKeys(Languages, [locale]));
  }, [locale]);

  return (
    <>
      <div className="language-nav">
        <div className="container p-0">
          <div className="wrapper">
            {/*Active locale*/}
            <div
              // className="currentLanguage nav-link dropdown-toggle"
              className="currentLanguage nav-link"
              onClick={() => {
                console.log(pathname);
                setIsVisible(!isVisible);
              }}
            >
              {/*{Languages[`${locale as LocaleT}`].icon}*/}
              {Languages[`${locale as "am"}`].icon}

              {/*<ul className="language-dropdown-menu">*/}
              {/*  {Object.keys(otherFlags).map((flagKey) => {*/}
              {/*    return (*/}
              {/*      <li className="language" key={flagKey}>*/}
              {/*        <div*/}
              {/*          className={"nav-link"}*/}
              {/*          onClick={(e) => {*/}
              {/*            e.preventDefault();*/}
              {/*            changeLocale(flagKey);*/}
              {/*          }}*/}
              {/*        >*/}
              {/*          {Languages[`${flagKey as LocaleT}`].icon}*/}
              {/*        </div>*/}
              {/*      </li>*/}
              {/*    );*/}
              {/*  })}*/}
              {/*</ul>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageSwitcher;
