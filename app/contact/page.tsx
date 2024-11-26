import ContactForm from "@/components/Contact/ContactForm";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <div className="grid gap-2 justify-center text-center h1-bg">
        <h1 className="h1">Contact</h1>
        <p className="h1-sub-heading">- get in touch -</p>
      </div>
      <div className="rm-container flex flex-wrap lg:flex-nowrap justify-start lg:justify-evenly gap-x-8 gap-y-12 my-16 sm:my-24">
        <div className="max-w-screen-sm flex flex-col gap-4 pt-8">
          <h2 className="uppercase text-3xl font-extrabold opacity-90">
            Let&apos;s talk
          </h2>
          <p className="max-w-prose text-left text-balance font-light leading-6">
            We&apos;re here to help bring your ideas to life. Whether you have a
            question about our services, want to discuss a potential project, or
            simply need some advice, feel free to get in touch. Fill out the
            form or use one of the contact options to reach us directly.
          </p>

          {/* contact info */}
          <div className="grid gap-4 max-w-md mt-4">
            <div className="flex gap-6 items-center px-4 py-4 rounded-md bg-neutral-400/10">
              <BsTelephone size={32} />
              <div className="flex flex-col gap-1">
                <a href="tel:1234567" className="text-balance font-semibold">
                  +1 (555) 555-5555
                </a>
                <p className="text-sm font-light">
                  Can also be used for WhatsApp Messaging
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-center px-4 py-4 rounded-md bg-neutral-400/10">
              <Mail size={32} />
              <div className="flex flex-col gap-1">
                <a
                  href="mailto: example@gmail.com"
                  className="text-balance font-semibold"
                >
                  info@rigneymade.com
                </a>
                <p className="text-sm font-light">
                  Click email to send a message
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-center px-4 py-4 rounded-md bg-neutral-400/10">
              <MapPin size={32} />
              <div className="flex flex-col gap-1">
                <p className="text-balance font-semibold">Liverpool, UK</p>
                <p className="text-sm font-light">Serving UK & Ireland</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
