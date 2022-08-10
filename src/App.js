import logo from './logo.svg';
import './App.css';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <ConditionalRendering />
      <ListRendering />
      <Form />
    </div>
  );
}

export default App;
