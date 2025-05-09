import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { type SharedModalProps } from "~/types";
import { variants } from "~/utils/animationVariants";
import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaDownload } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ImageWithLoader from "~/app/_Components/ImageWithLoader";

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
      if (images && index < images.length - 1) {
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
          style={{ zIndex: 10 }} /* Ensure this is above the backdrop */
        >
          {/* Main image - simplified structure */}
          <div
            className="main-image-container"
            style={{
              position: "relative",
              width: "90vw",
              maxWidth: "1280px",
              height: "80vh",
              maxHeight: "853px",
              margin: "20px auto",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
              zIndex: 50,
            }}
          >
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <ImageWithLoader
                src={currentPhoto?.url ?? ""}
                alt="Gallery image"
                priority={true}
                fill={true}
                className="object-fit-contain"
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>
          {/* Navigation and control buttons */}
          <div
            className="navigation-controls"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 60,
              pointerEvents: "none",
            }}
          >
            {loaded && (
              <>
                {/* Left/Right Navigation Buttons */}
                <div
                  className="navigation-arrows"
                  style={{
                    position: "absolute",
                    top: "50%",
                    width: "100%",
                    transform: "translateY(-50%)",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0 20px",
                    pointerEvents: "none",
                  }}
                >
                  {/* Left arrow */}
                  {index > 0 && (
                    <button
                      className="nav-button left"
                      onClick={() => changePhotoId(index - 1)}
                      style={{
                        background: "rgba(0,0,0,0.5)",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        pointerEvents: "auto",
                      }}
                    >
                      <FaArrowLeft size={20} />
                    </button>
                  )}

                  {/* Right arrow */}
                  {images && index < images.length - 1 && (
                    <button
                      className="nav-button right"
                      onClick={() => changePhotoId(index + 1)}
                      style={{
                        background: "rgba(0,0,0,0.5)",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        pointerEvents: "auto",
                      }}
                    >
                      <FaArrowRight size={20} />
                    </button>
                  )}
                </div>

                {/* Top Control Buttons */}
                <div
                  className="top-controls"
                  style={{
                    position: "absolute",
                    top: "35px",
                    right: "35px",
                    display: "flex",
                    gap: "10px",
                    pointerEvents: "none",
                  }}
                >
                  <a
                    download="cardiolab-sample.jpg"
                    href={currentPhoto?.url}
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      pointerEvents: "auto",
                      textDecoration: "none",
                    }}
                  >
                    <FaDownload size={16} />
                  </a>
                  <button
                    onClick={() => closeModal()}
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      pointerEvents: "auto",
                    }}
                  >
                    <RiCloseLargeLine size={20} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </MotionConfig>
    </>
  );
}
