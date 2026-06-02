import React from "react";
import { useForm } from "react-hook-form";
import "./App.css"; // Rules for form and error styling

function App() {
  // Extracting necessary states and functions from the useForm hook
  const {
    register, // Registers input fields to track and validate them
    handleSubmit, // Handles form submission after successful validation
    formState: { errors, isSubmitting }, // Extracts validation errors and loading/submitting state
  } = useForm();

  // Function that triggers when the form is successfully validated and submitted
  const onSubmit = async (data) => {
    console.log("Submitting the form...", data);
    
    // Simulating an API call with a 5-second delay [00:23:27]
    await new Promise((resolve) => setTimeout(resolve, 5000));
    
    console.log("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      {/* Binding form submission to React Hook Form's handleSubmit utility [00:08:36] */}
      <form onSubmit={handleSubmit(onSubmit)}>
        
        {/* 1. FIRST NAME FIELD (With Required and Length Validations) [00:05:26] */}
        <div>
          <label>First Name: </label>
          <input
             type="text"
           
            className={errors.firstName ? "input-error" : ""}
           
            {...register("firstName", {
              required: { value: true, message: "First name is required." },
              minLength: { value: 3, message: "Minimum length must be at least 3 characters." },
              maxLength: { value: 6, message: "Maximum length cannot exceed 6 characters." },
            })}
          />
          {/* Displaying the error message conditionally if an error exists [00:16:59] */}
          {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
        </div>

        {/* 2. MIDDLE NAME FIELD (Standard unvalidated input field) */}
        <div>
          <label>Middle Name: </label>
          <input {...register("middleName")} />
        </div>

        {/* 3. LAST NAME FIELD (With Regular Expression / Pattern Validation) [00:20:42] */}
        <div>
          <label>Last Name: </label>
          <input
            className={errors.lastName ? "input-error" : ""}
            {...register("lastName", {
              pattern: {
                value: /^[A-Za-z]+$/i, // Regex rule allowing alphabets only
                message: "Last name must contain letters only.",
              },
            })}
          />
          {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
        </div>

        {/* 4. SUBMIT BUTTON (With double-submission prevention logic) [00:26:45] */}
        {/* Disables the button and updates text to 'Submitting...' while the API call is active [00:27:18] */}
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting..." : "Submit"}
        />
      </form>
    </div>
  );
}

export default App;