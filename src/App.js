import { useState, useEffect } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo, fetchTodos } from '../src/store/todoSlice';

function App() {
  const [title, setTitle] = useState('');
  const {status, error} = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTask = () => {
    if (title.trim().length !== 0) {
      dispatch(addNewTodo(title));
      setTitle('');
    }
  };

  const handleInput = (value) => {
    setTitle(value);
    console.log(title, value);
  }

  useEffect(()=>{
    dispatch(fetchTodos());
  }, [dispatch])

  return (
    <div className="App">
      <InputField
        title={title}
        handleSubmit={addTask}
        handleInput={handleInput}
      />
      {status === 'loading' && <h1>Loading...</h1>}
      {error && <h2>An error occured: {error}</h2>}
      <TodoList />
    </div>
  );
}

export default App;
