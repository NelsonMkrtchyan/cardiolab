import * as React from "react";

export interface EmailFormType {
  name?: string;
  email?: string;
  number?: string;
  subject?: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailFormType>> = ({
  name,
  email,
  number,
  subject,
  message,
}) => (
  <div>
    {name && <p>{name}</p>}
    {email && <p>{email}</p>}
    {number && <p>{number}</p>}
    {subject && <p>{subject}</p>}
    {message && <p>{message}</p>}
  </div>
);
