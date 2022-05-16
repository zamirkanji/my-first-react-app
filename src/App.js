import './App.css';
import List from './components/List';

function App() {
  return (
    <>
    <h1 className='text-white' id='title'>Task List</h1>
    <div className='main-container'>
     <List /> 
    </div>
    </>
  );
}

export default App;
