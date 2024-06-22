const Date = () => {
    return(
        <div>
                <p className='userPost-date'><FaRegCalendarAlt size={24} />{formatedDate(post.created_at)}</p>
            </div>
    )
}
export default Date