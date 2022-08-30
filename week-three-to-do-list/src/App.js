import './App.css';
import image from './todolist.jpg';
import imageTwo from './planner.jpg';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='App'>
      <img src={image} alt='Planner' width='230px' />
      <h1>ToDo List</h1>
      <ToDoList/>
      <img src={imageTwo} alt='ToDo List' width='230px'/>

    </div>
  );
}

export default App;
