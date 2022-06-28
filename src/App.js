import './App.css'; 
import Header  from "./components/header/Header"
import  Footer  from './components/footer/footer'
import CreatTodo from './components/creat-todo/CreatTodo'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='todoBody'>
        <CreatTodo />
        <div className='todoItems'>
          <Footer text='Azamat' age='22' months='june'/>
          <Footer text='Aman'  age='23' months='jule'/>
          <Footer checked={true} text='Aziz'  age='12' months='december'/>
        </div>


      </div>
    </div>



  );
}

export default App;
