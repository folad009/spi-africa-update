import React, { useMemo, useState } from "react";
import { COUNTRIES } from "../data/countries";

const categories = [
  "Student/Graduate",
  "Early-Career Sales Professional",
  "Mid-level Sales Professional",
  "Senior Sales Professional",
  "Commercial/Sales Leader",
  "Director/C-suite Executive",
  "Commercial/Business Executive",
  "Entrepreneur/Business Owner",
];

const JoinCommunity: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    country: "",
    category: "",
    email: "",
    phone: "",
    experience: "",
    goals: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const countryDialCode = useMemo(() => {
    return COUNTRIES.find((c) => c.name === form.country)?.dialCode ?? "";
  }, [form.country]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setErrorMsg(null);
    setSuccess(false);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error(`Failed to submit (${response.status})`);
      }
      setSuccess(true);
      // clear sensitive fields
      setForm((prev) => ({ ...prev, email: '', phone: '' }));
    } catch (err: any) {
      console.error('submission error', err);
      setErrorMsg(err?.message || 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-spi-primary focus:border-spi-primary";

  return (
    <section className="bg-slate-50 py-16" id="communityform">
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
            {success && (
              <div className="text-green-600 font-medium">
                Thank you! Your submission has been received.
              </div>
            )}
            {errorMsg && (
              <div className="text-red-600 font-medium">
                {errorMsg}
              </div>
            )}
            
            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
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
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
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
                <label htmlFor="jobTitle" className="block text-sm font-medium mb-1">
                  Current job title
                </label>
                <input
                  id="jobTitle"
                  name="jobTitle"
                  value={form.jobTitle}
                  onChange={handleChange}
                  placeholder="Enter your job title"
                  className={inputClass}
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Enter your company"
                  className={inputClass}
                />
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium mb-1">
                  Country/region <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">Select your country</option>
                  {COUNTRIES.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-1">
                  Professional category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
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
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
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
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone
                </label>
                <div className="flex">
                  <span className="flex min-w-[4.5rem] shrink-0 items-center justify-center border border-r-0 border-slate-300 rounded-l-lg bg-slate-100 px-2 text-sm tabular-nums">
                    {countryDialCode || "—"}
                  </span>
                  <input
                    id="phone"
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
                <label htmlFor="experience" className="block text-sm font-medium mb-1">
                  Sales experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select your sales experience</option>
                  <option>0 - 1 years</option>
                  <option>2 - 3 years</option>
                  <option>4 - 7 years</option>
                  <option>8 - 11 years</option>
                  <option>12 - 15 years</option>
                  <option>Greater than 15 years</option>
                </select>
              </div>

              {/* Goals */}
              <div className="md:col-span-2">
                <label htmlFor="goals" className="block text-sm font-medium mb-1">
                  How can SPI Africa support you?
                </label>
                <textarea
                  id="goals"
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
                  <a
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-spi-primary underline cursor-pointer"
                  >
                    Privacy Policy
                  </a>.
                </p>
              </div>
            </div>

            {/* Submit */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-3 rounded-lg shadow-sm transition ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting…' : 'Submit'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;