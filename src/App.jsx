import { useState } from 'react';
import './App.css';

function App() {

  const [todo, setTodo] = useState([
    {id:1, title: 'react를 배워봅시다.'},
    {id:2, title: 'useState를 배워봅시다.'},
    {id:3, title: '자바스크립트를 배워봅시다.'}
  ])

  const [title, setTitle] = useState()


  return (
    <>
      <div className='input-form'>
        <input type='text' 
        value={title}
        onChange={(event)=>{
          setTitle(event.target.value)
        }}></input>
        <button onClick={()=>{
          const newTodo = {
            id : todo.length + 1,
            title : title
          }

          setTodo([...todo, newTodo])
        }}>추가하기</button>
      </div>
      <div className='title'>
          <h1>Todo List</h1>
      </div>
      <div className='todo-container'>
        {
          todo.map((item)=>{
            return (
              <div className='todo'>{item.title}</div>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
