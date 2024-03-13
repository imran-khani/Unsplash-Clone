"use server";

import { FormValues } from "./contact/page";

export async function sendEmail(formData: FormValues) {
  const { name, email, message } = formData;
  // console.log(`${email} and the name is ${name} and the message is ${message}`);
  return {
    status: "ok",
    message: "success",
  };
}
