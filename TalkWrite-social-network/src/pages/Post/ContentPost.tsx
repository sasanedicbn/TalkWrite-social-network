
const ContentPost = ({image,text}) => {

    return(
        <div className="contentPost-container">
            <img src={image} alt={image} className="contentPost-img"/>
            <p>{text}</p>
        </div>
    )
}
export default ContentPost;