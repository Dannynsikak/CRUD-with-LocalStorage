import React, { useState } from "react";
import { IEmployee } from "./employee.Type";
import EmployeeModel from "./EmployeeModel";

type Props = {
  list: IEmployee[]; // Changed to 'list' to match destructuring
  onDeleteClickHnd: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;
};

const EmployeeList: React.FC<Props> = ({ list, onDeleteClickHnd, onEdit }) => {
  // const OnDeleteBtnClick = (data: IEmployee) => {
  // }
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

  const viewEmployee = (data: IEmployee) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  return (
    <div>
      <div className="text-center text-[1.5rem]">DataTable</div>{" "}
      <table className="border-collapse w-full">
        <thead>
          <tr className="border border-solid border-[#dddddd] text-left p-[1em] bg-[#dddddd]">
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((employee) => (
            <tr
              key={employee.id}
              className="border border-solid border-[#dddddd] text-left p-[1em]"
            >
              <td>{`${employee.firstName} ${employee.lastName}`}</td>
              <td>{employee.email}</td>
              <td>
                <div className="space-x-3 *:border-2 *:shadow-">
                  <input
                    type="button"
                    value="View"
                    onClick={() => viewEmployee(employee)}
                  />
                  <input
                    type="button"
                    value="Edit"
                    onClick={() => onEdit(employee)}
                  />{" "}
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteClickHnd(employee)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && dataToShow !== null && (
        <EmployeeModel onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default EmployeeList;
