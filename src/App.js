import './App.css';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className='todo-content'>
      <div className='todo-app'>
        <h1> Todo </h1>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
