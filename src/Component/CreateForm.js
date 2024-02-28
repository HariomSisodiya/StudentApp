import { useRef } from "react";

export default function CreateForm(props) {
  const { studentList, updateBranch, addNewStudent } = props;

  let rollInput = useRef(null);
  let nameInput = useRef(null);
  let branchInput = useRef(null);
  let mobileInput = useRef(null);

  return (
    <>
      <div className="container mt-3">
        <div className="form-row">
          <div className="col">
            <input
              ref={rollInput}
              type="text"
              placeholder="Enter Roll Number"
              
              className="form-control"
            />
          </div>
          <div className="col">
            <input
              ref={nameInput}
              type="text"
              placeholder="Enter Student Name"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-row mt-3">
          <div className="col">
            <select className="form-control" ref={branchInput}>
              <option>Select Branch</option>
              <option>CS</option>
              <option>IT</option>
              <option>EC</option>
              <option>MECH</option>
            </select>
          </div>
          <div className="col">
            <input
              ref={mobileInput}
              type="phone"
              placeholder="Enter mobile number"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-row mt-3">
          <div className="col">
            <button
              className="btn btn-danger"
              onClick={() =>
                addNewStudent([
                  ...studentList,
                  {
                    roll: rollInput.current.value,
                    name: nameInput.current.value,
                    branch: branchInput.current.value,
                    mobile: mobileInput.current.value,
                  },
                ])
              }  

            >
              ADD
            </button>
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-info ml-3"
              onClick={() => updateBranch("CS")}
            >
              CS : (
              {studentList.filter((student) => student.branch === "CS").length})
            </button>
            <button
              className="btn btn-warning ml-3"
              onClick={() => updateBranch("IT")}
            >
              IT : (
              {studentList.filter((student) => student.branch === "IT").length})
            </button>
            <button
              className="btn btn-secondary ml-3"
              onClick={() => updateBranch("EC")}
            >
              EC : (
              {studentList.filter((student) => student.branch === "EC").length})
            </button>
            <button
              className="btn btn-primary ml-3"
              onClick={() => updateBranch("MECH")}
            >
              MECH : (
              {
                studentList.filter((student) => student.branch === "MECH")
                  .length
              }
              )
            </button>
            <button
              className="btn btn-success ml-3"
              onClick={() => updateBranch("all")}
            >
              Total : ({studentList.length})
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
