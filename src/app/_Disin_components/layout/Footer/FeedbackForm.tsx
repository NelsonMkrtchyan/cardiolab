"use client";

import { useTranslations } from "next-intl";

const FeedbackForm = () => {
  const tGeneral = useTranslations("General");

  return (
    <>
      <div className="footer-feedback">
        <h3>{tGeneral("Footer.Form.Feedback")}</h3>

        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder={tGeneral("Footer.Form.NamePlaceholder")}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder={tGeneral("Footer.Form.PhonePlaceholder")}
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              id="your_message"
              rows={3}
              placeholder={tGeneral("Footer.Form.MessagePlaceholder")}
            ></textarea>
          </div>

          <div className="text-left">
            <button type="submit" className="btn feedback-btn">
              {tGeneral("Footer.Form.Submit")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FeedbackForm;
