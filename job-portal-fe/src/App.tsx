import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "./App.css";

function App() {
  return (
    <MantineProvider>
      <div className="App text-center p-4">
        <h1>Welcome to the Job Portal</h1>
        <p>Your gateway to exciting job opportunities!</p>
      </div>
    </MantineProvider>
  );
}

export default App;
