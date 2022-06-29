import './App.css';
import { useState } from 'react';
import Header from "./components/header/Header"
import Footer from './components/footer/footer'
import CreatTodo from './components/creat-todo/CreatTodo'

function App() {
  
  const todoArr = [
    { text: "Купи сахар !!!" ,status:false},
    { text: "Купи соль !!!" ,status:true},
]
const [state,setState] = useState(todoArr)

  return (
    <div className="App">
      <Header state={state} />
      <div className='todoBody'>
        <CreatTodo state={state} setState={setState}/>
        <div className='todoItems'>
          {
          /* <Footer checked={true} text='Aziz'  age='12' months='december'/> */
          }
          {
            state.map((item) => <Footer text={item.text} checked={item.status} />)
           
          }
        
          
        </div>


      </div>
    </div>



  );
}

export default App;
// onSubmit