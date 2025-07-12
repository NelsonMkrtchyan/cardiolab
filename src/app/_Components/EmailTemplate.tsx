import * as React from "react";

export interface EmailFormType {
  name?: string;
  email?: string;
  ssn?: string;
  number?: string;
  subject?: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailFormType>> = ({
  name,
  email,
  ssn,
  number,
  subject,
  message,
}) => (
  <div>
    {name && <p>Name: {name}</p>}
    {email && <p>Email: {email}</p>}
    {ssn && <p>Social Security Number: {ssn}</p>}
    {number && <p>Number: {number}</p>}
    {subject && <p>Subject: {subject}</p>}
    {message && <p>Message: {message}</p>}
  </div>
);
