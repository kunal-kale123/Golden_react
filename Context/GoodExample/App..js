import React from "react";
import { Provider } from "./context";
import ExampleComponent from "./ExampleComponent";

function App() {
  // The data you want to share as global state
  const globalStateData = {
    darkMode: true,
    username: "JohnDoe",
    // ... other properties as needed
  };

  return (
    <Provider value={globalStateData}>
      <div>
        <h1>My App</h1>
        <ExampleComponent />
      </div>
    </Provider>
  );
}

export default App;
