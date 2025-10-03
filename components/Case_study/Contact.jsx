import React from "react";
import { Mail, PhoneCallIcon } from "lucide-react";
import ContactForm from "./Contact-us/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-sky-50 flex items-center justify-center py-10 px-4">
      <div className="relative flex flex-col md:flex-row bg-white rounded-xl shadow-lg w-full max-w-5xl overflow-hidden">


        <div className="p-6 md:p-8 lg:p-10 md:w-1/2 flex flex-col justify-center">
          <h2 className="font-bold text-blue-950 text-2xl md:text-3xl">
            Get in Touch With Us
          </h2>
          <p className="font-light text-gray-500 mt-4 text-sm md:text-base leading-relaxed max-w-md">
            GPS technology transformed fleet operations by reducing theft, preventing unauthorized use, and boosting overall accountability.
          </p>

          <div className="flex flex-row mt-8 gap-3 text-blue-950 items-center">
            <Mail className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-base">abc@gmail.com</span>
          </div>

          <div className="flex flex-row mt-4 gap-3 text-blue-950 items-center">
            <PhoneCallIcon className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-base">+91 9876543210</span>
          </div>
        </div>


        <div className="md:w-1/2 w-full p-4 sm:p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
