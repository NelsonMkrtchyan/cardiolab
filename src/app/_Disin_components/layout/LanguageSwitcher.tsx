import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { excludeKeys, Languages } from "~/constants/general";
import { usePathname, useRouter } from "~/i18n/routing";

const LanguageSwitcher = () => {
  const locale = useLocale();
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
        <div className={"container"}>
          <div className={"wrapper"}>
            {/*Active locale*/}
            <div
              className="currentLanguage nav-link dropdown-toggle"
              onClick={() => {
                console.log(pathname);
                setIsVisible(!isVisible);
              }}
            >
              {Languages[`${locale}`].icon}

              <ul className="language-dropdown-menu">
                {Object.keys(otherFlags).map((flagKey) => {
                  return (
                    <li className="language" key={flagKey}>
                      <div
                        className={"nav-link"}
                        onClick={(e) => {
                          e.preventDefault();
                          changeLocale(flagKey);
                        }}
                      >
                        {Languages[`${flagKey}`].icon}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageSwitcher;
