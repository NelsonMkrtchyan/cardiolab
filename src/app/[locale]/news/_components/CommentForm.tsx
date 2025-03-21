"use client";

import { useTranslations } from "next-intl";

const CommentForm = () => {
  const tNews = useTranslations("News");

  return (
    <>
      <div className="blog-details-form pb-100">
        <div className="blog-details-form-wrap">
          <h2>{tNews("Form.DropComment")}</h2>
          <form>
            <div className="form-group">
              <textarea
                className="form-control"
                id="your_comments"
                rows={8}
                placeholder={tNews("Form.Placeholders.YourComment")}
              ></textarea>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={tNews("Form.Placeholders.Name")}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder={tNews("Form.Placeholders.Email")}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={tNews("Form.Placeholders.Phone")}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={tNews("Form.Placeholders.Subject")}
                  />
                </div>
              </div>
            </div>

            <div className="text-left">
              <button type="submit" className="btn blog-details-form-btn">
                {tNews("Form.PostComment")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CommentForm;
