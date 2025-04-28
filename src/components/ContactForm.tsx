"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "name can not be less than 3 chars" })
    .max(30, { message: "name can not be more than 30 chars" }),
  email: z.string().email({ message: "Email is not valid" }),
  phone: z.string().regex(/^\+?[0-9]{7,15}$/, "Invalid phone number"),
  subject: z.string().optional(),
  message: z.string().optional(),
});

type formValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<formValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: formValues) => {
    console.log(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:w-[80%] lg:w-[60%] md:mx-auto bg-white rounded-xl shadow-xl text-start w-[95%] p-10 sm:p-16 -mt-[40%] md:-mt-[20%] flex flex-col gap-8 mb-32"
    >
      <div className="upper flex flex-col sm:flex-row gap-5 ">
        <div className="w-full name-field flex flex-col gap-2">
          <label>Name</label>
          <Input
            {...register("name")}
            size={35}
            placeholder="Enter your name"
            className="border border-[#E4E4E7] rounded-[8px] py-6  bg-white  placeholder:text-light w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="phone-field w-full flex flex-col gap-2">
          <label>Phone</label>
          <Input
            {...register("phone")}
            size={35}
            placeholder="Enter your phone number"
            className="border border-[#E4E4E7] rounded-[8px] py-6  bg-white  placeholder:text-light "
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
      </div>
      <div className="middle flex flex-col sm:flex-row gap-5 justify-between">
        <div className="email-field w-full flex flex-col gap-2">
          <label>Email</label>
          <Input
            {...register("email")}
            size={35}
            placeholder="Enter your email"
            className="border border-[#E4E4E7] rounded-[8px] py-6  bg-white  placeholder:text-light "
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="subject-field w-full flex flex-col gap-2">
          <label>Subject</label>
          <Input
            {...register("subject")}
            size={35}
            placeholder="Enter your subject"
            className="border border-[#E4E4E7] rounded-[8px] py-6  bg-white  placeholder:text-light "
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>
      </div>
      <div className="message-field w-full h-[200px] flex flex-col gap-2">
        <label>Message</label>
        <textarea
          {...register("message")}
          placeholder="Enter your message"
          className="border border-[#E4E4E7] rounded-[8px] py-2 px-4 bg-white placeholder:text-light h-full resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>
      <div className="btn flex justify-center items-center ">
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="secondary"
          className="bg-primaryPurple text-white rounded py-3 px-6 hover:bg-primaryPurple/80 transition-all duration-300 ease-in-out"
        >
          <h6>Send Message</h6>
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
