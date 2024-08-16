import React, { useState } from "react";
import "./EmployeeForm.style.css";
import { IEmployee } from "./employee.Type";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const validate = () => {
    let isValid = true;
    const newErrors = { firstName: "", lastName: "", email: "" };

    if (firstName.trim() === "") {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (email.trim() === "") {
      newErrors.lastName = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // const onFirstNameChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFirstName(e.target.value);
  // };

  // const onLastNameChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setLastName(e.target.value);
  // };

  // const onEmailChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  // };

  const onSubmitbtnClickHnd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    console.log("Form Submitted:");
    console.log("Employee Data:", data);
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };

  return (
    <div className="text-center">
      <div>
        <h3>Add Employee Form</h3>
      </div>
      <form onSubmit={onSubmitbtnClickHnd}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">
            First Name :
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className=" p-[1.5em_0] mt-1 block w-full  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">
            Last Name :
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full p-[1.5em_0] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email Add. :
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-[1.5em_0] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="flex justify-between">
          <input
            type="button"
            value="Back"
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400 cursor-pointer"
            onClick={onBackBtnClickHnd}
          />
          <input
            type="submit"
            value="Add Employee"
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
