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
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-card rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-primary">Create Employee</h2>
            <input
                placeholder="Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-primary"
            />
            <input
                placeholder="Code"
                value={form.employee_code}
                onChange={e => setForm({ ...form, employee_code: e.target.value })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-primary"
            />
            <input
                placeholder="Salary"
                value={form.salary}
                onChange={e => setForm({ ...form, salary: e.target.value })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-700">Add</button>
        </form>
    );
}
