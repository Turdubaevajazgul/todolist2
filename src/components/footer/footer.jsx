import { useState } from 'react';
import './footer.css'


// props = {}
let Footer = (props) => {

	const [state, setState] = useState(false)
	const [inpVal, setInpVal] = useState(props.text)


	const onDelete = () => {
		props.onDelete(props.id)
	}

	const editSubmit = (event) => {
		event.preventDefault()
		props.onEditText(inpVal, props.id)
		setState(false)
	}

	const handleCheck = () => {
		
		props.onCheck(props.id)
	}

	return (

		<div action="" className='radio' >



			{
				state
					?
					<form onSubmit={editSubmit}>

						<input
							value={inpVal}
							onChange={(e) => setInpVal(e.target.value)}
							type="text"

							placeholder='Enter todo here'
							id="firstButton"
						/>

						<input type="submit" value="submit" id='secondButton' />

					</form>

					:
					<div className='formCheckBox'>
						<input checked={props.checked} onChange={handleCheck} type="checkbox" name="" />
						<span className={props.checked ? 'checked' : ''}>	{props.text} </span>
					</div>
			}



			<div >


				<input onClick={(onEdit) => setState(!state)} type="submit" value="Edit" className='Edit' />

				<input onClick={onDelete} type="submit" value="Del" className='Del' />
			</div>
		</div>
	)
}
export default Footer;

// () => setState(!state)