"use client";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";

import { object, string } from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

import Firebase from "@/lib/firebase";
import { useFirebase } from "@/composables";

export default function SubscribeForm() {
  const { user } = useFirebase();
  const validationSchema = object().shape({
    email: string().email().required(),
  });

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        await Firebase.instance.emailListing.subscribe(user!.uid, values.email);
        toast("Subscribed to email newsletter successful");
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <div className="flex flex-col space-y-1">
            <div className="border-1 ring-3 flex items-center space-x-2 rounded-lg border-transparent bg-black/20 px-3 ring-transparent focus-within:ring-yellow-200/50">
              <MdEmail className="text-xl text-white" />
              <Field
                name="email"
                className="flex-1 bg-transparent py-3 placeholder-white outline-none"
                placeholder="Enter email"
              />
            </div>
            <p className="text-sm first-letter:capitalize text-red-50">
              <ErrorMessage name="email" />
            </p>
          </div>
          <button
            className="flex items-center justify-center rounded-lg bg-white px-6 py-3 text-yellow-500"
            type="submit"
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-3 border-t-transparent border-amber rounded-full animate-spin" />
            ) : (
              <span>Subscribe</span>
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
}
