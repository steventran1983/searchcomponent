import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import sampleData from "./componenents/data";
import SearchComponent from "./componenents/SearchComponent";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <SearchComponent records={sampleData} />
      </div>
    </>
  );
}

export default App;
