import nodemailer from "nodemailer";

export async function POST(req: string) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
    const { name, email, number, subject, message } = await req.json();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    console.log("req", { name, email, number, subject, message });

    if (!name || !email || !number || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      sendmail: true, // Use the local sendmail command
      newline: "unix",
      path: "/usr/sbin/sendmail", // Default path for sendmail
    });

    console.log("transporter", transporter);
    const mailOptions = {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      from: email,
      // to: process.env.RECIPIENT_EMAIL, // Email to receive the form content
      to: "nelsonwaterpolo@gmail.com", // Email to receive the form content
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone Number: ${number}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email." }), {
      status: 500,
    });
  }
}
