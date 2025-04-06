import React, { useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";

const Contact = () => {
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    country: "",
    jobTitle: "",
    jobDetails: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.entries(customerData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = `${key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (s) => s.toUpperCase())} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "customerFeedback"), {
        ...customerData,
        timestamp: Date.now(),
      });

      toast.success("Feedback submitted successfully!");
      setCustomerData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        country: "",
        jobTitle: "",
        jobDetails: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Error submitting feedback");
    } finally {
      setLoading(false);
    }
  };
  return (
    <React.Fragment>
      <div className="bg-[#F8F5F2] md:p-6 p-3">
        <div className="md:w-[88%] w-[96%] mx-auto">
          <div className=" text-center md:pt-0 pt-5">
            <h3 className="text-2xl text-neutral-400 font-bold">Contact Us</h3>
            <h5 className="md:text-5xl text-2xl md:w-[55%] w-full mx-auto font-semibold newsreader pt-4">
              Ready to achieve your vision? We're here to help.
            </h5>
            <p className="text-base font-medium md:w-[45%] w-full mx-auto pt-2">
              We'd love to start a conversation. Fill out the form and we'll
              connect you with the right person.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded shadow-md md:w-[70%] mt-5 w-full mx-auto bg-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "name", placeholder: "Full Name" },
                { name: "email", placeholder: "Email Address", type: "email" },
                { name: "phone", placeholder: "Phone Number", type: "tel" },
                { name: "companyName", placeholder: "Company Name" },
                { name: "country", placeholder: "Country" },
                { name: "jobTitle", placeholder: "Job Title" },
              ].map(({ name, placeholder, type = "text" }) => (
                <div key={name}>
                  <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={customerData[name]}
                    onChange={handleChange}
                    className={`p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full ${
                      errors[name] ? "border border-red-500" : ""
                    }`}
                  />
                  {errors[name] && (
                    <p className="text-sm text-red-500 mt-1">{errors[name]}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <textarea
                name="jobDetails"
                placeholder="Describe your job responsibilities or project requirements"
                value={customerData.jobDetails}
                onChange={handleChange}
                className={`w-full h-[150px] p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] ${
                  errors.jobDetails ? "border border-red-500" : ""
                }`}
              ></textarea>
              {errors.jobDetails && (
                <p className="text-sm text-red-500 mt-1">{errors.jobDetails}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className={`mt-4 cursor-pointer text-white py-2 px-20 rounded ${
                  loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
                }`}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
