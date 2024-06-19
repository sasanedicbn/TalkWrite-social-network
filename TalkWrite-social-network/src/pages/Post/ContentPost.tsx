
const ContentPost = ({image,text}) => {

 console.log(image, text)
    return(
        <div >
            <img src={image} alt={image}/>
            <p>{text}</p>
        </div>
    )
}
export default ContentPost;