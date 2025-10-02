import users from "./data/users.json";
import SearchBar from "./components/SearchBar";
import CounterBatchDemo from "./components/CounterBatchDemo";
import FormDemo from "./components/FormDemo";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>🚀 React 19 Features Demo</h1>
      <SearchBar data={users} />
      <CounterBatchDemo />
      <FormDemo />
    </div>
  );
}
