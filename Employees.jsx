import React from "react";
import employee from "./Data";
class Employees extends React.Component{
    render (){
        return <div>
            <pre>{JSON.stringify(employee)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                       <table className="table table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>ID</th>
                                <th>FRIST NAME</th>
                                <th>EMAIL</th>
                                <th>GENDER</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            employee.map((employee)=>{
                               return <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.first_name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.gender}</td>
                               </tr>
                            })
                           }
                        </tbody>
                       </table>
                    </div>
                </div>

            </div>
        
        <employee />
        </div>
    }
}
export default Employees