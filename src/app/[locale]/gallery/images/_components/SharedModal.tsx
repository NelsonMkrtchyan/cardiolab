import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { type SharedModalProps } from "~/types";
import { variants } from "~/utils/animationVariants";
import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaDownload } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function SharedModal({
  index,
  images,
  changePhotoId,
  closeModal,
  currentPhoto,
  direction,
}: SharedModalProps) {
  const [loaded, setLoaded] = useState(false);

  // const filteredImages = images?.filter((img: any) => {
  //   const newIndex = images.findIndex((obj) => obj.id === img.id);
  //   return range(index - 6, index + 6).includes(newIndex);
  // });

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < images?.length - 1) {
        changePhotoId(index + 1);
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changePhotoId(index - 1);
      }
    },
    trackMouse: true,
  });

  return (
    <>
      <MotionConfig
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <div
          className="media-shared-modal-wrapper position-relative d-flex flex-column align-items-center"
          {...handlers}
        >
          {/* Main image */}
          <div className="w-100 h-100 d-flex align-items-center justify-content-center overflow-hidden">
            <div className="media-shared-modal-main-image-wrapper position-relative d-flex align-items-center justify-content-center">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute"
                  style={{ overflow: "hidden" }}
                >
                  <Image
                    src={currentPhoto?.url ?? ""}
                    width={1280}
                    height={853}
                    priority={true}
                    alt="Next.js Conf image"
                    onLoad={() => setLoaded(true)}
                    style={{}}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/*Buttons + bottom nav bar*/}
          <div className="absolute inset-0 mx-auto flex max-w-7xl items-center justify-center">
            <div className="position-absolute d-flex align-items-center justify-content-center bottom-0 end-0 start-0 top-0 mx-auto">
              {/* Buttons */}
              {loaded && (
                <>
                  <div className="position-relative w-100 h-100">
                    <div className="btn-wrapper position-middle position-absolute translate-middle-y">
                      {index > 0 && (
                        <div
                          className="shared-modal-btn left-btn position-absolute"
                          onClick={() => changePhotoId(index - 1)}
                        >
                          <FaArrowLeft className="icon large-icon-size" />
                        </div>
                      )}
                      {index < images.length - 1 && (
                        <div
                          className="shared-modal-btn right-btn position-absolute"
                          onClick={() => changePhotoId(index + 1)}
                        >
                          <FaArrowRight className="icon large-icon-size" />
                        </div>
                      )}
                    </div>
                    <div className="btn-wrapper position-top position-absolute translate-middle-y">
                      <a
                        download="cardiolab-sample.jpg"
                        href={currentPhoto?.url}
                        className="shared-modal-btn"
                      >
                        <FaDownload className="icon" />
                      </a>
                      <div
                        className="shared-modal-btn"
                        onClick={() => closeModal()}
                      >
                        <RiCloseLargeLine className="icon" />
                      </div>
                    </div>
                    {/* Bottom Nav bar */}
                    {/*<div className="shared-modal-bottom-navigation position-absolute bg-gradient-to-bottom z-40 overflow-hidden">*/}
                    {/*  <motion.div*/}
                    {/*    initial={false}*/}
                    {/*    className="shared-modal-bottom-navigation-container d-flex"*/}
                    {/*    style={{ height: "2.5 rem" }}*/}
                    {/*  >*/}
                    {/*    <AnimatePresence initial={false}>*/}
                    {/*      {filteredImages.map(({ url, id }) => {*/}
                    {/*        const newIndex = images.findIndex(*/}
                    {/*          (obj) => obj.id === id,*/}
                    {/*        );*/}
                    {/*        return (*/}
                    {/*          <motion.button*/}
                    {/*            initial={*/}
                    {/*              {*/}
                    {/*                // width: "0%",*/}
                    {/*                // x: `${Math.max((index - 1) * -100, 1 * -100)}%`,*/}
                    {/*              }*/}
                    {/*            }*/}
                    {/*            animate={{*/}
                    {/*              scale: newIndex === index ? 1.25 : 1,*/}
                    {/*              // width: "100%",*/}
                    {/*              // x: `${Math.max(index * -100, 3 * -100)}%`,*/}
                    {/*            }}*/}
                    {/*            // exit={{ width: "0%" }}*/}
                    {/*            onClick={() => {*/}
                    {/*              console.log("on click");*/}

                    {/*              changePhotoId(newIndex);*/}
                    {/*            }}*/}
                    {/*            key={id}*/}
                    {/*            className={`${*/}
                    {/*              newIndex === index*/}
                    {/*                ? "z-20 rounded-md shadow shadow-black/50"*/}
                    {/*                : "z-10"*/}
                    {/*            } ${id === 0 ? "rounded-l-md" : ""} ${*/}
                    {/*              id === images.length - 1 ? "rounded-r-md" : ""*/}
                    {/*            } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}*/}
                    {/*          >*/}
                    {/*            <Image*/}
                    {/*              alt="small photos on the bottom"*/}
                    {/*              width={180}*/}
                    {/*              height={120}*/}
                    {/*              className={`${*/}
                    {/*                newIndex === index ? "bright" : "regular"*/}
                    {/*              }`}*/}
                    {/*              src={url}*/}
                    {/*            />*/}
                    {/*          </motion.button>*/}
                    {/*        );*/}
                    {/*      })}*/}
                    {/*    </AnimatePresence>*/}
                    {/*  </motion.div>*/}
                    {/*</div>*/}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </MotionConfig>
    </>
  );
}
