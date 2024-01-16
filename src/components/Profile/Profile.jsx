import Myposts from "./Myposts/Myposts";
import g from "./Profile.module.css"
import Post from "./Myposts/Post/Post";
import Avatar from "./Avatar/Avatar";
import Background from "./Background/Background";
import Description from "./Description/Description";





const Profile = () => {
	return (
		<div className={g.profile}>
			<Background/>
			<Avatar />
			<Description/>
			<Myposts />
		</div>
	);
}
export default Profile