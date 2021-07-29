import './App.css';
import InputForm from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <InputForm onSubmit = {console.log("submitted")} />
    </div>
  );
}

export default App;
