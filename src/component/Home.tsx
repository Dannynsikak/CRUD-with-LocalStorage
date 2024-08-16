import React, { useEffect, useState } from "react";
import { IEmployee, PageEnum } from "./employee.Type";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
// import { IoCartOutline } from "react-icons/io5";

const Home = () => {
  const [employeeList, setEmployeeList] = useState([] as IEmployee[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IEmployee);

  useEffect(() => {
    const storedList = window.localStorage.getItem("EmployeeList");
    if (storedList) {
      _setEmployeeList(JSON.parse(storedList));
    }
  }, []);

  const onAddEmployeeClickHnd = () => {
    setShownPage(PageEnum.add);
  };
  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const _setEmployeeList = (list: IEmployee[]) => {
    setEmployeeList(list);
    window.localStorage.setItem("EmployeeList", JSON.stringify(list));
  };

  const addEmployee = (data: IEmployee) => {
    _setEmployeeList([...employeeList, data]);
  };
  const deleteEmployee = (data: IEmployee) => {
    // To index from array i.e employeeList
    // Splice that
    // Update new record

    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];

    tempList.splice(indexToDelete, 1);
    _setEmployeeList(tempList);
  };

  const editEmployeeData = (data: IEmployee) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: IEmployee) => {
    const filteredData = employeeList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filteredData);
    const tempData = [...employeeList];
    tempData[indexOfRecord] = data;
    _setEmployeeList(tempData);
  };

  return (
    <>
      <article className="bg-blue-900 text-white border-2 border-transparent border-solid text-center p-[1em_0]">
        <header>
          <h1>React: Simple CRUD Application</h1>
        </header>
      </article>
      <section className="w-[80%] m-[0_auto]">
        {shownPage === PageEnum.list && (
          <div className="p-[2em_0] ">
            <input
              type="button"
              value="Add Employee"
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 cursor-pointer float-right mb-[1em]"
              onClick={onAddEmployeeClickHnd}
            />
            <EmployeeList
              list={employeeList}
              onDeleteClickHnd={deleteEmployee}
              onEdit={editEmployeeData}
            />
          </div>
        )}
        {shownPage === PageEnum.add && (
          <AddEmployee
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addEmployee}
          />
        )}{" "}
        {shownPage === PageEnum.edit && (
          <EditEmployee
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )}
      </section>
    </>
  );
};

export default Home;
