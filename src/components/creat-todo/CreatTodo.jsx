import { useState } from 'react';
import './creat-todo.css'

function CreatTodo(props) {
	
	const [inp, setInp] = useState()

	const submit = (e) => {
		e.preventDefault()
		props.setState([...props.state, { text: inp, status: false }])
	}

	return (
		<form onSubmit={submit}>
			<input onChange={(event) => setInp(event.target.value)} type="text" name="" placeholder='Enter todo here' id="firstButton" />
			<input type="submit" value="submit" id='secondButton' />
		</form>
	)
}
export default CreatTodo;