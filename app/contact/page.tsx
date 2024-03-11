"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import * as zod from "zod";
import ErrorMessage from "@/components/ErrorMessage";
import toast from "react-hot-toast";
import { useState } from "react";
import { sendEmail } from "../action";

export const formSchema = zod.object({
  name: zod
    .string()
    .min(3, {
      message: "Name must be at least 3 characters long",
    })
    .max(50, {
      message: "Name must be at most 50 characters long",
    }),
  email: zod.string().email(),
  message: zod.string().min(10).max(500, {
    message:
      "Message must be at least 10 characters long and at most 500 characters long",
  }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<zod.infer<typeof formSchema>>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onDataSubmission: SubmitHandler<zod.infer<typeof formSchema>> = async (
    data,
  ) => {
    setIsSubmitting(true);
    try {
      const result = await sendEmail(data);
      toast.success(result.message);
      reset();
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        className="flex flex-col items-center justify-center gap-y-4 rounded border-2 border-white p-8 text-black"
        onSubmit={handleSubmit(onDataSubmission)}
      >
        <label className="flex flex-col gap-y-1" htmlFor="name">
          <span className="text-white">Name</span>
          <input
            className={`rounded p-2 focus-within:outline-none ${
              errors.name ? "border-2 border-rose-500" : ""
            }`}
            {...register("name", { required: true })}
            type="text"
            id="name"
          />
        </label>
        <label className="flex flex-col gap-y-1" htmlFor="email">
          <span className="text-white">Email</span>
          <input
            className={`rounded p-2 focus-within:outline-none ${
              errors.email ? "border-2 border-rose-500" : ""
            }`}
            type="text"
            id="email"
            {...register("email", { required: true })}
          />
        </label>
        <label className="flex flex-col gap-y-1" htmlFor="message">
          <span className="text-white">Message</span>
          <textarea
            className={`rounded p-2 focus-within:outline-none ${
              errors.message ? "border-2 border-rose-500" : ""
            }`}
            {...register("message", { required: true })}
            id="message"
          />
          <ErrorMessage errors={errors} name="message" />
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`rounded-md ${isSubmitting ? "bg-gray-400" : "bg-rose-500"} px-3 py-1 text-white`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
