"use client";

import React, { useState } from "react";
import { FaCalendarAlt, FaTimes } from "react-icons/fa";
import { useTranslations } from "next-intl";
import DoctorAppointmentForm from "~/app/_Components/DoctorAppointmentForm";

interface BookAppointmentButtonProps {
  doctorName: string;
  doctorId?: number;
}

const BookAppointmentButton = ({ doctorName, doctorId }: BookAppointmentButtonProps) => {
  const [showModal, setShowModal] = useState(false);
  const tComponents = useTranslations("Components");

  return (
    <>
      {/* Appointment Booking Modal */}
      {showModal && (
        <div className="appointment-modal-overlay">
          <div className="appointment-modal">
            <div className="modal-header">
              <h3>{tComponents("Appointments.title") || "Book an Appointment"}</h3>
              <button 
                className="close-btn" 
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              <div className="doctor-appointment-form-container">
                <DoctorAppointmentForm 
                  preselectedDoctorId={doctorId} 
                  onComplete={() => setShowModal(false)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

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
    </>
  );
};

export default BookAppointmentButton;
