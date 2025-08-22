import { useEffect, useState } from "react";
import { getEmployees } from "../api/employees";

export default function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees().then(setEmployees).catch(console.error);
    }, []);

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-card rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-primary">All Employees</h2>
            <ul className="space-y-2 mt-2">
                {employees.map(emp => (
                    <li key={emp.id} className="border-b pb-1">
                        {emp.name} - {emp.employee_code} - {emp.salary}
                    </li>
                ))}
            </ul>
        </div>
    );
}
