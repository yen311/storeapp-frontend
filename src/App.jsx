import "./App.css";

function App() {
  return (
    <div className='App'>
      <p>Hello React 123</p>
      <button
        onClick={async () => {
          const response = await fetch("/api/");
          let data = await response.json();
          console.log(data);
        }}
      >
        Get Data
      </button>
    </div>
  );
}

export default App;
