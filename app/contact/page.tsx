import ContactForm from "@/components/Contact/ContactForm";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <div className="grid gap-2 justify-center text-center h1-bg">
        <h1 className="h1">Contact</h1>
        <p className="sub-heading">- get in touch -</p>
      </div>
      <ContactForm />
    </>
  );
};

export default ContactPage;
