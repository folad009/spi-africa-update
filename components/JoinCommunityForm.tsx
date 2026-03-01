import React, { useState } from "react";

const categories = [
  "Student/Graduate",
  "Early-Career Sales Professional",
  "Mid-level Sales Professional",
  "Senior Sales Professional",
  "Sales Leader/Manager",
  "Commercial/Business Executive",
  "Entrepreneur/Business Owner",
];

const JoinCommunity: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    country: "Nigeria",
    category: "",
    email: "",
    phone: "",
    experience: "",
    goals: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", form);
  };

  const inputClass =
    "w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-spi-primary focus:border-spi-primary";

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-spi-primary">
              Join the SPI Community
            </h2>
            <p className="text-slate-600 mt-2">
              Fill out the form below to become a member of the SPI Africa community.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* First Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  placeholder="First name"
                  className={inputClass}
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Last name"
                  className={inputClass}
                />
              </div>

              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Current job title
                </label>
                <input
                  name="jobTitle"
                  value={form.jobTitle}
                  onChange={handleChange}
                  placeholder="Enter your job title"
                  className={inputClass}
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Company
                </label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Enter your company"
                  className={inputClass}
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Country/region <span className="text-red-500">*</span>
                </label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option>Nigeria</option>
                  <option>Ghana</option>
                  <option>Kenya</option>
                  <option>South Africa</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Professional category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">Select your professional category</option>
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className={inputClass}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone
                </label>
                <div className="flex">
                  <span className="flex items-center px-3 border border-r-0 border-slate-300 rounded-l-lg bg-slate-100 text-sm">
                    +234
                  </span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className={`${inputClass} rounded-l-none`}
                  />
                </div>
              </div>

              {/* Experience */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Sales experience
                </label>
                <select
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select your sales experience</option>
                  <option>0–1 years</option>
                  <option>2–3 years</option>
                  <option>4–7 years</option>
                  <option>8–12 years</option>
                  <option>12+ years</option>
                </select>
              </div>

              {/* Goals */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  How can SPI Africa support you?
                </label>
                <textarea
                  name="goals"
                  value={form.goals}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Let us know more about your goals, challenges, and interests."
                  className={inputClass}
                />
              </div>

              {/* Consent */}
              <div className="md:col-span-2 text-sm text-slate-600">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <span>
                    Yes, I would like to receive updates on SPI Africa events, news, and resources.
                  </span>
                </label>
                <p className="mt-1">
                  We value your privacy. See our{" "}
                  <span className="text-spi-primary underline cursor-pointer">
                    Privacy Policy
                  </span>.
                </p>
              </div>
            </div>

            {/* Submit */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-3 rounded-lg shadow-sm transition"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;