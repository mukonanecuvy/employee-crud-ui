import { useState } from "react";
import { deleteEmployee } from "../api/employees";

export default function EmployeeDelete() {
    const [id, setId] = useState("");

    const handleDelete = async () => {
        try {
            await deleteEmployee(id);
            alert("Employee deleted!");
            setId("");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-card rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-danger">Delete Employee</h2>
            <input placeholder="ID" value={id} onChange={e => setId(e.target.value)} className="w-full border p-2 rounded focus:ring-2 focus:ring-danger" />
            <button onClick={handleDelete} className="w-full bg-danger text-white py-2 rounded-lg hover:bg-red-700">Delete</button>
        </div>
    );
}
