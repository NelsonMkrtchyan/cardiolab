import { type NextRequest } from "next/server";

import { Resend } from "resend";
import {
  type EmailFormType,
  EmailTemplate,
} from "~/app/_Components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const formData: EmailFormType = (await req.json()) as EmailFormType;

    // Log all received data
    // console.log("Received form data:", formData);

    // Extract common fields
    const { name, email, ssn, number, subject, message } = formData;

    // Basic validation for appointment form
    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required." }),
        { status: 400 },
      );
    }
    const { data, error } = await resend.emails.send({
      from: "no-reply@cardiolab.am",
      to: ["nelsmkrtchyan@gmail.com", "info@cardiolab.am"],
      subject: `New Form Submission from ${name}`,
      react: EmailTemplate({ name, email, ssn, number, subject, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return new Response(
      JSON.stringify({ message: "Email sent successfully!", data }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email." }), {
      status: 500,
    });
  }
}
