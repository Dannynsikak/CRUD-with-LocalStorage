import React, { useState } from "react";
import { IEmployee } from "./employee.Type";
import "./EmployeeForm.style.css";

type Props = {
  data: IEmployee;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);

  const onFirstNameChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const onEmailChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmitbtnClickHnd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedData: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    console.log("Form Submitted:");
    console.log("Employee Data:", data);
    onUpdateClickHnd(updatedData);
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
            onChange={onFirstNameChangeHnd}
            className=" p-[1.5em_0] mt-1 block w-full  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">
            Last Name :
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={onLastNameChangeHnd}
            className="mt-1 block w-full p-[1.5em_0] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email Add. :
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={onEmailChangeHnd}
            className="mt-1 block w-full p-[1.5em_0] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
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
            value="Update Employee"
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
