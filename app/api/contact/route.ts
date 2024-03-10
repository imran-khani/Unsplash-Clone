import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });
  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: `Message from ${name} ${email}`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, (e, info) => {
        if (!e) {
          resolve("Email sent successfully");
        } else {
          reject("Error sending mail");
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email Sent success" });
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}
