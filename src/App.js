import './App.css';
import Header from './components/header/Header';
import Form from './components/form/Form';
import TodoList from './components/pages/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
			<TodoList />
    </div>
  );
}

export default App;
