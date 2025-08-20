import { useState } from "react";
import { createEmployee } from "../api/employees";

export default function EmployeeCreate() {
    const [form, setForm] = useState({ name: "", employee_code: "", salary: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createEmployee(form);
            alert("Employee created!");
            setForm({ name: "", employee_code: "", salary: "" });
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Employee</h2>
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
            <button type="submit">Add</button>
        </form>
    );
}
