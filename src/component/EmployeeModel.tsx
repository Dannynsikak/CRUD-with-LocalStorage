import React from "react";
import "./EmployeeModel.style.css";
import { IEmployee } from "./employee.Type";

type Props = {
  onClose: () => void;
  data: IEmployee;
};

const EmployeeModel = (props: Props) => {
  const { onClose, data } = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3 className="text-center text-[1.5rem] font-bold">Employee Data</h3>
        <div>
          <div>
            <label htmlFor="">First Name : {data.firstName}</label>
          </div>{" "}
          <div>
            <label htmlFor="">Last Name : {data.lastName}</label>
          </div>{" "}
          <div>
            <label htmlFor="">Email : {data.email}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModel;
