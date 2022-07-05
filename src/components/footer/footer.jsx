import { useState } from 'react';
import './footer.css'


// props = {}
let Footer = (props) => {

	const [state, setState] = useState(false)




	const onDelete = () => {
		props.onDelete(props.id)
	}



	const handleCheck = () => {
		props.onCheck(props.id)
	}

	return (

		<div action="" className='radio' >



			{
				state
					?
					<form onSubmit={props.FuncSubmitA}>

						<input value={props.setState} onChange={props.HandleValue} type="text" name="" placeholder='Enter todo here' id="firstButton" />

						<input type="submit" value="submit" id='secondButton' />

					</form>

					:
					<div className='formCheckBox'>
						<input checked={props.checked} onChange={handleCheck} type="checkbox" name="" />
						<span className={props.checked ? 'checked' : ''}>	{props.text} </span>
					</div>
			}



			<div >


				<input onClick={() => setState(!state)} type="submit" value="Edit" className='Edit' />

				<input onClick={onDelete} type="submit" value="Del" className='Del' />
			</div>
		</div>
	)
}
export default Footer;

