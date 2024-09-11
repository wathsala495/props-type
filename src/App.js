import logo from './logo.svg';
import './App.css';
import User from './User'

function App() {
  return (
    <div className="App">
      <User name={"saman"} age={"8"}
      array={["react","redux","graphQL"]}
      arrayOfObjects={[{name:"055A",marks:75},{name:"OOP",marks:85},{name:"DBMS",marks:90}]}
      height={"6"}/>
    </div>
  );
}

export default App;
