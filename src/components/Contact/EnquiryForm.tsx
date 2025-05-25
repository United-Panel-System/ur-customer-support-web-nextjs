"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { EnquiryTypeEnum, EnquiryTypeMap } from "@/lib/enum/enquiryType";
import { addEnquiry } from "@/api/api";
import { AnimatedButton, AnimatedDiv } from "../Animation";

const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: ``,
    companyName: ``,
    email: ``,
    phone: ``,
    type: EnquiryTypeEnum.ProductEnquiry,
    message: ``,
    roomSize: ``,
    temperature: ``,
    address: ``,
    preferredDateTime: ``,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    if (name === `type`) {
      const selectedID = Number(value);
      setFormData({
        ...formData,
        type: selectedID,
        roomSize: ``,
        temperature: ``,
        address: ``,
        preferredDateTime: ``,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const messageFields = {
      "Room Size": formData.roomSize,
      Temperature: formData.temperature,
      Address: formData.address,
      "Preferred Date & Time": formData.preferredDateTime,
      Message: formData.message,
    };

    const consolidatedMessage = Object.entries(messageFields)
      .filter(([_, value]) => value && value.trim() !== ``)
      .map(([label, value]) => `${label}: ${value}`)
      .join(`\n`);

    const requestBody = {
      name: formData.name,
      companyName: formData.companyName,
      email: formData.email,
      phone: formData.phone,
      type: formData.type,
      message: consolidatedMessage,
    };
    const response = await addEnquiry(requestBody);

    if (response.succeeded === true) {
      toast.success(`Your enquiry has been submitted successfully!`);
      setFormData({
        name: ``,
        companyName: ``,
        email: ``,
        phone: ``,
        message: ``,
        type: EnquiryTypeEnum.ProductEnquiry,
        roomSize: ``,
        temperature: ``,
        address: ``,
        preferredDateTime: ``,
      });
    } else {
      toast.error(`Error submitting enquiry, please try again.`);
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section id="enquiry" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <AnimatedDiv
              variant="slideUp"
              trigger="onView"
              staggerChildren={0.15}
              className="shadow-three dark:bg-gray-dark mb-12 rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
            >
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-white">
                Enquiry Form
              </h2>
              <p className="text-body-color dark:text-body-color-dark mb-12 text-base font-medium">
                Please fill out the form below and our team will get back to you
                soon.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  {/* Name Field */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  {/* Company Name Field */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="companyName"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Enter company name"
                        required
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  {/* Enquiry Type Dropdown */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="type"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Enquiry Type
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      >
                        {Object.entries(EnquiryTypeMap).map(([id, label]) => (
                          <option key={id} value={id}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Conditional Fields for Cold Room Design */}
                  {formData.type === EnquiryTypeEnum.ColdRoomDesign && (
                    <>
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="roomSize"
                            className="text-dark mb-3 block text-sm font-medium dark:text-white"
                          >
                            Room Size (Length x Width x Height)
                          </label>
                          <input
                            type="text"
                            id="roomSize"
                            name="roomSize"
                            value={formData.roomSize}
                            onChange={handleChange}
                            placeholder="e.g. 10m x 5m x 3m"
                            required
                            className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                          />
                        </div>
                      </div>

                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="temperature"
                            className="text-dark mb-3 block text-sm font-medium dark:text-white"
                          >
                            Temperature (°C)
                          </label>
                          <input
                            type="number"
                            id="temperature"
                            name="temperature"
                            value={formData.temperature}
                            onChange={handleChange}
                            placeholder="e.g. -18"
                            required
                            className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Conditional Fields for Consultancy & Site Survey */}
                  {formData.type ===
                    EnquiryTypeEnum.ConsultancyAndSiteSurvey && (
                    <>
                      <div className="w-full px-4">
                        <div className="mb-8">
                          <label
                            htmlFor="address"
                            className="text-dark mb-3 block text-sm font-medium dark:text-white"
                          >
                            Address
                          </label>
                          <textarea
                            id="address"
                            name="address"
                            rows={3}
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter the site address"
                            required
                            className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                          />
                        </div>
                      </div>

                      <div className="w-full px-4">
                        <div className="mb-8">
                          <label
                            htmlFor="preferredDateTime"
                            className="text-dark mb-3 block text-sm font-medium dark:text-white"
                          >
                            Preferred Date & Time
                          </label>
                          <input
                            type="datetime-local"
                            id="preferredDateTime"
                            name="preferredDateTime"
                            value={formData.preferredDateTime}
                            onChange={handleChange}
                            required
                            className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Message Field */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        required
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="w-full px-4 text-center">
                    <AnimatedButton
                      variant="slideUp"
                      type="submit"
                      className="bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark cursor-pointer rounded-lg px-9 py-4 text-base font-medium text-white"
                    >
                      Submit Enquiry
                    </AnimatedButton>
                  </div>
                </div>
              </form>
            </AnimatedDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
