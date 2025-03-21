import postBodyStyles from "../styles/post-body.module.css";

const PostBody = ({children})=>{
    return(
        <div className={postBodyStyles.stack}>
            {children}
        </div>
    )
}

export default PostBody;