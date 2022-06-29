import './Header.css'
 function Header(props){
	return (
		<header className="Header_wrapper">
			Todos ({props.state.length}/{props.state.filter((it)=>it.status).length})
		</header>
	)
}
export default Header;