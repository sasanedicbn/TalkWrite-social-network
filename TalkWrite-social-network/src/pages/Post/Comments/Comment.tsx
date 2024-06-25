import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { AddCommentApi } from '../../../api/AddCommentApi';

const schema = z.object({
  comment: z.string().min(1, "Comment cannot be empty")
});

type FormFields = z.infer<typeof schema>;

const Comment = ({ postId }) => {
  const { register, handleSubmit, watch, formState: { isValid } } = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const newCommentText = data.comment;
   const {comment} = await AddCommentApi(postId, newCommentText);z
//    if ako je succes onda dodaj komentar i pokazi toast da je succces ako nije mzdd prikazi toast da nije 
   
   console.log('2222',comment)
  };

  const commentValue = watch('comment');

  return (
    <div className="comment-container">
      <form className="comment-form" onSubmit={handleSubmit(onSubmit)}>
        <input 
          {...register('comment')} 
          type="text" 
          placeholder="Write a comment..." 
          className="comment-input" 
        />
        <button 
          type="submit" 
          className={`comment-button ${commentValue ? 'enabled' : ''}`} 
          disabled={!isValid}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Comment;
