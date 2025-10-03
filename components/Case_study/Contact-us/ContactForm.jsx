"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
    const formik = useFormik({
        initialValues: { name: "", email: "", contact: "", message: "" },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email format").required("Email is required"),
            contact: Yup.string()
                .matches(/^[0-9]+$/, "Phone number must contain only digits")
                .min(10, "Phone number must be at least 10 digits")
                .required("Phone number is required"),
            message: Yup.string().required("Message is required"),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const Response = await fetch("https://formspree.io/f/xjkarwej", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(values),
                });

                if (Response.ok) {
                    toast.success("Message sent successfully!", { position: "top-right", autoClose: 3000 });
                } else {
                    toast.error("Something went wrong", { position: "top-right", autoClose: 3000 });
                }
                resetForm();
            } catch (error) {
                console.error("Error sending data:", error);
                toast.error("Error: " + error.message);
            }
        },
    });

    return (
        <div className="w-full bg-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-lg border">
            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <ToastContainer />

                <div>
                    <label className="block text-gray-700 text-sm md:text-base">Name</label>
                    <input
                        type="text"
                        {...formik.getFieldProps("name")}
                        className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-950 outline-none text-sm md:text-base"
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p className="text-red-500 text-xs md:text-sm mt-1">{formik.errors.name}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-700 text-sm md:text-base">Email</label>
                    <input
                        type="email"
                        {...formik.getFieldProps("email")}
                        className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-950 outline-none text-sm md:text-base"
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-xs md:text-sm mt-1">{formik.errors.email}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-700 text-sm md:text-base">Phone Number</label>
                    <input
                        type="text"
                        {...formik.getFieldProps("contact")}
                        className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-950 outline-none text-sm md:text-base"
                    />
                    {formik.touched.contact && formik.errors.contact && (
                        <p className="text-red-500 text-xs md:text-sm mt-1">{formik.errors.contact}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-700 text-sm md:text-base">Message</label>
                    <textarea
                        rows="4"
                        {...formik.getFieldProps("message")}
                        className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-950 outline-none text-sm md:text-base"
                    />
                    {formik.touched.message && formik.errors.message && (
                        <p className="text-red-500 text-xs md:text-sm mt-1">{formik.errors.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="w-full bg-blue-950 text-white py-2 rounded-lg hover:bg-blue-900 transition disabled:opacity-50 text-sm md:text-base"
                >
                    {formik.isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
}
