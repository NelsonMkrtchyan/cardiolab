"use client";

import React, { useState } from "react";
import { FaCalendarAlt, FaTimes } from "react-icons/fa";

interface BookAppointmentButtonProps {
  doctorName: string;
}

const BookAppointmentButton = ({ doctorName }: BookAppointmentButtonProps) => {
  const [showModal, setShowModal] = useState(false);

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
                with {doctorName}.
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
