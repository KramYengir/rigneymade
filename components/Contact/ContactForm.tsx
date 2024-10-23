"use client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast"; // Adjust this path as needed
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false); // State to track sending status
  const { toast } = useToast(); // Hook for showing toasts

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true); // Set sending state to true

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      // Show success toast if the email is sent successfully
      toast({
        title: "Success",
        description: "Your message has been sent! Thank You!",
      });

      // Optionally, reset the form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      // Show error toast if there's a problem sending the email
      toast({
        title: "Ooops...",
        description: "Unable to send message. Please try again later.",
        variant: "destructive",
      });
      console.error("EmailJS error:", error);
    } finally {
      setIsSending(false); // Reset sending state
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sm:min-w-[480px] flex flex-col space-y-8 max-w-lg mx-auto p-8 dark:border border-gray-300 rounded-lg shadow-lg shadow-rm-primary-950/40  bg-gray-100/60 dark:bg-neutral-800/60"
    >
      <h2 className="uppercase text-2xl font-extrabold text-rm-primary-800 dark:text-gray-200">
        Leave us a message
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-neutral-700 dark:text-gray-200"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-neutral-700 dark:text-gray-200"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-neutral-700 dark:text-gray-200"
        rows={6}
      />
      <button
        type="submit"
        className={`btn-primary py-2 px-4 font-semibold rounded transition-colors ${
          isSending ? "btn-secondary cursor-not-allowed" : "btn-primary"
        }`}
        disabled={isSending} // Disable button while sending
      >
        {isSending ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
