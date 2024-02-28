export default function Table(props){
    const {studentList , defaultBranch , deleteRecord} = props;
    return<>
        <div className="container mt-3">
            <table className="table table-bordered text-center table-striped table-responsive-sm" >
                <thead>
                    <tr>
                        <th>SNO.</th>
                        <th>Roll Number</th>
                        <th>Student Name</th>
                        <th>Branch</th>
                        <th>Mobile Number</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.filter((student)=>student.branch === defaultBranch || defaultBranch === "all").map((student , index)=><tr key={index}>
                        <td>{index + 1}</td>
                        <td>{student.roll}</td>
                        <td>{student.name}</td>
                        <td>{student.branch}</td>
                        <td>{student.mobile}</td>
                        <td><button className="btn btn-danger" onClick={()=>deleteRecord(student.roll)}>Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    </>   
}