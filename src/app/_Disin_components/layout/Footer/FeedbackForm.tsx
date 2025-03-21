"use client";

import { useTranslations } from "next-intl";

const FeedbackForm = () => {
  const tFooter = useTranslations("Footer");

  return (
    <>
      <div className="footer-feedback">
        <h3>{tFooter("Form.Feedback")}</h3>

        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder={tFooter("Form.NamePlaceholder")}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder={tFooter("Form.PhonePlaceholder")}
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              id="your_message"
              rows={3}
              placeholder={tFooter("Form.MessagePlaceholder")}
            ></textarea>
          </div>

          <div className="text-left">
            <button type="submit" className="btn feedback-btn">
              {tFooter("Form.Submit")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FeedbackForm;
