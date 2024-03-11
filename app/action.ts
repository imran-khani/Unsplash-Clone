"use server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { formSchema } from "./contact/page";
import { z } from "zod";

export async function sendEmail(formData: z.infer<typeof formSchema>) {
  const { name, email, message } = formData;
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
    subject: `Message from ${name}`,
    text: message,
  };
  try {
    await new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, (e) => {
        if (!e) {
          resolve("successfully sent the email");
        } else {
          reject("error sending the mail");
        }
      });
    });
  } catch (error) {
    throw new Error("error sending mail");
  }

  return {
    status: "success",
    message: "Email sent successfully",
  };
}
