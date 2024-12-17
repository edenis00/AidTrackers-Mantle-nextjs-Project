"use client";
import { useState } from "react";
import Image from "next/image";

// import styles from "../styles/DonorProfile.module.css";

export default function DonorProfile() {
  const [formData, setFormData] = useState({
    orgName: "",
    countryState: "",
    website: "",
    email: "",
    representatives: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center py-10 px-4 md:px-20">
      <div className="w-full md:w-1/2 p-5 bg-white rounded-lg shadow-lg max-w-lg">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Donors Details
        </h2>
        <p className="text-gray-500 mb-6">Please input correct details below</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Organization&apos;s Name/Full Name
            </label>
            <input
              type="text"
              name="orgName"
              value={formData.orgName}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:ring-purple-200 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Country/State
              </label>
              <input
                type="text"
                name="countryState"
                value={formData.countryState}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:ring-purple-200 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Website
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:ring-purple-200 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:ring-purple-200 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Representatives
            </label>
            <input
              type="text"
              name="representatives"
              value={formData.representatives}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:ring-purple-200 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-purple-800 transition duration-200"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?
          </p>
        </form>
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:ml-10 flex justify-center">
        <Image
          src="/images/beneficiary.png" //
          alt="Donation process"
          className="rounded-lg shadow-lg w-full max-w-md"
        />
      </div>
    </div>
  );
}
