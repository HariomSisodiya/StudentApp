import { useState } from "react";
import "./App.css";
import CreateForm from "./Component/CreateForm";
import Header from "./Component/Header";
import data from "./StudentData";
import Table from "./Component/Table";

function App() {
  const [studentList, addNewStudent] = useState(data);
  const [defaultBranch, updateBranch] = useState("all");

  const deleteRecord = (roll) => {
    if (window.confirm("Are you sure?")) {
      let index = studentList.findIndex((student)=>student.roll = roll);
      let copyStudent = [...studentList];
      copyStudent.splice(index , 1);
      addNewStudent(copyStudent);
    }
  };
  return (
    <>
      <Header />
      <CreateForm
        studentList={studentList}
        updateBranch={updateBranch}
        addNewStudent={addNewStudent}
      />
      <Table
        studentList={studentList}
        defaultBranch={defaultBranch}
        deleteRecord={deleteRecord}
      />
    </>
  );
}

export default App;
