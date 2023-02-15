import CostSearch from "./components/CostSearch";
import CostForm from "./components/CostForm"
import CostList from "./components/CostList"
import Costvalue from "./components/CostValue";

function App() {
  return (
    <div className="container is-fluid">
      <CostForm />
      <CostSearch />
      <CostList />
      <Costvalue/>
    </div>
  );
}

export default App;
