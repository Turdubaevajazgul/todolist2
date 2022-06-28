import './footer.css'
// props = {}
let Footer = (props) => {
	const onDelete = ()=>{
		alert(props.text)
	}
	return (
		<div action="" className='radio'>
			<div className='d-flex align-items-center'>
				<input checked={props.checked} type="checkbox" name="" id='propsMOVE'/>
			<span className= {props.checked ?'checked' : ''}>	{props.text} {props.age} {props.months} </span> 
			</div>

			<div >
				<input type="submit" value="Edit" className='Edit' />
				<input onClick={onDelete} type="submit" value="Del" className='Del' />
			</div>
		</div>
	)
}
export default Footer;

