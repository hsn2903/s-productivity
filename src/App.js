import { Navbar, PomodoroTimer } from "./components";

import { TasksPage } from "./pages";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex container mx-auto">
        <TasksPage />
        <PomodoroTimer />
      </div>
    </div>
  );
}

export default App;
