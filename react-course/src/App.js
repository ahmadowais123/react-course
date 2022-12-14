import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Explore the full React Course" />
      <Todo text="Grocery" />
      <Todo text="Windows to Mac videos" />
    </div>
  );
}

export default App;
