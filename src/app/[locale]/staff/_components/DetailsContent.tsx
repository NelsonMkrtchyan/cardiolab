"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import {
  FaGraduationCap,
  FaBriefcase,
  FaUsers,
  FaHeart,
  FaCalendarAlt,
  FaTimes,
} from "react-icons/fa";
import { type PersonalInfoType } from "~/constants/staff";

interface DetailsContentI {
  name: string | null;
  role: string | null;
  image: string | null;
  personalInfo?: PersonalInfoType;
}

interface Experience {
  period: string;
  title: string;
  organization: string;
  description: string;
}

interface Education {
  year: string;
  degree: string;
  institution: string;
}

interface Achievement {
  title: string;
  description?: string;
  organization?: string;
  date: string;
}

interface PersonalInfo {
  name: string;
  role: string;
  image: string;
  bio: string;
  // Visibility flags for each section
  showBio?: boolean;
  showExperience?: boolean;
  showEducation?: boolean;
  showPublications?: boolean;
  showAchievements?: boolean;
  showLanguages?: boolean;
  showMemberships?: boolean;
  showHobbies?: boolean;
  // Sidebar visibility flags
  showContact?: boolean;
  showSocial?: boolean;
  showSpecialties?: boolean;
  // Content data
  contact: {
    phone: string;
    email: string;
    location: string;
  };
  social: {
    linkedin: string;
    twitter: string;
  };
  specialties: string[];
  experience: Experience[];
  education: Education[];
  memberships: string[];
  hobbies: string[];
  achievements: Achievement[];
  publications: {
    title: string;
    journal: string;
    year: string;
    url?: string;
  }[];
  languages: {
    language: string;
    level: string;
  }[];
}

const DetailsContent = ({
  name,
  role,
  image,
  personalInfo: staffPersonalInfo,
}: DetailsContentI) => {
  const [showModal, setShowModal] = useState(false);
  // Use staff personalInfo if available, otherwise use default mock data
  const personalInfo: PersonalInfo = staffPersonalInfo
    ? {
        name: name ?? "",
        role: role ?? "",
        image: image ?? "",
        bio: staffPersonalInfo.bio || "",
        // Visibility flags
        showBio: staffPersonalInfo.showBio ?? true,
        showExperience: staffPersonalInfo.showExperience ?? true,
        showEducation: staffPersonalInfo.showEducation ?? true,
        showPublications: staffPersonalInfo.showPublications ?? false,
        showAchievements: staffPersonalInfo.showAchievements ?? false,
        showLanguages: staffPersonalInfo.showLanguages ?? false,
        showMemberships: staffPersonalInfo.showMemberships ?? true,
        showHobbies: staffPersonalInfo.showHobbies ?? false,
        // Sidebar visibility flags
        showContact: staffPersonalInfo.showContact ?? true,
        showSocial: staffPersonalInfo.showSocial ?? true,
        showSpecialties: staffPersonalInfo.showSpecialties ?? true,
        // Content data
        contact: staffPersonalInfo.contact || {
          phone: "",
          email: "",
          location: "",
        },
        social: staffPersonalInfo.social || {
          linkedin: "",
          twitter: "",
        },
        specialties: staffPersonalInfo.specialties || [],
        experience: staffPersonalInfo.experience || [],
        education: staffPersonalInfo.education || [],
        memberships: staffPersonalInfo.memberships || [],
        hobbies: staffPersonalInfo.hobbies || [],
        achievements: staffPersonalInfo.achievements || [],
        publications: staffPersonalInfo.publications || [],
        languages: staffPersonalInfo.languages || [],
      }
    : {
        // Default mock data if no personalInfo is provided
        name: name ?? "",
        role: role ?? "",
        image: image ?? "",
        bio: "Dr. Anna Hakobyan is a board-certified cardiologist with over 15 years of experience in diagnosing and treating cardiovascular conditions. She specializes in interventional cardiology and has performed hundreds of successful cardiac procedures. Her patient-centered approach and commitment to excellence have earned her recognition among peers and patients alike.",
        showBio: false,
        showExperience: true,
        showEducation: true,
        showPublications: false,
        showAchievements: false,
        showLanguages: false,
        showMemberships: true,
        showHobbies: true,
        showContact: false,
        showSocial: false,
        showSpecialties: true,
        contact: {
          phone: "+374 10 123 456",
          email: "info@cardiolab.am",
          location: "CardioLab Medical Center, Yerevan",
        },
        social: {
          linkedin: "https://linkedin.com",
          twitter: "https://twitter.com",
        },
        specialties: [
          "Cardiology",
          "Arrhythmology",
          "Echocardiography",
          "Interventional Cardiology",
        ],
        experience: [
          {
            period: "2018 - Present",
            title: "Senior Cardiologist",
            organization: "CardioLab Medical Center",
            description:
              "Leading the cardiology department and specializing in interventional procedures.",
          },
          {
            period: "2012 - 2018",
            title: "Cardiologist",
            organization: "Central Hospital",
            description:
              "Provided comprehensive cardiac care and performed diagnostic procedures.",
          },
        ],
        education: [
          {
            year: "2006",
            degree: "PhD in Cardiology",
            institution: "University of UCLan School of Medicine, Preston",
          },
          {
            year: "2002",
            degree: "Master of Cardiology",
            institution: "University of Exeter Medical School, Exeter",
          },
          {
            year: "1998",
            degree: "MBBS",
            institution: "Royal College of Medicine",
          },
        ],
        memberships: [
          "American College of Cardiology",
          "European Society of Cardiology",
          "International Society for Heart Research",
          "Heart Rhythm Society",
        ],
        hobbies: ["Mountain hiking", "Classical music", "Chess", "Photography"],
        achievements: [
          {
            title: "Excellence in Cardiology Award",
            organization: "Armenian Medical Association",
            date: "2020",
          },
          {
            title: "Best Research Paper",
            organization: "European Society of Cardiology",
            date: "2018",
          },
          {
            title: "Young Investigator Award",
            organization: "International Cardiology Conference",
            date: "2015",
          },
          {
            title: "Distinguished Service Award",
            organization: "Central Hospital",
            date: "2014",
          },
        ],
        publications: [
          {
            title: "Novel Approaches to Treating Arrhythmias in Young Adults",
            journal: "Journal of Cardiac Electrophysiology",
            year: "2022",
            url: "https://example.com/publication1",
          },
          {
            title:
              "Long-term Outcomes of Minimally Invasive Cardiac Procedures",
            journal: "Cardiology Research and Practice",
            year: "2020",
            url: "https://example.com/publication2",
          },
          {
            title:
              "Comparative Analysis of Antiarrhythmic Medications in Elderly Patients",
            journal: "International Journal of Cardiology",
            year: "2017",
          },
        ],
        languages: [
          {
            language: "Armenian",
            level: "Native",
          },
          {
            language: "English",
            level: "Fluent",
          },
          {
            language: "Russian",
            level: "Fluent",
          },
          {
            language: "French",
            level: "Intermediate",
          },
        ],
      };
  return (
    <>
      {/* Appointment Booking Modal */}
      {showModal && (
        <div className="appointment-modal-overlay">
          <div className="appointment-modal">
            <div className="modal-header">
              <h3>Book an Appointment</h3>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              <p>This is a placeholder for the appointment booking form.</p>
              <p>
                In the future, this will contain a form to book an appointment
                with {personalInfo.name}.
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="submit-btn">Book Appointment</button>
            </div>
          </div>
        </div>
      )}

      <div className="doctor-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="doctor-details-item">
                <Sidebar
                  image={personalInfo.image}
                  name={personalInfo.name}
                  role={personalInfo.role}
                  contact={personalInfo.contact}
                  social={personalInfo.social}
                  specialties={personalInfo.specialties}
                  showContact={personalInfo.showContact}
                  showSocial={personalInfo.showSocial}
                  showSpecialties={personalInfo.showSpecialties}
                />

                {/* Book Appointment Button */}
                <div className="book-appointment-container">
                  <button
                    className="book-appointment-btn"
                    onClick={() => setShowModal(true)}
                  >
                    <FaCalendarAlt className="btn-icon" />
                    Book an Appointment
                  </button>
                </div>
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
                          About{" "}
                          {personalInfo.name
                            ? // ? personalInfo.name.split(" ").slice(-1)
                              personalInfo.name
                            : "Doctor"}
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
                          <h3>Experience</h3>
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
                          <h3>Education</h3>
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
                          <h3>Publications</h3>
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
                                    View Publication
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
                          <h3>Achievements & Awards</h3>
                        </div>
                        <ul className="achievements-list">
                          {personalInfo.achievements.map((achievement, index) => (
                            <li key={index} className="achievement-item">
                              <div className="achievement-header">
                                <h4 className="achievement-title">{achievement.title}</h4>
                                {achievement.date && (
                                  <span className="achievement-date">
                                    <FaCalendarAlt className="icon-small" />
                                    {achievement.date}
                                  </span>
                                )}
                              </div>
                              {achievement.organization && (
                                <p className="achievement-organization">{achievement.organization}</p>
                              )}
                              {achievement.description && (
                                <p className="achievement-description">{achievement.description}</p>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {/* Languages Section */}
                  {personalInfo.showLanguages &&
                    personalInfo.languages &&
                    personalInfo.languages.length > 0 && (
                      <div className="doctor-details-biography">
                        <div className="section-header">
                          <h3>Languages</h3>
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
                          <h3>Membership</h3>
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
                          <h3>Hobbies</h3>
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
