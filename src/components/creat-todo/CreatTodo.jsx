
import { useState } from 'react';
import './creat-todo.css'

function CreatTodo(props) {

	const [inputValue, setInputValue] = useState("")

	const FuncSubmitA = (event) => {
		event.preventDefault()
		props.addNew(inputValue)
		setInputValue('')
	}

	const HandleValue = (event) => {
		setInputValue(event.target.value)
	}


	return (
		<form onSubmit={FuncSubmitA}>
			
			<input value={inputValue} onChange={HandleValue} type="text" name="" placeholder='Enter todo here' id="firstButton" />

			<input type="submit" value="submit" id='secondButton' />
		</form>
	)
}
export default CreatTodo;