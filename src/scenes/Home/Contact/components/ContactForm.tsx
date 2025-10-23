import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/hooks/useContactForm";

const ContactForm = () => {
  const { formRef, loading, status, sendEmail } = useContactForm();

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className=" bg-[var(--background)] w-full lg:w-[500px]  p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl backdrop-blur-sm"
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input
            id="name"
            name="name"
            placeholder="Your Name"
            required
            disabled={loading}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            required
            disabled={loading}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="resize-none"
            required
            disabled={loading}
          />
        </Field>

        {status.message && (
          <div
            className={`p-3 rounded-md text-sm ${
              status.type === "success"
                ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300"
                : "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300"
            }`}
          >
            {status.message}
          </div>
        )}

        <Field orientation="horizontal">
          <Button variant={"outline"} type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default ContactForm;
