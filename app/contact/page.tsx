"use client";
import { useForm } from "react-hook-form";
import { sendEmail } from "../action";
export type FormValues = {
  name: string;
  email: string;
  message: string;
};
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const submit = async (e: FormValues) => {
    const res = await sendEmail(e);
    if (res.status) {
      console.log("data recieved");
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col gap-y-2 border-2 border-white p-4 text-black"
      >
        <input
          {...register("name", { required: true })}
          type="text"
          className="rounded p-1 focus-within:outline-none"
        />
        <input
          {...register("email", { required: true })}
          type="email"
          className="rounded p-1 focus-within:outline-none"
        />
        <textarea
          {...register("message", { required: true })}
          name="message"
          className="resize-none rounded p-1 focus-within:outline-none"
        />
        <button className={`rounded bg-rose-500 px-2 py-1 text-white`}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
