"use client";

import React from "react";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import ImageWithLoader from "~/app/_Components/ImageWithLoader";

interface SidebarI {
  image: string;
  name: string | null;
  role: string | null;
  // Visibility flags
  showContact?: boolean;
  showSocial?: boolean;
  showSpecialties?: boolean;
  // Content data
  contact?: {
    phone: string;
    email: string;
    location: string;
  };
  social?: {
    linkedin: string;
    twitter: string;
  };
  specialties?: string[];
}

const Sidebar = ({ 
  image, 
  name, 
  role, 
  contact, 
  social, 
  specialties,
  showContact = true,
  showSocial = true,
  showSpecialties = true
}: SidebarI) => {
  return (
    <>
      <div className="doctor-details-item doctor-details-left">
        <div className="profile-header">
          <div className="image-container">
            <ImageWithLoader 
              src={image || "/images/doctors/placeholder.jpg"} 
              alt={name || "Doctor"} 
              width={400} 
              height={400} 
              className="profile-image"
            />
          </div>
          <div className="profile-info">
            {name && <h2 className="profile-name">{name}</h2>}
            {role && <p className="profile-role">{role}</p>}
          </div>
        </div>

        {showContact && contact && Object.values(contact).some(value => value) && (
          <div className="doctor-details-contact">
            <h3>Contact Information</h3>
            <ul>
              {contact.phone && (
                <li>
                  <IoIosCall className="contact-icon" />
                  <span>{contact.phone}</span>
                </li>
              )}
              {contact.email && (
                <li>
                  <IoIosMail className="contact-icon" />
                  <span>{contact.email}</span>
                </li>
              )}
              {contact.location && (
                <li>
                  <FaLocationDot className="contact-icon" />
                  <span>{contact.location}</span>
                </li>
              )}
            </ul>
          </div>
        )}

        {showSocial && social && Object.values(social).some(value => value) && (
          <div className="doctor-details-social">
            <h3>Social Media</h3>
            <div className="social-icons">
              {social.linkedin && (
                <a href={social.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              )}
              {social.twitter && (
                <a href={social.twitter} className="social-icon" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              )}
            </div>
          </div>
        )}

        {showSpecialties && specialties && specialties.length > 0 && specialties.some(specialty => specialty) && (
          <div className="doctor-details-specialties">
            <h3>Specialties</h3>
            <div className="specialty-tags">
              {specialties.map((specialty, index) => (
                specialty && <span key={index} className="specialty-tag">{specialty}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};


export default Sidebar;
