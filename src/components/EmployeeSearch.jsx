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
        <div className="max-w-md mx-auto p-6 bg-white shadow-card rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-success">Search Employee by ID</h2>
            <input value={id} onChange={e => setId(e.target.value)} placeholder="Enter ID" className="w-full border p-2 rounded focus:ring-2 focus:ring-success" />
            <button onClick={handleSearch} className="w-full bg-success text-white py-2 rounded-lg hover:bg-green-700">Search</button>

            {employee ? (
                <div className="space-y-2 mt-4">
                    <p>Name: {employee.name}</p>
                    <p>Code: {employee.employee_code}</p>
                    <p>Salary: {employee.salary}</p>
                </div>
            ) : <p className="mt-2 text-gray-500">No employee found</p>}
        </div>
    );
}
