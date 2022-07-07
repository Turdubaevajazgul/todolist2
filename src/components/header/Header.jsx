import './Header.css'
 function Header(props){
	const result=props.state.filter((item)=>item.status)
	return (
		<header className="Header_wrapper">
			{/* Todos ({props.state.length}/{props.state.filter((it)=>it.status).length}) */}
			Todos({result.length}/{props.state.length})
		</header>
	)
}
export default Header;