"use client";
import { useState } from "react";
import Image from "next/image";
// import styles from " ../styles/BeneficiaryProfile.module.css";

export default function BeneficiaryProfile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/beneficiary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message);
        setFormData({
          firstName: "",
          lastName: "",
          gender: "",
          dateOfBirth: "",
          email: "",
          phoneNumber: "",
        });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center py-10 px-4 md:px-20">
      <div className="w-full md:w-1/2 p-5 bg-white rounded-lg shadow-lg max-w-lg">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Beneficiary Details
        </h2>
        <p className="text-gray-500 mb-6">Please input correct details below</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:ring-purple-200 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:ring-purple-200 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Gender
              </label>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:ring-purple-200 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
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
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:ring-purple-200 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-purple-800 transition duration-200"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Register"}
          </button>

          {successMessage && (
            <p className="text-green-600 mt-4">{successMessage}</p>
          )}
          {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?
          </p>
        </form>
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:ml-10 flex justify-center">
        <Image
          src="/images/beneficiary.png"
          alt="Beneficiary receiving aid"
          className="rounded-lg shadow-lg w-full max-w-md"
        />
      </div>
    </div>
  );
}
