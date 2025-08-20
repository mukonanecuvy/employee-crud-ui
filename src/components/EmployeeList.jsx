import { useEffect, useState } from "react";
import { getEmployees } from "../api/employees";

export default function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees().then(setEmployees).catch(console.error);
    }, []);

    return (
        <div>
            <h2>All Employees</h2>
            <ul>
                {employees.map(emp => (
                    <li key={emp.id}>
                        {emp.name} - {emp.employee_code} - {emp.salary}
                    </li>
                ))}
            </ul>
        </div>
    );
}
