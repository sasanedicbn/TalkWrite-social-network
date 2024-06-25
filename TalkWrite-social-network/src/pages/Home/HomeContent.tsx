import { FaMicrophone } from "react-icons/fa";
import SinglePost from "../Post/SinglePost";
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { AddPostApi } from "../../api/AddPostApi";

const schema = z.object({
  postContent: z.string().min(1, "Post content cannot be empty")
});

type FormFields = z.infer<typeof schema>;

const HomeContent = () => {
    const { register, handleSubmit, formState: { isValid } } = useForm<FormFields>({
        resolver: zodResolver(schema),
        mode: 'onChange'
    });

     const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const newPostContent = data.postContent;
        await AddPostApi(newPostContent);
        console.log(newPostContent);
    };

    

    return (
        <div className="container-homecontent">
            <div>
                <form className="home-content-form" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <img src="./public/profile.img" alt="Profile" />
                        <input 
                            {...register('postContent')} 
                            type="text" 
                            placeholder="What's happening" 
                            className="input-happening" 
                        />
                    </div>
                    <div>
                        <FaMicrophone size={50} color="blue" />
                        <button 
                            type="submit" 
                            className={`new-post-button ${isValid ? 'enabled' : 'valid'}`} 
                            disabled={!isValid}
                        >
                            New Post
                        </button>
                    </div>
                </form>
            </div>
            <SinglePost />
        </div>
    );
};

export default HomeContent;
