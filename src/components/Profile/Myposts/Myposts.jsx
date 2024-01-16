import g from "./Myposts.module.css"
import Post from "./Post/Post";

const Myposts = (props) => {

	let postsData = [
		{ id: 1, mesagge: 'hello world', likesCount:'32' },
		{ id: 2, mesagge: 'hi ego ho', likesCount:'32' },
		{ id: 3, mesagge: 'world', likesCount:'32' },
		{ id: 4, mesagge: 'Egor super chel', likesCount:'32'},
	]  

	let posts = postsData.map((p)=><Post message={p.mesagge} likesCount={p.likesCount} />)
	return (
		<div className={g.my_post}>
			<h3>my post</h3>
			<div className={g.new_post}>
				<div>
					<textarea name="" id="" cols="100" rows="5"></textarea>
				</div>
				<div>
					<button>add comment</button>
				</div>
			</div>
			<div className={g.posts}>
				{posts}
			</div>
		</div>
	);
}

export default Myposts