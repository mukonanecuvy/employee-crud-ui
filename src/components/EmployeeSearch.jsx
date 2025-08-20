import { useState } from "react";
import { getEmployeeById } from "../api/employees";

export default function EmployeeSearch() {
    const [id, setId] = useState("");
    const [employee, setEmployee] = useState(null);

    const handleSearch = async () => {
        try {
            const result = await getEmployeeById(id);
            setEmployee(result);
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div>
            <h2>Search Employee by ID</h2>
            <input
                value={id}
                onChange={e => setId(e.target.value)}
                placeholder="Enter ID"
            />
            <button onClick={handleSearch}>Search</button>

            {employee ? (
                <div>
                    <p>Name: {employee.name}</p>
                    <p>Code: {employee.employee_code}</p>
                    <p>Salary: {employee.salary}</p>
                </div>
            ) : <p>No employee found</p>}
        </div>
    );
}
