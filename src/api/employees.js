const base = '/api/employees';

export async function getEmployees() {
    const res = await fetch(base);
    if (!res.ok) throw new Error('Failed to fetch employees');
    return res.json();
}

export async function getEmployeeById(id) {
    const res = await fetch(`${base}/${id}`);
    if (res.status === 404) return null;
    if (!res.ok) throw new Error('Failed to fetch employee');

    const data = await res.json();
    return Array.isArray(data) ? data[0] ?? null : data;
}

export async function createEmployee(payload) {
    const res = await fetch(base, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error('Failed to create employee');
    return res.json();
}

export async function updateEmployee(id, payload) {
    const res = await fetch(`${base}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    if (res.status === 404) throw new Error('No record with given id');
    if (!res.ok) throw new Error('Failed to update employee');
    return res.json();
}

export async function deleteEmployee(id) {
    const res = await fetch(`${base}/${id}`, {
        method: 'DELETE'
    });

    if (res.status === 404) throw new Error('No record with given id');
    if (!res.ok) throw new Error('Failed to delete employee');
    return res.json();
}
