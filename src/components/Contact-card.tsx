import { House, Mail, Phone } from "lucide-react";
import React from "react";

const ContactCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center gap-5 mt-10 mb-10 w-full sm:w-[90%] px-8 xl:w-[75%] mx-auto">
      <div className="card w-full flex flex-col justify-center items-center text-center bg-white p-10 border rounded-[15px] shadow-md gap-2">
        <div className="bg-primaryPurple text-white p-5 rounded-full mb-2">
          <House />
        </div>
        <h6>Office</h6>
        <p>Victoria Street, London, UK</p>
      </div>

      <div className="card w-full flex flex-col justify-center items-center text-center bg-white p-10 border rounded-[15px] shadow-md gap-2">
        <div className="bg-primaryPurple text-white p-5 rounded-full mb-2">
          <Mail />
        </div>
        <h6>Email</h6>
        <p>hello@zarrin.com</p>
      </div>

      <div className="card w-full flex flex-col justify-center items-center text-center bg-white p-10 border rounded-[15px] shadow-md gap-2">
        <div className="bg-primaryPurple text-white p-5 rounded-full mb-2">
          <Phone />
        </div>
        <h6>Phone</h6>
        <p>(001) 2342 3451</p>
      </div>
    </div>
  );
};

export default ContactCard;
