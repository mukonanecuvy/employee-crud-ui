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
        <div>
            <h2>Delete Employee</h2>
            <input
                placeholder="ID"
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
