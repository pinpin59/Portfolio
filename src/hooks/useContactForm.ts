import { useState, useRef } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormStatus {
  type: "success" | "error" | "";
  message: string;
}

export const useContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<ContactFormStatus>({
    type: "",
    message: "",
  });

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log(result.text);
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      formRef.current?.reset();
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    formRef,
    loading,
    status,
    sendEmail,
  };
};
