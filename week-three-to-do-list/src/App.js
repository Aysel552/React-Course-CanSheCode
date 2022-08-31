import './App.css';
import image from './todolist.jpg';
import imageTwo from './planner.jpg';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='App'>
      <div className="container">
        <img src={image} alt='Planner' width='230px' />
        </div>
      <div className="container">
        <h1>ToDo List</h1>
        </div>
      <ToDoList />
      <div className="container">
        <img src={imageTwo} alt='ToDo List' width='230px' />
        </div>

    </div>
  );
}

export default App;
