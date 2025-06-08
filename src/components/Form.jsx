import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import countriesAndCities from "../data/countriesAndCities";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    city: "",
    pan: "",
    aadhar: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateField = (name, value) => {
    let error = "";

    const nameRegex = /^[A-Za-z\s]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    switch (name) {
      case "firstName":
        if (!value) error = "First Name is required.";
        else if (!nameRegex.test(value))
          error = "First Name must contain only alphabets or spaces.";
        break;
      case "lastName":
        if (!value) error = "Last Name is required.";
        else if (!nameRegex.test(value))
          error = "Last Name must contain only alphabets or spaces.";
        break;
      case "username":
        if (!value) error = "Username is required.";
        break;
      case "email":
        if (!value.includes("@")) error = "Invalid email.";
        break;
      case "password":
        if (!passwordRegex.test(value))
          error =
            "Password must be at least 8 characters and include lowercase, uppercase, digit, and special character.";
        break;
      case "phone":
        if (!value.match(/^\+\d{1,4} \d{7,}$/))
          error = "Enter a valid phone number with country code.";
        break;
      case "country":
        if (!value) error = "Country is required.";
        break;
      case "city":
        if (!value) error = "City is required.";
        break;
      case "pan":
        if (!value.match(/^[A-Z]{5}[0-9]{4}[A-Z]$/))
          error = "Invalid PAN number.";
        break;
      case "aadhar":
        if (!value.match(/^\d{12}$/)) error = "Aadhar must be a 12-digit number.";
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validate = () => {
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
    });
    // Check if any errors exist
    return !Object.values(errors).some((err) => err);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/success", { state: formData });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "country" && { city: "" }), // Reset city if country changes
    }));

    validateField(name, value); // Revalidate the specific field
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-lg p-10 rounded-2xl bg-white shadow-md">
        <h2 className="text-3xl font-bold text-violet-700 text-center mb-8">
          React Form with Validation
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 flex flex-col gap-4 items-center"
        >
          {[
            { name: "firstName", placeholder: "First Name", type: "text" },
            { name: "lastName", placeholder: "Last Name", type: "text" },
            { name: "username", placeholder: "Username", type: "text" },
            { name: "email", placeholder: "E-mail", type: "email" },
            { name: "phone", placeholder: "Phone (e.g., +91 9876543210)", type: "tel" },
            { name: "pan", placeholder: "PAN Number", type: "text" },
            { name: "aadhar", placeholder: "Aadhar Number", type: "text" },
          ].map(({ name, placeholder, type }) => (
            <div key={name} className="w-full">
              <input required
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors[name] && (
                <p className="text-sm text-red-500 mt-2">{errors[name]}</p>
              )}
            </div>
          ))}
          <div className="w-full">
            <div className="relative">
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-blue-500 focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-2">{errors.password}</p>
            )}
          </div>
          <div className="w-full">
            <select
              required
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Country</option>
              {Object.keys(countriesAndCities).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="text-sm text-red-500 mt-2">{errors.country}</p>
            )}
          </div>
          <div className="w-full">
            <select
              required
              name="city"
              value={formData.city}
              onChange={handleChange}
              disabled={!formData.country}
              className={`w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${!formData.country ? "bg-gray-100 cursor-not-allowed" : ""
                }`}
            >
              <option value="">Select City</option>
              {formData.country &&
                countriesAndCities[formData.country].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
            {errors.city && (
              <p className="text-sm text-red-500 mt-2">{errors.city}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={Object.values(errors).some((error) => error)}
            className="w-full bg-violet-600 text-white text-lg font-semibold rounded-lg hover:bg-violet-700 hover:cursor-pointer focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed py-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;