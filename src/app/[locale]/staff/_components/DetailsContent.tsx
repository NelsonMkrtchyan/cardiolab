"use client";

import React from "react";
import Sidebar from "./Sidebar";
import {
  FaGraduationCap,
  FaBriefcase,
  FaUsers,
  FaHeart,
  FaCalendarAlt,
} from "react-icons/fa";
import { type PersonalInfoType } from "~/constants/staff";
import { useTranslations } from "next-intl";

interface DetailsContentI {
  name: string | null;
  role: string | null;
  image: string | null;
  personalInfo?: PersonalInfoType;
  staffId?: number;
}

const DetailsContent = ({
  name,
  role,
  image,
  personalInfo: staffPersonalInfo,
  staffId,
}: DetailsContentI) => {
  const t = useTranslations("CV");
  // Use staff personalInfo if available, otherwise use default mock data
  const personalInfo: PersonalInfoType = staffPersonalInfo ?? {
    bio: "",
    // Visibility flags
    showBio: true,
    showExperience: true,
    showEducation: true,
    showPublications: false,
    showAchievements: false,
    showLanguages: false,
    showMemberships: true,
    showHobbies: false,
    showAcademicActivities: false,
    // Sidebar visibility flags
    showContact: true,
    showSocial: true,
    showSpecialties: true,
    // Content data
    contact: {
      phone: "",
      email: "",
      location: "",
    },
    social: {
      linkedin: "",
      twitter: "",
    },
    specialties: [],
    experience: [],
    education: [],
    memberships: [],
    hobbies: [],
    achievements: [],
    academicActivities: [],
    publications: [],
    languages: [],
  };
  return (
    <>
      <div className="doctor-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="doctor-details-item">
                <Sidebar
                  image={image ?? ""}
                  name={name ?? ""}
                  role={role ?? ""}
                  contact={personalInfo.contact}
                  social={personalInfo.social}
                  specialties={personalInfo.specialties}
                  showContact={personalInfo.showContact}
                  showSocial={personalInfo.showSocial}
                  showSpecialties={personalInfo.showSpecialties}
                />

                {/* Book Appointment Button */}
                {/*<BookAppointmentButton doctorName={personalInfo.name} doctorId={staffId} />*/}
              </div>
            </div>

            <div className="col-lg-8">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  {/* Bio Section */}
                  {personalInfo.showBio && personalInfo.bio && (
                    <div className="doctor-details-biography">
                      <div className="section-header">
                        <h3>
                          {t("About") + " "} {name ? name : "Doctor"}
                        </h3>
                      </div>
                      <div className="bio-content">
                        <p>{personalInfo.bio}</p>
                      </div>
                    </div>
                  )}

                  {/* Experience Section */}
                  {personalInfo.showExperience &&
                    personalInfo.experience &&
                    personalInfo.experience.length > 0 && (
                      <div className="doctor-details-biography">
                        <div className="section-header">
                          <FaBriefcase className="section-icon" />
                          <h3>{t("Experience")}</h3>
                        </div>
                        <div className="timeline">
                          {personalInfo.experience.map((exp, index) => (
                            <div className="timeline-item" key={index}>
                              <div className="timeline-date">
                                {exp.period || ""}
                              </div>
                              <div className="timeline-content">
                                <h4>{exp.title || ""}</h4>
                                {exp.organization && <p>{exp.organization}</p>}
                                {exp.description && <p>{exp.description}</p>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Education Section */}
                  {personalInfo.showEducation &&
                    personalInfo.education &&
                    personalInfo.education.length > 0 && (
                      <div className="doctor-details-biography">
                        <div className="section-header">
                          <FaGraduationCap className="section-icon" />
                          <h3>{t("Education")}</h3>
                        </div>
                        <div className="timeline">
                          {personalInfo.education.map((edu, index) => (
                            <div className="timeline-item" key={index}>
                              <div className="timeline-date">
                                {edu.year || ""}
                              </div>
                              <div className="timeline-content">
                                <h4>{edu.degree || ""}</h4>
                                {edu.institution && <p>{edu.institution}</p>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Publications Section */}
                  {personalInfo.showPublications &&
                    personalInfo.publications &&
                    personalInfo.publications.length > 0 && (
                      <div className="doctor-details-biography">
                        <div className="section-header">
                          <h3>{t("Publications")}</h3>
                        </div>
                        <div className="publications-list">
                          {personalInfo.publications.map((pub, index) => (
                            <div className="publication-item" key={index}>
                              {pub.title && <h4>{pub.title}</h4>}
                              <p>
                                {pub.journal && pub.journal}
                                {pub.journal && pub.year ? ", " : ""}
                                {pub.year && pub.year}
                                {pub.url && (
                                  <a
                                    href={pub.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="publication-link"
                                  >
                                    {t("ViewPublication")}
                                  </a>
                                )}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Achievements Section */}
                  {personalInfo.showAchievements &&
                    personalInfo.achievements &&
                    personalInfo.achievements.length > 0 && (
                      <div className="doctor-details-biography">
                        <div className="section-header">
                          <h3>{t("Achievements")}</h3>
                        </div>
                        <ul className="achievements-list">
                          {personalInfo.achievements.map(
                            (achievement, index) => {
                              if (typeof achievement === "string") {
                                return (
                                  <li key={index} className="achievement-item">
                                    <div className="achievement-header">
                                      <h4 className="achievement-title">
                                        {achievement}
                                      </h4>
                                    </div>
                                  </li>
                                );
                              } else {
                                return (
                                  <li key={index} className="achievement-item">
                                    <div className="achievement-header">
                                      <h4 className="achievement-title">
                                        {achievement.title}
                                      </h4>
                                      {achievement.date && (
                                        <span className="achievement-date">
                                          <FaCalendarAlt className="icon-small" />
                                          {achievement.date}
                                        </span>
                                      )}
                                    </div>
                                    {achievement.organization && (
                                      <p className="achievement-organization">
                                        {achievement.organization}
                                      </p>
                                    )}
                                    {achievement.description && (
                                      <p className="achievement-description">
                                        {achievement.description}
                                      </p>
                                    )}
                                  </li>
                                );
                              }
                            },
                          )}
                        </ul>
                      </div>
                    )}

                  {/* Academic Activities Section */}
                  {personalInfo.showAcademicActivities &&
                    personalInfo.academicActivities &&
                    personalInfo.academicActivities.length > 0 && (
                      <div className="doctor-details-biography">
                        <div className="section-header">
                          <h3>{t("AcademicActivities")}</h3>
                        </div>
                        <ul className="academic-activities-list">
                          {personalInfo.academicActivities.map(
                            (activity, index) => (
                              <li
                                key={index}
                                className="academic-activities-item"
                              >
                                <div className="academic-activities-header">
                                  <h4 className="academic-activities-title">
                                    {activity.title}
                                  </h4>
                                  {activity.date && (
                                    <span className="academic-activities-date">
                                      <FaCalendarAlt className="icon-small" />
                                      {activity.date}
                                    </span>
                                  )}
                                </div>
                                {activity.organization && (
                                  <p className="academic-activities-organization">
                                    {activity.organization}
                                  </p>
                                )}
                                {activity.description && (
                                  <p className="academic-activities-description">
                                    {activity.description}
                                  </p>
                                )}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    )}

                  {/* Languages Section */}
                  {personalInfo.showLanguages &&
                    personalInfo.languages &&
                    personalInfo.languages.length > 0 && (
                      <div className="doctor-details-biography">
                        <div className="section-header">
                          <h3>{t("Languages")}</h3>
                        </div>
                        <div className="languages-container">
                          {personalInfo.languages.map((lang, index) => (
                            <div className="language-item" key={index}>
                              {lang.language && (
                                <span className="language-name">
                                  {lang.language}
                                </span>
                              )}
                              {lang.level && (
                                <span className="language-level">
                                  {lang.level}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Membership Section */}
                  {personalInfo.showMemberships &&
                    personalInfo.memberships &&
                    personalInfo.memberships.length > 0 && (
                      <div className="doctor-details-biography">
                        <div className="section-header">
                          <FaUsers className="section-icon" />
                          <h3>{t("Membership")}</h3>
                        </div>
                        <ul className="membership-list">
                          {personalInfo.memberships.map((membership, index) => (
                            <li key={index}>{membership}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {/* Hobby Section */}
                  {personalInfo.showHobbies &&
                    personalInfo.hobbies &&
                    personalInfo.hobbies.length > 0 && (
                      <div className="doctor-details-biography">
                        <div className="section-header">
                          <FaHeart className="section-icon" />
                          <h3>{t("Hobbies")}</h3>
                        </div>
                        <div className="hobbies-container">
                          {personalInfo.hobbies.map((hobby, index) => (
                            <div className="hobby-item" key={index}>
                              <p>{hobby || ""}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsContent;
