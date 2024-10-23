import ContactForm from "@/components/Contact/ContactForm";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <div className="grid gap-2 justify-center text-center h1-bg">
        <h1 className="h1">Contact</h1>
        <p className="sub-heading">- get in touch -</p>
      </div>
      <div className="rm-container flex flex-wrap justify-center my-24">
        <div className="max-w-screen-sm flex flex-col gap-4">
          <h2 className="text-4xl font-extrabold">Get in touch</h2>
          <p className="max-w-prose text-left text-balance font-light leading-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            delectus saepe deleniti ullam reprehenderit autem officia qui
            commodi incidunt eveniet quam modi officiis consequatur, explicabo
            quo, soluta magni quisquam placeat?
          </p>
        </div>
        <div className="">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
