import { NavLink } from "react-router-dom";
import g from "./Navbar.module.css"
const Navbar = () => {
	return (
		<nav className={g.nav}>
		<div className={g.item}>
			<NavLink  className = { navData => navData.isActive ? g.active : g.link }  to="/profile"> Profile</NavLink>
		</div >
		<div className={g.item}>
			<NavLink className={ navData => navData.isActive ? g.active : g.link } to="/dialogs"> Messages</NavLink>
		</div>
		<div className={g.item}>
			<NavLink className={ navData => navData.isActive ? g.active : g.link } to="/music"> Music</NavLink>
		</div>
		<div className={g.item}>
			<NavLink className={ navData => navData.isActive ? g.active : g.link } to="/news"> News</NavLink>
		</div>
		<div className={g.item}>
			<NavLink className={ navData => navData.isActive ? g.active : g.link } to="/settings"> Settings</NavLink>
		</div>
	</nav>
		);
}
export default Navbar