
import './App.css';
import { useEffect, useState } from 'react';
import Header from "./components/header/Header"
import Footer from './components/footer/footer'
import CreatTodo from './components/creat-todo/CreatTodo'


function App() {
  const todoArr = JSON.parse(localStorage.getItem('todo')) || []

  const [state, setState] = useState(todoArr)
  
  console.log(state)

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(state))
  }, [state])


  const addNewTodo = (str) => {
    setState([...state, { text: str, status: false, id: Date.now() }])
  }

  const deleteTodo = (id) => {
    const newArr = state.filter((item) => {
      return item.id !== id
    })
    setState(newArr)
  }

  // const  editTodo=(id)=>{
  //   const newArrEdit = state.filter((item)=>{
  //     return item.id !== id
  //   })
  //   setState(newArrEdit)
  // }

  const  editTodo=(id)=>{
    const newArrEdit = state((item)=>{
      return item.id !== id
    })
    setState(newArrEdit)
  }


 

  const onCheck = (id) => {
    const newArr = state.map((item) => {
      if (item.id === id) {
        item.status = !item.status
      }
      return item
    })
    setState(newArr)
  }

  return (
    <div className="App">

      <Header state={state} />

      <div className='todoBody'>
        
        <CreatTodo 
        addNew={addNewTodo} />

        <div className='todoItems'>
         
          {
            state.map((item) =>
              <Footer text={item.text}
                checked={item.status}
                id={item.id}

                onDelete={deleteTodo}
                onEdit={editTodo}
                onCheck={onCheck} />)
          }


        </div>


      </div>
    </div>



  );
}

export default App;
// onSubmit