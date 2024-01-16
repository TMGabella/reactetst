import g from "./Post.module.css"

const Post = (props) => {
	return (
		
			<div className={g.item}>
				<div>
				<img className={g.avatar} src="https://static.vecteezy.com/system/resources/previews/009/398/577/original/man-avatar-clipart-illustration-free-png.png" alt="" />
				{props.message}
			</div>
			
				{props.likesCount}
			</div>
		
	);
}

export default Post