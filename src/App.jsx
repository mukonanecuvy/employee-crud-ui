import EmployeeList from "./components/EmployeeList";
import EmployeeSearch from "./components/EmployeeSearch";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeUpdate from "./components/EmployeeUpdate";
import EmployeeDelete from "./components/EmployeeDelete";

export default function App() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center text-primary">Employee CRUD App</h1>
      <EmployeeList />
      <EmployeeSearch />
      <EmployeeCreate />
      <EmployeeUpdate />
      <EmployeeDelete />
    </div>
  );
}
