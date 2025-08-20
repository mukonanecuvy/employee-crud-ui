import EmployeeList from "./components/EmployeeList";
import EmployeeSearch from "./components/EmployeeSearch";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeUpdate from "./components/EmployeeUpdate";
import EmployeeDelete from "./components/EmployeeDelete";

export default function App() {
  return (
    <div>
      <h1>Employee CRUD App</h1>
      <EmployeeList />
      <EmployeeSearch />
      <EmployeeCreate />
      <EmployeeUpdate />
      <EmployeeDelete />
    </div>
  );
}
