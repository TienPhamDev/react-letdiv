import "./App.css";
import Counter from "./component/counter.jsx";
import Card from "./component/Card.jsx";
function App() {
  const iniState = 10;
  return (
    <>
      <Card>
        <h1>Card Component</h1>
        <Counter initialState={iniState} />
      </Card>
    </>
  );
}

export default App;
