import { NavLink } from "react-router-dom"
import g from "./Dialogs.module.css"

const DialogItems = (props) => {
	return (
		<div className={g.dialog}>
			<NavLink  to={"/dialogs/" + props.id}>{props.name}</NavLink>
	</div>
	)
}

const Message = (props) => {
	return (

		<div className={g.mesagge}>
		{props.mesagge}
	</div>
	)
}
const Dialogs = () => {

	let dialogsData = [
		{ id: 1, name: 'Egor' },
		{ id: 2, name: 'Valera' },
		{ id: 3, name: 'Egor' },
		{ id: 4, name: 'Egor'},
	]

	let mesaggeData = [
		{ id: 1, mesagge: 'hi' },
		{ id: 2, mesagge: 'hi ego ho' },
		{ id: 3, mesagge: 'dante' },
		{ id: 4, mesagge: 'hi hih ih'},
	]

	let dialogs = dialogsData.map((d) => <DialogItems name={d.name} id={d.id} />)
	let mesagges = mesaggeData.map((m) => <Message mesagge={m.mesagge} />)
	

	return (
		<div className={g.dialogs}>
			<div className={g.dialog_items}>
				{dialogs}
			</div>
			<div className={g.mesagges}>
				{mesagges}
			</div>
		</div>
	)
}

export default Dialogs