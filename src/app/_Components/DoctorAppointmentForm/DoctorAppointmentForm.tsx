"use client";

import React, { type ChangeEvent, type FormEvent, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FaUserTie } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { staff, StaffCategory } from "~/constants/staff";
import { type LocaleT } from "~/types";

import "./DoctorAppointmentForm.css";

interface DoctorAppointmentFormProps {
  preselectedDoctorId?: number;
  onComplete?: () => void;
}

interface FormData {
  doctorId: string;
  preferredDate: string;
  name: string;
  email: string;
  ssn: string;
  number: string;
}

const DoctorAppointmentForm: React.FC<DoctorAppointmentFormProps> = ({
  preselectedDoctorId,
  onComplete,
}) => {
  const tComponents = useTranslations("Components");
  const locale: string = useLocale();

  // Filter only medical staff
  const medicalStaff = staff.filter(
    (member) => 
      member.category === StaffCategory.MedicalStaff && 
      member.visibility === true
  );

  const [formData, setFormData] = useState<FormData>({
    doctorId: preselectedDoctorId ? preselectedDoctorId.toString() : "",
    preferredDate: "",
    name: "",
    email: "",
    ssn: "",
    number: "",
  });
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    // Get doctor name for the email subject
    const selectedDoctor = medicalStaff.find(
      (doctor) => doctor.id.toString() === formData.doctorId
    );
    
    const doctorName = selectedDoctor
      ? selectedDoctor.name[locale as LocaleT]
      : "Unknown Doctor";

    try {
      // Prepare data to send to API
      const submissionData = {
        ...formData,
        subject: `Appointment Request with ${doctorName}`,
        message: `Preferred date: ${formData.preferredDate}`,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setStatus(tComponents("ContactForm.successMessage"));
        setFormData({
          doctorId: preselectedDoctorId ? preselectedDoctorId.toString() : "",
          preferredDate: "",
          name: "",
          email: "",
          ssn: "",
          number: "",
        });
        
        // Call onComplete callback if provided
        if (onComplete) {
          setTimeout(() => onComplete(), 1500); // Give user time to see success message
        }
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { error } = await response.json();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-argument
        setStatus(error || tComponents("ContactForm.errorMessage"));
      }
    } catch (error) {
      console.error(error);
      setStatus(tComponents("ContactForm.errorMessage"));
    } finally {
      setIsLoading(false);
    }
  };

  // Format today's date for the min date attribute
  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0];

  return (
    <div className="doctor-details-biography appointment-form-wrapper">
      {/* Hide section header when used in a modal */}
      {!onComplete && (
        <div className="section-header">
          <h3>{tComponents("Appointments.title") || "Book an Appointment"}</h3>
        </div>
      )}

      <div className="appointment-form card-style">
        {status && (
          <div className={`alert ${status.includes("successfully") ? "alert-success" : "alert-danger"} fade-in`}>
            {status}
          </div>
        )}

        <form onSubmit={handleSubmit} className="enhanced-form">
          <div className="form-fields">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <div className="icon-container">
                    <FaUserMd className="icon largest-icon-size mb-4" />
                  </div>
                  <div className="input-container">
                    <label className="floating-label">
                      {tComponents("Appointments.labels.doctor") || "Select Doctor"}
                    </label>
                    <select
                      name="doctorId"
                      className="form-control custom-select"
                      required
                      value={formData.doctorId}
                      onChange={handleInputChange}
                    >
                      <option value="">
                        {tComponents("Appointments.placeholders.doctor") ||
                          "Select a Doctor"}
                      </option>
                      {medicalStaff.map((doctor) => (
                        <option key={doctor.id} value={doctor.id}>
                          {doctor.name[locale as LocaleT] || doctor.name.en}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <div className="icon-container">
                    <FaCalendarAlt className="icon largest-icon-size mb-4" />
                  </div>
                  <div className="input-container">
                    <label className="floating-label">
                      {tComponents("Appointments.labels.date") || "Preferred Date"}
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      className="form-control custom-date"
                      required
                      min={formattedToday}
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <div className="icon-container">
                    <FaUserTie className="icon largest-icon-size mb-4" />
                  </div>
                  <div className="input-container">
                    <label className="floating-label">
                      {tComponents("Appointments.labels.name") || "Your Name"}
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-input-glow"
                      placeholder={
                        tComponents("Appointments.placeholders.name") ||
                        "Your Full Name"
                      }
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <div className="icon-container">
                    <MdEmail className="icon largest-icon-size mb-4" />
                  </div>
                  <div className="input-container">
                    <label className="floating-label">
                      {tComponents("Appointments.labels.email") || "Email"}
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-input-glow"
                      placeholder={
                        tComponents("Appointments.placeholders.email") ||
                        "Your Email Address"
                      }
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <div className="icon-container">
                    <FaPhoneAlt className="icon largest-icon-size mb-4" />
                  </div>
                  <div className="input-container">
                    <label className="floating-label">
                      {tComponents("Appointments.labels.phone") || "Phone Number"}
                    </label>
                    <input
                      type="text"
                      name="number"
                      className="form-control form-input-glow"
                      placeholder={
                        tComponents("Appointments.placeholders.phone") ||
                        "Your Phone Number"
                      }
                      required
                      value={formData.number}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <div className="icon-container">
                    <FaIdCard className="icon largest-icon-size mb-4" />
                  </div>
                  <div className="input-container">
                    <label className="floating-label">
                      {tComponents("Appointments.labels.ssn") || "SSN/ID"}
                    </label>
                    <input
                      type="text"
                      name="ssn"
                      className="form-control form-input-glow"
                      placeholder={
                        tComponents("Appointments.placeholders.ssn") ||
                        "Your SSN or ID"
                      }
                      required
                      value={formData.ssn}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="appointment-btn-wrapper text-center">
            <button
              type="submit"
              className="btn appointment-btn"
              disabled={isLoading}
            >
              {isLoading
                ? tComponents("ContactForm.sending") || "Sending..."
                : tComponents("Appointments.actions.submit") || "Book Appointment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorAppointmentForm;
