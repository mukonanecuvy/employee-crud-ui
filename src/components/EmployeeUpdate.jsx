import { useState } from "react";
import { updateEmployee } from "../api/employees";

export default function EmployeeUpdate() {
    const [id, setId] = useState("");
    const [form, setForm] = useState({ name: "", employee_code: "", salary: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateEmployee(id, form);
            alert("Employee updated!");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update Employee</h2>
            <input
                placeholder="ID"
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <input
                placeholder="Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <input
                placeholder="Code"
                value={form.employee_code}
                onChange={e => setForm({ ...form, employee_code: e.target.value })}
            />
            <input
                placeholder="Salary"
                value={form.salary}
                onChange={e => setForm({ ...form, salary: e.target.value })}
            />
            <button type="submit">Update</button>
        </form>
    );
}
