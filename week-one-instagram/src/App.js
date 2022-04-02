// import logo from './logo.svg';
import './App.css';
import Description from './Description';
import Followers from './Followers';
import NickName from './NickName';
import Picture from './Picture';

function App() {
  return (
    <div>
      <Picture />
      <NickName />
      <Followers />
      <Description />
    </div>
  );
}

export default App;
