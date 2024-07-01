import { useSelector } from 'react-redux';
import HeaderPosts from '../HeaderPosts';
import { FaTrash } from 'react-icons/fa';

const Comments = () => {
  const usersComments = useSelector(state => state.post.currentPost.comments);
  console.log('COMMENTS', usersComments);

  if (!usersComments) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div className="comments-container">
      <h3>{usersComments.length + ' comments'}</h3>
      {usersComments.map((user, index) => (
        <>
   
          <HeaderPosts post={user} />

         <div className="container-comments-text">
         <p className="comments-text">{user.text}</p>
         {/* <span><FaTrash /></span> */}
       </div>
       </>
      ))}
    </div>
  );
};

{/* <div className="comments-container">
<h3>{usersComments.length + ' comments'}</h3>
{usersComments.map((user, index) => (
    <div key={index}>
        <HeaderPosts post={user} />
        <div className="container-comments-text">
            <p className="comments-text">{user.text}</p>
            <span><FaTrash /></span>
        </div>
    </div>
))}
</div> */}

export default Comments;


